import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt, model } = await req.json();
    const PUTER_TOKEN = process.env.PUTER_TOKEN;

    if (!PUTER_TOKEN) {
      return NextResponse.json({ error: 'Puter token not configured' }, { status: 500 });
    }

    const response = await fetch("https://api.puter.com/drivers/call", {
      method: "POST",
      headers: {
        'accept': '*/*',
        'accept-language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'text/plain;actually=json',
        'origin': 'https://docs.puter.com',
        'priority': 'u=1, i',
        'referer': 'https://docs.puter.com/',
        'sec-ch-ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36'
      },
      body: JSON.stringify({
        interface: "puter-chat-completion",
        driver: "ai-chat",
        test_mode: false,
        method: "complete",
        args: {
          messages: [{ content: prompt || "Hi" }],
          model: model || "gemini-3-pro-preview"
        },
        auth_token: PUTER_TOKEN
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Puter API error response:', errorText);
      return NextResponse.json({ error: `Puter API error: ${response.status}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
