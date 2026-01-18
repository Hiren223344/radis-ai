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
                message: `This endpoint supports POST for completions. You called it with ${method}.`,
                endpoint: "/v1/completions",
                available_methods: ["POST", "OPTIONS"],
                hint: "OpenAI-compatible clients should use POST."
            }, { status: 200 });
        }

        const body = await req.json();
        const { prompt, model, stream } = body;
        const PUTER_TOKEN = process.env.PUTER_TOKEN;

        // 🔒 Security: Validate API Key
        const { validateApiKey } = await import('@/lib/api-auth');
        const authResult = await validateApiKey(req);

        if (!authResult.isValid) {
            return authResult.response;
        }

        if (!PUTER_TOKEN) {
            return NextResponse.json({ error: 'Puter token not configured' }, { status: 500 });
        }

        // Map legacy completion to Chat completion for Puter
        const puterMessages = [{ role: 'user', content: typeof prompt === 'string' ? prompt : JSON.stringify(prompt) }];

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
                interface: "puter-chat-completion",
                driver: "ai-chat",
                test_mode: false,
                method: "complete",
                args: {
                    messages: puterMessages,
                    model: model || "gemini-3-pro-preview"
                },
                auth_token: PUTER_TOKEN
            })
        });

        if (!puterResponse.ok) {
            const errorText = await puterResponse.text();
            return NextResponse.json({ error: `Puter API error: ${puterResponse.status}`, details: errorText }, { status: puterResponse.status });
        }

        const data = await puterResponse.json();

        let text = "";
        if (data?.result?.message?.content) {
            const content = data.result.message.content;
            if (Array.isArray(content)) {
                text = content.map((c: any) => c.text || JSON.stringify(c)).join("");
            } else {
                text = content;
            }
        } else if (typeof data?.result === 'string') {
            text = data.result;
        } else if (data?.result?.content) {
            text = typeof data.result.content === 'string'
                ? data.result.content
                : JSON.stringify(data.result.content);
        } else {
            text = JSON.stringify(data?.result || data);
        }

        return NextResponse.json({
            id: `cmpl-${Math.random().toString(36).substring(7)}`,
            object: "text_completion",
            created: Math.floor(Date.now() / 1000),
            model: model || "gemini-3-pro-preview",
            choices: [
                {
                    text: text,
                    index: 0,
                    logprobs: null,
                    finish_reason: "stop"
                }
            ],
            usage: {
                prompt_tokens: -1,
                completion_tokens: -1,
                total_tokens: -1
            }
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
