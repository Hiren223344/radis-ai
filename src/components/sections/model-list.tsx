"use client";

import React from 'react';
import { Copy, MoreHorizontal } from 'lucide-react';

interface ModelCardProps {
  name: string;
  author: string;
  tokens: string;
  description: string;
  tags?: { label: string; color: string }[];
  meta: string[];
  isFree?: boolean;
}

const Tag = ({ label, color = '#64748b' }: { label: string; color?: string }) => (
  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-border bg-white text-[11px] font-medium text-slate-11">
    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
    {label}
  </div>
);

const ModelCard = ({ name, author, tokens, description, tags, meta, isFree }: ModelCardProps) => (
  <div className="model-card group py-8 border-b border-border/50 last:border-none">
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <h3 className="text-[16px] font-semibold text-foreground tracking-tight">
              {name} {isFree && <span className="text-muted-foreground font-normal">(free)</span>}
            </h3>
            <button className="p-1 rounded hover:bg-slate-100 text-slate-11 transition-colors opacity-0 group-hover:opacity-100">
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-0.5">
              {tags.map((tag, idx) => (
                <Tag key={idx} label={tag.label} color={tag.color} />
              ))}
            </div>
          )}
        </div>
        <div className="text-[12px] font-medium text-slate-11 tabular-nums pt-1">
          {tokens} tokens
        </div>
      </div>

      <p className="text-[14px] text-muted-foreground leading-relaxed line-clamp-2 max-w-[850px]">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-slate-11">
        <span className="flex items-center gap-1">
          by <span className="underline cursor-pointer hover:text-foreground">{author}</span>
        </span>
        {meta.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-slate-300">•</span>
            <span>{item}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

const ModelList = () => {
  const models = [
    {
      name: "AllenAI: Molmo2 8B",
      author: "allenai",
      tokens: "34.5M",
      isFree: true,
      description: "Molmo2-8B is an open vision-language model developed by the Allen Institute for AI (AI2) as part of the Molmo2 family, supporting image, video, and multi-image understanding and grounding.",
      meta: ["37K context", "$0/M input tokens", "$0/M output tokens"]
    },
    {
      name: "MiniMax: MiniMax M2.1",
      author: "minimax",
      tokens: "154B",
      tags: [{ label: "Programming (#2)", color: "#f97316" }],
      description: "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development.",
      meta: ["197K context", "$0.28/M input tokens", "$1.20/M output tokens"]
    },
    {
      name: "Z.AI: GLM 4.7",
      author: "z-ai",
      tokens: "171B",
      tags: [
        { label: "Translation (#7)", color: "#3b82f6" },
        { label: "Technology (#8)", color: "#22c55e" },
        { label: "Programming (#8)", color: "#f97316" }
      ],
      description: "GLM-4.7 is Z.AI's latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution.",
      meta: ["203K context", "$0.40/M input tokens", "$1.50/M output tokens"]
    },
    {
      name: "Google: Gemini 1.5 Flash Preview",
      author: "google",
      tokens: "396B",
      tags: [
        { label: "Health (#1)", color: "#6366f1" },
        { label: "Finance (#2)", color: "#3b82f6" },
        { label: "Science (#2)", color: "#10b981" },
        { label: "Trivia (#3)", color: "#ec4899" },
        { label: "Academia (#3)", color: "#a855f7" }
      ],
      description: "Gemini 1.5 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi-turn chat, and coding assistance.",
      meta: ["1.05M context", "$0.50/M input tokens", "$3/M output tokens"]
    }
  ];

  return (
    <div className="w-full max-w-screen-4xl mx-auto px-6 py-8">
      <div className="flex flex-col">
        {models.map((model, index) => (
          <ModelCard key={index} {...model} />
        ))}
      </div>
      <div className="py-12 flex justify-center">
        <button className="text-muted-foreground hover:text-foreground transition-colors p-2">
          <MoreHorizontal className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default ModelList;
