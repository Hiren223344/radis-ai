import React from 'react';
import { LucideLanguages, ChevronDown, Info } from 'lucide-react';

const LANGUAGE_DATA = [
  { rank: 1, name: "Grok Code Fast 1", author: "x-ai", color: "#F59E0B", value: "137B", share: "11.5%" },
  { rank: 2, name: "Mimo V2 Flash", author: "xiaomi", color: "#10B981", value: "92.6B", share: "7.8%" },
  { rank: 3, name: "DeepSeek V3.2", author: "deepseek", color: "#0ea5e9", value: "80.7B", share: "6.8%" },
  { rank: 4, name: "Claude Sonnet 4.5", author: "anthropic", color: "#EC4899", value: "78.2B", share: "6.6%" },
  { rank: 5, name: "Gemini 2.5 Flash Lite", author: "google", color: "#3B82F6", value: "70.8B", share: "5.9%" },
  { rank: 6, name: "Gemini 3 Flash Preview", author: "google", color: "#8B5CF6", value: "64.6B", share: "5.4%" },
  { rank: 7, name: "Claude Opus 4.5", author: "anthropic", color: "#ef4444", value: "47B", share: "3.9%" },
  { rank: 8, name: "Devstral 2 2512 (free)", author: "mistralai", color: "#f97316", value: "42.8B", share: "3.6%" },
  { rank: 9, name: "Gemini 2.5 Flash", author: "google", color: "#14b8a6", value: "40.6B", share: "3.4%" },
  { rank: 10, name: "Others", author: "unknown", color: "#d1d5db", value: "538B", share: "45.1%" },
];

const CHART_BARS = [
  { date: "Dec 19, 2025", segments: [35, 12, 8, 7, 6, 5, 4, 3, 3, 17] },
  { date: "Dec 22", segments: [34, 13, 8, 7, 6, 5, 4, 3, 3, 17] },
  { date: "Dec 25", segments: [33, 14, 9, 7, 6, 5, 4, 3, 3, 16] },
  { date: "Dec 28", segments: [32, 15, 9, 8, 6, 5, 4, 2, 2, 17] },
  { date: "Dec 31", segments: [33, 14, 8, 7, 7, 5, 4, 3, 3, 16] },
  { date: "Jan 3", segments: [35, 12, 7, 7, 6, 6, 4, 3, 3, 17] },
  { date: "Jan 6", segments: [34, 13, 8, 7, 6, 5, 5, 3, 3, 16] },
  { date: "Jan 9", segments: [35, 12, 8, 7, 6, 5, 4, 3, 3, 17] },
];

const COLORS = [
  "#3B82F6", // Blue
  "#10B981", // Green
  "#EC4899", // Pink
  "#F59E0B", // Amber
  "#8B5CF6", // Violet
  "#EF4444", // Red
  "#0EA5E9", // Sky
  "#F97316", // Orange
  "#14B8A6", // Teal
  "#D1D5DB", // Gray (Others)
];

const RankingsLanguages = () => {
  return (
    <div id="languages" className="flex flex-col gap-10 scroll-mt-24 tabular-nums w-full max-w-screen-4xl mx-auto px-6 mb-32">
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <LucideLanguages className="size-5 text-slate-500" strokeWidth={2} />
              <a href="#languages" className="hover:underline">
                <h2 className="text-[18px] font-medium text-[#64748B]">Languages</h2>
              </a>
            </div>
            <p className="text-[12px] font-medium text-[#64748B] hidden md:flex items-center gap-1">
              Compare models by natural language on Radison
              <Info className="h-4 w-4 text-slate-400 cursor-help" />
            </p>
          </div>
          
          <button className="inline-flex items-center justify-between whitespace-nowrap border border-[#E2E8F0] bg-white px-3 py-2 transition-colors hover:bg-[#F1F5F9] relative h-8 rounded-full text-[#64748B] text-[12px] w-32 shadow-none hover:shadow-sm">
            <span>English</span>
            <ChevronDown className="size-4 opacity-50" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Chart Section */}
        <div className="relative h-[320px] w-full mt-4">
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[12px] text-[#64748B] pr-4 select-none">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
            <span className="opacity-0">0%</span>
          </div>

          <div className="ml-12 h-full flex flex-col">
            <div className="flex-1 flex items-end justify-between gap-2 border-b border-[#E2E8F0] pb-2">
              {CHART_BARS.map((bar, idx) => (
                <div key={idx} className="group relative flex-1 flex flex-col-reverse h-full max-w-[80px]">
                  {bar.segments.map((height, sIdx) => (
                    <div
                      key={sIdx}
                      style={{ 
                        height: `${height}%`,
                        backgroundColor: COLORS[sIdx],
                        opacity: 0.9
                      }}
                      className="w-full transition-all group-hover:opacity-100 group-hover:hover:opacity-80 cursor-pointer first:rounded-t-[2px]"
                    />
                  ))}
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-3 px-2">
              {CHART_BARS.map((bar, idx) => (
                <span key={idx} className="text-[12px] text-[#64748B] whitespace-nowrap">
                  {bar.date}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-4">
          {/* Left Column (1-5) */}
          <div className="flex flex-col gap-4">
            {LANGUAGE_DATA.slice(0, 5).map((item) => (
              <div key={item.rank} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <span className="text-[14px] text-[#64748B] w-6">{item.rank}.</span>
                  <div 
                    className="w-2.5 h-2.5 rounded-full shrink-0" 
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-medium text-[#0F172A] leading-tight hover:underline">
                      {item.name}
                    </span>
                    <span className="text-[12px] text-[#64748B]">
                      by <span className="hover:underline">{item.author}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[14px] font-medium text-[#0F172A]">{item.value}</span>
                  <span className="text-[12px] text-[#64748B]">{item.share}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (6-10) */}
          <div className="flex flex-col gap-4">
            {LANGUAGE_DATA.slice(5).map((item) => (
              <div key={item.rank} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <span className="text-[14px] text-[#64748B] w-6">{item.rank}.</span>
                  <div 
                    className="w-2.5 h-2.5 rounded-full shrink-0" 
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-medium text-[#0F172A] leading-tight hover:underline">
                      {item.name}
                    </span>
                    <span className="text-[12px] text-[#64748B]">
                      by <span className="hover:underline">{item.author}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[14px] font-medium text-[#0F172A]">{item.value}</span>
                  <span className="text-[12px] text-[#64748B]">{item.share}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingsLanguages;