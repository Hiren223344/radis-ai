'use client';

import React, { useEffect, useRef, useState, useCallback, createContext, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';

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
  const circleRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const initialAnimDone = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || initialAnimDone.current) return;
    initialAnimDone.current = true;

    const circle = circleRef.current;
    if (!circle) return;

    setIsAnimating(true);
    
    const maxSize = Math.max(window.innerWidth, window.innerHeight) * 2.5;
    circle.style.width = `${maxSize}px`;
    circle.style.height = `${maxSize}px`;
    circle.style.bottom = '50%';
    circle.style.left = '50%';
    circle.style.transform = 'translate(-50%, 50%) scale(1)';
    circle.style.opacity = '1';

    requestAnimationFrame(() => {
      circle.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), bottom 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      circle.style.transform = 'translate(-50%, 50%) scale(0)';
      circle.style.bottom = '100%';
    });

    setTimeout(() => {
      setIsAnimating(false);
      circle.style.transition = 'none';
      circle.style.opacity = '0';
    }, 800);

  }, [mounted]);

  const navigateWithTransition = useCallback((href: string) => {
    if (isAnimating || href === pathname) return;

    const circle = circleRef.current;
    if (!circle) {
      router.push(href);
      return;
    }

    setIsAnimating(true);
    
    const maxSize = Math.max(window.innerWidth, window.innerHeight) * 2.5;
    circle.style.width = `${maxSize}px`;
    circle.style.height = `${maxSize}px`;
    circle.style.bottom = '-50%';
    circle.style.left = '50%';
    circle.style.transform = 'translate(-50%, 50%) scale(0)';
    circle.style.opacity = '1';
    circle.style.transition = 'none';

    requestAnimationFrame(() => {
      circle.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      circle.style.transform = 'translate(-50%, 50%) scale(1)';
      circle.style.bottom = '50%';
    });

    setTimeout(() => {
      router.push(href);
      
      setTimeout(() => {
        circle.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        circle.style.transform = 'translate(-50%, 50%) scale(0)';
        circle.style.bottom = '100%';
        
        setTimeout(() => {
          setIsAnimating(false);
          circle.style.opacity = '0';
        }, 500);
      }, 100);
    }, 500);

  }, [router, isAnimating, pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      {mounted && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
          <div 
            ref={circleRef}
            className="absolute bg-[#09090b] rounded-full opacity-0"
            style={{
              bottom: '-50%',
              left: '50%',
              transform: 'translate(-50%, 50%) scale(0)',
            }}
          />
        </div>
      )}
    </TransitionContext.Provider>
  );
};

export default PageTransitionProvider;
