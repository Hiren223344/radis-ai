import { NextResponse } from 'next/server';

const OPENAI_TO_POLLY_VOICE_MAP: Record<string, string> = {
    alloy: "Joanna",
    echo: "Matthew",
    fable: "Amy",
    onyx: "Joey",
    nova: "Emma",
    shimmer: "Ivy"
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { model, input, voice, response_format, speed } = body;
        const PUTER_TOKEN = process.env.PUTER_TOKEN;

        // 🔒 Security: Validate API Key
        const { validateApiKey } = await import('@/lib/api-auth');
        const authResult = await validateApiKey(req);
        if (!authResult.isValid) return authResult.response;

        if (!PUTER_TOKEN) {
            return NextResponse.json({ error: { message: 'Puter token missing', type: 'server_error' } }, { status: 500 });
        }

        // Map Voice
        const pollyVoice = OPENAI_TO_POLLY_VOICE_MAP[voice] || "Joanna";

        // Call Puter API
        const puterResponse = await fetch("https://api.puter.com/drivers/call", {
            method: "POST",
            headers: {
                'content-type': 'text/plain;actually=json',
                'referer': 'https://docs.puter.com/',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({
                interface: "puter-tts",
                driver: "aws-polly",
                test_mode: false,
                method: "synthesize",
                args: {
                    text: input,
                    provider: "tts-1",
                    voice: pollyVoice,
                    engine: "standard",
                    language: "en-US"
                },
                auth_token: PUTER_TOKEN
            })
        });

        if (!puterResponse.ok) {
            const err = await puterResponse.text();
            return NextResponse.json({ error: `Puter API error: ${puterResponse.status}`, details: err }, { status: puterResponse.status });
        }

        const data = await puterResponse.json();

        // Extract URL
        let srcUrl = "";
        if (typeof data.result === 'string') srcUrl = data.result;
        else if (data.result?.src) srcUrl = data.result.src;
        else if (data.result?.url) srcUrl = data.result.url;

        if (!srcUrl) {
            return NextResponse.json({ error: { message: 'TTS generation failed', details: data } }, { status: 500 });
        }

        // ⬇️ DOWNLOAD & STORE (5 Minute Expiry)
        let finalUrl = srcUrl;
        try {
            // 1. Download audio
            const audioRes = await fetch(srcUrl);
            if (!audioRes.ok) throw new Error("Failed to download audio from provider");
            const audioBuffer = await audioRes.arrayBuffer();

            // 2. Upload to Supabase 'temp_audio' bucket
            const { createServiceClient } = await import('@/lib/supabase');
            const supabase = createServiceClient();
            await supabase.storage.createBucket('temp_audio', { public: false }).catch(() => { });

            const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.mp3`;
            const { error: uploadError } = await supabase.storage
                .from('temp_audio')
                .upload(filename, audioBuffer, { contentType: 'audio/mpeg', upsert: false });

            if (uploadError) throw new Error(`Storage upload failed: ${uploadError.message}`);

            // 3. Generate Signed URL (300s expiry)
            const { data: signedData, error: signError } = await supabase.storage
                .from('temp_audio')
                .createSignedUrl(filename, 300);

            if (signError || !signedData?.signedUrl) throw new Error("Failed to sign URL");

            finalUrl = signedData.signedUrl;

        } catch (err: any) {
            console.error("Audio Storage Error:", err);
            console.warn("Falling back to provider URL");
        }

        // Return JSON with URL (User requested "store it... for 5 mins", likely expects a link like images)
        return NextResponse.json({
            created: Math.floor(Date.now() / 1000),
            data: [{ url: finalUrl }],
            usage: { total_characters: input.length }
        });

    } catch (error: any) {
        console.error('TTS API Error:', error);
        return NextResponse.json({ error: { message: error.message || 'Server Error' } }, { status: 500 });
    }
}
