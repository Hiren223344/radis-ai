import React from 'react';
import { ExternalLink } from 'lucide-react';

const models = [
  {
    name: 'Molmo2-8B',
    author: 'Ai2',
    authorUrl: 'https://radison.ai/models?author=allenai',
    description: 'Molmo2-8B is an open vision-language model developed by the Allen Institute for AI (Ai2) as part of the Molmo2 family, supporting image, video, and multi-image understanding and grounding. It is based on Qwen3-8B and uses SigLIP 2 as its vision backbone, outperforming other open-weight, open-data models on short videos, counting, and captioning, while remaining competitive on long-video tasks.'
  },
  {
    name: 'Olmo 3.1 32B Instruct',
    author: 'Ai2',
    authorUrl: 'https://radison.ai/models?author=allenai',
    description: 'Olmo 3.1 32B Instruct is a large-scale, 32-billion-parameter instruction-tuned language model engineered for high-performance conversational AI, multi-turn dialogue, and practical instruction following. As part of the Olmo 3.1 family, this variant emphasizes responsiveness to complex user directions and robust chat interactions while retaining strong capabilities on reasoning and coding benchmarks. Developed by Ai2 under the Apache 2.0 license, Olmo 3.1 32B Instruct reflects the Olmo initiative’s commitment to openness and transparency.'
  },
  {
    name: 'Seedream 4.5',
    author: 'byte-dance',
    authorUrl: 'https://radison.ai/models?author=bytedance',
    description: 'Seedream 4.5 is the latest in-house image generation model developed by ByteDance. Compared with Seedream 4.0, it delivers comprehensive improvements, especially in editing consistency, including better preservation of subject details, lighting, and color tone. It also enhances portrait refinement and small-text rendering. The model’s multi-image composition capabilities have been significantly strengthened, and both reasoning performance and visual aesthetics continue to advance, enabling more accurate and artistically expressive image generation. Pricing is $0.04 per output image, regardless of size.'
  },
  {
    name: 'Seed 1.6 Flash',
    author: 'byte-dance',
    authorUrl: 'https://radison.ai/models?author=bytedance',
    description: 'Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding. It features a 256k context window and can generate outputs of up to 16k tokens.'
  },
  {
    name: 'Seed 1.6',
    author: 'byte-dance',
    authorUrl: 'https://radison.ai/models?author=bytedance',
    description: 'Seed 1.6 is a general-purpose model released by the ByteDance Seed team. It incorporates multimodal capabilities and adaptive deep thinking with a 256K context window.'
  },
  {
    name: 'MiniMax-M2.1',
    author: 'minimax',
    authorUrl: 'https://radison.ai/models?author=minimax',
    description: "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in real-world capability while maintaining exceptional latency, scalability, and cost efficiency. Compared to its predecessor, M2.1 delivers cleaner, more concise outputs and faster perceived response times. It shows leading multilingual coding performance across major systems and application languages, achieving 49.4% on Multi-SWE-Bench and 72.5% on SWE-Bench Multilingual, and serves as a versatile agent “brain” for IDEs, coding tools, and general-purpose assistance. To avoid degrading this model's performance, MiniMax highly recommends preserving reasoning between turns. Learn more about using reasoning_details to pass back reasoning in our docs."
  },
  {
    name: 'GLM-4.7',
    author: 'z-ai',
    authorUrl: 'https://radison.ai/models?author=z-ai',
    description: 'GLM-4.7 is Z.AI’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing complex agent tasks while delivering more natural conversational experiences and superior front-end aesthetics.'
  },
  {
    name: 'Gemini 3 Flash Preview',
    author: 'google',
    authorUrl: 'https://radison.ai/models?author=google',
    description: 'Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool use performance with substantially lower latency than larger Gemini variants, making it well suited for interactive development, long running agent loops, and collaborative coding tasks. Compared to Gemini 2.5 Flash, it provides broad quality improvements across reasoning, multimodal understanding, and reliability. The model supports a 1M token context window and multimodal inputs including text, images, audio, video, and PDFs, with text output. It includes configurable reasoning via thinking levels (minimal, low, medium, high), structured output, tool use, and automatic context caching. Gemini 3 Flash Preview is optimized for users who want strong reasoning and agentic behavior without the cost or latency of full scale frontier models.'
  },
  {
    name: 'Mistral Small Creative',
    author: 'mistralai',
    authorUrl: 'https://radison.ai/models?author=mistralai',
    description: 'Mistral Small Creative is an experimental small model designed for creative writing, narrative generation, roleplay and character-driven dialogue, general-purpose instruction following, and conversational agents.'
  },
  {
    name: 'Olmo 3.1 32B Think',
    author: 'Ai2',
    authorUrl: 'https://radison.ai/models?author=allenai',
    description: 'Olmo 3.1 32B Think is a large-scale, 32-billion-parameter model designed for deep reasoning, complex multi-step logic, and advanced instruction following. Building on the Olmo 3 series, version 3.1 delivers refined reasoning behavior and stronger performance across demanding evaluations and nuanced conversational tasks. Developed by Ai2 under the Apache 2.0 license, Olmo 3.1 32B Think continues the Olmo initiative’s commitment to openness, providing full transparency across model weights, code, and training methodology.'
  },
  {
    name: 'FLUX.2 [max]',
    author: 'black-forest-labs',
    authorUrl: 'https://radison.ai/models?author=black-forest-labs',
    description: 'FLUX.2 [max] is the new top-tier image model from Black Forest Labs, pushing image quality, prompt understanding, and editing consistency to the highest level yet. Pricing is as follows, per the docs: Input: We charge $0.03 for each megapixel on the input (i.e. reference images for editing) Output: The first generated megapixel is charged $0.07. Each subsequent megapixel is charged $0.03.'
  }
];

export default function ModelHeader() {
  return (
    <section className="w-full bg-background border-b border-border/50">
      <div className="mx-auto flex w-full max-w-screen-4xl px-6 py-8">
        <div className="flex-1 max-w-4xl">
          <h1 className="text-[30px] font-bold tracking-tight text-[#020817] mb-[24px]">
            Models
          </h1>

          <div className="flex flex-col gap-8">
            {models.map((model, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-[18px] font-semibold text-[#020817]">
                    {model.name}
                  </h3>
                  <span className="text-[14px] text-muted-foreground">by</span>
                  <a 
                    href={model.authorUrl} 
                    className="text-[14px] font-medium text-[#4f46e5] hover:underline flex items-center gap-1"
                  >
                    {model.author}
                    <ExternalLink className="size-3" />
                  </a>
                </div>
                
                <p className="text-[14px] leading-[1.6] text-muted-foreground whitespace-pre-wrap max-w-3xl">
                  {model.description}
                </p>

                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border/50">
                    <span className="text-[12px] font-medium text-secondary-foreground">Detail</span>
                  </div>
                  <div className="flex items-center gap-4 text-[12px] text-muted-foreground border-l border-border pl-4">
                    <span className="flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {index % 2 === 0 ? '128k' : '256k'}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      {model.name.includes('Preview') || model.name.includes('creative') ? 'Free' : model.name.includes('Seedream') ? '$0.04/img' : '$0.00'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}