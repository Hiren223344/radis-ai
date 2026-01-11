import React from 'react';
import { ChevronDown, Info, Languages, Code } from 'lucide-react';

interface LeaderboardItem {
  rank: number;
  name: string;
  author: string;
  value: string;
  percentage: string;
  color: string;
}

const languagesData: LeaderboardItem[] = [
  { rank: 1, name: "Grok Code Fast 1", author: "x-ai", value: "137B", percentage: "11.5%", color: "#f59e0b" },
  { rank: 2, name: "Mimo V2 Flash", author: "xiaomi", value: "92.6B", percentage: "7.8%", color: "#eab308" },
  { rank: 3, name: "DeepSeek V3.2", author: "deepseek", value: "80.7B", percentage: "6.8%", color: "#14b8a6" },
  { rank: 4, name: "Claude Sonnet 4.5", author: "anthropic", value: "78.2B", percentage: "6.6%", color: "#f43f5e" },
  { rank: 5, name: "Gemini 2.5 Flash Lite", author: "google", value: "70.8B", percentage: "5.9%", color: "#3b82f6" },
  { rank: 6, name: "Gemini 3 Flash Preview", author: "google", value: "64.6B", percentage: "5.4%", color: "#a855f7" },
  { rank: 7, name: "Claude Opus 4.5", author: "anthropic", value: "47B", percentage: "3.9%", color: "#6366f1" },
  { rank: 8, name: "Devstral 2 2512 (free)", author: "mistralai", value: "42.8B", percentage: "3.6%", color: "#f97316" },
  { rank: 9, name: "Gemini 2.5 Flash", author: "google", value: "40.6B", percentage: "3.4%", color: "#ef4444" },
  { rank: 10, name: "Others", author: "unknown", value: "538B", percentage: "45.1%", color: "#ec4899" },
];

const programmingData: LeaderboardItem[] = [
  { rank: 1, name: "Mimo V2 Flash", author: "xiaomi", value: "27.2B", percentage: "10.1%", color: "#84cc16" },
  { rank: 2, name: "Grok Code Fast 1", author: "x-ai", value: "20.4B", percentage: "7.6%", color: "#f59e0b" },
  { rank: 3, name: "DeepSeek V3.2", author: "deepseek", value: "18B", percentage: "6.7%", color: "#facc15" },
  { rank: 4, name: "Claude Sonnet 4.5", author: "anthropic", value: "15.1B", percentage: "5.6%", color: "#fb923c" },
  { rank: 5, name: "Claude Opus 4.5", author: "anthropic", value: "12.5B", percentage: "4.6%", color: "#f87171" },
  { rank: 6, name: "Gemini 3 Flash Preview", author: "google", value: "11.7B", percentage: "4.3%", color: "#f43f5e" },
  { rank: 7, name: "Gemini 2.5 Flash Lite", author: "google", value: "10.8B", percentage: "4.0%", color: "#10b981" },
  { rank: 8, name: "Gemini 2.5 Flash", author: "google", value: "9.44B", percentage: "3.5%", color: "#14b8a6" },
  { rank: 9, name: "Grok 4.1 Fast", author: "x-ai", value: "8.96B", percentage: "3.3%", color: "#ec4899" },
  { rank: 10, name: "Others", author: "unknown", value: "135B", percentage: "50.1%", color: "#a855f7" },
];

const StackedBarSection = ({ 
  title, 
  subtitle, 
  data, 
  icon: Icon, 
  dropdownOption 
}: { 
  title: string; 
  subtitle: string; 
  data: LeaderboardItem[]; 
  icon: any; 
  dropdownOption: string;
}) => (
  <section className="mb-20 px-6 max-w-screen-4xl mx-auto w-full">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-lg font-semibold flex items-center gap-2 text-[#020817]">
        <Icon className="size-5" />
        {title}
      </h2>
      <button className="inline-flex items-center gap-2 border border-[#e2e8f0] rounded-md px-3 py-1.5 text-xs text-[#64748b] hover:bg-[#f1f5f9] transition-colors">
        {dropdownOption}
        <ChevronDown className="size-3" />
      </button>
    </div>
    
    <p className="text-sm text-[#64748b] mb-8 flex items-center gap-1.5">
      {subtitle}
      <Info className="size-3.5 opacity-50 cursor-pointer" />
    </p>

    {/* Custom Stacked Bar Chart Mockup (Matching Screenshot Aesthetics) */}
    <div className="relative mb-8 h-48 w-full">
      <div className="absolute inset-0 flex gap-[2px]">
        {/* We use an array to simulate multiple time-series bars */}
        {[...Array(24)].map((_, i) => (
          <div key={i} className="flex-1 flex flex-col-reverse group transition-opacity hover:opacity-80 cursor-pointer">
            {data.slice().reverse().map((item, idx) => {
              // Simulating random variance for the visual look
              const baseHeight = parseFloat(item.percentage);
              const variance = 0.5 + Math.random() * 1.5;
              const height = i === 23 ? baseHeight : baseHeight * variance;
              
              return (
                <div 
                  key={idx} 
                  className="w-full" 
                  style={{ 
                    height: `${height}%`, 
                    backgroundColor: item.color,
                    opacity: i === 23 ? 1 : 0.85
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Y-Axis Labels */}
      <div className="absolute -left-12 top-0 h-full flex flex-col justify-between text-[10px] text-[#64748b] tabular-nums">
        <span>100%</span>
        <span>60%</span>
        <span>30%</span>
      </div>

      {/* X-Axis Labels (Simulated) */}
      <div className="absolute -bottom-6 w-full flex justify-between text-[10px] text-[#64748b]">
        <span>Dec 19, 2025</span>
        <span>Jan 3</span>
        <span>Jan 9</span>
      </div>
    </div>

    {/* Leaderboard Table */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 text-sm">
      {/* Left Column (1-5) */}
      <div className="flex flex-col">
        {data.slice(0, 5).map((item) => (
          <div key={item.rank} className="flex items-center py-3 border-b border-[#e2e8f0]/50 group cursor-pointer hover:bg-[#f8fafc]/50">
            <span className="w-8 text-[#64748b] font-medium">{item.rank}.</span>
            <div className="size-2 rounded-full mr-3" style={{ backgroundColor: item.color }} />
            <div className="flex-1">
              <div className="font-semibold text-[#020817] text-[13px] leading-tight">{item.name}</div>
              <div className="text-[11px] text-[#64748b]">by <span className="underline decoration-[#64748b]/30">{item.author}</span></div>
            </div>
            <div className="text-right tabular-nums">
              <div className="font-medium text-[#64748b] text-[13px]">{item.value}</div>
              <div className="text-[11px] text-[#94a3b8]">{item.percentage}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column (6-10) */}
      <div className="flex flex-col">
        {data.slice(5, 10).map((item) => (
          <div key={item.rank} className="flex items-center py-3 border-b border-[#e2e8f0]/50 group cursor-pointer hover:bg-[#f8fafc]/50">
            <span className="w-8 text-[#64748b] font-medium">{item.rank}.</span>
            <div className="size-2 rounded-full mr-3" style={{ backgroundColor: item.color }} />
            <div className="flex-1">
              <div className="font-semibold text-[#020817] text-[13px] leading-tight">{item.name}</div>
              <div className="text-[11px] text-[#64748b]">by <span className="underline decoration-[#64748b]/30">{item.author}</span></div>
            </div>
            <div className="text-right tabular-nums">
              <div className="font-medium text-[#64748b] text-[13px]">{item.value}</div>
              <div className="text-[11px] text-[#94a3b8]">{item.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function LanguageUsageCharts() {
  return (
    <div className="w-full bg-white pt-12 pb-24">
      <StackedBarSection 
        title="Languages" 
        subtitle="Compare models by natural language on OpenRouter"
        data={languagesData}
        icon={Languages}
        dropdownOption="English"
      />
      
      <StackedBarSection 
        title="Programming" 
        subtitle="Compare models by programming language on OpenRouter"
        data={programmingData}
        icon={Code}
        dropdownOption="Python"
      />
    </div>
  );
}