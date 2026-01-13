'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const PageTransition = () => {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const aiTextRef = useRef<HTMLDivElement>(null);
  const userTextRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const tl = gsap.timeline();

    // Reset visibility
    gsap.set(overlayRef.current, { display: 'flex' });
    
    tl.to([leftPanelRef.current, rightPanelRef.current], {
      x: '0%',
      duration: 0.6,
      ease: 'expo.inOut',
      stagger: 0.05
    })
    .to([aiTextRef.current, userTextRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.2')
    .to([aiTextRef.current, userTextRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      delay: 0.2,
      ease: 'power2.in'
    })
    .to([leftPanelRef.current, rightPanelRef.current], {
      x: (index) => index === 0 ? '-100%' : '100%',
      duration: 0.6,
      ease: 'expo.inOut',
      stagger: 0.05
    })
    .set(overlayRef.current, { display: 'none' });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[9999] hidden flex-row overflow-hidden pointer-events-none"
    >
      {/* AI Side (Left) */}
      <div 
        ref={leftPanelRef}
        className="relative flex-1 bg-indigo-600 flex items-center justify-center -translate-x-full border-r border-white/20"
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
        className="relative flex-1 bg-emerald-500 flex items-center justify-center translate-x-full border-l border-white/20"
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
