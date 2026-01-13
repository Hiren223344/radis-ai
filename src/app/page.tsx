'use client';

import { motion } from "framer-motion";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import AnnouncementsAndLinks from "@/components/sections/announcements-and-links";
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
  })
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary relative overflow-x-hidden">
      <div className="bg-mesh" aria-hidden="true" />
      
      {/* Section 1: Navigation and Hero */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Navigation />
        <main id="skip" className="pt-24 lg:pt-32">
          <HeroSection />
        </main>
      </motion.div>

      {/* Section 2: Announcements, Models, and Footer */}
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <AnnouncementsAndLinks />
        <FeaturedModels />
        <Footer />
      </motion.div>
    </div>
  );
}
