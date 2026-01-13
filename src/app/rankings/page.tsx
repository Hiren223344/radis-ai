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

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      <Navigation />
      
      <main id="skip" className="mx-auto max-w-[1440px] px-6">
        <HeroHeader />
        
        <div className="flex flex-col">
          <LLMLeaderboard />
          <MarketShare />
          <CategoriesRankings />
          <LanguagesRankings />
          <ProgrammingRankings />
          <ContextLengthStats />
          <ToolCallsImages />
          <TopApps />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
