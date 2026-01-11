import React from 'react';
import { ChevronDown, Info, Languages as LanguagesIcon } from 'lucide-react';

const LANGUAGE_DATA = [
  { rank: 1, name: "Grok Code Fast 1", author: "x-ai", authorUrl: "#", value: "137B", change: "11.5%", color: "#F59E0B" },
  { rank: 2, name: "MiMo V2 Flash", author: "xiaomi", authorUrl: "#", value: "92.6B", change: "7.8%", color: "#84CC16" },
  { rank: 3, name: "DeepSeek V3.2", author: "deepseek", authorUrl: "#", value: "80.7B", change: "6.8%", color: "#06B6D4" },
  { rank: 4, name: "Claude Sonnet 4.5", author: "anthropic", authorUrl: "#", value: "78.2B", change: "6.6%", color: "#F43F5E" },
  { rank: 5, name: "Gemini 2.5 Flash Lite", author: "google", authorUrl: "#", value: "70.8B", change: "5.9%", color: "#3B82F6" },
  { rank: 6, name: "Gemini 3 Flash Preview", author: "google", authorUrl: "#", value: "64.6B", change: "5.4%", color: "#A855F7" },
  { rank: 7, name: "Claude Opus 4.5", author: "anthropic", authorUrl: "#", value: "47B", change: "3.9%", color: "#6366F1" },
  { rank: 8, name: "Devstral 2 2512 (free)", author: "mistralai", authorUrl: "#", value: "42.8B", change: "3.6%", color: "#F97316" },
  { rank: 9, name: "Gemini 2.5 Flash", author: "google", authorUrl: "#", value: "40.6B", change: "3.4%", color: "#EF4444" },
  { rank: 10, name: "Others", author: "unknown", authorUrl: "#", value: "538B", change: "45.1%", color: "#EC4899" },
];

const CHART_BARS = [
  { date: "Dec 19, 2025", segments: [35, 15, 10, 8, 32] },
  { date: "Dec 22", segments: [30, 12, 11, 14, 33] },
  { date: "Dec 25", segments: [32, 14, 12, 10, 32] },
  { date: "Dec 28", segments: [31, 16, 9, 12, 32] },
  { date: "Dec 31", segments: [33, 13, 11, 15, 28] },
  { date: "Jan 3", segments: [30, 14, 13, 11, 32] },
  { date: "Jan 6", segments: [34, 12, 10, 12, 32] },
  { date: "Jan 9", segments: [32, 15, 12, 9, 32] },
];

const COLORS = ["#0091FF", "#00CBA9", "#FF4EAC", "#F59E0B", "#8B5CF6", "#00B8D9", "#36B37E"];

const LanguageRankings = () => {
  return (
    <section id="languages" className="w-full flex flex-col gap-10 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <LanguagesIcon className="size-5 text-slate-500" />
              <a href="#languages" className="hover:underline">
                <h2 className="text-lg font-medium text-slate-500">Languages</h2>
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hidden md:flex">
              Compare models by natural language on OpenRouter
              <Info className="size-3.5 text-muted-foreground cursor-help" />
            </div>
          </div>

          <button className="flex items-center justify-between whitespace-nowrap border border-input bg-background px-4 h-8 rounded-full text-xs text-muted-foreground shadow-none hover:shadow-sm hover:bg-muted/60 transition-all min-w-[120px]">
            <span>English</span>
            <ChevronDown className="size-4 opacity-50 ml-2" />
          </button>
        </div>
      </div>

      {/* Chart Visualization */}
      <div className="w-full">
        <div className="relative h-[320px] w-full flex flex-col">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-[290px] flex flex-col justify-between text-[11px] text-slate-400 font-medium pointer-events-none z-0">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
            <span className="opacity-0">0%</span>
          </div>

          {/* Grid Lines */}
          <div className="absolute left-10 right-0 top-0 h-[290px] flex flex-col justify-between pointer-events-none border-b border-slate-100">
            <div className="w-full border-t border-slate-100"></div>
            <div className="w-full border-t border-slate-100"></div>
            <div className="w-full border-t border-slate-100"></div>
          </div>

          {/* Bars Container */}
          <div className="ml-10 flex-1 h-[290px] flex items-end justify-between px-4">
            {CHART_BARS.map((bar, i) => (
              <div key={i} className="group relative flex flex-col-reverse w-full max-w-[40px] h-full cursor-pointer hover:opacity-80 transition-opacity">
                {bar.segments.map((height, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      height: `${height}%`, 
                      backgroundColor: COLORS[idx % COLORS.length],
                      marginBottom: idx < bar.segments.length - 1 ? '1px' : '0' 
                    }}
                    className="w-full first:rounded-t-none last:rounded-t-[2px] first:rounded-b-[2px]"
                  />
                ))}
              </div>
            ))}
          </div>

          {/* X-Axis Labels */}
          <div className="ml-10 h-[30px] flex items-center justify-between px-2 text-[11px] text-slate-400 font-medium">
            {CHART_BARS.map((bar, i) => (
              <span key={i} className="text-center w-full">{bar.date}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Rankings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {[0, 1].map((col) => (
          <div key={col} className="flex flex-col gap-4">
            {LANGUAGE_DATA.slice(col * 5, (col + 1) * 5).map((item) => (
              <div key={item.rank} className="flex items-start justify-between group">
                <div className="flex gap-4">
                  <span className="text-slate-400 text-sm font-medium w-4 pt-0.5">{item.rank}.</span>
                  <div className="flex items-center gap-3">
                    <div 
                      className="size-2.5 rounded-full shrink-0" 
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-900 leading-tight">
                        {item.name}
                      </span>
                      <a 
                        href={item.authorUrl} 
                        className="text-[11px] text-slate-400 hover:text-slate-600 underline-offset-2 hover:underline"
                      >
                        by {item.author}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-mono text-slate-700 leading-tight">
                    {item.value}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageRankings;