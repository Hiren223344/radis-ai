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
        message: `This endpoint supports POST for chat completions. You called it with ${method}.`,
        endpoint: "/api/v1/chat/completions",
        available_methods: ["POST", "OPTIONS", "GET (info)"],
        hint: "OpenAI-compatible clients should use POST."
      }, { status: 200 }); // Return 200 to avoid "error" states in some clients if that's the goal, or 405 if preferred. User said "no error should come with 405".
    }

    const body = await req.json();
    const { messages, model, stream } = body;
    const PUTER_TOKEN = process.env.PUTER_TOKEN;

    // 🔒 Security: Validate API Key (with 5-minute expiration)
    const { validateApiKey } = await import('@/lib/api-auth');
    const authResult = await validateApiKey(req);

    if (!authResult.isValid) {
      return authResult.response;
    }

    if (!PUTER_TOKEN) {
      return NextResponse.json({
        error: {
          message: 'Puter token not configured in environment variables',
          type: 'invalid_request_error',
          param: null,
          code: 'missing_token'
        }
      }, { status: 500 });
    }

    if (stream) {
      return NextResponse.json({
        error: {
          message: 'Streaming is not yet supported in this AI Gateway Lite',
          type: 'invalid_request_error',
          param: 'stream',
          code: 'not_supported'
        }
      }, { status: 400 });
    }

    // Map OpenAI messages to Puter format
    const puterMessages = messages?.map((m: any) => ({
      role: m.role || 'user',
      content: m.content
    })) || [];

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
      return NextResponse.json({
        error: {
          message: `Puter API error: ${puterResponse.status}`,
          type: 'api_error',
          param: null,
          code: puterResponse.status.toString(),
          details: errorText
        }
      }, { status: puterResponse.status });
    }

    const data = await puterResponse.json();

    // Extract actual text from Puter response
    let text = "";
    if (data?.result?.message?.content) {
      text = data.result.message.content;
    } else if (typeof data?.result === 'string') {
      text = data.result;
    } else if (data?.result?.content) {
      text = data.result.content;
    } else {
      text = JSON.stringify(data?.result || data);
    }

    // Return OpenAI-compatible response
    return NextResponse.json({
      id: `chatcmpl-${Math.random().toString(36).substring(7)}`,
      object: "chat.completion",
      created: Math.floor(Date.now() / 1000),
      model: model || "gemini-3-pro-preview",
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content: text
          },
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
    console.error('AI Gateway Error:', error);
    return NextResponse.json({
      error: {
        message: error.message || 'Internal Server Error',
        type: 'server_error',
        param: null,
        code: 'internal_error'
      }
    }, { status: 500 });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const HEAD = handler;
export const OPTIONS = handler;

