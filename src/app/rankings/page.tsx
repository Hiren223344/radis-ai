"use client";

import Navigation from "@/components/sections/navigation";
import HeroHeader from "@/components/sections/hero-header";
import LLMLeaderboard from "@/components/sections/llm-leaderboard";
import MarketShare from "@/components/sections/market-share";
import CategoriesRankings from "@/components/sections/categories-rankings";
import LanguagesRankings from "@/components/sections/languages-rankings";
import ProgrammingRankings from "@/components/sections/programming-rankings";
import ContextLengthStats from "@/components/sections/context-length-stats";
import ToolCallsImages from "@/components/sections/tool-calls-images";
import TopApps from "@/components/sections/top-apps";
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

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Navigation />
      </motion.div>
      
      <main id="skip" className="mx-auto max-w-[1440px] px-6">
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <HeroHeader />
        </motion.div>
        
        <div className="flex flex-col">
          {[
            <LLMLeaderboard key="leaderboard" />,
            <MarketShare key="marketshare" />,
            <CategoriesRankings key="categories" />,
            <LanguagesRankings key="languages" />,
            <ProgrammingRankings key="programming" />,
            <ContextLengthStats key="context" />,
            <ToolCallsImages key="toolcalls" />,
            <TopApps key="topapps" />
          ].map((component, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              {component}
            </motion.div>
          ))}
        </div>
      </main>
      
      <motion.div
        custom={11}
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
