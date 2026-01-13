'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center px-6 pt-24 pb-20 md:px-8 lg:pt-32 bg-transparent overflow-hidden">
      <div className="flex w-full max-w-5xl flex-col justify-center gap-16 md:gap-24">
        
        {/* Headline & Subtext */}
        <div className="flex flex-col gap-6 md:gap-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <h1 className="my-0 w-full text-4xl sm:text-6xl md:text-[5rem] font-bold leading-[1] tracking-tight text-primary">
              The Unified Interface <br className="hidden md:block" /> 
              <span className="font-serif italic font-light text-primary/80">For LLMs</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Experience the future of AI with better{" "}
              <a 
                href="/models?order=pricing-low-to-high" 
                className="text-primary underline decoration-primary/20 hover:decoration-primary transition-all underline-offset-4"
              >
                prices
              </a>
              , better{" "}
              <a 
                href="/status" 
                className="text-primary underline decoration-primary/20 hover:decoration-primary transition-all underline-offset-4"
              >
                uptime
              </a>
              , and no subscriptions.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4"
          >
            <a href="/settings/keys" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-bold transition-all bg-primary text-primary-foreground shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] h-14 px-10 gap-2 w-full sm:w-auto text-lg cursor-pointer liquid-glass-button border-primary/20"
              >
                Get API Key
              </motion.button>
            </a>
            <a href="/models" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-bold transition-all liquid-glass-button border border-white/60 shadow-lg h-14 px-10 gap-3 text-primary w-full sm:w-auto text-lg cursor-pointer"
              >
                Explore Models
                <div className="flex -space-x-2 ml-1">
                  {[
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg",
                    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg"
                  ].map((src, i) => (
                    <div key={i} className="flex items-center justify-center flex-shrink-0 rounded-full size-6 border-2 border-white bg-white overflow-hidden relative shadow-sm" style={{ zIndex: 30 - (i * 10) }}>
                      <img width="24" height="24" alt="Provider" className="h-full w-full object-cover" src={src} />
                    </div>
                  ))}
                </div>
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full"
        >
          {[
            { label: "Monthly Tokens", value: "25T", link: "/rankings" },
            { label: "Global Users", value: "5M+" },
            { label: "Active Providers", value: "60+", link: "/models" },
            { label: "Models Available", value: "300+", link: "/models", highlight: true }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, translateY: -8 }}
              className={`relative group p-6 md:p-8 rounded-3xl transition-all duration-500 liquid-glass border border-white/40 shadow-xl ${stat.link ? 'cursor-pointer' : ''}`}
            >
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <p className={`text-4xl md:text-5xl font-bold tracking-tighter ${stat.highlight ? 'text-primary' : 'text-primary/90'}`}>
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
              {stat.link && (
                <div className="absolute inset-0 rounded-3xl ring-2 ring-primary/5 group-hover:ring-primary/20 transition-all pointer-events-none" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
