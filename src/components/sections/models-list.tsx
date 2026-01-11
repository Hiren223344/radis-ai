import React from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { ExternalLink, Search } from 'lucide-react';

const models = [
  {
    author: "Allen Institute for AI",
    name: "Molmo2-8B",
    id: "allenai/molmo-2-8b-instruct",
    description: "Molmo2-8B is an open vision-language model developed by the Allen Institute for AI (Ai2) as part of the Molmo2 family, supporting image, video, and multi-image understanding and grounding. It is based on Qwen2-8B and uses SigLIP 2 as its vision backbone, outperforming other open-weight, open-data models on short videos, counting, and captioning, while remaining competitive on long-video tasks.",
    pricing: {
      input: "$0.00",
      output: "$0.00"
    }
  },
  {
    author: "Allen Institute for AI",
    name: "Olmo 3.1 32B Instruct",
    id: "allenai/olmo-3.1-32b-instruct",
    description: "Olmo 3.1 32B Instruct is a large-scale, 32-billion-parameter instruction-tuned language model engineered for high-performance conversational AI, multi-turn dialogue, and practical instruction following. As part of the Olmo 3.1 family, this variant emphasizes responsiveness to complex user directions and robust chat interactions while retaining strong capabilities on reasoning and coding benchmarks. Developed by Ai2 under the Apache 2.0 license, Olmo 3.1 32B Instruct reflects the Olmo initiative’s commitment to openness and transparency.",
    pricing: {
      input: "$0.00",
      output: "$0.00"
    }
  },
  {
    author: "ByteDance",
    name: "Seedream 4.5",
    id: "bytedance/seedream-4.5",
    description: "Seedream 4.5 is the latest in-house image generation model developed by ByteDance. Compared with Seedream 4.0, it delivers comprehensive improvements, especially in editing consistency, including better preservation of subject details, lighting, and color tone. It also enhances portrait refinement and small-text rendering. The model’s multi-image composition capabilities have been significantly strengthened, and both reasoning performance and visual aesthetics continue to advance, enabling more accurate and artistically expressive image generation. Pricing is $0.04 per output image, regardless of size.",
    pricing: {
      input: "-",
      output: "$0.04/img"
    }
  },
  {
    author: "ByteDance",
    name: "Seed 1.6 Flash",
    id: "bytedance/seed-1.6-flash",
    description: "Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding. It features a 256k context window and can generate outputs of up to 16k tokens.",
    pricing: {
      input: "$0.01",
      output: "$0.05"
    }
  },
  {
    author: "ByteDance",
    name: "Seed 1.6",
    id: "bytedance/seed-1.6",
    description: "Seed 1.6 is a general-purpose model released by the ByteDance Seed team. It incorporates multimodal capabilities and adaptive deep thinking with a 256K context window.",
    pricing: {
      input: "$0.05",
      output: "$0.20"
    }
  },
  {
    author: "MiniMax",
    name: "MiniMax-M2.1",
    id: "minimax/m2.1",
    description: "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in real-world capability while maintaining exceptional latency, scalability, and cost efficiency. Compared to its predecessor, M2.1 delivers cleaner, more concise outputs and faster perceived response times. It shows leading multilingual coding performance across major systems and application languages, achieving 49.4% on Multi-SWE-Bench and 72.5% on SWE-Bench Multilingual, and serves as a versatile agent “brain” for IDEs, coding tools, and general-purpose assistance. To avoid degrading this model's performance, MiniMax highly recommends preserving reasoning between turns. Learn more about using reasoning_details to pass back reasoning in our docs.",
    pricing: {
      input: "$0.10",
      output: "$0.10"
    }
  },
  {
    author: "Z.AI",
    name: "GLM-4.7",
    id: "z-ai/glm-4-7",
    description: "GLM-4.7 is Z.AI’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing complex agent tasks while delivering more natural conversational experiences and superior front-end aesthetics.",
    pricing: {
      input: "$0.10",
      output: "$0.10"
    }
  },
  {
    author: "Google",
    name: "Gemini 3 Flash Preview",
    id: "google/gemini-3-flash-preview",
    description: "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool use performance with substantially lower latency than larger Gemini variants, making it well suited for interactive development, long running agent loops, and collaborative coding tasks. Compared to Gemini 2.5 Flash, it provides broad quality improvements across reasoning, multimodal understanding, and reliability. The model supports a 1M token context window and multimodal inputs including text, images, audio, video, and PDFs, with text output. It includes configurable reasoning via thinking levels (minimal, low, medium, high), structured output, tool use, and automatic context caching. Gemini 3 Flash Preview is optimized for users who want strong reasoning and agentic behavior without the cost or latency of full scale frontier models.",
    pricing: {
      input: "$0.075",
      output: "$0.30"
    }
  },
  {
    author: "Mistral AI",
    name: "Mistral Small Creative",
    id: "mistral/mistral-small-creative",
    description: "Mistral Small Creative is an experimental small model designed for creative writing, narrative generation, roleplay and character-driven dialogue, general-purpose instruction following, and conversational agents.",
    pricing: {
      input: "$0.10",
      output: "$0.30"
    }
  },
  {
    author: "Allen Institute for AI",
    name: "Olmo 3.1 32B Think",
    id: "allenai/olmo-3.1-32b-think",
    description: "Olmo 3.1 32B Think is a large-scale, 32-billion-parameter model designed for deep reasoning, complex multi-step logic, and advanced instruction following. Building on the Olmo 3 series, version 3.1 delivers refined reasoning behavior and stronger performance across demanding evaluations and nuanced conversational tasks. Developed by Ai2 under the Apache 2.0 license, Olmo 3.1 32B Think continues the Olmo initiative’s commitment to openness, providing full transparency across model weights, code, and training methodology.",
    pricing: {
      input: "$0.00",
      output: "$0.00"
    }
  },
  {
    author: "Black Forest Labs",
    name: "FLUX.2 [max]",
    id: "black-forest-labs/flux-2-max",
    description: "FLUX.2 [max] is the new top-tier image model from Black Forest Labs, pushing image quality, prompt understanding, and editing consistency to the highest level yet. Pricing is as follows, per the docs: Input: We charge $0.03 for each megapixel on the input (i.e. reference images for editing) Output: The first generated megapixel is charged $0.07. Each subsequent megapixel is charged $0.03.",
    pricing: {
      input: "$0.03/MP",
      output: "$0.07/MP"
    }
  }
];

const ModelsList = () => {
  return (
    <div className="flex-1 min-w-0">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-6 pt-8">
        <div>
          <h1 className="text-[1.875rem] font-semibold tracking-tight text-[#020617]">Models</h1>
          <p className="mt-1 text-sm text-[#64748B]">
            Showing {models.length} models
          </p>
        </div>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
          <input
            type="text"
            placeholder="Search models..."
            className="h-9 w-full rounded-md border border-[#e2e8f0] bg-[#f8fafc] pl-10 pr-4 text-sm outline-none ring-[#94a3b8] focus-within:ring-1"
          />
          <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded border bg-[#ffffff] px-1.5 font-mono text-[10px] text-[#64748B] md:flex">
            /
          </kbd>
        </div>
      </div>

      <div className="space-y-0 divide-y divide-[#e2e8f0]/50 border-t border-[#e2e8f0]/50">
        {models.map((model) => (
          <div 
            key={model.id} 
            className="group flex flex-col gap-4 px-6 py-8 hover:bg-[#f1f5f9]/40 transition-colors"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[0.8125rem] font-medium text-[#64748B]">
                  {model.author}
                </span>
                <span className="text-[#e2e8f0]">/</span>
                <h2 className="text-[0.875rem] font-semibold text-[#020617] group-hover:underline cursor-pointer">
                  {model.name}
                </h2>
                <ExternalLink className="h-3 w-3 text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-mono text-[11px] text-[#64748B] tracking-tight">
                {model.id}
              </div>
            </div>

            <div className="max-w-4xl text-[0.8125rem] leading-[1.6] text-[#64748B] tabular-nums">
              {model.description}
            </div>

            <div className="flex items-center gap-6 pt-1">
              <div className="flex flex-col gap-0.5">
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#94a3b8]">Input</div>
                <div className="font-mono text-[0.75rem] text-[#020617] tabular-nums">
                  {model.pricing.input}
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#94a3b8]">Output</div>
                <div className="font-mono text-[0.75rem] text-[#020617] tabular-nums">
                  {model.pricing.output}
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-[10px] font-medium uppercase tracking-wider text-[#94a3b8]">Context</div>
                <div className="font-mono text-[0.75rem] text-[#020617] tabular-nums">
                  {model.name.includes("Flash") || model.name.includes("Seed") ? "256k" : model.name.includes("Gemini") ? "1M" : "128k"}
                </div>
              </div>
              <div className="ml-auto">
                <button className="h-8 rounded-full border border-[#e2e8f0] px-4 text-xs font-medium text-[#0f172a] hover:bg-[#f1f5f9] transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import { Copy, PlusCircle } from 'lucide-react';

interface ModelMetaTag {
  label: string;
  count: number;
  color: string;
}

interface ModelEntry {
  id: string;
  provider: string;
  name: string;
  isFree?: boolean;
  tokens: string;
  description: string;
  author: string;
  context: string;
  inputPricing: string;
  outputPricing: string;
  otherPricing?: string;
  categories?: ModelMetaTag[];
  extraCategoriesCount?: number;
}

const models: ModelEntry[] = [
  {
    id: 'allenai/molmo-2-8b',
    provider: 'AllenAI',
    name: 'Molmo2 8B',
    isFree: true,
    tokens: '34.5M tokens',
    description: 'Molmo2-8B is an open vision-language model developed by the Allen Institute for AI (Ai2) as part of the Molmo2 family, supporting image, video, and multi-image understanding and grounding. It is based on Qwen3-8B and uses SigLIP 2 as its vision backbone, outperforming other open-weight, open-data models on short videos, counting, and captioning, while remaining competitive on long-video tasks.',
    author: 'allenai',
    context: '37K context',
    inputPricing: '$0/M input tokens',
    outputPricing: '$0/M output tokens',
  },
  {
    id: 'allenai/olmo-3-1-32b-instruct',
    provider: 'AllenAI',
    name: 'Olmo 3.1 32B Instruct',
    tokens: '149M tokens',
    description: 'Olmo 3.1 32B Instruct is a large-scale, 32-billion-parameter instruction-tuned language model engineered for high-performance conversational AI, multi-turn dialogue, and practical instruction following. As part of the Olmo 3.1 family, this variant emphasizes responsiveness to complex user directions and robust chat interactions while retaining strong capabilities on reasoning and coding benchmarks.',
    author: 'allenai',
    context: '65K context',
    inputPricing: '$0.20/M input tokens',
    outputPricing: '$0.60/M output tokens',
  },
  {
    id: 'bytedance/seedream-4-5',
    provider: 'ByteDance Seed',
    name: 'Seedream 4.5',
    tokens: '832M tokens',
    description: 'Seedream 4.5 is the latest in-house image generation model developed by ByteDance. Compared with Seedream 4.0, it delivers comprehensive improvements, especially in editing consistency, including better preservation of subject details, lighting, and color tone. It also enhances portrait refinement and small-text rendering.',
    author: 'bytedance-seed',
    context: '4K context',
    inputPricing: '$0/M input tokens',
    outputPricing: '$9.581/M output tokens',
    otherPricing: '$9.581/M tokens',
  },
  {
    id: 'minimax/minimax-m2-1',
    provider: 'MiniMax',
    name: 'MiniMax M2.1',
    tokens: '154B tokens',
    description: 'MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in real-world capability while maintaining exceptional latency, scalability, and cost efficiency.',
    author: 'minimax',
    context: '197K context',
    inputPricing: '$0.25/M input tokens',
    outputPricing: '$1.20/M output tokens',
    categories: [
      { label: 'Programming', count: 2, color: '#f97316' }
    ]
  },
  {
    id: 'z-ai/glm-4-7',
    provider: 'Z.AI',
    name: 'GLM 4.7',
    tokens: '171B tokens',
    description: 'GLM-4.7 is Z.AI’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing complex agent tasks while delivering more natural conversational experiences and superior front-end aesthetics.',
    author: 'z-ai',
    context: '203K context',
    inputPricing: '$0.40/M input tokens',
    outputPricing: '$1.50/M output tokens',
    categories: [
      { label: 'Translation', count: 7, color: '#0ea5e9' },
      { label: 'Technology', count: 8, color: '#22c55e' },
      { label: 'Programming', count: 9, color: '#f97316' }
    ]
  },
  {
    id: 'google/gemini-3-flash-preview',
    provider: 'Google',
    name: 'Gemini 3 Flash Preview',
    tokens: '396B tokens',
    description: 'Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool use performance with substantially lower latency than larger Gemini variants, making it well suited for interactive development, long running agent loops, and collaborative coding tasks.',
    author: 'google',
    context: '1.05M context',
    inputPricing: '$0.50/M input tokens',
    outputPricing: '$3/M output tokens',
    otherPricing: '$1/M audio tokens',
    categories: [
      { label: 'Health', count: 1, color: '#ef4444' },
      { label: 'Finance', count: 2, color: '#3b82f6' },
      { label: 'Science', count: 2, color: '#a855f7' },
      { label: 'Trivia', count: 3, color: '#6366f1' },
      { label: 'Academia', count: 1, color: '#d946ef' }
    ],
    extraCategoriesCount: 7
  }
];

const ModelsList: React.FC = () => {
  return (
    <div className="w-full flex-1 tabular-nums">
      <div className="mx-auto max-w-full">
        {models.map((model) => (
          <div 
            key={model.id} 
            className="model-list-item border-b border-border py-8 first:pt-4"
          >
            {/* Header Row: Title and Aggregate Tokens */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="model-title text-[16px] font-semibold text-foreground leading-[1.4]">
                  {model.provider}: {model.name} {model.isFree && <span className="text-muted-foreground font-normal">(free)</span>}
                </h3>
                <div className="flex items-center gap-1.5">
                  <button className="text-muted-foreground hover:text-foreground transition-colors p-0.5">
                    <PlusCircle className="size-3.5" strokeWidth={2.5} />
                  </button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors p-0.5">
                    <Copy className="size-3.5" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
              <div className="price-stat font-mono text-[14px] text-muted-foreground whitespace-nowrap">
                {model.tokens}
              </div>
            </div>

            {/* Category Tags */}
            {model.categories && model.categories.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {model.categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span 
                      className="size-2 rounded-full" 
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="text-xs text-muted-foreground font-medium">
                      {cat.label} <span className="opacity-70">({cat.count})</span>
                    </span>
                  </div>
                ))}
                {model.extraCategoriesCount && (
                  <div className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                    <span className="flex -space-x-1">
                      <span className="size-2 rounded-full bg-blue-400" />
                      <span className="size-2 rounded-full bg-green-400 border border-white" />
                    </span>
                    +{model.extraCategoriesCount} categories
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            <p className="description-text mb-2 line-clamp-2 max-w-[95%] text-[14px] leading-[1.6] text-muted-foreground">
              {model.description}
            </p>

            {/* Metadata Footer */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground font-medium">
              <span>by <span className="hover:underline cursor-pointer">{model.author}</span></span>
              <span>{model.context}</span>
              <span>{model.inputPricing}</span>
              <span>{model.outputPricing}</span>
              {model.otherPricing && <span>{model.otherPricing}</span>}
            </div>
          </div>
        ))}
        
        {/* Placeholder for more models if needed to scroll */}
        <div className="py-20 text-center text-muted-foreground/50 text-xs">
          607 models • End of listed results
        </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default ModelsList;