'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LaserFlow } from '@/components/ui/laser-flow';
import { LaserHoverCard } from './laser-hover-card';

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden min-h-screen">
      {/* Background Laser Flow Effect (Subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <LaserFlow
          horizontalBeamOffset={0}
          verticalBeamOffset={0.0}
          color="#FFFFFF"
          wispDensity={0.5}
          fogIntensity={0.4}
          horizontalSizing={3.5}
          verticalSizing={6.5}
          falloffStart={4.0}
          decay={0.3}
          mouseTiltStrength={0.03}
          mouseSmoothTime={0.1}
        />
      </div>

      <div className="w-full max-w-[1440px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left gap-6 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="size-3" />
              The Unified Interface For LLMs
            </div>

            {/* Top Stats Line */}
            <div className="text-sm font-bold tracking-widest text-primary uppercase">
              300+ models • 60+ providers
            </div>

            {/* Main Title */}
            <h1 className="my-0 w-full text-4xl sm:text-6xl md:text-[5rem] font-bold leading-[1.1] tracking-tight text-primary">
              One API for Any <span className="text-foreground">AI Model</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Access all major models through a single, unified interface. Better prices, better uptime, and no subscriptions required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/models"
                className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Explore Models
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/rankings"
                className="h-14 px-8 rounded-2xl bg-secondary border border-border text-foreground font-bold text-lg hover:bg-accent transition-all flex items-center justify-center"
              >
                View Rankings
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-12 pt-8 border-t border-border/50 w-full">
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

          {/* Right Column: Laser Card */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <LaserHoverCard />
          </div>

        </div>
      </div>
    </section>
  );
}
