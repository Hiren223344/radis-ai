'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const PageTransition = () => {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const panels = panelsRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;

    if (!overlay || !text || panels.length < 4) return;

    const tl = gsap.timeline({
      onStart: () => setIsAnimating(true),
      onComplete: () => {
        setIsAnimating(false);
        gsap.set(overlay, { display: 'none' });
      }
    });

    // Reset visibility and initial states
    gsap.set(overlay, { display: 'block' });
    gsap.set(text, { opacity: 0, scale: 0.8, y: 40 });
    
    // Initial positions: Panels start outside their respective corners
    gsap.set(panels[0], { x: '-100%', y: '-100%' }); // Top Left
    gsap.set(panels[1], { x: '100%', y: '-100%' });  // Top Right
    gsap.set(panels[2], { x: '-100%', y: '100%' });  // Bottom Left
    gsap.set(panels[3], { x: '100%', y: '100%' });   // Bottom Right

    // 1. Entry Animation: Panels slide in to meet at the center
    tl.to(panels, {
      x: '0%',
      y: '0%',
      duration: 0.6,
      ease: 'expo.out',
      stagger: 0.08
    })
    
    // 2. Text Reveal
    .to(text, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    })
    .to(text, {
      opacity: 0,
      scale: 1.05,
      y: -20,
      duration: 0.4,
      delay: 0.6,
      ease: 'power2.in'
    })

    // 3. Exit Animation: Panels split back to their respective corners
    .addLabel('split')
    .to(panels[0], { x: '-100%', y: '-100%', duration: 0.8, ease: 'expo.inOut' }, 'split')
    .to(panels[1], { x: '100%', y: '-100%', duration: 0.8, ease: 'expo.inOut' }, 'split')
    .to(panels[2], { x: '-100%', y: '100%', duration: 0.8, ease: 'expo.inOut' }, 'split')
    .to(panels[3], { x: '100%', y: '100%', duration: 0.8, ease: 'expo.inOut' }, 'split');

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none select-none"
    >
      {/* 4-Section Grid Transition */}
      
      {/* Top Left - Color A (Dark Charcoal) */}
      <div 
        ref={(el) => { panelsRef.current[0] = el; }}
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#141416] border-r border-b border-white/5"
      />
      
      {/* Top Right - Color B (Pure Black) */}
      <div 
        ref={(el) => { panelsRef.current[1] = el; }}
        className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-[#000000] border-l border-b border-white/5"
      />
      
      {/* Bottom Left - Color B (Pure Black) */}
      <div 
        ref={(el) => { panelsRef.current[2] = el; }}
        className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-[#000000] border-r border-t border-white/5"
      />
      
      {/* Bottom Right - Color A (Dark Charcoal) */}
      <div 
        ref={(el) => { panelsRef.current[3] = el; }}
        className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-[#141416] border-l border-t border-white/5"
      />

    <div className="absolute inset-0 flex items-center justify-center">
        <div ref={textRef} className="text-center">
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase italic leading-none">
              RADISON
            </h1>
            <div className="absolute -inset-2 bg-white/5 blur-3xl rounded-full -z-10" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 overflow-hidden">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="text-white/40 font-mono text-xs tracking-[0.5em] uppercase whitespace-nowrap">
              Unified Intelligence
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
