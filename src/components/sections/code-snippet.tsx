'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function CodeSnippet() {
  const codeLines = [
    { text: 'fetch("https://openrouter.ai/api/v1/chat/completions", {', color: 'text-blue-400' },
    { text: '  method: "POST",', color: 'text-purple-400' },
    { text: '  headers: {', color: 'text-blue-400' },
    { text: '    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,', color: 'text-green-400' },
    { text: '    "Content-Type": "application/json"', color: 'text-green-400' },
    { text: '  },', color: 'text-blue-400' },
    { text: '  body: JSON.stringify({', color: 'text-blue-400' },
    { text: '    "model": "openai/gpt-4-turbo",', color: 'text-green-400' },
    { text: '    "messages": [', color: 'text-blue-400' },
    { text: '      {"role": "user", "content": "What is OpenRouter?"}', color: 'text-green-400' },
    { text: '    ]', color: 'text-blue-400' },
    { text: '  })', color: 'text-blue-400' },
    { text: '});', color: 'text-blue-400' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative group"
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-[#0d1117]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 font-mono text-sm leading-relaxed shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <span className="ml-2 text-xs text-muted-foreground font-sans">bash — openrouter-api</span>
        </div>

        {/* Code Content */}
        <div className="space-y-1">
          {codeLines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-white/20 select-none text-right w-4">{i + 1}</span>
              <span className={line.color}>{line.text}</span>
            </div>
          ))}
        </div>

        {/* Cursor Reveal Effect Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle 200px at var(--mx) var(--my), rgba(255,255,255,0.05), transparent)',
          } as React.CSSProperties}
        />
      </div>
    </motion.div>
  );
}
