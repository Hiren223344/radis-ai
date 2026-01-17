'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import HeroSection from "@/components/sections/hero";
import AnnouncementsAndLinks from "@/components/sections/announcements-and-links";
import FeaturedModels from "@/components/sections/featured-models";
import Footer from "@/components/sections/footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor Motion Values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Springs for the cursor
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Cancel any pending frame to ensure we only run on the latest input
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);

        if (containerRef.current) {
          containerRef.current.style.setProperty("--mx", `${e.clientX}px`);
          containerRef.current.style.setProperty("--my", `${e.clientY}px`);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY, isMobile]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary relative overflow-x-hidden"
      style={{
        "--mx": "-100px",
        "--my": "-100px",
      } as React.CSSProperties}
    >
      {/* Global Reveal Layer */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 150px, rgba(255,255,255,0.6) 300px, rgba(255,255,255,0.25) 500px, rgba(255,255,255,0) 700px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 150px, rgba(255,255,255,0.6) 300px, rgba(255,255,255,0.25) 500px, rgba(255,255,255,0) 700px)',
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(255,255,255,0.08)_0%,transparent_100%)]" />
      </div>

      {/* Exact Cursor Animation - Only on Desktop */}
      {!isMobile && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[100] pointer-events-none mix-blend-difference"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
          <motion.div
            className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-[99] pointer-events-none"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            }}
          />
        </>
      )}

      <div className="bg-mesh" aria-hidden="true" />

      {/* Section 1: Hero - Full Screen & Sticky */}
      <div className="sticky top-0 h-[100dvh] w-full z-0 overflow-hidden">
        <main id="skip">
          <HeroSection />
        </main>
      </div>

      {/* Section 2: Content - Scrolls Over Hero */}
      <div className="relative z-10 bg-background/95 backdrop-blur-sm shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <AnnouncementsAndLinks />
        <FeaturedModels />
        <Footer />
      </div>
    </div>
  );
}
