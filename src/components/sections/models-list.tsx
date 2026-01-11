<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import React from 'react';
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  return (
    <div className="w-full flex-1 tabular-nums">
      <div className="mx-auto max-w-full">
        {models.map((model) => (
          <div 
            key={model.id} 
            className="model-list-item border-b border-border py-8 first:pt-4"
          >
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            {/* Header Row: Title and Aggregate Tokens */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="model-title text-[16px] font-semibold text-foreground leading-[1.4]">
                  {model.provider}: {model.name} {model.isFree && <span className="text-muted-foreground font-normal">(free)</span>}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            <p className="description-text mb-2 line-clamp-2 max-w-[95%] text-[14px] leading-[1.6] text-muted-foreground">
              {model.description}
            </p>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            {/* Metadata Footer */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground font-medium">
              <span>by <span className="hover:underline cursor-pointer">{model.author}</span></span>
              <span>{model.context}</span>
              <span>{model.inputPricing}</span>
              <span>{model.outputPricing}</span>
              {model.otherPricing && <span>{model.otherPricing}</span>}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            </div>
          </div>
        ))}
        
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        {/* Placeholder for more models if needed to scroll */}
        <div className="py-20 text-center text-muted-foreground/50 text-xs">
          607 models • End of listed results
        </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default ModelsList;
=======
export default ModelsList;
=======
export default ModelsList;
=======
export default ModelsList;
>>>>>>> Stashed changes
=======
export default ModelsList;
>>>>>>> Stashed changes
=======
export default ModelsList;
>>>>>>> Stashed changes
=======
export default ModelsList;
>>>>>>> Stashed changes
=======
export default ModelsList;
>>>>>>> Stashed changes
=======
export default ModelsList;
>>>>>>> Stashed changes
=======
export default ModelsList;
>>>>>>> Stashed changes
=======
export default ModelsList;
>>>>>>> Stashed changes
