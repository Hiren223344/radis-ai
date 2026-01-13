'use client';

import { motion } from "framer-motion";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import AnnouncementsAndLinks from "@/components/sections/announcements-and-links";
import FeaturedModels from "@/components/sections/featured-models";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary relative overflow-x-hidden">
      <div className="bg-mesh" aria-hidden="true" />
      
      {/* Section 1: Navigation and Hero */}
      <div>
        <Navigation />
        <main id="skip" className="pt-24 lg:pt-32">
          <HeroSection />
        </main>
      </div>

      {/* Section 2: Announcements, Models, and Footer */}
      <div>
        <AnnouncementsAndLinks />
        <FeaturedModels />
        <Footer />
      </div>
    </div>
  );
}
