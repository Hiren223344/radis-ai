import { NextResponse } from 'next/server';

async function handler(req: Request) {
    try {
        const method = req.method;

        if (method === 'OPTIONS') {
            return new NextResponse(null, {
                status: 204,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
                },
            });
        }

        if (method !== 'POST') {
            return NextResponse.json({
                message: `This endpoint supports POST for image generation. You called it with ${method}.`,
                endpoint: "/v1/images/generations",
                available_methods: ["POST", "OPTIONS"],
                hint: "OpenAI-compatible clients should use POST."
            }, { status: 200 });
        }

        const body = await req.json();
        const { prompt, model, n, size, response_format } = body;

        const PUTER_TOKEN = process.env.PUTER_TOKEN;
        const PUTER_TOKENS = process.env.PUTER_TOKENS?.split(',') || [];
        const allTokens = PUTER_TOKEN ? [PUTER_TOKEN, ...PUTER_TOKENS] : PUTER_TOKENS;

        if (allTokens.length === 0) {
            return NextResponse.json({ error: 'Puter token(s) not configured' }, { status: 500 });
        }

        // 🔒 Security: Validate API Key
        const { validateApiKey } = await import('@/lib/api-auth');
        const authResult = await validateApiKey(req);
        if (!authResult.isValid) return authResult.response;

        const tokenToUse = allTokens[Math.floor(Math.random() * allTokens.length)];

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
                auth_token: tokenToUse
            })
        });

        if (!puterResponse.ok) {
            const errorText = await puterResponse.text();
            return NextResponse.json({ error: `Provider error: ${puterResponse.status}`, details: errorText }, { status: puterResponse.status });
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
                    details: data
                }
            }, { status: 500 });
        }

        // ⬇️ DOWNLOAD & STORE (5 Minute Expiry)
        let finalImageUrl = originalImageUrl;
        try {
            const imgRes = await fetch(originalImageUrl);
            if (!imgRes.ok) throw new Error("Failed to download image from provider");
            const imgBuffer = await imgRes.arrayBuffer();

            const { createServiceClient } = await import('@/lib/supabase');
            const supabase = createServiceClient();
            await supabase.storage.createBucket('temp_images', { public: false }).catch(() => { });

            const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.png`;
            const { error: uploadError } = await supabase.storage
                .from('temp_images')
                .upload(filename, imgBuffer, { contentType: 'image/png', upsert: false });

            if (uploadError) throw new Error(`Storage upload failed: ${uploadError.message}`);

            const { data: signedData, error: signError } = await supabase.storage
                .from('temp_images')
                .createSignedUrl(filename, 300);

            if (signError || !signedData?.signedUrl) throw new Error("Failed to sign URL");
            finalImageUrl = signedData.signedUrl;

        } catch (err: any) {
            console.error("Image Storage Error:", err);
        }

        return NextResponse.json({
            created: Math.floor(Date.now() / 1000),
            data: [{ url: finalImageUrl }]
        });

    } catch (error: any) {
        console.error('Image Generation API Error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const HEAD = handler;
export const OPTIONS = handler;


