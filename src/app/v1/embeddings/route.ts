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
                message: "This endpoint supports POST for embeddings.",
                endpoint: "/v1/embeddings"
            }, { status: 200 });
        }

        const body = await req.json();
        const { input, model } = body;

        const PUTER_TOKEN = process.env.PUTER_TOKEN;
        const PUTER_TOKENS = process.env.PUTER_TOKENS?.split(',').map(t => t.trim()).filter(Boolean) || [];
        const allTokens = PUTER_TOKEN ? [PUTER_TOKEN, ...PUTER_TOKENS] : PUTER_TOKENS;

        // 🔒 Security: Validate API Key
        const { validateApiKey } = await import('@/lib/api-auth');
        const authResult = await validateApiKey(req);
        if (!authResult.isValid) return authResult.response;

        const tokenToUse = allTokens[Math.floor(Math.random() * allTokens.length)];

        // Call Puter API (Embedding Driver)
        const puterResponse = await fetch("https://api.puter.com/drivers/call", {
            method: "POST",
            headers: {
                'content-type': 'text/plain;actually=json',
            },
            body: JSON.stringify({
                interface: "puter-embedding",
                driver: "ai-embedding",
                method: "embed",
                args: {
                    text: Array.isArray(input) ? input[0] : input,
                    model: model || "text-embedding-3-small"
                },
                auth_token: tokenToUse
            })
        });

        if (!puterResponse.ok) {
            return NextResponse.json({ error: `Provider error: ${puterResponse.status}` }, { status: puterResponse.status });
        }

        const data = await puterResponse.json();
        const embedding = data.result?.embedding || data.result || [];

        return NextResponse.json({
            object: "list",
            data: [{
                object: "embedding",
                index: 0,
                embedding: embedding
            }],
            model: model || "text-embedding-3-small",
            usage: { prompt_tokens: -1, total_tokens: -1 }
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const HEAD = handler;
export const OPTIONS = handler;
