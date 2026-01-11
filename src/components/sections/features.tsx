import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* One API for Any Model Card */}
        <a href="/models" className="group h-full block">
          <div className="flex flex-col h-full bg-card border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-200">
            <div className="relative h-48 bg-slate-50 border-b overflow-hidden group-hover:bg-white transition-colors">
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 via-transparent to-slate-50/50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 via-transparent to-slate-50/50"></div>
              </div>
              <div className="absolute inset-2 grid grid-cols-5 gap-2 p-4 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                {[
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Microsoft-4.svg",
                  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nvidia.com/&size=256",
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Meta-1.png",
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg",
                  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nova.amazon.com/&size=256",
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/DeepSeek-2.png",
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Qwen-3.png",
                  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://moonshot.ai&size=256",
                  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://minimaxi.com/&size=256",
                  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://z.ai/&size=256",
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Mistral-4.png",
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg",
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg",
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleAIStudio-5.svg",
                  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://x.ai/&size=256"
                ].map((src, idx) => (
                  <div key={idx} className="flex items-center justify-center p-1.5 bg-white border rounded-full shadow-sm size-6 md:size-7 transition-all duration-300 hover:scale-110">
                    <img src={src} alt="Brand" className="w-full h-full object-contain rounded-full" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[1.125rem] font-semibold mb-2">One API for Any Model</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                Access all major models through a single, unified interface. OpenAI SDK works out of the box.
              </p>
              <span className="text-primary text-sm font-medium mt-4">Browse all</span>
            </div>
          </div>
        </a>

        {/* Higher Availability Card */}
        <a href="/docs/features/uptime-optimization" className="group h-full block">
          <div className="flex flex-col h-full bg-card border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-200">
            <div className="relative h-48 bg-slate-50 border-b flex items-center justify-center group-hover:bg-white transition-colors">
              <div className="w-full max-w-[240px] px-4 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                {/* Routing Illustration */}
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="h-0.5 bg-slate-200 w-12" />
                  <div className="px-2 py-0.5 border rounded bg-white text-[10px] whitespace-nowrap text-muted-foreground">anthropic/claude-opus-4.5</div>
                  <div className="h-0.5 bg-slate-200 w-12" />
                </div>
                <div className="flex justify-between items-center relative py-8">
                  <svg className="absolute inset-0 w-full h-full text-slate-200" style={{ pointerEvents: 'none' }}>
                    <path d="M 120 10 L 40 40" stroke="currentColor" strokeWidth="1" fill="none" />
                    <path d="M 120 10 L 120 40" stroke="currentColor" strokeWidth="1" fill="none" />
                    <path d="M 120 10 L 200 40" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                  <div className="relative z-10 flex w-full justify-around pt-4">
                    <div className="size-8 bg-white border rounded p-1.5 flex items-center justify-center shadow-sm">
                      <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg" className="w-4 h-4 opacity-30" alt="" />
                    </div>
                    <div className="size-8 bg-white border rounded p-1.5 flex items-center justify-center shadow-sm border-orange-200">
                      <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg" className="w-4 h-4" alt="" />
                    </div>
                    <div className="size-8 bg-white border rounded p-1.5 flex items-center justify-center shadow-sm bg-success/5 border-success/20">
                      <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/DeepSeek-2.png" className="w-4 h-4 saturate-0" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[1.125rem] font-semibold mb-2">Higher Availability</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.
              </p>
              <span className="text-primary text-sm font-medium mt-4 flex items-center">Learn more <span className="ml-1 text-[10px]">↗</span></span>
            </div>
          </div>
        </a>

        {/* Price and Performance Card */}
        <a href="/docs/features/latency-optimization" className="group h-full block">
          <div className="flex flex-col h-full bg-card border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-200">
            <div className="relative h-48 bg-slate-50 border-b p-6 flex items-center justify-center group-hover:bg-white transition-colors">
              <div className="w-full h-full bg-white border rounded p-4 shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[9px] font-medium text-slate-400">Latency</span>
                  <span className="text-[9px] font-medium text-slate-400">Throughput</span>
                </div>
                <div className="relative h-16 w-full flex items-end gap-1">
                  {[40, 65, 30, 85, 45, 95, 20, 55, 75, 40, 60, 35].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}>
                      <div className="w-full bg-primary rounded-t-sm" style={{ height: '30%' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[1.125rem] font-semibold mb-2">Price and Performance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                Keep costs in check without sacrificing speed. OpenRouter runs at the edge for minimal latency between your users and their inference.
              </p>
              <span className="text-primary text-sm font-medium mt-4 flex items-center">Learn more <span className="ml-1 text-[10px]">↗</span></span>
            </div>
          </div>
        </a>

        {/* Custom Data Policies Card */}
        <a href="/docs/privacy" className="group h-full block">
          <div className="flex flex-col h-full bg-card border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-200">
            <div className="relative h-48 bg-slate-50 border-b flex items-center justify-center group-hover:bg-white transition-colors">
              <div className="relative transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                <div className="size-20 border-2 border-slate-200 rounded-full flex items-center justify-center bg-white shadow-sm relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 size-6 bg-white border rounded shadow flex items-center justify-center">
                    <div className="size-3 border-2 border-slate-200 rounded-full" />
                  </div>
                  <div className="flex flex-col items-center gap-1 opacity-40">
                    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center size-8 bg-success/10 border border-success/20 rounded-full">
                    <svg className="size-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[1.125rem] font-semibold mb-2">Custom Data Policies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.
              </p>
              <span className="text-primary text-sm font-medium mt-4 flex items-center">View docs <span className="ml-1 text-[10px]">↗</span></span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Features;