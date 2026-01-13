'use client';

import React from 'react';
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
    description: "Keep costs in check without sacrificing speed. Radison runs at the edge for minimal latency.",
    linkText: "Learn more",
    href: "/rankings",
    graphic: "performance-graph",
  },
  {
    title: "Custom Data Policies",
    description: "Protect your organization with fine grained data policies. Ensure prompts only go to trusted providers.",
    linkText: "View docs",
    href: "/status",
    graphic: "security-shield",
  }
];

const ProviderIcons = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Microsoft-4.svg",
  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nvidia.com/&size=256",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Meta-1.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/DeepSeek-2.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Qwen-3.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Mistral-4.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/Cohere-5.png",
  "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://huggingface.co/&size=256"
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.a 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 1.02, 0.73, 1] }}
      whileHover={{ translateY: -12, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={feature.href} 
      className="group/card flex flex-col h-full overflow-hidden rounded-[2.5rem] liquid-glass border border-white/40 shadow-xl transition-all duration-500"
    >
      {/* Top Graphic Area */}
      <div className="relative h-56 w-full flex-shrink-0 overflow-hidden border-b border-white/20 bg-white/5 backdrop-blur-sm">
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20"></div>
        </div>

        <div className="flex h-full w-full items-center justify-center p-8 group-hover/card:scale-110 transition-transform duration-700 ease-out">
          {feature.graphic === "provider-grid" && (
            <div className="grid grid-cols-4 gap-4 scale-110">
              {ProviderIcons.map((icon, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                  whileHover={{ scale: 1.3, rotate: 10, zIndex: 50 }}
                  className="flex items-center justify-center size-10 rounded-2xl border border-white/60 bg-white/80 shadow-lg p-2 transition-all"
                >
                  <img src={icon} alt="Provider" className="size-full object-contain" />
                </motion.div>
              ))}
            </div>
          )}

          {feature.graphic === "availability-path" && (
            <div className="relative w-full h-full flex items-center justify-center scale-125">
              <svg className="w-48 h-24" viewBox="0 0 200 100" fill="none">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, ease: "easeInOut", delay: index * 0.1 }}
                  d="M100 20 C 100 20, 100 60, 40 70 M100 20 C 100 20, 100 60, 100 70 M100 20 C 100 20, 100 60, 160 70" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="text-primary/10"
                />
                <motion.circle 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  cx="100" cy="15" r="4" className="fill-primary" 
                />
                <rect x="30" y="65" width="24" height="24" rx="8" className="fill-white stroke-white/60 shadow-sm" />
                <rect x="88" y="65" width="24" height="24" rx="8" className="fill-white stroke-white/60 shadow-sm" />
                <rect x="146" y="65" width="24" height="24" rx="8" className="fill-white stroke-white/60 shadow-sm" />
                <circle cx="100" cy="77" r="6" className="fill-primary animate-pulse" />
              </svg>
            </div>
          )}

          {feature.graphic === "performance-graph" && (
            <div className="w-56 px-6 flex flex-col gap-4 scale-125">
              <div className="relative h-20 w-full border-l-2 border-b-2 border-primary/5">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, ease: "linear", delay: index * 0.1 }}
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
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.1 }}
              className="flex flex-col items-center gap-6 scale-125"
            >
              <div className="size-20 rounded-[2rem] bg-primary/5 border border-primary/10 flex items-center justify-center shadow-inner">
                <svg className="size-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
            </motion.div>
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
    </motion.a>
  );
};

export default function FeaturesGrid() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-32 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
