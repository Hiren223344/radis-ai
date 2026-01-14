'use client';

import React, { useEffect, useRef, useState, useCallback, createContext, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const initialAnimDone = useRef(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (initialAnimDone.current) return;
    initialAnimDone.current = true;

    const left = leftPanelRef.current;
    const right = rightPanelRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;
    
    if (!left || !right || !text || !overlay) return;

    setIsAnimating(true);
    overlay.style.pointerEvents = 'auto';

    gsap.set([left, right], { xPercent: 0 });
    gsap.set(text, { opacity: 0, scale: 0.8 });

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        overlay.style.pointerEvents = 'none';
      }
    });

    tl.to(text, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' })
      .to(text, { opacity: 0, scale: 0.9, duration: 0.3, delay: 0.4 })
      .to(left, { xPercent: -100, duration: 0.7, ease: 'power3.inOut' }, '-=0.1')
      .to(right, { xPercent: 100, duration: 0.7, ease: 'power3.inOut' }, '<');

  }, []);

  const navigateWithTransition = useCallback((href: string) => {
    if (isAnimating || href === pathname) return;

    const left = leftPanelRef.current;
    const right = rightPanelRef.current;
    const overlay = overlayRef.current;
    
    if (!left || !right || !overlay) {
      router.push(href);
      return;
    }

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    setIsAnimating(true);
    overlay.style.pointerEvents = 'auto';

    gsap.set(left, { xPercent: -100 });
    gsap.set(right, { xPercent: 100 });

    const tl = gsap.timeline();
    timelineRef.current = tl;

    tl.to(left, { xPercent: 0, duration: 0.4, ease: 'power2.inOut' })
      .to(right, { xPercent: 0, duration: 0.4, ease: 'power2.inOut' }, '<')
      .call(() => {
        router.push(href);
      })
      .to(left, { xPercent: -100, duration: 0.5, ease: 'power2.inOut' }, '+=0.15')
      .to(right, { xPercent: 100, duration: 0.5, ease: 'power2.inOut' }, '<')
      .call(() => {
        setIsAnimating(false);
        overlay.style.pointerEvents = 'none';
        timelineRef.current = null;
      });

  }, [router, isAnimating, pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{ overflow: 'hidden' }}
      >
        <div 
          ref={leftPanelRef}
          className="absolute top-0 left-0 w-1/2 h-full bg-[#09090b]"
          style={{ transform: 'translateX(-100%)' }}
        />
        <div 
          ref={rightPanelRef}
          className="absolute top-0 right-0 w-1/2 h-full bg-[#09090b]"
          style={{ transform: 'translateX(100%)' }}
        />
        <div 
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none"
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase italic">
              RADISON
            </h1>
            <p className="mt-2 text-xs text-white/40 tracking-[0.3em] uppercase">
              Unified Intelligence
            </p>
          </div>
        </div>
      </div>
    </TransitionContext.Provider>
  );
};

export default PageTransitionProvider;
