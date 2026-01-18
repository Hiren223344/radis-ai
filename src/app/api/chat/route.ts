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
        message: `This endpoint supports POST for chat. You called it with ${method}.`,
        endpoint: "/api/chat",
        available_methods: ["POST", "OPTIONS", "GET (info)"],
        hint: "Please use POST for chat requests."
      }, { status: 200 });
    }

    const body = await req.json();
    const { messages, model, prompt } = body;
    const PUTER_TOKEN = process.env.PUTER_TOKEN;

    if (!PUTER_TOKEN) {
      return NextResponse.json({ error: 'Puter token not configured' }, { status: 500 });
    }

    // 🔒 Security: Validate API Key (with 5-minute expiration)
    const { validateApiKey } = await import('@/lib/api-auth');
    const authResult = await validateApiKey(req);

    if (!authResult.isValid) {
      return authResult.response;
    }

    // Format messages for Puter API
    // If OpenAI style messages are provided, use them. Otherwise fallback to prompt.
    const puterMessages = messages || [{ content: prompt || "Hi" }];

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
      console.error('Puter API error response:', errorText);
      return NextResponse.json({ error: `Puter API error: ${puterResponse.status}` }, { status: puterResponse.status });
    }

    const data = await puterResponse.json();

    // Map Puter response to OpenAI-like response if needed, 
    // but for now let's just return what Puter gives to keep it simple as "lite" gateway
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Chat API Error:', error);
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

