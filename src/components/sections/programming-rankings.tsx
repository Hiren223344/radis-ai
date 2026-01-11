import React from 'react';
import { ChevronDown, Code2, Info } from 'lucide-react';

/**
 * ProgrammingRankings Component
 * 
 * Clones the Programming language comparison section from Radison rankings.
 * Features a 100% stacked bar chart (simulated via CSS for pixel-perfection)
 * and a breakdown of top models used for software development.
 */

interface RankingItemProps {
  rank: number;
  name: string;
  author: string;
  value: string;
  percentage: string;
  color: string;
}

const RankingItem: React.FC<RankingItemProps> = ({ rank, name, author, value, percentage, color }) => (
  <div className="flex items-center justify-between py-2.5">
    <div className="flex items-center gap-4">
      <span className="text-[14px] font-medium text-slate-400 w-4">{rank}.</span>
      <div className="flex items-center gap-3">
        <div 
          className="size-2.5 rounded-full" 
          style={{ backgroundColor: color }}
        />
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[#0F172A] leading-tight cursor-pointer hover:underline">
            {name}
          </span>
          <span className="text-[12px] font-medium text-[#64748B]">
            by <span className="hover:underline cursor-pointer">{author}</span>
          </span>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-end tabular-nums">
      <span className="text-[14px] font-medium text-[#0F172A]">{value}</span>
      <span className="text-[12px] font-medium text-[#64748B]">{percentage}</span>
    </div>
  </div>
);

const ProgrammingRankings: React.FC = () => {
  const topModelsLeft = [
    { rank: 1, name: "MiMo V2 Flash", author: "xiaomi", value: "27.2B", percentage: "10.1%", color: "#a3a363" },
    { rank: 2, name: "Grok Code Fast 1", author: "x-ai", value: "20.4B", percentage: "7.6%", color: "#facc15" },
    { rank: 3, name: "DeepSeek V3.2", author: "deepseek", value: "18B", percentage: "6.7%", color: "#eab308" },
    { rank: 4, name: "Claude Sonnet 4.5", author: "anthropic", value: "15.1B", percentage: "5.6%", color: "#f97316" },
    { rank: 5, name: "Claude Opus 4.5", author: "anthropic", value: "12.5B", percentage: "4.6%", color: "#ef4444" },
  ];

  const topModelsRight = [
    { rank: 6, name: "Gemini 3 Flash Preview", author: "google", value: "11.7B", percentage: "4.3%", color: "#f97316" },
    { rank: 7, name: "Gemini 2.5 Flash Lite", author: "google", value: "10.8B", percentage: "4.0%", color: "#10b981" },
    { rank: 8, name: "Gemini 2.5 Flash", author: "google", value: "9.44B", percentage: "3.5%", color: "#06b6d4" },
    { rank: 9, name: "Grok 4.1 Fast", author: "x-ai", value: "8.96B", percentage: "3.3%", color: "#f43f5e" },
    { rank: 10, name: "Others", author: "unknown", value: "135B", percentage: "50.1%", color: "#f472b6" },
  ];

  return (
    <section id="programming-rankings" className="w-full max-w-[1440px] mx-auto px-6 py-16 scroll-mt-24">
      {/* Header Section */}
      <div className="flex flex-col gap-5 mb-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Code2 className="size-5 text-[#64748B]" />
              <a href="#programming-rankings" className="hover:underline">
                <h2 className="text-[18px] font-medium text-[#64748B]">Programming</h2>
              </a>
            </div>
            <p className="text-[12px] font-medium text-[#64748B] hidden md:flex items-center gap-1">
              Compare models by programming language on Radison
              <Info className="size-3 text-[#94a3b8] cursor-help" />
            </p>
          </div>

          <button className="flex items-center justify-between border border-[#E2E8F0] bg-white px-4 py-1.5 rounded-full text-[12px] font-medium text-[#64748B] shadow-sm hover:bg-[#f8fafc] transition-colors w-32">
            <span>Python</span>
            <ChevronDown className="size-4 opacity-50" />
          </button>
        </div>
      </div>

      {/* Chart Visualization */}
      <div className="relative h-[320px] w-full mb-10 overflow-hidden">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[12px] font-medium text-[#94a3b8] py-8 z-20 pointer-events-none">
          <span>100%</span>
          <span>60%</span>
          <span>30%</span>
          <span className="opacity-0">0%</span>
        </div>

        {/* The Grid/Bars Container */}
        <div className="ml-10 h-full border-b border-[#E2E8F0] flex items-end justify-between gap-[2px]">
          {/* Simulated Bars - Each represents a historical data point */}
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col-reverse h-full group cursor-pointer transition-opacity hover:opacity-80">
              <div className="w-full bg-[#3b82f6] h-[35%]" style={{ opacity: 0.9 + Math.random() * 0.1 }} />
              <div className="w-full bg-[#10b981] h-[5%]" />
              <div className="w-full bg-[#facc15] h-[8%]" />
              <div className="w-full bg-[#f97316] h-[7%]" />
              <div className="w-full bg-[#ec4899] h-[40%]" />
              <div className="w-full bg-[#8b5cf6] h-[5%]" />
            </div>
          ))}
        </div>

        {/* X-Axis Labels */}
        <div className="ml-10 mt-2 flex justify-between text-[12px] font-medium text-[#94a3b8]">
          <span>Dec 12, 2025</span>
          <span>Dec 15</span>
          <span>Dec 18</span>
          <span>Dec 21</span>
          <span>Dec 24</span>
          <span>Dec 27</span>
          <span>Dec 30</span>
          <span>Jan 2</span>
          <span>Jan 5</span>
          <span>Jan 8</span>
        </div>
      </div>

      {/* Rankings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
        <div className="flex flex-col">
          {topModelsLeft.map((item) => (
            <RankingItem key={item.rank} {...item} />
          ))}
        </div>
        <div className="flex flex-col">
          {topModelsRight.map((item) => (
            <RankingItem key={item.rank} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammingRankings;