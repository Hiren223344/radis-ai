import React from 'react';
import Image from 'next/image';

const FeaturesGrid = () => {
  const features = [
    {
      title: "One API for Any Model",
      description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
      linkText: "Browse all",
      linkHref: "/models",
      visual: (
        <div className="absolute inset-4 grid grid-cols-5 gap-x-0 gap-y-1 scale-105 z-10">
          {[
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Microsoft-4.svg",
            "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nvidia.com/&size=256",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Meta-1.png",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Mistral-4.png",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Cohere-5.png",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/DeepSeek-2.png",
            "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Qwen-3.png",
            "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://moonshot.ai&size=256",
            "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://minimaxi.com/&size=256",
            "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://z.ai/&size=256"
          ].map((src, i) => (
            <div key={i} className={`size-9 transform transition-all duration-500 ease-out flex items-center justify-center ${i >= 5 && i < 10 ? 'translate-x-4' : ''}`}>
              <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border shadow bg-white p-1">
                <Image src={src} alt="Provider icon" width={24} height={24} className="rounded-full" />
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Higher Availability",
      description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
      linkText: "Learn more",
      linkHref: "/docs/features/uptime-optimization",
      visual: (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="text-[10px] font-mono text-muted-foreground mb-4">anthropic/claude-opus-4.5</div>
          <div className="relative w-full h-24">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              <path d="M100,5 L40,60 M100,5 L100,60 M100,5 L160,60" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              <circle cx="100" cy="5" r="4" fill="#E2E8F0" />
              <rect x="30" y="60" width="20" height="20" rx="4" fill="#F1F5F9" stroke="#E2E8F0" />
              <rect x="90" y="60" width="20" height="20" rx="4" fill="#F1F5F9" stroke="#E2E8F0" />
              <rect x="150" y="60" width="20" height="20" rx="4" fill="#F1F5F9" stroke="#E2E8F0" />
            </svg>
            <div className="absolute top-[62px] left-[32px] size-4 rounded-full flex items-center justify-center overflow-hidden">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Cohere-5.png" alt="provider" width={12} height={12} />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Price and Performance",
      description: "Keep costs in check without sacrificing speed. OpenRouter runs at the edge for minimal latency.",
      linkText: "Learn more",
      linkHref: "/docs/features/response-healing",
      visual: (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
           <div className="w-full h-32 relative bg-white border border-slate-100 rounded shadow-sm p-4 overflow-hidden">
             <div className="flex justify-between items-center mb-4">
                <span className="text-[8px] uppercase tracking-wider text-muted-foreground font-semibold">Latency</span>
                <div className="flex gap-1">
                   <div className="size-1 rounded-full bg-indigo-400"></div>
                   <div className="size-1 rounded-full bg-emerald-400"></div>
                   <div className="size-1 rounded-full bg-amber-400"></div>
                </div>
             </div>
             <svg viewBox="0 0 200 60" className="w-full h-12">
               <path d="M0,45 Q20,10 40,40 T80,20 T120,45 T160,15 T200,40" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
               <path d="M0,50 Q25,20 50,45 T100,30 T150,55 T200,25" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
               <path d="M0,55 Q30,40 60,55 T120,40 T180,55" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
             </svg>
           </div>
        </div>
      )
    },
    {
      title: "Custom Data Policies",
      description: "Protect your organization with fine grained data policies. Ensure prompts only go to trusted models.",
      linkText: "View docs",
      linkHref: "/docs/privacy",
      visual: (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
                <div className="absolute -top-12 -left-12 opacity-20"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div>
                <div className="absolute -top-12 -right-12 opacity-20"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div>
                <div className="size-20 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center">
                  <div className="size-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                    <svg className="size-6 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 size-6 rounded-full bg-emerald-100 flex items-center justify-center border border-white">
                    <svg className="size-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
            </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <a 
              key={idx}
              href={feature.linkHref}
              className="group h-full"
            >
              <div className="h-full flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:border-primary hover:shadow-lg hover:text-foreground">
                {/* Visual Area */}
                <div className="relative h-48 overflow-hidden border-b bg-muted/30 p-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:-translate-y-1">
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/40 opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 opacity-30"></div>
                  </div>
                  {feature.visual}
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <h3 className="text-[1.125rem] font-semibold leading-relaxed text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-slate-11 flex-1">
                    {feature.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-[14px] font-medium text-primary hover:underline flex items-center gap-1">
                      {feature.linkText}
                      {feature.linkText !== 'Browse all' && (
                        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;