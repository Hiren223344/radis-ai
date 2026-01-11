import React from 'react';
import { ChevronDown, Info, BarChart3 } from 'lucide-react';

interface ModelRanking {
  id: number;
  name: string;
  author: string;
  authorUrl: string;
  tokenCount: string;
  changeValue: string;
  isPositive: boolean;
  color?: string;
}

const leaderboardData: ModelRanking[] = [
  { id: 1, name: "Claude Sonnet 4.5", author: "anthropic", authorUrl: "/anthropic", tokenCount: "521B tokens", changeValue: "50%", isPositive: true, color: "#FF4EAC" },
  { id: 2, name: "Grok Code Fast 1", author: "x-ai", authorUrl: "/x-ai", tokenCount: "421B tokens", changeValue: "5%", isPositive: true, color: "#00CBA9" },
  { id: 3, name: "MiMo - V2 - Flash (free)", author: "xiaomi", authorUrl: "/xiaomi", tokenCount: "384B tokens", changeValue: "8%", isPositive: true, color: "#0091FF" },
  { id: 4, name: "Gemini 3 Flash Preview", author: "google", authorUrl: "/google", tokenCount: "381B tokens", changeValue: "39%", isPositive: true, color: "#F59E0B" },
  { id: 5, name: "Claude Opus 4.5", author: "anthropic", authorUrl: "/anthropic", tokenCount: "377B tokens", changeValue: "127%", isPositive: true, color: "#8B5CF6" },
  { id: 6, name: "Gemini 2.5 Flash", author: "google", authorUrl: "/google", tokenCount: "369B tokens", changeValue: "3%", isPositive: true, color: "#3B82F6" },
  { id: 7, name: "DeepSeek V3.2", author: "deepseek", authorUrl: "/deepseek", tokenCount: "309B tokens", changeValue: "12%", isPositive: false, color: "#10B981" },
  { id: 8, name: "Gemini 2.5 Flash Lite", author: "google", authorUrl: "/google", tokenCount: "248B tokens", changeValue: "52%", isPositive: true, color: "#FBBF24" },
  { id: 9, name: "Grok 4.1 Fast", author: "x-ai", authorUrl: "/x-ai", tokenCount: "240B tokens", changeValue: "26%", isPositive: true, color: "#6366F1" },
  { id: 10, name: "GLM 4.7", author: "z-ai", authorUrl: "/z-ai", tokenCount: "165B tokens", changeValue: "43%", isPositive: true, color: "#EC4899" },
];

const RankingsHero = () => {
  return (
    <div className="flex flex-1 flex-col items-center mx-auto bg-background text-foreground mb-16 mt-0 w-full max-w-screen-4xl px-4 lg:px-24 xl:px-32 lg:mt-8">
      <section className="w-full flex flex-col gap-16 lg:gap-32">
        <div className="flex flex-col gap-12">
          {/* Main Heading */}
          <h1 className="text-[30px] font-semibold tracking-[-0.02em] text-[#0F172A] mb-0">
            AI Model Rankings
          </h1>

          {/* LLM Leaderboard Section */}
          <div id="leaderboard" className="flex flex-col gap-10 scroll-mt-24">
            <div className="flex flex-col gap-2 md:gap-5">
              <div className="flex items-center md:items-start justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="size-5 text-[#64748B]" strokeWidth={1.5} />
                    <a href="#leaderboard" className="hover:underline">
                      <h2 className="text-[18px] font-medium text-[#64748B]">LLM Leaderboard</h2>
                    </a>
                  </div>
                  <p className="text-[12px] font-medium text-[#64748B] hidden md:flex items-center gap-1">
                    Token usage across models on OpenRouter
                    <Info className="h-4 w-4 text-[#94A3B8] cursor-pointer" strokeWidth={1.5} />
                  </p>
                </div>

                {/* Timeframe Dropdown */}
                <button className="flex items-center justify-between whitespace-nowrap border border-[#E2E8F0] bg-white px-3 py-2 transition-all hover:bg-[#F1F5F9] focus:outline-none h-[32px] rounded-full text-[#64748B] text-[12px] w-[110px] pl-4 pr-3 shadow-none hover:shadow-sm">
                  <span>This Week</span>
                  <ChevronDown className="size-3.5 opacity-50 ml-1" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Mocked Complex Stacked Bar Chart */}
            <div className="chart-container relative h-[320px] w-full flex items-end gap-[2px]">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2 text-[12px] text-[#64748B] font-tabular">
                <span>8T</span>
                <span>6T</span>
                <span>4T</span>
                <span>2T</span>
                <span className="opacity-0">0</span>
              </div>

              {/* Chart Bars - Simulated Visual Representation */}
              <div className="flex flex-1 items-end justify-between ml-8 h-full pb-8">
                {Array.from({ length: 48 }).map((_, i) => {
                  const height = 40 + Math.random() * 200 + (i > 30 ? i * 2 : 0);
                  return (
                    <div key={i} className="flex flex-col-reverse w-full max-w-[14px] transition-all cursor-pointer hover:opacity-80" style={{ height: `${height}px` }}>
                      <div className="w-full bg-[#FF4EAC] flex-[0.4]" />
                      <div className="w-full bg-[#0091FF] flex-[0.25]" />
                      <div className="w-full bg-[#00CBA9] flex-[0.15]" />
                      <div className="w-full bg-[#F59E0B] flex-[0.1]" />
                      <div className="w-full bg-[#8B5CF6] flex-[0.05]" />
                      <div className="w-full bg-[#3B82F6] flex-[0.05]" />
                    </div>
                  );
                })}
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[12px] text-[#64748B] font-tabular pt-2">
                <span>Jan 13, 2025</span>
                <span>Mar 3</span>
                <span>Apr 21</span>
                <span>Jun 9</span>
                <span>Jul 28</span>
                <span>Sep 15</span>
                <span>Nov 3</span>
                <span>Dec 22</span>
              </div>
            </div>

            {/* Top 10 Models List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              <div className="flex flex-col">
                {leaderboardData.slice(0, 5).map((model) => (
                  <RankingItem key={model.id} model={model} />
                ))}
              </div>
              <div className="flex flex-col">
                {leaderboardData.slice(5, 10).map((model) => (
                  <RankingItem key={model.id} model={model} />
                ))}
              </div>
            </div>

            {/* Show More */}
            <div className="flex justify-center mt-4">
              <button className="flex items-center gap-1.5 text-[14px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors">
                Show more
                <ChevronDown className="size-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const RankingItem = ({ model }: { model: ModelRanking }) => (
  <div className="flex items-center justify-between py-4 border-b border-[#F1F5F9] last:border-0 md:border-0 md:py-3 cursor-default group transition-colors hover:bg-[#F8FAF8]">
    <div className="flex items-center gap-4">
      <span className="text-[14px] font-tabular text-[#94A3B8] w-4">{model.id}.</span>
      <div className="flex flex-col">
        <span className="text-[14px] font-semibold text-[#0F172A] leading-[1.4] transition-colors group-hover:text-black">
          {model.name}
        </span>
        <a href={model.authorUrl} className="text-[12px] text-[#64748B] hover:underline">
          by {model.author}
        </a>
      </div>
    </div>
    <div className="flex flex-col items-end gap-0.5">
      <span className="text-[14px] font-tabular font-medium text-[#0F172A]">
        {model.tokenCount}
      </span>
      <span className={`text-[12px] font-tabular flex items-center ${model.isPositive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
        {model.isPositive ? '↑' : '↓'}{model.changeValue}
      </span>
    </div>
  </div>
);

export default RankingsHero;