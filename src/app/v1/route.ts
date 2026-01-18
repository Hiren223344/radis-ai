import { NextResponse } from 'next/server';

const API_DOCS = {
  gateway_status: "Operational",
  version: "1.0.3-Fix-403",
  endpoints: [
    { path: "/v1/chat/completions", type: "Chat", description: "OpenAI-compatible Chat (Streaming & Non-Streaming)" },
  ],
  fetch_examples: {
    javascript: `
fetch("http://localhost:3000/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_SK_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4o",
    messages: [{ role: "user", content: "Hello!" }],
    stream: true
  })
});
    `,
    python: `
import requests
res = requests.post("http://localhost:3000/v1/chat/completions", 
    headers={"Authorization": "Bearer YOUR_SK_KEY"},
    json={"model": "gpt-4o", "messages": [{"role": "user", "content": "Hi!"}]}
)
print(res.json())
    `,
    curl: `
curl http://localhost:3000/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_SK_KEY" \\
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Explain quantum physics"}]
  }'
    `
  }
};

async function handler(req: Request) {
  return NextResponse.json(API_DOCS, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    }
  });
}

export const GET = handler;
export const OPTIONS = handler;
