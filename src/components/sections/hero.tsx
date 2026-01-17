'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LaserHoverCard } from './laser-hover-card';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center overflow-hidden bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="flex flex-col items-start text-left gap-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/5 border border-primary/20 dark:border-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="size-3" />
              The Unified Interface For LLMs
            </div>

            <div className="text-sm font-bold tracking-widest text-primary/80 dark:text-primary uppercase">
              300+ models &bull; 60+ providers
            </div>

            <h1 className="my-0 w-full text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.1] tracking-tight">
              <span className="text-foreground">One API for Any</span>{' '}
              <span className="text-primary">AI Model</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Access all major models through a single, unified interface. Better prices, better uptime, and no subscriptions required.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/models"
                className="h-12 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Explore Models
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/rankings"
                className="h-12 px-6 rounded-xl bg-secondary dark:bg-secondary/50 border border-border text-foreground font-semibold text-base hover:bg-accent dark:hover:bg-secondary transition-all flex items-center justify-center"
              >
                View Rankings
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-10 pt-8 border-t border-border/50 w-full max-w-md">
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-bold text-primary tracking-tight">300+</span>
                <span className="text-[10px] lg:text-xs uppercase tracking-widest text-muted-foreground font-semibold">Models</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-bold text-primary tracking-tight">60+</span>
                <span className="text-[10px] lg:text-xs uppercase tracking-widest text-muted-foreground font-semibold">Providers</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl lg:text-3xl font-bold text-primary tracking-tight">99.9%</span>
                <span className="text-[10px] lg:text-xs uppercase tracking-widest text-muted-foreground font-semibold">Uptime</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <LaserHoverCard />
          </div>

        </div>
      </div>
    </section>
  );
}
