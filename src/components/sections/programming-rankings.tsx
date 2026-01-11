import React from 'react';
import { ChevronDown, Info, Code2 } from 'lucide-react';

/* 
  Programming Rankings Component
  Clones the programming-specific data visualization section from OpenRouter Rankings.
*/

interface RankingItem {
  id: number;
  name: string;
  author: string;
  value: string;
  percentage: string;
  color: string;
}

const programmingRankings: RankingItem[] = [
  { id: 1, name: "Mimo V2 Flash", author: "xiaomi", value: "27.2B", percentage: "10.1%", color: "#a3a65c" },
  { id: 2, name: "Grok Code Fast 1", author: "x-ai", value: "20.4B", percentage: "7.6%", color: "#f5bc42" },
  { id: 3, name: "DeepSeek V3.2", author: "deepseek", value: "18B", percentage: "6.7%", color: "#e6bc42" },
  { id: 4, name: "Claude Sonnet 4.5", author: "anthropic", value: "15.1B", percentage: "5.6%", color: "#f2795c" },
  { id: 5, name: "Claude Opus 4.5", author: "anthropic", value: "12.5B", percentage: "4.6%", color: "#ef5350" },
  { id: 6, name: "Gemini 3 Flash Preview", author: "google", value: "11.7B", percentage: "4.3%", color: "#ff5722" },
  { id: 7, name: "Gemini 2.5 Flash Lite", author: "google", value: "10.8B", percentage: "4.0%", color: "#00cba9" },
  { id: 8, name: "Gemini 2.5 Flash", author: "google", value: "9.44B", percentage: "3.5%", color: "#0091ff" },
  { id: 9, name: "Grok 4.1 Fast", author: "x-ai", value: "8.96B", percentage: "3.3%", color: "#ff4eac" },
  { id: 10, name: "Others", author: "unknown", value: "135B", percentage: "50.1%", color: "#ec4899" },
];

const chartData = [
  { date: "Dec 12, 2025", segments: [15, 10, 8, 7, 6, 5, 4, 3, 2, 40] },
  { date: "Dec 15", segments: [14, 11, 9, 6, 5, 5, 4, 3, 3, 40] },
  { date: "Dec 18", segments: [13, 12, 10, 5, 6, 4, 3, 4, 3, 40] },
  { date: "Dec 21", segments: [16, 9, 8, 8, 4, 6, 5, 2, 2, 40] },
  { date: "Dec 24", segments: [15, 10, 11, 5, 5, 5, 4, 5, 3, 37] },
  { date: "Dec 27", segments: [14, 12, 10, 7, 4, 4, 6, 3, 4, 36] },
  { date: "Dec 30", segments: [17, 8, 9, 6, 6, 5, 3, 4, 2, 40] },
  { date: "Jan 2", segments: [15, 11, 8, 7, 5, 6, 4, 3, 3, 38] },
  { date: "Jan 5", segments: [14, 10, 9, 8, 6, 5, 5, 4, 2, 37] },
  { date: "Jan 8", segments: [10.1, 7.6, 6.7, 5.6, 4.6, 4.3, 4.0, 3.5, 3.3, 50.1] },
];

export default function ProgrammingRankings() {
  return (
    <section id="programming" className="w-full flex flex-col gap-10 scroll-mt-24 mb-32 px-6 max-w-7xl mx-auto">
      {/* Header Area */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Code2 className="size-5 text-slate-500" />
              <a href="#programming" className="hover:underline">
                <h2 className="text-lg font-medium text-slate-500">Programming</h2>
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 hidden md:flex items-center gap-1">
              Compare models by programming language on OpenRouter
              <Info className="h-3.5 w-3.5 text-slate-400 cursor-pointer" />
            </p>
          </div>
          <button className="pill-button flex items-center gap-2 h-8 text-xs text-slate-500 hover:shadow-sm">
            Python
            <ChevronDown className="size-3.5 opacity-50" />
          </button>
        </div>
      </div>

      {/* Stacked Chart Area */}
      <div className="w-full h-[320px] pt-4 relative">
        <div className="absolute left-0 top-0 bottom-10 flex flex-col justify-between text-[11px] text-slate-400">
          <span>100%</span>
          <span>60%</span>
          <span>30%</span>
        </div>
        
        <div className="ml-10 h-[280px] flex items-end gap-1.5 md:gap-3">
          {chartData.map((data, idx) => (
            <div key={idx} className="flex-1 flex flex-col h-full items-center group relative">
              <div className="w-full h-full flex flex-col-reverse justify-start">
                {data.segments.map((val, sIdx) => (
                  <div 
                    key={sIdx} 
                    style={{ 
                      height: `${val}%`, 
                      backgroundColor: programmingRankings[sIdx]?.color || '#cbd5e1' 
                    }}
                    className="w-full transition-opacity group-hover:opacity-80 border-b-[0.5px] border-white/20 first:border-b-0"
                  />
                ))}
              </div>
              <div className="absolute -bottom-8 whitespace-nowrap text-[11px] text-slate-400">
                {data.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ranking List Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-8">
        {/* Left Column (1-5) */}
        <div className="flex flex-col gap-4">
          {programmingRankings.slice(0, 5).map((item) => (
            <div key={item.id} className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="w-4 text-[13px] text-slate-400 text-right">{item.id}.</span>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="flex flex-col leading-tight">
                  <span className="ranking-label line-clamp-1">{item.name}</span>
                  <span className="ranking-sublabel">
                    by <span className="hover:underline cursor-pointer">{item.author}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end leading-tight">
                <span className="ranking-value">{item.value}</span>
                <span className="text-[11px] text-slate-400 tabular-nums">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (6-10) */}
        <div className="flex flex-col gap-4">
          {programmingRankings.slice(5).map((item) => (
            <div key={item.id} className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="w-4 text-[13px] text-slate-400 text-right">{item.id}.</span>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="flex flex-col leading-tight">
                  <span className="ranking-label line-clamp-1">{item.name}</span>
                  <span className="ranking-sublabel">
                    by <span className="hover:underline cursor-pointer">{item.author}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end leading-tight">
                <span className="ranking-value">{item.value}</span>
                <span className="text-[11px] text-slate-400 tabular-nums">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}