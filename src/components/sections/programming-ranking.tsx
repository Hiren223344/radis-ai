"use client";

import React, { useState } from "react";
import { ChevronDown, Info, Code2 } from "lucide-react";

/**
 * ProgrammingRanking Component
 * 
 * A pixel-perfect clone of the Programming section from Radison Rankings.
 * Features a 100% stacked bar chart (simulated with SVG for precision and performance),
 * a language selector, and a 2-column list of top models for the selected language.
 */

interface ModelData {
  rank: number;
  name: string;
  author: string;
  authorSlug: string;
  value: string;
  percentage: string;
  color: string;
}

const PROGRAMMING_MODELS: ModelData[] = [
  { rank: 1, name: "Mimo V2 Flash", author: "xiaomi", authorSlug: "xiaomi", value: "27.2B", percentage: "10.1%", color: "#9CA37C" },
  { rank: 2, name: "Grok Code Fast 1", author: "x-ai", authorSlug: "x-ai", value: "20.4B", percentage: "7.6%", color: "#FFBB28" },
  { rank: 3, name: "DeepSeek V3.2", author: "deepseek", authorSlug: "deepseek", value: "18B", percentage: "6.7%", color: "#D4A017" },
  { rank: 4, name: "Claude Sonnet 4.5", author: "anthropic", authorSlug: "anthropic", value: "15.1B", percentage: "5.6%", color: "#FF7043" },
  { rank: 5, name: "Claude Opus 4.5", author: "anthropic", authorSlug: "anthropic", value: "12.5B", percentage: "4.6%", color: "#EF5350" },
  { rank: 6, name: "Gemini 3 Flash Preview", author: "google", authorSlug: "google", value: "11.7B", percentage: "4.3%", color: "#FF5722" },
  { rank: 7, name: "Gemini 2.5 Flash Lite", author: "google", authorSlug: "google", value: "10.8B", percentage: "4.0%", color: "#2E7D32" },
  { rank: 8, name: "Gemini 2.5 Flash", author: "google", authorSlug: "google", value: "9.44B", percentage: "3.5%", color: "#00C49F" },
  { rank: 9, name: "Grok 4.1 Fast", author: "x-ai", authorSlug: "x-ai", value: "8.96B", percentage: "3.3%", color: "#FF1F9D" },
  { rank: 10, name: "Others", author: "unknown", authorSlug: "unknown", value: "135B", percentage: "50.1%", color: "#F48FB1" },
];

const ProgrammingRanking: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Python");

  // Mock data for the stacked bar chart columns
  // In a real app, this would be computed or fetched
  const chartDates = ["Dec 12, 2025", "Dec 15", "Dec 18", "Dec 21", "Dec 24", "Dec 27", "Dec 30", "Jan 2", "Jan 5", "Jan 8"];
  
  // Colors used in the original chart segments
  const barkColors = [
    "#FF1F9D", "#0088FF", "#00C49F", "#FFBB28", "#10B981", 
    "#8884d8", "#82ca9d", "#ffc658", "#3fb1e3", "#6be6c1"
  ];

  return (
    <div id="programming" className="section-spacing scroll-mt-24">
      <div className="container max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col gap-2 md:gap-5 mb-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Code2 className="size-5 text-[#64748B]" strokeWidth={2} />
                <a href="#programming" className="hover:underline">
                  <h2 className="text-[18px] font-medium text-[#64748B]">Programming</h2>
                </a>
              </div>
              <p className="text-muted-sm hidden md:flex items-center gap-1.5">
                Compare models by programming language on Radison
                <Info className="size-3.5 text-muted-foreground cursor-help" />
              </p>
            </div>

            {/* Language Selector Pill */}
            <div className="relative group">
              <button 
                className="pill-dropdown text-muted-foreground hover:shadow-sm transition-all"
                onClick={() => {}}
              >
                <span className="text-[12px] font-medium">{selectedLanguage}</span>
                <ChevronDown className="size-3.5 opacity-50" />
              </button>
            </div>
          </div>
        </div>

        {/* 100% Stacked Bar Chart */}
        <div className="mb-12">
          <div className="w-full h-[320px] relative">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[12px] text-muted-foreground pointer-events-none pb-8">
              <span>100%</span>
              <span>60%</span>
              <span>30%</span>
              <span className="opacity-0">0%</span>
            </div>

            {/* Chart Grid/Bars Area */}
            <div className="ml-12 h-full flex flex-col">
              <div className="flex-1 flex items-end justify-between gap-1 md:gap-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="flex-1 h-full flex flex-col-reverse group/bar cursor-pointer">
                    {/* Simulated Stacked Segments */}
                    <div className="w-full h-[50%] bg-[#FF1F9D] transition-opacity group-hover/bar:opacity-80" />
                    <div className="w-full h-[15%] bg-[#0088FF] transition-opacity group-hover/bar:opacity-80" />
                    <div className="w-full h-[10%] bg-[#00C49F] transition-opacity group-hover/bar:opacity-80" />
                    <div className="w-full h-[8%] bg-[#FFBB28] transition-opacity group-hover/bar:opacity-80" />
                    <div className="w-full h-[7%] bg-[#10B981] transition-opacity group-hover/bar:opacity-80" />
                    <div className="w-full h-[5%] bg-[#8884d8] transition-opacity group-hover/bar:opacity-80" />
                    <div className="w-full h-[5%] bg-[#82ca9d] transition-opacity group-hover/bar:opacity-80" />
                  </div>
                ))}
              </div>

              {/* X-Axis Labels */}
              <div className="flex justify-between mt-4 text-[12px] text-muted-foreground tabular-nums">
                {chartDates.map((date, idx) => (
                  <span key={idx} className={idx > 0 && idx < chartDates.length - 1 ? "hidden md:inline" : ""}>
                    {date}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ranking List - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {/* First Column (1-5) */}
          <div className="flex flex-col">
            {PROGRAMMING_MODELS.slice(0, 5).map((model) => (
              <div key={model.rank} className="ranking-row flex items-center justify-between border-b border-transparent">
                <div className="flex items-center gap-4">
                  <span className="text-[14px] text-muted-foreground w-4">{model.rank}.</span>
                  <div className="flex items-center gap-3">
                    <div 
                      className="size-2.5 rounded-full shrink-0" 
                      style={{ backgroundColor: model.color }} 
                    />
                    <div className="flex flex-col">
                      <span className="text-model-name text-[#0F172A]">{model.name}</span>
                      <span className="text-[12px] text-muted-foreground">
                        by <a href={`/docs/models/${model.authorSlug}`} className="hover:underline">{model.author}</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end tabular-nums">
                  <span className="text-[14px] font-medium text-[#0F172A]">{model.value}</span>
                  <span className="text-[12px] text-muted-foreground font-medium">{model.percentage}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column (6-10) */}
          <div className="flex flex-col">
            {PROGRAMMING_MODELS.slice(5, 10).map((model) => (
              <div key={model.rank} className="ranking-row flex items-center justify-between border-b border-transparent">
                <div className="flex items-center gap-4">
                  <span className="text-[14px] text-muted-foreground w-5">{model.rank}.</span>
                  <div className="flex items-center gap-3">
                    <div 
                      className="size-2.5 rounded-full shrink-0" 
                      style={{ backgroundColor: model.color }} 
                    />
                    <div className="flex flex-col">
                      <span className="text-model-name text-[#0F172A]">{model.name}</span>
                      <span className="text-[12px] text-muted-foreground">
                        by <a href={`/docs/models/${model.authorSlug}`} className="hover:underline">{model.author}</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end tabular-nums">
                  <span className="text-[14px] font-medium text-[#0F172A]">{model.value}</span>
                  <span className="text-[12px] text-muted-foreground font-medium">{model.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingRanking;