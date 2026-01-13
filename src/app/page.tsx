'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import FeaturesGrid from "@/components/sections/features-grid";
import FeaturedModels from "@/components/sections/featured-models";
import Footer from "@/components/sections/footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1] as any
    }
  }),
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRedirect = (path: string) => {
    setIsRedirecting(true);
    setTimeout(() => {
      router.push(path);
    }, 400); // Matches transition timing
  };

  return (
    <AnimatePresence mode="wait">
      {!isRedirecting && (
        <motion.div
          key="home-content"
          initial="hidden"
          animate="visible"
          exit="exit"
          className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary relative overflow-x-hidden"
        >
          <div className="bg-mesh" aria-hidden="true" />
          
          {/* Section 1: Navigation and Hero */}
          <motion.div
            custom={0}
            variants={sectionVariants}
          >
            <Navigation onRedirect={handleRedirect} />
            <main id="skip" className="pt-24 lg:pt-32">
              <HeroSection onRedirect={handleRedirect} />
            </main>
          </motion.div>

          {/* Section 2: Features, Models, and Footer */}
          <motion.div
            custom={1}
            variants={sectionVariants}
          >
            <FeaturesGrid />
            <FeaturedModels />
            <Footer />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
