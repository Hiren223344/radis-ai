import React from 'react';
import { ChevronDown, BarChart2, Info } from 'lucide-react';

/**
 * LLMLeaderboard Component
 * 
 * Clones the AI Model Rankings section from OpenRouter with pixel perfect accuracy.
 * Includes a stacked bar chart (simulated via SVG for precision) and a 2-column ranked list.
 */

const LEADERBOARD_DATA = [
  { rank: 1, name: "Claude Sonnet 4.5", provider: "anthropic", tokens: "521B", change: "+50%", trend: "up", color: "#ec4899" },
  { rank: 6, name: "Gemini 2.5 Flash", provider: "google", tokens: "369B", change: "+3%", trend: "up", color: "#3b82f6" },
  { rank: 2, name: "Grok Code Fast 1", provider: "x-ai", tokens: "421B", change: "+5%", trend: "up", color: "#f59e0b" },
  { rank: 7, name: "DeepSeek V3.2", provider: "deepseek", tokens: "309B", change: "-12%", trend: "down", color: "#10b981" },
  { rank: 3, name: "MiMo - V2 - Flash (free)", provider: "xiaomi", tokens: "384B", change: "+8%", trend: "up", color: "#8b5cf6" },
  { rank: 8, name: "Gemini 2.5 Flash Lite", provider: "google", tokens: "248B", change: "+52%", trend: "up", color: "#60a5fa" },
  { rank: 4, name: "Gemini 3 Flash Preview", provider: "google", tokens: "381B", change: "+39%", trend: "up", color: "#2563eb" },
  { rank: 9, name: "Grok 4.1 Fast", provider: "x-ai", tokens: "240B", change: "+26%", trend: "up", color: "#fbbf24" },
  { rank: 5, name: "Claude Opus 4.5", provider: "anthropic", tokens: "377B", change: "+127%", trend: "up", color: "#f472b6" },
  { rank: 10, name: "GLM 4.7", provider: "z-ai", tokens: "165B", change: "+43%", trend: "up", color: "#10b981" },
];

export default function LLMLeaderboard() {
  return (
    <section id="leaderboard" className="w-full flex flex-col gap-10 scroll-mt-24">
      {/* Header Section */}
      <div className="flex items-center md:items-start justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BarChart2 className="size-5 text-slate-500" />
            <a href="#leaderboard" className="hover:underline">
              <h2 className="text-[18px] font-medium text-[#64748b]">LLM Leaderboard</h2>
            </a>
          </div>
          <p className="text-xs font-medium text-[#64748b] hidden md:flex items-center gap-1.5 focus-within:">
            Token usage across models on OpenRouter
            <Info className="h-4 w-4 text-[#64748b] cursor-pointer" />
          </p>
        </div>
        
        {/* Time Selector Pill */}
        <button className="flex items-center justify-between whitespace-nowrap border border-[#e2e8f0] bg-white px-3 py-2 ring-offset-background transition-colors hover:bg-[#f8fafc]/60 h-8 rounded-full text-[#64748b] shadow-none hover:shadow-sm text-xs w-32 pl-4 pr-3">
          <span>This Week</span>
          <ChevronDown className="size-4 opacity-50" />
        </button>
      </div>

      {/* Chart Visualization */}
      <div className="relative w-full h-[320px] mt-2 group">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {/* Y-Axis Labels */}
          {[8, 6, 4, 2, 0].map((label) => (
            <div key={label} className="flex items-center gap-4 w-full h-0 border-t border-slate-100 relative">
              <span className="absolute -left-8 text-[12px] text-slate-400 tabular-nums">
                {label > 0 ? `${label}T` : ""}
              </span>
            </div>
          ))}
        </div>

        {/* Bar Layout */}
        <div className="absolute inset-0 pl-4 pr-4 flex items-end justify-between gap-[2px]">
          {/* Simulated Bars representing growth over time */}
          {Array.from({ length: 50 }).map((_, i) => {
            const heightFactor = Math.pow(1.03, i) * 15 + Math.random() * 10;
            const hAnthropic = heightFactor * 1.5;
            const hGoogle = heightFactor * 0.8;
            const hOther = heightFactor * 0.4;
            
            return (
              <div key={i} className="flex-1 flex flex-col-reverse group/bar transition-opacity hover:opacity-100 cursor-pointer">
                {/* Stacked bars matching the color palette */}
                <div style={{ height: `${hAnthropic}px` }} className="w-full bg-[#ec4899] rounded-sm transition-all hover:brightness-110" />
                <div style={{ height: `${hGoogle}px` }} className="w-full bg-[#3b82f6] transition-all hover:brightness-110" />
                <div style={{ height: `${hOther}px` }} className="w-full bg-[#10b981] transition-all hover:brightness-110" />
                <div style={{ height: `${hOther * 0.5}px` }} className="w-full bg-[#f59e0b] transition-all hover:brightness-110" />
                <div style={{ height: `${hOther * 0.3}px` }} className="w-full bg-[#8b5cf6] transition-all hover:brightness-110" />
              </div>
            );
          })}
        </div>

        {/* X-Axis Labels */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-[12px] text-slate-400 px-4">
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

      {/* Rankings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:mt-8">
        {/* Split data into two columns for the 1-5 and 6-10 layout shown in design */}
        {[0, 1, 2, 3, 4].map((idx) => {
          const itemL = LEADERBOARD_DATA[idx * 2];
          const itemR = LEADERBOARD_DATA[idx * 2 + 1];
          
          return (
            <React.Fragment key={idx}>
              {/* Left Column Item */}
              <div className="flex items-center group py-1">
                <span className="w-8 text-[14px] text-slate-400 tabular-nums">{itemL.rank}.</span>
                <div className="flex-1 flex items-center gap-3">
                  <div className="size-2 rounded-full" style={{ backgroundColor: itemL.color }} />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-medium text-[#0f172a] hover:underline cursor-pointer">{itemL.name}</span>
                    <span className="text-[12px] text-slate-400">by {itemL.provider}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-[14px] font-medium text-[#0f172a] tabular-nums">{itemL.tokens} tokens</span>
                  <span className={`text-[12px] tabular-nums ${itemL.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                    {itemL.trend === 'up' ? '↑' : '↓'}{itemL.change}
                  </span>
                </div>
              </div>

              {/* Right Column Item */}
              <div className="flex items-center group py-1">
                <span className="w-8 text-[14px] text-slate-400 tabular-nums">{itemR.rank}.</span>
                <div className="flex-1 flex items-center gap-3">
                  <div className="size-2 rounded-full" style={{ backgroundColor: itemR.color }} />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-medium text-[#0f172a] hover:underline cursor-pointer">{itemR.name}</span>
                    <span className="text-[12px] text-slate-400">by {itemR.provider}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-[14px] font-medium text-[#0f172a] tabular-nums">{itemR.tokens} tokens</span>
                  <span className={`text-[12px] tabular-nums ${itemR.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                    {itemR.trend === 'up' ? '↑' : '↓'}{itemR.change}
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Show more linkage */}
      <div className="flex justify-center mt-2">
        <button className="flex items-center gap-1.5 text-[14px] text-slate-400 hover:text-slate-600 transition-colors py-2">
          Show more
          <ChevronDown className="size-4" />
        </button>
      </div>
    </section>
  );
}