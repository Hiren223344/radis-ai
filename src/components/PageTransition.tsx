'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const PageTransition = () => {
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const panels = panelsRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;

    if (!overlay || !text || panels.length < 2) return;

    const isFirstLoad = !prevPathnameRef.current || prevPathnameRef.current === pathname;
    prevPathnameRef.current = pathname;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onStart: () => setIsAnimating(true),
        onComplete: () => {
          setIsAnimating(false);
          gsap.set(overlay, { display: 'none' });
        }
      });

      // Reset visibility
      gsap.set(overlay, { display: 'block' });
      
      if (isFirstLoad) {
        // Initial load animation (Intro)
        gsap.set(text, { opacity: 0, scale: 0.9, y: 20 });
        gsap.set(panels[0], { x: '0%' });
        gsap.set(panels[1], { x: '0%' });

        tl.to(text, {
          opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.4)'
        })
        .to(text, {
          opacity: 0, y: -20, duration: 0.4, delay: 0.5, ease: 'power2.in'
        })
        .addLabel('split')
        .to(panels[0], { x: '-100%', duration: 0.8, ease: 'power4.inOut' }, 'split')
        .to(panels[1], { x: '100%', duration: 0.8, ease: 'power4.inOut' }, 'split');
      } else {
        // Navigation transition: Quick swipe reveal
        // This plays when moving between pages. We want it to feel like the new page
        // is being "revealed" by the panels opening, rather than a full close-then-open.
        gsap.set(text, { opacity: 0 });
        gsap.set(panels[0], { x: '0%' });
        gsap.set(panels[1], { x: '0%' });

        tl.to(panels[0], { x: '-100%', duration: 0.6, ease: 'power4.inOut' })
          .to(panels[1], { x: '100%', duration: 0.6, ease: 'power4.inOut' }, '<');
      }
    });
  
      return () => {
        ctx.revert();
      };
    }, [pathname]);

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none select-none"
    >
      {/* 2-Section Side Transition */}
      
      {/* Left Panel */}
      <div 
        ref={(el) => { panelsRef.current[0] = el; }}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#0A0A0B] border-r border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
      />
      
      {/* Right Panel */}
      <div 
        ref={(el) => { panelsRef.current[1] = el; }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#0A0A0B] border-l border-white/5 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={textRef} className="text-center">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white uppercase italic leading-none">
              RADISON
            </h1>
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10" />
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="text-white/40 font-mono text-[10px] tracking-[0.4em] uppercase whitespace-nowrap">
              Unified Intelligence
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
