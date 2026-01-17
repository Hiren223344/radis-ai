import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { prompt, model, n, size, response_format } = body;
        const PUTER_TOKEN = process.env.PUTER_TOKEN;

        // 🔒 Security: Validate API Key
        const { validateApiKey } = await import('@/lib/api-auth');
        const authResult = await validateApiKey(req);

        if (!authResult.isValid) {
            return authResult.response;
        }

        if (!PUTER_TOKEN) {
            return NextResponse.json({
                error: {
                    message: 'Puter token not configured',
                    type: 'server_error',
                    code: 'missing_token'
                }
            }, { status: 500 });
        }

        // Call Puter API
        const puterResponse = await fetch("https://api.puter.com/drivers/call", {
            method: "POST",
            headers: {
                'accept': '*/*',
                'content-type': 'text/plain;actually=json',
                'origin': 'https://docs.puter.com',
                'referer': 'https://docs.puter.com/',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({
                interface: "puter-image-generation",
                driver: "ai-image",
                test_mode: false,
                method: "generate",
                args: {
                    model: model || "dall-e-3",
                    prompt: prompt
                },
                auth_token: PUTER_TOKEN
            })
        });

        if (!puterResponse.ok) {
            const errorText = await puterResponse.text();
            return NextResponse.json({ error: `Puter API error: ${puterResponse.status}`, details: errorText }, { status: puterResponse.status });
        }

        const data = await puterResponse.json();

        let originalImageUrl = "";
        if (typeof data.result === 'string') {
            originalImageUrl = data.result;
        } else if (data.result?.src) {
            originalImageUrl = data.result.src;
        } else if (data.result?.url) {
            originalImageUrl = data.result.url;
        }

        if (!originalImageUrl) {
            return NextResponse.json({
                error: {
                    message: 'Failed to generate image URL from provider',
                    type: 'provider_error',
                    code: 'image_generation_failed',
                    details: data
                }
            }, { status: 500 });
        }

        // ⬇️ DOWNLOAD & STORE (5 Minute Expiry)
        let finalImageUrl = originalImageUrl;
        try {
            // 1. Download image
            const imgRes = await fetch(originalImageUrl);
            if (!imgRes.ok) throw new Error("Failed to download image from provider");
            const imgBuffer = await imgRes.arrayBuffer();

            // 2. Upload to Supabase 'temp_images' bucket
            const { createServiceClient } = await import('@/lib/supabase');
            const supabase = createServiceClient();

            // Ensure bucket exists (best effort)
            await supabase.storage.createBucket('temp_images', { public: false }).catch(() => { });

            const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.png`;
            const { error: uploadError } = await supabase.storage
                .from('temp_images')
                .upload(filename, imgBuffer, {
                    contentType: 'image/png',
                    upsert: false
                });

            if (uploadError) throw new Error(`Storage upload failed: ${uploadError.message}`);

            // 3. Generate Signed URL (valid for 5 minutes = 300 seconds)
            const { data: signedData, error: signError } = await supabase.storage
                .from('temp_images')
                .createSignedUrl(filename, 300); // 300 seconds

            if (signError || !signedData?.signedUrl) throw new Error("Failed to sign URL");

            finalImageUrl = signedData.signedUrl;

        } catch (err: any) {
            console.error("Image Storage Error:", err);
            console.warn("Falling back to original provider URL due to storage error.");
        }

        // Map to OpenAI Response Format
        return NextResponse.json({
            created: Math.floor(Date.now() / 1000),
            data: [
                {
                    url: finalImageUrl
                }
            ]
        });

    } catch (error: any) {
        console.error('Image Generation API Error:', error);
        return NextResponse.json({
            error: {
                message: error.message || 'Internal Server Error',
                type: 'server_error',
                code: 'internal_error'
            }
        }, { status: 500 });
    }
}
