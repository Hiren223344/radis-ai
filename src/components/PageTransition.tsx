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

const RadisonLogo = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 512 512"
    className="fill-white animate-pulse"
  >
    <path d="M256 0L0 256l256 256 256-256L256 0zm0 100.3L411.7 256 256 411.7 100.3 256 256 100.3z" />
    <path d="M256 170.7L170.7 256 256 341.3 341.3 256 256 170.7z" />
  </svg>
);

export const PageTransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const circleRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const initialAnimDone = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle outgoing animation completion when pathname changes
  useEffect(() => {
    if (pendingPath && pathname === pendingPath) {
      const circle = circleRef.current;
      const brand = brandRef.current;
      if (!circle || !brand) {
        setIsAnimating(false);
        setPendingPath(null);
        return;
      }

      // Small delay to ensure content is actually rendered
      const timeoutId = setTimeout(() => {
        brand.style.transition = 'opacity 0.2s ease-out';
        brand.style.opacity = '0';

        circle.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), bottom 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        circle.style.transform = 'translate(-50%, 50%) scale(0)';
        circle.style.bottom = '100%';

        setTimeout(() => {
          setIsAnimating(false);
          setPendingPath(null);
          circle.style.opacity = '0';
        }, 600);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname, pendingPath]);

  useEffect(() => {
    if (!mounted || initialAnimDone.current) return;
    initialAnimDone.current = true;

    const circle = circleRef.current;
    const brand = brandRef.current;
    if (!circle || !brand) return;

    setIsAnimating(true);

    const maxSize = Math.max(window.innerWidth, window.innerHeight) * 2.5;
    circle.style.width = `${maxSize}px`;
    circle.style.height = `${maxSize}px`;
    circle.style.bottom = '50%';
    circle.style.left = '50%';
    circle.style.transform = 'translate(-50%, 50%) scale(1)';
    circle.style.opacity = '1';
    brand.style.opacity = '1';

    setTimeout(() => {
      circle.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), bottom 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
      circle.style.transform = 'translate(-50%, 50%) scale(0)';
      circle.style.bottom = '100%';
      brand.style.transition = 'opacity 0.3s ease-out';
      brand.style.opacity = '0';
    }, 400);

    setTimeout(() => {
      setIsAnimating(false);
      circle.style.transition = 'none';
      circle.style.opacity = '0';
    }, 1200);

  }, [mounted]);

  const navigateWithTransition = useCallback((href: string) => {
    if (isAnimating || href === pathname) return;

    const circle = circleRef.current;
    const brand = brandRef.current;
    if (!circle || !brand) {
      router.push(href);
      return;
    }

    setIsAnimating(true);
    setPendingPath(href);

    const maxSize = Math.max(window.innerWidth, window.innerHeight) * 2.5;
    circle.style.width = `${maxSize}px`;
    circle.style.height = `${maxSize}px`;
    circle.style.bottom = '-50%';
    circle.style.left = '50%';
    circle.style.transform = 'translate(-50%, 50%) scale(0)';
    circle.style.opacity = '1';
    circle.style.transition = 'none';
    brand.style.opacity = '0';
    brand.style.transition = 'none';

    requestAnimationFrame(() => {
      circle.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), bottom 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      circle.style.transform = 'translate(-50%, 50%) scale(1)';
      circle.style.bottom = '50%';

      setTimeout(() => {
        brand.style.transition = 'opacity 0.3s ease-in';
        brand.style.opacity = '1';

        // Trigger push after overlay is fully covering
        setTimeout(() => {
          router.push(href);
        }, 300);
      }, 300);
    });
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
          <div
            ref={brandRef}
            className="fixed inset-0 flex flex-col items-center justify-center opacity-0 z-[10000]"
          >
            <RadisonLogo />
            <span className="text-white font-bold text-2xl mt-4 tracking-wide">Radison</span>
          </div>
        </div>
      )}
    </TransitionContext.Provider>
  );
};

export default PageTransitionProvider;
