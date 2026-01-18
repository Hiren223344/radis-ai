import { NextResponse } from 'next/server';

// 🚀 AI Gateway Lite - High Performance Handler with Auto-Retry & Rotation
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
        message: `This endpoint supports POST for chat completions.`,
        endpoint: "/v1/chat/completions",
        available_methods: ["POST", "OPTIONS"],
        hint: "OpenAI-compatible clients should use POST."
      }, { status: 200 });
    }

    const body = await req.json();
    const { messages, model } = body;

    // 3. Token Management (Split by comma in case user put multiple in one variable)
    const rawMainToken = process.env.PUTER_TOKEN || "";
    const rawOtherTokens = process.env.PUTER_TOKENS || "";

    const allTokens = [
      ...rawMainToken.split(','),
      ...rawOtherTokens.split(',')
    ].map(t => t.trim()).filter(Boolean);

    // De-duplicate and Shuffle
    const uniqueTokens = Array.from(new Set(allTokens)).sort(() => Math.random() - 0.5);

    if (uniqueTokens.length === 0) {
      return NextResponse.json({
        error: { message: 'No Puter token(s) configured. Please check PUTER_TOKEN in .env.local', type: 'invalid_request_error' }
      }, { status: 500 });
    }

    // 🔒 Security: Validate API Key
    const { validateApiKey } = await import('@/lib/api-auth');
    const authResult = await validateApiKey(req);
    if (!authResult.isValid) return authResult.response;

    // Map OpenAI messages to Puter format
    const puterMessages = messages?.map((m: any) => ({
      role: m.role || 'user',
      content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content)
    })) || [];

    // --- AUTO-RETRY LOOP ---
    let lastError: any = null;
    let finalData: any = null;

    for (const token of uniqueTokens) {
      try {
        const puterResponse = await fetch("https://api.puter.com/drivers/call", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            interface: "puter-chat-completion",
            driver: "ai-chat",
            test_mode: false,
            method: "complete",
            args: {
              messages: puterMessages,
              model: model || "gemini-3-pro-preview",
              temperature: body.temperature,
              max_tokens: body.max_tokens,
              top_p: body.top_p,
              presence_penalty: body.presence_penalty,
              frequency_penalty: body.frequency_penalty,
              stop: body.stop
            },
            token: token, // Try 'token' instead of 'auth_token'
            auth_token: token // Keep 'auth_token' just in case
          })
        });

        if (!puterResponse.ok) {
          lastError = `Provider HTTP Error ${puterResponse.status}`;
          continue;
        }

        const data = await puterResponse.json();

        // --- 🧪 DETECTION & EXTRACTION ---
        let responseContent = "";
        let reasoning = "";

        if (data?.result?.message?.content) {
          const content = data.result.message.content;
          if (Array.isArray(content)) {
            responseContent = content.map((c: any) => {
              if (typeof c === 'string') return c;
              return c.text || c.content || JSON.stringify(c);
            }).join("");
          } else {
            responseContent = content;
          }
          reasoning = data.result.message.reasoning || "";
        } else if (typeof data?.result === 'string') {
          responseContent = data.result;
        } else if (data?.result?.content) {
          responseContent = typeof data.result.content === 'string' ? data.result.content : JSON.stringify(data.result.content);
        } else {
          responseContent = JSON.stringify(data.result || data || "");
        }

        // Only flag as limited if we actually see the limit message AND we have other tokens to try
        const lowerContent = String(responseContent).toLowerCase();
        const isLimited =
          lowerContent.includes("reached your ai usage limit") ||
          lowerContent.includes("quota exceeded") ||
          (data?.success === false && lowerContent.includes("limit"));

        if (isLimited && token !== uniqueTokens[uniqueTokens.length - 1]) {
          lastError = responseContent;
          continue;
        }

        // SUCCESS!
        finalData = { text: String(responseContent), reasoning: reasoning, rawData: data };
        break;

      } catch (err: any) {
        lastError = err.message;
      }
    }

    if (!finalData) {
      // Fallback: Show the error content but keep 200 OK for UI stability
      const fallbackText = lastError || "All providers exhausted.";
      return NextResponse.json({
        id: `chatcmpl-${Math.random().toString(36).substring(7)}`,
        object: "chat.completion",
        created: Math.floor(Date.now() / 1000),
        model: model,
        choices: [{
          index: 0,
          message: { role: "assistant", content: fallbackText },
          finish_reason: "stop"
        }],
        usage: { prompt_tokens: -1, completion_tokens: -1, total_tokens: -1 }
      });
    }

    // --- SUCCESS HANDLER ---
    const text = finalData.text || "";
    const reasoning = finalData.reasoning || "";
    const rawData = finalData.rawData;

    // --- TOKEN COUNTING (Real from provider or Heuristic fallback) ---
    const providerUsage = rawData?.result?.usage || rawData?.usage;
    const estPromptTokens = Math.ceil(JSON.stringify(puterMessages).length / 4);
    const estCompletionTokens = Math.ceil(text.length / 4);

    const usage = {
      prompt_tokens: providerUsage?.prompt || providerUsage?.prompt_tokens || estPromptTokens,
      completion_tokens: providerUsage?.completion || providerUsage?.completion_tokens || estCompletionTokens,
      total_tokens: (providerUsage?.prompt || estPromptTokens) + (providerUsage?.completion || estCompletionTokens)
    };


    // 🌊 STREAMING SUPPORT (Simulated for Extension Compatibility)
    if (body.stream) {
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          const id = `chatcmpl-${Math.random().toString(36).substring(7)}`;
          const chunks = text.match(/.{1,100}/g) || [text];

          for (let i = 0; i < chunks.length; i++) {
            const payload = {
              id,
              object: "chat.completion.chunk",
              created: Math.floor(Date.now() / 1000),
              model: model,
              choices: [{
                index: 0,
                delta: i === 0 ? { role: "assistant", content: chunks[i], reasoning: reasoning } : { content: chunks[i] },
                finish_reason: i === chunks.length - 1 ? "stop" : null
              }],
              // Attach usage to the very last chunk for Roo/Kilo compatibility
              usage: i === chunks.length - 1 ? usage : null
            };
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
            await new Promise(r => setTimeout(r, 10));
          }

          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        },
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // OpenAI Compatibility (Non-Streaming)
    return NextResponse.json({
      id: `chatcmpl-${Math.random().toString(36).substring(7)}`,
      object: "chat.completion",
      created: Math.floor(Date.now() / 1000),
      model: model,
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content: text,
            reasoning: reasoning
          },
          finish_reason: "stop"
        }
      ],
      usage: usage
    });




  } catch (error: any) {
    return NextResponse.json({
      error: { message: error.message || 'Internal Server Error', type: 'server_error' }
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
