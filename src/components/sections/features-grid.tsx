'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: "One API for Any Model",
    description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
    linkText: "Browse all",
    href: "/models",
    graphic: "provider-grid",
  },
  {
    title: "Higher Availability",
    description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
    linkText: "Learn more",
    href: "/status",
    graphic: "availability-path",
  },
  {
    title: "Price and Performance",
    description: "Keep costs in check without sacrificing speed. Radison runs at the edge for minimal latency between your users and their inference.",
    linkText: "Learn more",
    href: "/rankings",
    graphic: "performance-graph",
  },
  {
    title: "Custom Data Policies",
    description: "Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.",
    linkText: "View docs",
    href: "/status",
    graphic: "security-shield",
  }
];

const ProviderIcons = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Microsoft-4.svg",
  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nvidia.com/&size=256",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Meta-1.png",
  "/images/icons/GoogleGemini.svg",
  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nova.amazon.com/&size=256",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/DeepSeek-2.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Qwen-3.png",
  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://moonshot.ai&size=256",
  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://minimaxi.com/&size=256",
  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://z.ai/&size=256",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Mistral-4.png",
  "/images/icons/Anthropic.svg",
  "/images/icons/OpenAI.svg",
  "/images/icons/GoogleAIStudio.svg",
  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://x.ai/&size=256",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Cohere-5.png",
  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://huggingface.co/&size=256"
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <motion.a 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={feature.href} 
      className="group/card block h-full"
    >
      <div className="flex flex-col h-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:border-[#5F6FFF] hover:shadow-lg">
        {/* Top Graphic Area */}
        <div className="relative h-48 w-full flex-shrink-0 overflow-hidden border-b bg-background transition-transform duration-200">
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50/30 via-transparent to-slate-50/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/30 via-transparent to-slate-50/30"></div>
          </div>

          <div className="flex h-full w-full items-center justify-center p-6 grayscale opacity-80 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500">
            {feature.graphic === "provider-grid" && (
              <div className="grid grid-cols-5 gap-4 scale-90">
                {ProviderIcons.slice(0, 15).map((icon, idx) => (
      <motion.div 
        whileHover={{ translateY: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex flex-col h-full overflow-hidden rounded-[2.5rem] liquid-glass border border-white/40 shadow-xl transition-all duration-500"
      >
        {/* Top Graphic Area */}
        <div className="relative h-56 w-full flex-shrink-0 overflow-hidden border-b border-white/20 bg-white/10 backdrop-blur-sm">
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/40"></div>
          </div>

          <div className="flex h-full w-full items-center justify-center p-8 group-hover/card:scale-110 transition-transform duration-700 ease-out">
            {feature.graphic === "provider-grid" && (
              <div className="grid grid-cols-4 gap-4 scale-110">
                {ProviderIcons.slice(0, 12).map((icon, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.3, rotate: 10, zIndex: 50 }}
                    className="flex items-center justify-center size-10 rounded-2xl border border-white/60 bg-white/80 shadow-lg p-2 transition-all"
                  >
                    <img src={icon} alt="Provider" className="size-full object-contain" />
                  </motion.div>
                ))}
              </div>
            )}
            {/* ... other graphics remains same or similar ... */}
            {feature.graphic !== "provider-grid" && (
              <div className="scale-125 opacity-90 group-hover/card:opacity-100 transition-opacity">
                 {feature.graphic === "availability-path" && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <svg className="w-48 h-24" viewBox="0 0 200 100" fill="none">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity }}
                        d="M100 20 C 100 20, 100 60, 40 70 M100 20 C 100 20, 100 60, 100 70 M100 20 C 100 20, 100 60, 160 70" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        className="text-primary/20"
                      />
                      <circle cx="100" cy="15" r="4" className="fill-primary" />
                      <rect x="30" y="65" width="24" height="24" rx="8" className="fill-white stroke-white/60" />
                      <rect x="88" y="65" width="24" height="24" rx="8" className="fill-white stroke-white/60" />
                      <rect x="146" y="65" width="24" height="24" rx="8" className="fill-white stroke-white/60" />
                      <circle cx="100" cy="77" r="6" className="fill-primary animate-pulse" />
                    </svg>
                  </div>
                )}
                {feature.graphic === "performance-graph" && (
                  <div className="w-56 px-6 flex flex-col gap-4">
                    <div className="relative h-20 w-full border-l-2 border-b-2 border-primary/10">
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 3, repeat: Infinity }}
                          d="M0 60 Q 20 50, 40 55 T 80 40 T 120 45 T 160 30 T 200 35" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          className="text-primary"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {feature.graphic === "security-shield" && (
                  <div className="flex flex-col items-center gap-6">
                    <div className="size-20 rounded-[2rem] bg-primary/5 border border-primary/10 flex items-center justify-center shadow-inner">
                      <svg className="size-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Text Content Area */}
        <div className="flex flex-1 flex-col p-10">
          <h3 className="mb-4 text-2xl font-bold text-primary tracking-tight">
            {feature.title}
          </h3>
          <p className="mb-8 text-base text-muted-foreground leading-relaxed font-medium">
            {feature.description}
          </p>
          <div className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary/60 group-hover/card:text-primary transition-colors">
            {feature.linkText}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </div>
        </div>
      </motion.div>
                ))}
              </div>
            )}

            {feature.graphic === "availability-path" && (
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute top-4 text-[10px] text-muted-foreground font-medium bg-muted px-2 py-0.5 rounded-full">anthropic/claude-opus-4.5</div>
                <svg className="w-48 h-24" viewBox="0 0 200 100" fill="none">
                  <path d="M100 20 C 100 20, 100 60, 40 70 M100 20 C 100 20, 100 60, 100 70 M100 20 C 100 20, 100 60, 160 70" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="100" cy="15" r="3" fill="#64748B" />
                  <rect x="30" y="65" width="20" height="20" rx="4" fill="white" stroke="#E2E8F0" />
                  <rect x="90" y="65" width="20" height="20" rx="4" fill="white" stroke="#E2E8F0" />
                  <rect x="150" y="65" width="20" height="20" rx="4" fill="white" stroke="#E2E8F0" />
                  <text x="36" y="79" fontSize="8" fill="#64748B" fontWeight="600">A</text>
                  <circle cx="100" cy="75" r="4" fill="#5F6FFF" />
                  <rect x="154" y="69" width="12" height="12" rx="2" fill="#22C55E" opacity="0.1" />
                </svg>
              </div>
            )}

            {feature.graphic === "performance-graph" && (
              <div className="w-full px-6 flex flex-col gap-2">
                <div className="flex justify-between items-center text-[8px] text-muted-foreground uppercase tracking-wider">
                  <span>Throughput</span>
                  <div className="flex gap-1">
                    <div className="size-1 rounded-full bg-primary"></div>
                    <div className="size-1 rounded-full bg-success"></div>
                  </div>
                </div>
                <div className="relative h-16 w-full border-l border-b border-muted">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <path d="M0 60 Q 20 50, 40 55 T 80 40 T 120 45 T 160 30 T 200 35" fill="none" stroke="#5F6FFF" strokeWidth="1.5" />
                    <path d="M0 50 Q 20 40, 40 45 T 80 30 T 120 35 T 160 20 T 200 25" fill="none" stroke="#22C55E" strokeWidth="1.5" />
                    <path d="M0 70 Q 20 65, 40 68 T 80 58 T 120 62 T 160 52 T 200 55" fill="none" stroke="#FBBF24" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="text-[8px] text-center text-muted-foreground">Latency</div>
              </div>
            )}

            {feature.graphic === "security-shield" && (
              <div className="flex flex-col items-center gap-4 scale-90">
                 <div className="flex gap-8">
                    <div className="size-6 border rounded-md flex items-center justify-center bg-white"><svg className="size-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg></div>
                    <div className="size-6 border rounded-md flex items-center justify-center bg-white text-success"><svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                    <div className="size-6 border rounded-md flex items-center justify-center bg-white"><svg className="size-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg></div>
                 </div>
                 <div className="flex flex-col items-center border rounded-full p-4 relative bg-white shadow-sm">
                    <div className="flex gap-1.5">
                       <div className="size-2 rounded-full bg-slate-200"></div>
                       <div className="size-2 rounded-full bg-slate-200"></div>
                       <div className="size-2 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="mt-1 size-0 w-8 h-4 border-t-2 border-slate-100 rounded-[50%]"></div>
                    <svg className="absolute -top-1 -right-1 size-4 text-slate-100" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                 </div>
              </div>
            )}
          </div>
        </div>

        {/* Text Content Area */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-[18px] font-semibold text-foreground leading-tight">
            {feature.title}
          </h3>
          <p className="mb-4 text-[14px] text-muted-foreground leading-relaxed flex-1">
            {feature.description}
          </p>
          <div className="flex items-center gap-1.5 text-[14px] font-medium text-[#5F6FFF] group-hover/card:underline">
            {feature.linkText}
            {feature.linkText.includes("learn") || feature.linkText.includes("View") || feature.linkText.includes("Browse") ? (
              <motion.svg 
                animate={{ x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="size-3.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            ) : null}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default function FeaturesGrid() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-20 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
}
