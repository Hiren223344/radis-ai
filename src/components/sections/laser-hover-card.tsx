'use client';

import React, { useState, useEffect } from 'react';
import { LaserFlow } from '@/components/ui/laser-flow';

const codeSnippets = [
  {
    lang: 'Python',
    code: `import openai

client = openai.OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key="sk-or-..."
)

response = client.chat.completions.create(
  model="anthropic/claude-3.5-sonnet",
  messages=[{"role": "user", "content": "Hello!"}]
)`
  },
  {
    lang: 'JavaScript',
    code: `const response = await fetch(
  "https://openrouter.ai/api/v1/chat/completions",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk-or-...",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-4o",
      messages: [{ role: "user", content: "Hello!" }]
    })
  }
);`
  },
  {
    lang: 'cURL',
    code: `curl https://openrouter.ai/api/v1/chat/completions \\
  -H "Authorization: Bearer sk-or-..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "google/gemini-pro",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`
  },
  {
    lang: 'TypeScript',
    code: `import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "meta-llama/llama-3.1-70b",
  messages: [{ role: "user", content: "Hello!" }],
});`
  }
];

export function LaserHoverCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const theme = {
    color: isHovered ? '#00f2ff' : '#7000ff',
    speed: isHovered ? 1.5 : 0.3,
    density: isHovered ? 1.8 : 0.8,
  };

  const snippet = codeSnippets[currentSnippet];

  return (
    <div 
      className="card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        maxWidth: '500px',
        height: '500px',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
    >
      <div 
        className="absolute inset-0 bg-black/90 dark:bg-black/95 border border-white/10 dark:border-white/20 rounded-[20px]"
        style={{
          boxShadow: isHovered 
            ? '0 0 40px rgba(0, 242, 255, 0.3), inset 0 0 60px rgba(0, 242, 255, 0.05)' 
            : '0 0 20px rgba(112, 0, 255, 0.2), inset 0 0 40px rgba(112, 0, 255, 0.03)',
          transition: 'box-shadow 0.5s ease',
        }}
      />
      
      <div className="absolute inset-0 opacity-60 dark:opacity-80" style={{ transition: 'opacity 0.5s' }}>
        <LaserFlow 
          color={theme.color}
          flowSpeed={theme.speed}
          wispDensity={theme.density}
          wispSpeed={isHovered ? 30 : 10}
          wispIntensity={isHovered ? 10 : 4}
          fogIntensity={isHovered ? 0.7 : 0.3}
          mouseTiltStrength={0.04} 
          horizontalBeamOffset={0.1}
          verticalSizing={2.5}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {codeSnippets.map((s, i) => (
              <button
                key={s.lang}
                onClick={(e) => { e.stopPropagation(); setCurrentSnippet(i); }}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-all pointer-events-auto ${
                  i === currentSnippet 
                    ? 'bg-white/20 text-white border border-white/30' 
                    : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/70'
                }`}
              >
                {s.lang}
              </button>
            ))}
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
        </div>

        <div className="flex-1 overflow-hidden rounded-lg bg-black/50 border border-white/10 p-4">
          <pre className="text-xs sm:text-sm font-mono text-white/90 whitespace-pre-wrap leading-relaxed overflow-auto h-full">
            <code>{snippet.code}</code>
          </pre>
        </div>

        <div 
          className="mt-4 flex items-center justify-between"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
            opacity: isHovered ? 1 : 0.7,
            transition: 'all 0.4s ease'
          }}
        >
          <span className="text-white/60 text-xs font-mono">
            {isHovered ? '// Ready to integrate' : '// Hover to activate'}
          </span>
          <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000"
              style={{
                width: isHovered ? '100%' : '30%',
                background: theme.color,
                boxShadow: `0 0 10px ${theme.color}`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
