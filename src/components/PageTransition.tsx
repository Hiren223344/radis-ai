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

    // Reset visibility
    gsap.set(overlay, { display: 'block' });
    
    // Starting state for Panels (all meeting in middle)
    gsap.set(panels, {
      x: '0%',
      y: '0%',
      opacity: 1
    });

    // Starting state for Text
    gsap.set(text, {
      opacity: 0,
      scale: 0.8,
      y: 20
    });

    // Animation Sequence
    tl.to(text, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.2
    })
    .to(text, {
      opacity: 0,
      scale: 1.2,
      duration: 0.4,
      delay: 0.5,
      ease: 'power3.in'
    })
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
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
    >
      {/* Top Left */}
      <div 
        ref={(el) => { panelsRef.current[0] = el; }}
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#0A0A0B] border-r border-b border-white/5"
      />
      {/* Top Right */}
      <div 
        ref={(el) => { panelsRef.current[1] = el; }}
        className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-[#0A0A0B] border-l border-b border-white/5"
      />
      {/* Bottom Left */}
      <div 
        ref={(el) => { panelsRef.current[2] = el; }}
        className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-[#0A0A0B] border-r border-t border-white/5"
      />
      {/* Bottom Right */}
      <div 
        ref={(el) => { panelsRef.current[3] = el; }}
        className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-[#0A0A0B] border-l border-t border-white/5"
      />

      {/* Central Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={textRef} className="text-center">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase italic">
            RADISON
          </h1>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase">
              Unified Intelligence
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
