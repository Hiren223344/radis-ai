import React from 'react';
import { Search, ChevronDown, Copy, Scale, LayoutGrid, List, Info } from 'lucide-react';

interface PerformanceBadge {
  label: string;
  rank: number;
  color: string;
}

interface ModelCardData {
  id: string;
  author: string;
  name: string;
  description: string;
  isFree?: boolean;
  tokens: string;
  authorSlug: string;
  context: string;
  inputPricing: string;
  outputPricing: string;
  audioPricing?: string;
  badges?: PerformanceBadge[];
}

const modelCards: ModelCardData[] = [
  {
    id: 'molmo2-8b',
    author: 'AllenAI',
    name: 'Molmo2 8B (free)',
    isFree: true,
    tokens: '34.5M tokens',
    description: 'Molmo2-8B is an open vision-language model developed by the Allen Institute for AI (Ai2) as part of the Molmo2 family, supporting image, video, and multi-image understanding and grounding. It is ...',
    authorSlug: 'allenai',
    context: '37K context',
    inputPricing: '$0/M input tokens',
    outputPricing: '$0/M output tokens'
  },
  {
    id: 'olmo-3.1-32b-instruct',
    author: 'AllenAI',
    name: 'Olmo 3.1 32B Instruct',
    tokens: '149M tokens',
    description: 'Olmo 3.1 32B Instruct is a large-scale, 32-billion-parameter instruction-tuned language model engineered for high-performance conversational AI, multi-turn dialogue, and practical instruction ...',
    authorSlug: 'allenai',
    context: '66K context',
    inputPricing: '$0.20/M input tokens',
    outputPricing: '$0.60/M output tokens'
  },
  {
    id: 'seedream-4.5',
    author: 'ByteDance Seed',
    name: 'Seedream 4.5',
    tokens: '832M tokens',
    description: 'Seedream 4.5 is the latest in-house image generation model developed by ByteDance. Compared with Seedream 4.0, it delivers comprehensive improvements, especially in editing consistency, ...',
    authorSlug: 'bytedance-seed',
    context: '4K context',
    inputPricing: '$0/M input tokens',
    outputPricing: '$9.581/M output tokens'
  },
  {
    id: 'minimax-m2.1',
    author: 'MiniMax',
    name: 'MiniMax M2.1',
    tokens: '154B tokens',
    description: 'MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it ...',
    authorSlug: 'minimax',
    context: '197K context',
    inputPricing: '$0.28/M input tokens',
    outputPricing: '$1.20/M output tokens',
    badges: [{ label: 'Programming', rank: 2, color: 'bg-orange-500' }]
  },
  {
    id: 'glm-4.7',
    author: 'Z.AI',
    name: 'GLM 4.7',
    tokens: '171B tokens',
    description: 'GLM-4.7 is Z.AI’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates ...',
    authorSlug: 'z-ai',
    context: '203K context',
    inputPricing: '$0.40/M input tokens',
    outputPricing: '$1.50/M output tokens',
    badges: [
      { label: 'Translation', rank: 7, color: 'bg-sky-500' },
      { label: 'Technology', rank: 8, color: 'bg-green-500' },
      { label: 'Programming', rank: 8, color: 'bg-orange-500' }
    ]
  },
  {
    id: 'gemini-3-flash-preview',
    author: 'Google',
    name: 'Gemini 3 Flash Preview',
    tokens: '396B tokens',
    description: 'Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool use performanc...',
    authorSlug: 'google',
    context: '1.05M context',
    inputPricing: '$0.50/M input tokens',
    outputPricing: '$3/M output tokens',
    audioPricing: '$1/M audio tokens',
    badges: [
      { label: 'Health', rank: 1, color: 'bg-indigo-500' },
      { label: 'Finance', rank: 2, color: 'bg-indigo-500' },
      { label: 'Science', rank: 2, color: 'bg-teal-500' },
      { label: 'Trivia', rank: 3, color: 'bg-purple-500' },
      { label: 'Academia', rank: 3, color: 'bg-purple-500' }
    ]
  }
];

const ModelCard = ({ model }: { model: ModelCardData }) => {
  return (
    <div className="group border-b border-border/50 py-8 first:pt-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-[18px] font-semibold text-foreground tracking-tight">
              {model.author}: {model.name}
            </h2>
            {model.isFree && (
              <svg viewBox="0 0 24 24" className="size-4 fill-foreground" aria-hidden="true">
                <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-10-2h4v2h-4V5z"></path>
              </svg>
            )}
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Copy className="size-4" />
            </button>
          </div>
          <div className="tabular-nums text-sm text-muted-foreground font-medium">
            {model.tokens}
          </div>
        </div>

        {model.badges && (
          <div className="flex flex-wrap gap-2 mt-0.5">
            {model.badges.map((badge, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border/60 hover:border-border transition-colors cursor-pointer"
              >
                <span className={`size-2 rounded-full ${badge.color}`} />
                <span className="text-[12px] font-medium text-muted-foreground">
                  {badge.label} (#{badge.rank})
                </span>
              </div>
            ))}
            {model.id === 'gemini-3-flash-preview' && (
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100/50 hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="flex -space-x-1">
                  <span className="size-2.5 rounded-full bg-orange-400 border border-white" />
                  <span className="size-2.5 rounded-full bg-green-400 border border-white" />
                  <span className="size-2.5 rounded-full bg-sky-400 border border-white" />
                </div>
                <span className="text-[12px] font-medium text-muted-foreground">
                  +7 categories
                </span>
              </div>
            )}
          </div>
        )}

        <p className="text-[14px] leading-[1.6] text-muted-foreground max-w-4xl">
          {model.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-[12px] text-muted-foreground">
          <span className="flex items-center gap-1">
            by <a href={`/authors/${model.authorSlug}`} className="underline hover:text-foreground transition-colors">{model.authorSlug}</a>
          </span>
          <span className="flex items-center gap-1">
            {model.context}
          </span>
          <span className="flex items-center gap-1">
            {model.inputPricing}
          </span>
          <span className="flex items-center gap-1">
            {model.outputPricing}
          </span>
          {model.audioPricing && (
            <span className="flex items-center gap-1">
              {model.audioPricing}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ModelCardsGrid: React.FC = () => {
  return (
    <div className="flex-1 px-8 pt-8 max-w-screen-xl mx-auto w-full">
      {/* Header Controls */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[30px] font-bold tracking-tight text-foreground">Models</h1>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors border-border">
              <Scale className="size-4" />
              Compare
            </button>
            <div className="flex items-center p-1 border rounded-md border-border bg-slate-50/50">
              <button className="p-1 px-2 rounded hover:bg-white hover:shadow-sm transition-all text-muted-foreground">
                <LayoutGrid className="size-4" />
              </button>
              <button className="p-1 px-2 rounded bg-white shadow-sm transition-all text-foreground">
                <List className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-foreground transition-colors" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-slate-100/50 border-none rounded-md py-2.5 pl-10 pr-4 text-sm focus:ring-1 focus:ring-ring focus:bg-white transition-all outline-none"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium">607 models</span>
          <button className="flex items-center gap-1 font-medium text-foreground hover:text-muted-foreground transition-colors">
            Most Popular
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex flex-col">
        {modelCards.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default ModelCardsGrid;