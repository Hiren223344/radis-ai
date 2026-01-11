"use client";

import React, { useState } from "react";
import { ChevronDown, Info, Tag } from "lucide-react";

interface ModelRanking {
  id: number;
  name: string;
  author: string;
  value: string;
  percentage: string;
  color: string;
}

const CATEGORY_DATA: ModelRanking[] = [
  { id: 1, name: "Grok Code Fast 1", author: "x-ai", value: "590B", percentage: "25.7%", color: "#0091ff" },
  { id: 2, name: "MiniMax M2.1", author: "minimax", value: "287B", percentage: "12.5%", color: "#00cba9" },
  { id: 3, name: "Claude Opus 4.5", author: "anthropic", value: "267B", percentage: "11.6%", color: "#10b981" },
  { id: 4, name: "Gemini 3 Flash Preview", author: "google", value: "192B", percentage: "8.3%", color: "#f59e0b" },
  { id: 5, name: "Claude Sonnet 4.5", author: "anthropic", value: "159B", percentage: "6.9%", color: "#00cba9" },
  { id: 6, name: "Devstral 2 2512 (free)", author: "mistralai", value: "120B", percentage: "5.2%", color: "#f59e0b" },
  { id: 7, name: "Mimo V2 Flash", author: "xiaomi", value: "94.3B", percentage: "4.1%", color: "#0091ff" },
  { id: 8, name: "GLM 4.7", author: "z-ai", value: "88.5B", percentage: "3.9%", color: "#d946ef" },
  { id: 9, name: "Qwen3 Next 80B A3B Instruct", author: "qwen", value: "56.6B", percentage: "2.5%", color: "#22d3ee" },
  { id: 10, name: "Others", author: "unknown", value: "442B", percentage: "19.3%", color: "#ff4eac" },
];

const CategoryRankings = () => {
  const [selectedCategory, setSelectedCategory] = useState("Programming");

  const categories = ["Programming", "Chat", "Roleplay", "Creative Writing", "Technical"];

  return (
    <section id="categories" className="flex flex-col gap-10 scroll-mt-24 w-full">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Tag className="size-5 text-slate-500" strokeWidth={2} />
              <a href="#categories" className="hover:underline">
                <h2 className="text-[18px] font-medium text-slate-500">Categories</h2>
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
              Compare models by usecase on OpenRouter
              <Info className="inline h-3.5 w-3.5 text-slate-400 cursor-help" />
            </p>
          </div>

          <div className="relative">
            <button
              className="flex items-center justify-between whitespace-nowrap border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-50 focus:outline-none h-8 rounded-full shadow-none hover:shadow-sm min-w-[128px]"
            >
              <span>{selectedCategory}</span>
              <ChevronDown className="ml-2 size-4 opacity-50" />
            </button>
          </div>
        </div>
      </div>

      {/* Stacked Chart Area */}
      <div className="w-full">
        <div className="relative h-[320px] w-full flex flex-col justify-end">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[11px] text-slate-400 pointer-events-none z-10">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
            <span className="opacity-0">0%</span>
          </div>

          {/* Bars Container */}
          <div className="flex items-end justify-between h-[280px] ml-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="group relative flex flex-col-reverse w-[6%] h-full">
                {/* Mock segments for the stacked bar visual */}
                <div className="w-full bg-[#0091ff] hover:opacity-80 transition-opacity" style={{ height: `${20 + (i % 2) * 10}%` }} />
                <div className="w-full bg-[#00cba9] hover:opacity-80 transition-opacity" style={{ height: `${15 + (i % 3) * 5}%`, borderTop: "1px solid white" }} />
                <div className="w-full bg-[#f59e0b] hover:opacity-80 transition-opacity" style={{ height: `${10 + (i % 4) * 2}%`, borderTop: "1px solid white" }} />
                <div className="w-full bg-[#ff4eac] hover:opacity-80 transition-opacity" style={{ height: `${25 - (i % 2) * 5}%`, borderTop: "1px solid white" }} />
                <div className="w-full bg-[#8b5cf6] hover:opacity-80 transition-opacity" style={{ height: `${10}%`, borderTop: "1px solid white" }} />
                <div className="w-full bg-slate-200 hover:opacity-80 transition-opacity flex-1" style={{ borderTop: "1px solid white" }} />
              </div>
            ))}
          </div>

          {/* X-Axis Labels */}
          <div className="flex justify-between mt-4 ml-10 text-[11px] text-slate-400">
            <span>Oct 6, 2025</span>
            <span>Oct 20</span>
            <span>Nov 3</span>
            <span>Nov 17</span>
            <span>Dec 1</span>
            <span>Dec 15</span>
            <span>Dec 29</span>
          </div>
        </div>
      </div>

      {/* Rankings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {CATEGORY_DATA.map((model) => (
          <div key={model.id} className="flex items-start justify-between py-1 group">
            <div className="flex items-start gap-4">
              <span className="text-[14px] text-slate-400 w-4 block mt-0.5">{model.id}.</span>
              <div className="flex items-center gap-2">
                <div className="size-2.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: model.color }} />
                <div>
                  <div className="ranking-label font-semibold text-slate-900 cursor-pointer hover:underline">
                    {model.name}
                  </div>
                  <div className="ranking-sublabel text-xs text-slate-400">
                    by <span className="hover:underline cursor-pointer">{model.author}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[14px] text-slate-900">{model.value}</div>
              <div className="text-[11px] text-slate-400">{model.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryRankings;