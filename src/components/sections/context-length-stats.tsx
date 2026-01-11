import React from 'react';
import { ChevronDown, Info, FileText } from 'lucide-react';

const ContextLengthStats = () => {
  const models = [
    { rank: 1, name: "Gemini 2.5 Flash", author: "google", value: "47.2M", percentage: "9.3%", color: "#10b981" },
    { rank: 2, name: "Gemini 2.5 Flash Lite", author: "google", value: "34.5M", percentage: "6.8%", color: "#f472b6" },
    { rank: 3, name: "Gemini 2.0 Flash", author: "google", value: "32.2M", percentage: "6.3%", color: "#3b82f6" },
    { rank: 4, name: "Grok 4.1 Fast", author: "x-ai", value: "24.3M", percentage: "4.8%", color: "#f472b6" },
    { rank: 5, name: "DeepSeek V3.2", author: "deepseek", value: "23.3M", percentage: "4.6%", color: "#10b981" },
    { rank: 6, name: "Gemini 3 Flash Preview", author: "google", value: "20.9M", percentage: "4.1%", color: "#a8a29e" },
    { rank: 7, name: "MiMo-V2-Flash (free)", author: "xiaomi", value: "20.2M", percentage: "4.0%", color: "#f43f5e" },
    { rank: 8, name: "gpt-oss-120b", author: "openai", value: "19.7M", percentage: "3.9%", color: "#8b5cf6" },
    { rank: 9, name: "Mistral Nemo", author: "mistralai", value: "18.6M", percentage: "3.7%", color: "#f59e0b" },
    { rank: 10, name: "Others", author: "unknown", value: "268M", percentage: "52.7%", color: "#f472b6" }
  ];

  // Colors based on the multi-categorical palette used in the screenshots
  const stackColors = [
    '#3b82f6', // blue
    '#0ea5e9', // cyan
    '#10b981', // green
    '#f59e0b', // orange
    '#f43f5e', // red
    '#f472b6', // pink
    '#8b5cf6', // purple
    '#a8a29e', // muted
  ];

  return (
    <section id="context-length" className="w-full flex flex-col gap-10 scroll-mt-24">
      {/* Header Area */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FileText className="size-5 text-slate-500" />
              <a href="#context-length" className="hover:underline">
                <h2 className="text-lg font-medium text-slate-500">Context Length</h2>
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 hidden md:block">
              Requests by prompt & completion length on OpenRouter
              <Info className="inline h-4 w-4 ml-1 text-muted-foreground cursor-help" />
            </p>
          </div>

          <button className="pill-button h-8 text-xs text-muted-foreground flex items-center gap-1 border-[#e2e8f0] bg-white px-3 rounded-full hover:bg-slate-50 transition-colors">
            1K - 10K tokens
            <ChevronDown className="size-4 opacity-50" />
          </button>
        </div>
      </div>

      {/* Volume Chart Mockup */}
      <div className="chart-container h-[320px] w-full flex flex-col">
        <div className="flex-1 relative flex items-end gap-[2px] border-b border-slate-200">
          {/* Y-Axis Labels */}
          <div className="absolute left-[-45px] top-0 bottom-0 flex flex-col justify-between text-[11px] text-slate-400 font-mono">
            <span>800M</span>
            <span>600M</span>
            <span>400M</span>
            <span>200M</span>
            <span className="invisible">0</span>
          </div>

          {/* Bars */}
          {Array.from({ length: 24 }).map((_, i) => {
            // Simulated heights to match screenshot pattern
            const baseHeights = [
              [40, 30, 20, 10], [38, 32, 18, 12], [35, 34, 15, 10], [37, 30, 22, 11],
              [39, 31, 23, 14], [42, 35, 25, 12], [45, 38, 28, 15], [48, 40, 30, 18],
              [55, 42, 32, 20], [52, 45, 35, 22], [42, 38, 28, 15], [44, 40, 30, 18],
              [46, 42, 32, 20], [48, 44, 34, 22], [52, 46, 36, 25], [58, 50, 40, 30],
              [75, 45, 35, 25], [58, 48, 38, 28], [52, 46, 36, 26], [55, 50, 40, 30],
              [58, 52, 42, 32], [54, 48, 38, 28], [51, 46, 36, 26], [49, 44, 34, 24]
            ];
            const data = baseHeights[i] || [40, 30, 20, 10];
            
            return (
              <div key={i} className="flex-1 flex flex-col items-end justify-end group cursor-pointer transition-opacity hover:opacity-80">
                {data.map((h, idx) => (
                  <div 
                    key={idx} 
                    className="w-full" 
                    style={{ 
                      height: `${h * 2.5}px`, 
                      backgroundColor: stackColors[idx % stackColors.length],
                      marginBottom: '1px'
                    }} 
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* X-Axis Labels */}
        <div className="flex justify-between mt-3 text-[11px] text-slate-400 font-mono px-2">
          <span>Jul 21, 2025</span>
          <span>Aug 11</span>
          <span>Sep 1</span>
          <span>Sep 22</span>
          <span>Oct 13</span>
          <span>Nov 3</span>
          <span>Nov 24</span>
          <span>Dec 15</span>
          <span>Jan 5</span>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 pt-4">
        {/* First Column */}
        <div className="flex flex-col gap-4">
          {models.slice(0, 5).map((model) => (
            <div key={model.rank} className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-400 w-4 font-mono">{model.rank}.</span>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: model.color }} />
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-slate-900 leading-tight">
                    {model.name}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    by <a href="#" className="hover:underline">{model.author}</a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[13px] font-mono font-medium text-slate-900">{model.value}</span>
                <span className="text-[11px] text-slate-400 font-mono">{model.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-4">
          {models.slice(5, 10).map((model) => (
            <div key={model.rank} className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-400 w-4 font-mono">{model.rank}.</span>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: model.color }} />
                <div className="flex flex-col">
                  <span className="text-[13px] font-semibold text-slate-900 leading-tight">
                    {model.name}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    by <a href="#" className="hover:underline">{model.author}</a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[13px] font-mono font-medium text-slate-900">{model.value}</span>
                <span className="text-[11px] text-slate-400 font-mono">{model.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContextLengthStats;