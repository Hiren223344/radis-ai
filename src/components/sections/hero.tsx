'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center overflow-hidden">
      {/* Laser Beam Effect */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '200%', opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[1px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.8),0_0_40px_rgba(255,255,255,0.4)] z-0"
      />

      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 dark:opacity-40 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/30 dark:bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/20 dark:bg-indigo-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="flex flex-col items-center gap-6 max-w-4xl relative z-10">
        {/* Top Stats Line */}
        <div className="text-sm font-bold tracking-widest text-primary uppercase mb-[-1rem]">
          300+ models • 60+ providers
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="size-3" />
          The Unified Interface For LLMs
        </div>

        {/* Main Title */}
        <h1 className="my-0 w-full text-4xl sm:text-6xl md:text-[5rem] font-bold leading-[1] tracking-tight text-primary">
          One API for Any <span className="text-foreground">AI Model</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Access all major models through a single, unified interface. Better prices, better uptime, and no subscriptions required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            href="/rankings"
            className="h-14 px-8 rounded-2xl bg-secondary border border-border text-foreground font-bold text-lg hover:bg-accent transition-all flex items-center justify-center"
          >
            View Rankings
          </Link>
          <Link
            href="/models"
            className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            Explore Models
            <ArrowRight className="size-5" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-20 pt-10 border-t border-border/50 w-full">
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-primary tracking-tight">300+</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Active Models</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-primary tracking-tight">60+</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Providers</span>
          </div>
          <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
            <span className="text-3xl font-bold text-primary tracking-tight">99.9%</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
