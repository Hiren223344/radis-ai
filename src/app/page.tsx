'use client';

import { motion } from "framer-motion";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import FeaturesGrid from "@/components/sections/features-grid";
import FeaturedModels from "@/components/sections/featured-models";
import OnboardingSteps from "@/components/sections/onboarding-steps";
import BottomContent from "@/components/sections/bottom-content";
import Footer from "@/components/sections/footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.21, 1.02, 0.73, 1] as any
    }
  })
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary relative overflow-x-hidden">
      <div className="bg-mesh" aria-hidden="true" />
      <Navigation />
      <main id="skip" className="pt-24">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <FeaturesGrid />
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <FeaturedModels />
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <OnboardingSteps />
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <BottomContent />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
