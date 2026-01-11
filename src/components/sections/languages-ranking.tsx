"use client";

import React from "react";
import { ChevronDown, Info, Languages as LanguagesIcon } from "lucide-react";

/**
 * Languages Ranking Section
 * 
 * A UI component that visualizes model preference by natural language 
 * using a stacked bar chart and a top-10 list of models.
 */

// Mock data based on the screenshots provided
const languagesData = [
  { date: "Dec 19, 2025", values: [35, 15, 10, 8, 7, 5, 4, 3, 3, 10] },
  { date: "Dec 22", values: [32, 12, 15, 9, 8, 6, 4, 4, 3, 7] },
  { date: "Dec 25", values: [30, 18, 12, 7, 10, 5, 5, 3, 2, 8] },
  { date: "Dec 28", values: [33, 14, 11, 10, 8, 5, 4, 4, 3, 8] },
  { date: "Dec 31", values: [31, 16, 13, 8, 9, 6, 4, 3, 2, 8] },
  { date: "Jan 3", values: [34, 13, 12, 9, 7, 5, 5, 4, 3, 8] },
  { date: "Jan 6", values: [32, 17, 10, 8, 9, 6, 4, 4, 2, 8] },
  { date: "Jan 9", values: [33, 15, 12, 7, 8, 5, 5, 3, 3, 9] },
];

const COLORS = [
  "#0088FF", // Blue
  "#00C49F", // Teal
  "#FFBB28", // Orange
  "#FF8042", // Light Orange
  "#FF1F9D", // Pink
  "#10B981", // Green
  "#8884d8", // Purple
  "#82ca9d", // Mint
  "#a4de6c", // Yellow green
  "#d0ed57", // Lime
];

const rankings = [
  { id: 1, name: "Grok Code Fast 1", author: "x-ai", value: "137B", percent: "11.5%", color: "#FFBB28" },
  { id: 6, name: "Gemini 3 Flash Preview", author: "google", value: "64.6B", percent: "5.4%", color: "#d8b4fe" },
  { id: 2, name: "Mimo V2 Flash", author: "xiaomi", value: "92.6B", percent: "7.8%", color: "#fcd34d" },
  { id: 7, name: "Claude Opus 4.5", author: "anthropic", value: "47B", percent: "3.9%", color: "#3b82f6" },
  { id: 3, name: "DeepSeek V3.2", author: "deepseek", value: "80.7B", percent: "6.8%", color: "#2dd4bf" },
  { id: 8, name: "Devstral 2 2512 (free)", author: "mistralai", value: "42.8B", percent: "3.6%", color: "#f97316" },
  { id: 4, name: "Claude Sonnet 4.5", author: "anthropic", value: "78.2B", percent: "6.6%", color: "#f87171" },
  { id: 5, name: "Gemini 2.5 Flash Lite", author: "google", value: "70.8B", percent: "5.9%", color: "#3b82f6" },
  { id: 9, name: "Gemini 2.5 Flash", author: "google", value: "40.6B", percent: "3.4%", color: "#ef4444" },
  { id: 10, name: "Others", author: "unknown", value: "538B", percent: "45.1%", color: "#f472b6" },
];

export default function LanguagesRanking() {
  return (
    <div id="languages" className="flex flex-col gap-10 scroll-mt-24">
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <LanguagesIcon className="size-5 text-slate-500" />
              <a href="#languages" className="hover:underline">
                <h2 className="text-[1.125rem] font-medium text-slate-500">Languages</h2>
              </a>
            </div>
            <p className="text-[0.75rem] font-medium text-slate-500 hidden md:flex items-center gap-1">
              Compare models by natural language on OpenRouter
              <Info className="size-3.5 text-muted-foreground opacity-70 cursor-help" />
            </p>
          </div>

          <div className="pill-dropdown cursor-pointer hover:bg-slate-50 transition-colors h-8 text-[0.75rem] text-muted-foreground flex items-center px-4 rounded-full border border-border">
            <span>English</span>
            <ChevronDown className="size-3.5 opacity-50 ml-1" />
          </div>
        </div>
      </div>

      {/* Stacked Chart Visualization */}
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="flex items-end justify-between h-[320px] w-full pt-4 pb-8 border-b border-slate-100">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-8 text-[11px] text-slate-400 pointer-events-none">
              <span>100%</span>
              <span>60%</span>
              <span>30%</span>
              <span className="opacity-0">0%</span>
            </div>

            {/* Bars */}
            <div className="flex-1 flex justify-around items-end pl-10 pr-4 h-full">
              {languagesData.map((day, idx) => (
                <div key={idx} className="flex flex-col-reverse w-full max-w-[48px] h-full gap-[2px]">
                  {day.values.map((val, vIdx) => (
                    <div 
                      key={vIdx} 
                      className="w-full transition-all duration-300 hover:opacity-80 cursor-pointer"
                      style={{ 
                        height: `${val}%`, 
                        backgroundColor: COLORS[vIdx % COLORS.length] 
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* X-Axis Labels */}
          <div className="flex justify-around pl-10 pr-4">
            {languagesData.map((day, idx) => (
              <span key={idx} className="text-[11px] text-slate-400 text-center w-full max-w-[48px]">
                {day.date}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Top 10 Models Ranking List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 mt-4 tabular-nums">
        {/* Left Column (1-5) */}
        <div className="flex flex-col">
          {rankings.slice(0, 5).map((model) => (
            <RankingRow key={model.id} model={model} />
          ))}
        </div>

        {/* Right Column (6-10) */}
        <div className="flex flex-col">
          {rankings.slice(5).map((model) => (
            <RankingRow key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RankingRow({ model }: { model: typeof rankings[0] }) {
  return (
    <div className="ranking-row flex items-center justify-between group cursor-pointer border-b border-transparent py-3 px-2 rounded-lg">
      <div className="flex items-center gap-4">
        <span className="w-4 text-[0.875rem] font-medium text-slate-400">{model.id}.</span>
        <div 
          className="size-2.5 rounded-full flex-shrink-0" 
          style={{ backgroundColor: model.color }}
        />
        <div className="flex flex-col leading-tight">
          <span className="text-[0.875rem] font-semibold text-foreground group-hover:text-primary transition-colors">
            {model.name}
          </span>
          <span className="text-[0.75rem] font-medium text-slate-400">
            by <span className="hover:underline">{model.author}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end leading-tight min-w-16">
        <span className="text-[0.875rem] font-medium text-slate-600">
          {model.value}
        </span>
        <span className="text-[0.75rem] font-medium text-slate-400">
          {model.percent}
        </span>
      </div>
    </div>
  );
}