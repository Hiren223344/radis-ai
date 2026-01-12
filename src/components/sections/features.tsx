import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const FeaturesGrid = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Card 1: One API for Any Model */}
        <a href="/models" className="group block h-full">
          <div className="h-full flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-[#6366f1] hover:shadow-lg">
            {/* Illustration Area */}
            <div className="relative h-48 overflow-hidden border-b border-slate-100 bg-white p-4">
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-50/50 to-transparent"></div>
              <div className="relative z-10 grid grid-cols-5 gap-x-2 gap-y-3 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                {[
                  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Microsoft-4.svg", alt: "Microsoft" },
                  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nvidia.com/&size=256", alt: "Nvidia" },
                  { src: "/images/icons/Meta.png", assetKey: "Meta-1.png", alt: "Meta" },
                  { src: "/images/icons/GoogleGemini.svg", alt: "Google" },
                  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nova.amazon.com/&size=256", alt: "Amazon" },
                  { src: "/images/icons/DeepSeek.png", assetKey: "DeepSeek-2.png", alt: "DeepSeek" },
                  { src: "/images/icons/Qwen.png", assetKey: "Qwen-3.png", alt: "Qwen" },
                  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://moonshot.ai&size=256", alt: "Moonshot" },
                  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://minimaxi.com/&size=256", alt: "Minimax" },
                  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://z.ai/&size=256", alt: "Z-AI" },
                  { src: "/images/icons/Mistral.png", assetKey: "Mistral-4.png", alt: "Mistral" },
                  { src: "/images/icons/Anthropic.svg", alt: "Anthropic" },
                  { src: "/images/icons/OpenAI.svg", alt: "OpenAI" },
                  { src: "/images/icons/GoogleAIStudio.svg", alt: "Google AI" },
                  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://x.ai/&size=256", alt: "X-AI" },
                ].map((item, i) => (
                  <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm transition-transform hover:scale-110">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`h-4 w-4 object-contain ${i === 12 || i === 9 ? 'dark:invert' : ''}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Content Area */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-base font-semibold text-slate-900">One API for Any Model</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
                Access all major models through a single, unified interface. OpenAI SDK works out of the box.
              </p>
              <span className="text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-700">
                Browse all
              </span>
            </div>
          </div>
        </a>

        {/* Card 2: Higher Availability */}
        <a href="/docs/features/uptime-optimization" className="group block h-full">
          <div className="h-full flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-[#6366f1] hover:shadow-lg">
            <div className="relative h-48 overflow-hidden border-b border-slate-100 bg-white p-4">
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-50/50 to-transparent"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                <div className="mb-4 text-[10px] text-slate-400 font-medium">anthropic/claude-opus-4.5</div>
                <div className="relative flex items-center justify-center">
                  {/* Tree Path Visualization Mockup */}
                  <svg width="200" height="80" viewBox="0 0 200 80" fill="none" className="text-slate-200">
                    <path d="M100 10 L100 40 M100 40 L30 60 M100 40 L170 60" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="10" r="3" fill="#cbd5e1" />
                  </svg>
                  <div className="absolute top-12 left-1/2 flex -translate-x-1/2 gap-8">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-100 bg-white shadow-sm">
                      <img src="/images/icons/Anthropic.svg" alt="Auth" className="h-4 w-4" />
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-100 bg-white shadow-sm">
                      <span className="text-[10px] font-bold text-slate-800">AI</span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-100 bg-white shadow-sm">
                       <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Microsoft-4.svg" alt="MS" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-base font-semibold text-slate-900">Higher Availability</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
                Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.
              </p>
              <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-700">
                Learn more <ExternalLink size={14} />
              </span>
            </div>
          </div>
        </a>

        {/* Card 3: Price and Performance */}
        <a href="/rankings" className="group block h-full">
          <div className="h-full flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-[#6366f1] hover:shadow-lg">
            <div className="relative h-48 overflow-hidden border-b border-slate-100 bg-white p-4">
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-50/50 to-transparent"></div>
              <div className="relative z-10 flex h-full items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                <div className="w-full h-24 border border-slate-100 rounded-lg p-2 bg-white/80 shadow-sm relative">
                  <div className="text-[8px] text-slate-400 uppercase tracking-widest absolute top-1 left-2">Throughput</div>
                  <div className="text-[8px] text-slate-400 uppercase tracking-widest absolute top-8 left-12">Latency</div>
                  {/* Performance Chart Mockup */}
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <path d="M0 45 Q 25 35, 50 48 T 100 40 T 150 50 T 200 35" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                    <path d="M0 50 Q 25 45, 50 52 T 100 48 T 150 55 T 200 45" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" />
                    <path d="M0 55 Q 25 50, 50 58 T 100 52 T 150 60 T 200 50" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-base font-semibold text-slate-900">Price and Performance</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
                Keep costs in check without sacrificing speed. Radison runs at the edge for minimal latency.
              </p>
              <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-700">
                Learn more <ExternalLink size={14} />
              </span>
            </div>
          </div>
        </a>

        {/* Card 4: Custom Data Policies */}
        <a href="/docs/privacy" className="group block h-full">
          <div className="h-full flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-[#6366f1] hover:shadow-lg">
            <div className="relative h-48 overflow-hidden border-b border-slate-100 bg-white p-4">
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-50/50 to-transparent"></div>
              <div className="relative z-10 flex h-full items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                <div className="relative">
                   {/* Security Visualization Mockup */}
                   <div className="flex items-center justify-center gap-4">
                      <div className="size-6 text-slate-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <div className="relative p-3 border border-slate-200 rounded-full bg-white shadow-sm">
                        <div className="size-8 text-slate-400">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border border-slate-200 rounded-full p-1 shadow-xs">
                          <div className="size-4 text-emerald-500">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                          </div>
                        </div>
                      </div>
                      <div className="size-6 text-slate-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-base font-semibold text-slate-900">Custom Data Policies</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
                Protect your organization with fine grained data policies. Ensure prompts only go to trusted models.
              </p>
              <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-700">
                View docs <ExternalLink size={14} />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default FeaturesGrid;