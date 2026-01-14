'use client';

import React, { useEffect, useRef, useState, useCallback, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

interface TransitionContextType {
  navigateWithTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const usePageTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within PageTransitionProvider');
  }
  return context;
};

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const hasPlayedIntroRef = useRef(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const panels = panelsRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;

    if (!overlay || !text || panels.length < 2 || hasPlayedIntroRef.current) return;
    
    hasPlayedIntroRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onStart: () => setIsAnimating(true),
        onComplete: () => {
          setIsAnimating(false);
          gsap.set(overlay, { pointerEvents: 'none' });
        }
      });

      gsap.set(overlay, { pointerEvents: 'auto' });
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
    });

    return () => ctx.revert();
  }, []);

  const navigateWithTransition = useCallback((href: string) => {
    if (isAnimating) return;

    const panels = panelsRef.current;
    const overlay = overlayRef.current;

    if (!overlay || panels.length < 2) {
      router.push(href);
      return;
    }

    setIsAnimating(true);

    gsap.set(overlay, { pointerEvents: 'auto' });
    gsap.set(panels[0], { x: '-100%' });
    gsap.set(panels[1], { x: '100%' });

    const tl = gsap.timeline({
      onComplete: () => {
        window.location.href = href;
      }
    });

    tl.to(panels[0], { x: '0%', duration: 0.5, ease: 'power3.inOut' })
      .to(panels[1], { x: '0%', duration: 0.5, ease: 'power3.inOut' }, '<');

  }, [router, isAnimating]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none select-none"
      >
        <div 
          ref={(el) => { panelsRef.current[0] = el; }}
          className="absolute top-0 left-0 w-1/2 h-full bg-[#0A0A0B] border-r border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
          style={{ transform: 'translateX(-100%)' }}
        />
        
        <div 
          ref={(el) => { panelsRef.current[1] = el; }}
          className="absolute top-0 right-0 w-1/2 h-full bg-[#0A0A0B] border-l border-white/5 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          style={{ transform: 'translateX(100%)' }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div ref={textRef} className="text-center opacity-0">
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
    </TransitionContext.Provider>
  );
};

export default PageTransitionProvider;
