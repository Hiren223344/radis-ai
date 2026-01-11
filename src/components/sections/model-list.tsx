import React from 'react';
import { Copy } from 'lucide-react';

interface TagProps {
  label: string;
  color?: string;
}

const Tag = ({ label, color = '#64748b' }: TagProps) => (
  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-border bg-white text-[11px] font-medium text-slate-11">
    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
    {label}
  </div>
);

interface ModelCardProps {
  name: string;
  author: string;
  tokens: string;
  description: string;
  tags?: { label: string; color: string }[];
  meta: string[];
  isFree?: boolean;
}

const ModelCard = ({ name, author, tokens, description, tags, meta, isFree }: ModelCardProps) => (
  <div className="model-card group">
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <h3 className="text-[16px] font-semibold text-foreground tracking-tight">
              {name} {isFree && <span className="text-muted-foreground font-normal">(free)</span>}
            </h3>
            {isFree && (
              <svg 
                viewBox="0 0 24 24" 
                className="w-4 h-4 text-slate-11 fill-current"
                aria-hidden="true"
              >
                <path d="M20,6h-2.18c0.11-0.31,0.18-0.65,0.18-1c0-1.66-1.34-3-3-3c-1.05,0-1.96,0.54-2.5,1.35C11.96,2.54,11.05,2,10,2C8.34,2,7,3.34,7,5 c0,0.35,0.07,0.69,0.18,1H5c-1.11,0-1.99,0.89-1.99,2L3,19c0,1.11,0.89,2,2,2h14c1.11,0,2-0.89,2-2V8C21,6.89,20.11,6,20,6z M15,4 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S14.45,4,15,4z M10,4c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S9.45,4,10,4z M19,19H5 V8h14V19z" />
              </svg>
            )}
            <button className="p-1 rounded hover:bg-slate-100 text-slate-11 transition-colors">
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-0.5">
              {tags.map((tag, idx) => (
                <Tag key={idx} label={tag.label} color={tag.color} />
              ))}
              {tags.length > 5 && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full border border-border bg-white text-[11px] font-medium text-slate-11">
                  <div className="flex -space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  +{tokens === "396B" ? "7" : tokens === "5.16B" ? "3" : "2"} categories
                </div>
              )}
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
      description: "Molmo2-8B is an open vision-language model developed by the Allen Institute for AI (AI2) as part of the Molmo2 family, supporting image, video, and multi-image understanding and grounding. It is ...",
      meta: ["37K context", "$0/M input tokens", "$0/M output tokens"]
    },
    {
      name: "MiniMax: MiniMax M2.1",
      author: "minimax",
      tokens: "154B",
      tags: [{ label: "Programming (#2)", color: "#f97316" }],
      description: "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it ...",
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
      description: "GLM-4.7 is Z.AI's latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates ...",
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
      description: "Gemini 1.5 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi-turn chat, and coding assistance. It delivers near Pro level reasoning and tool use performanc...",
      meta: ["1.05M context", "$0.50/M input tokens", "$3/M output tokens", "$1/M audio tokens"]
    },
    {
      name: "Mistral: Mistral Small Creative",
      author: "mistralai",
      tokens: "3.06B",
      description: "Mistral Small Creative is an experimental small model designed for creative writing, narrative generation, roleplay and character-driven dialogue, general-purpose instruction following, and ...",
      meta: ["33K context", "$0.10/M input tokens", "$0.30/M output tokens"]
    }
  ];

  return (
    <div className="w-full max-w-screen-4xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8 overflow-hidden">
        <div className="flex items-center gap-4">
          <h2 className="text-[24px] font-semibold text-foreground">Models</h2>
          <div className="flex items-center gap-1 rounded-md border border-border p-1">
            <button className="flex items-center gap-2 px-3 py-1 text-[12px] font-medium text-slate-11 hover:bg-slate-50 transition-colors border-r border-border">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M16 3H21V8M8 21H3V16M21 3L14.5 9.5M3 21L9.5 14.5M3 3H8L3 8V3ZM21 21H16L21 16V21Z" /></svg>
              Compare
            </button>
            <div className="flex items-center gap-1 px-1">
               <button className="p-1.5 rounded bg-slate-100 text-foreground">
                 <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M3,11H21V13H3V11M3,18H21V20H3V18M3,4H21V6H3V4Z" /></svg>
               </button>
               <button className="p-1.5 rounded text-slate-11 hover:bg-slate-50">
                 <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M3,5H21V7H3V5M3,11H21V13H3V11M3,17H21V19H3V17Z" /></svg>
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative search-bar group flex items-center bg-slate-50 border border-border rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-slate-400 focus-within:bg-white transition-all">
          <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none text-[14px] w-full placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-10 text-[13px] text-slate-11 font-medium">
        <div>607 models</div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-foreground">
          Most Popular
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M7,10L12,15L17,10H7Z" /></svg>
        </div>
      </div>

      <div className="flex flex-col">
        {models.map((model, index) => (
          <ModelCard key={index} {...model} />
        ))}
      </div>
    </div>
  );
};

export default ModelList;