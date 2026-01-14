import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, model, stream } = body;
    const PUTER_TOKEN = process.env.PUTER_TOKEN;

    if (!PUTER_TOKEN) {
      return NextResponse.json({ error: 'Puter token not configured' }, { status: 500 });
    }

    if (stream) {
      return NextResponse.json({ error: 'Streaming is not yet supported in this gateway lite' }, { status: 400 });
    }

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
          messages: messages || [],
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
    
    // Extract actual text from Puter response
    // Based on observation: data.result.message.content
    let text = "";
    if (data?.result?.message?.content) {
      text = data.result.message.content;
    } else if (typeof data?.result === 'string') {
      text = data.result;
    } else {
      text = JSON.stringify(data?.result || data);
    }

    return NextResponse.json({
      id: `chatcmpl-${Date.now()}`,
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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
