"use client";

import Navigation from "@/components/sections/navigation";
import AnnouncementBanners from "@/components/sections/announcement-banners";
import StatusHero from "@/components/sections/status-hero";
import SystemOverviewCard from "@/components/sections/system-overview-card";
import ServiceStatusList from "@/components/sections/service-status-list";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as any
    }
  })
};

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <AnnouncementBanners />
        <Navigation />
      </motion.div>

      <main className="pb-20">
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <StatusHero />
        </motion.div>

        <div className="container px-4">
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <SystemOverviewCard />
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <ServiceStatusList />
          </motion.div>
        </div>
      </main>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
