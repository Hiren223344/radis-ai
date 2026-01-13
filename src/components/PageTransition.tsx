'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const PageTransition = () => {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const aiTextRef = useRef<HTMLDivElement>(null);
  const userTextRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onStart: () => setIsAnimating(true),
      onComplete: () => {
        setIsAnimating(false);
        gsap.set(overlayRef.current, { display: 'none' });
      }
    });

    // Reset visibility
    gsap.set(overlayRef.current, { display: 'flex' });
    
    // Starting state for Panels
    gsap.set([leftPanelRef.current, rightPanelRef.current], {
      x: (index) => index === 0 ? '0%' : '0%'
    });

    // Opening animation (the "Split")
    tl.to([aiTextRef.current, userTextRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.2
    })
    .to([aiTextRef.current, userTextRef.current], {
      opacity: 0,
      y: -40,
      duration: 0.4,
      delay: 0.5,
      ease: 'power3.in'
    })
    .to([leftPanelRef.current, rightPanelRef.current], {
      x: (index) => index === 0 ? '-100%' : '100%',
      duration: 0.8,
      ease: 'expo.inOut',
      stagger: 0.1
    });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-row overflow-hidden pointer-events-none"
    >
      {/* AI Side (Left) */}
      <div 
        ref={leftPanelRef}
        className="relative flex-1 bg-indigo-600 flex items-center justify-center border-r border-white/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-transparent" />
        <div ref={aiTextRef} className="relative opacity-0 translate-y-10 text-center">
          <span className="text-6xl md:text-9xl font-black text-white/20 uppercase tracking-tighter">AI</span>
          <div className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white font-bold tracking-widest uppercase text-sm">Processing Intelligence</span>
          </div>
        </div>
      </div>

      {/* User Side (Right) */}
      <div 
        ref={rightPanelRef}
        className="relative flex-1 bg-emerald-500 flex items-center justify-center border-l border-white/20"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-900/50 to-transparent" />
        <div ref={userTextRef} className="relative opacity-0 translate-y-10 text-center">
          <span className="text-6xl md:text-9xl font-black text-white/20 uppercase tracking-tighter">USER</span>
          <div className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white font-bold tracking-widest uppercase text-sm">Experience Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
