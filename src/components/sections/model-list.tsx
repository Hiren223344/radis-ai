import React from 'react';
import { Copy, Gift, MoreHorizontal } from 'lucide-react';

interface ModelBadgeProps {
  label: string;
  colorClass: string;
}

const ModelBadge = ({ label, colorClass }: ModelBadgeProps) => (
  <div className="category-badge border-none" style={{ backgroundColor: 'transparent' }}>
    <span className={`category-dot ${colorClass}`} />
    <span className="text-[12px] font-medium text-foreground leading-none">{label}</span>
  </div>
);

interface ModelCardProps {
  author: string;
  name: string;
  description: string;
  isFree?: boolean;
  tokens: string;
  context: string;
  inputPrice: string;
  outputPrice: string;
  extraPriceLabel?: string;
  badges?: { label: string; color: string }[];
  authorSlug: string;
}

const ModelCard = ({
  author,
  name,
  description,
  isFree,
  tokens,
  context,
  inputPrice,
  outputPrice,
  extraPriceLabel,
  badges,
  authorSlug
}: ModelCardProps) => {
  return (
    <div className="group flex flex-col gap-3 py-8 border-b border-border/50 last:border-none">
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h2 className="model-card-title m-0 p-0 text-[18px] font-semibold flex items-center gap-2">
              {author}: {name} {isFree && <span className="font-normal text-muted-foreground">(free)</span>}
              {isFree && <Gift className="size-4 text-foreground" />}
            </h2>
            <button className="p-1 rounded-md opacity-0 group-hover:opacity-100 hover:bg-muted transition-all duration-150">
              <Copy className="size-3.5 text-muted-foreground" />
            </button>
          </div>

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-0.5">
              {badges.slice(0, 5).map((badge, idx) => (
                <ModelBadge key={idx} label={badge.label} colorClass={badge.color} />
              ))}
              {badges.length > 5 && (
                <div className="category-badge px-2 py-0.5 border-none bg-muted/50">
                  <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-1 uppercase tracking-wider">
                    +{badges.length - 5} categories
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="text-right">
          <span className="font-tabular text-[14px] text-muted-foreground font-medium">
            {tokens} tokens
          </span>
        </div>
      </div>

      <p className="model-card-description text-[14px] leading-relaxed text-muted-foreground/90 max-w-[95%] line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
        <span className="text-[12px] text-muted-foreground whitespace-nowrap">
          by <a href={`/${authorSlug}`} className="hover:underline text-muted-foreground">{authorSlug}</a>
        </span>
        <span className="text-[12px] text-muted-foreground font-tabular whitespace-nowrap">
          {context} context
        </span>
        <span className="text-[12px] text-muted-foreground font-tabular whitespace-nowrap">
          {inputPrice} input tokens
        </span>
        <span className="text-[12px] text-muted-foreground font-tabular whitespace-nowrap">
          {outputPrice} output tokens
        </span>
        {extraPriceLabel && (
          <span className="text-[12px] text-muted-foreground font-tabular whitespace-nowrap">
            {extraPriceLabel}
          </span>
        )}
      </div>
    </div>
  );
};

const ModelList = () => {
  const models: ModelCardProps[] = [
    {
      author: "AllenAI",
      name: "Molmo2-8B",
      isFree: true,
      authorSlug: "allenai",
      tokens: "34.5M",
      context: "37K",
      inputPrice: "$0/M",
      outputPrice: "$0/M",
      description: "Molmo2-8B is an open vision-language model developed by the Allen Institute for AI (Ai2) as part of the Molmo2 family, supporting image, video, and multi-image understanding and grounding. It is based on Qwen3-8B and uses SigLIP 2 as its vision backbone, outperforming other open-weight, open-data models on short videos, counting, and captioning, while remaining competitive on long-video tasks."
    },
    {
      author: "AllenAI",
      name: "Olmo 3.1 32B Instruct",
      authorSlug: "allenai",
      tokens: "149M",
      context: "66K",
      inputPrice: "$0.20/M",
      outputPrice: "$0.60/M",
      description: "Olmo 3.1 32B Instruct is a large-scale, 32-billion-parameter instruction-tuned language model engineered for high-performance conversational AI, multi-turn dialogue, and practical instruction following. As part of the Olmo 3.1 family, this variant emphasizes responsiveness to complex user directions and robust chat interactions while retaining strong capabilities on reasoning and coding benchmarks."
    },
    {
      author: "ByteDance Seed",
      name: "Seedream 4.5",
      authorSlug: "bytedance-seed",
      tokens: "832M",
      context: "4K",
      inputPrice: "$0/M",
      outputPrice: "$9.581/M",
      extraPriceLabel: "$9.581/M tokens",
      description: "Seedream 4.5 is the latest in-house image generation model developed by ByteDance. Compared with Seedream 4.0, it delivers comprehensive improvements, especially in editing consistency, including better preservation of subject details, lighting, and color tone. It also enhances portrait refinement and small-text rendering. The model’s multi-image composition capabilities have been significantly strengthened, and both reasoning performance and visual aesthetics continue to advance, enabling more accurate and artistically expressive image generation."
    },
    {
      author: "ByteDance Seed",
      name: "Seed 1.6 Flash",
      authorSlug: "bytedance-seed",
      tokens: "767M",
      context: "262K",
      inputPrice: "$0.075/M",
      outputPrice: "$0.30/M",
      description: "Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding. It features a 256k context window and can generate outputs of up to 16k tokens."
    },
    {
      author: "MiniMax",
      name: "MiniMax M2.1",
      authorSlug: "minimax",
      tokens: "154B",
      context: "197K",
      inputPrice: "$0.28/M",
      outputPrice: "$1.20/M",
      badges: [
        { label: "Programming (#2)", color: "bg-orange-500" }
      ],
      description: "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in real-world capability while maintaining exceptional latency, scalability, and cost efficiency. Compared to its predecessor, M2.1 delivers cleaner, more concise outputs and faster perceived response times."
    },
    {
      author: "Z.AI",
      name: "GLM-4.7",
      authorSlug: "z-ai",
      tokens: "171B",
      context: "203K",
      inputPrice: "$0.40/M",
      outputPrice: "$1.50/M",
      badges: [
        { label: "Translation (#7)", color: "bg-blue-500" },
        { label: "Technology (#8)", color: "bg-green-500" },
        { label: "Programming (#8)", color: "bg-orange-500" }
      ],
      description: "GLM-4.7 is Z.AI’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing complex agent tasks while delivering more natural conversational experiences and superior front-end aesthetics."
    },
    {
      author: "Google",
      name: "Gemini 3 Flash Preview",
      authorSlug: "google",
      tokens: "396B",
      context: "1.05M",
      inputPrice: "$0.50/M",
      outputPrice: "$3/M",
      extraPriceLabel: "$1/M audio tokens",
      badges: [
        { label: "Health (#1)", color: "bg-blue-500" },
        { label: "Finance (#2)", color: "bg-slate-500" },
        { label: "Science (#2)", color: "bg-emerald-500" },
        { label: "Trivia (#3)", color: "bg-purple-500" },
        { label: "Academia (#3)", color: "bg-indigo-500" },
        { label: "History", color: "bg-amber-500" },
        { label: "Arts", color: "bg-rose-500" }
      ],
      description: "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool use performance with substantially lower latency than larger Gemini variants. The model supports a 1M token context window and multimodal inputs including text, images, audio, video, and PDFs."
    },
    {
      author: "Mistral",
      name: "Mistral Small Creative",
      authorSlug: "mistralai",
      tokens: "3.06B",
      context: "33K",
      inputPrice: "$0.10/M",
      outputPrice: "$0.30/M",
      description: "Mistral Small Creative is an experimental small model designed for creative writing, narrative generation, roleplay and character-driven dialogue, general-purpose instruction following, and conversational agents."
    }
  ];

  return (
    <div className="flex flex-col w-full px-4 lg:px-0">
      <div className="flex flex-col gap-0">
        {models.map((model, idx) => (
          <ModelCard key={`${model.author}-${model.name}-${idx}`} {...model} />
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