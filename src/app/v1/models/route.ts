import { NextResponse } from 'next/server';

const MODELS = [
    // --- OpenAI ---
    { id: "gpt-4o", object: "model", created: 1715644800, owned_by: "openai" },
    { id: "gpt-4o-2024-05-13", object: "model", created: 1715644800, owned_by: "openai" },
    { id: "gpt-4o-mini", object: "model", created: 1721260800, owned_by: "openai" },
    { id: "gpt-4-turbo", object: "model", created: 1712620800, owned_by: "openai" },
    { id: "gpt-4-turbo-2024-04-09", object: "model", created: 1712620800, owned_by: "openai" },
    { id: "gpt-4", object: "model", created: 1687824000, owned_by: "openai" },
    { id: "o1-preview", object: "model", created: 1726099200, owned_by: "openai" },
    { id: "o1-mini", object: "model", created: 1726099200, owned_by: "openai" },
    { id: "gpt-3.5-turbo", object: "model", created: 1677648000, owned_by: "openai" },

    // --- Anthropic ---
    { id: "claude-3-5-sonnet", object: "model", created: 1718841600, owned_by: "anthropic" },
    { id: "claude-3-5-sonnet-20240620", object: "model", created: 1718841600, owned_by: "anthropic" },
    { id: "claude-3-opus", object: "model", created: 1709251200, owned_by: "anthropic" },
    { id: "claude-3-opus-20240229", object: "model", created: 1709251200, owned_by: "anthropic" },
    { id: "claude-3-sonnet", object: "model", created: 1709251200, owned_by: "anthropic" },
    { id: "claude-3-haiku", object: "model", created: 1709251200, owned_by: "anthropic" },

    // --- Google ---
    { id: "gemini-1.5-pro", object: "model", created: 1715644800, owned_by: "google" },
    { id: "gemini-1.5-flash", object: "model", created: 1715644800, owned_by: "google" },
    { id: "gemini-3-pro-preview", object: "model", created: 1702425600, owned_by: "google" },

    // --- Meta (Llama) ---
    { id: "llama-3.1-405b", object: "model", created: 1721692800, owned_by: "meta" },
    { id: "llama-3.1-70b", object: "model", created: 1721692800, owned_by: "meta" },
    { id: "llama-3.1-8b", object: "model", created: 1721692800, owned_by: "meta" },
    { id: "llama-3-70b", object: "model", created: 1713408000, owned_by: "meta" },
    { id: "llama-3-8b", object: "model", created: 1713408000, owned_by: "meta" },

    // --- Specialized / Others ---
    { id: "mistral-large-latest", object: "model", created: 1708905600, owned_by: "mistral" },
    { id: "codestral-latest", object: "model", created: 1717027200, owned_by: "mistral" },
    { id: "pixtral-12b", object: "model", created: 1726099200, owned_by: "mistral" },
    { id: "dall-e-3", object: "model", created: 1696118400, owned_by: "openai" }
];



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

        // 🔒 Security: Validate API Key
        const { validateApiKey } = await import('@/lib/api-auth');
        const authResult = await validateApiKey(req);
        if (!authResult.isValid) return authResult.response;

        return NextResponse.json({
            object: "list",
            data: MODELS
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
