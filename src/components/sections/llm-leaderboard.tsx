<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown, Info, BarChart3 } from "lucide-react";

const chartData = [
  { date: "Jan 13, 2025", v1: 1.2, v2: 0.8, v3: 0.5, v4: 0.3, v5: 0.2 },
  { date: "Feb 10", v1: 1.4, v2: 0.9, v3: 0.4, v4: 0.4, v5: 0.3 },
  { date: "Mar 3", v1: 1.8, v2: 1.1, v3: 0.6, v4: 0.2, v5: 0.3 },
  { date: "Mar 24", v1: 1.6, v2: 1.3, v3: 0.7, v4: 0.5, v5: 0.4 },
  { date: "Apr 21", v1: 2.1, v2: 1.5, v3: 0.8, v4: 0.6, v5: 0.5 },
  { date: "May 12", v1: 2.3, v2: 1.7, v3: 1.0, v4: 0.7, v5: 0.6 },
  { date: "Jun 9", v1: 2.5, v2: 1.4, v3: 0.9, v4: 0.8, v5: 0.7 },
  { date: "Jun 30", v1: 2.8, v2: 1.6, v3: 1.1, v4: 0.9, v5: 0.8 },
  { date: "Jul 21", v1: 3.2, v2: 1.9, v3: 1.3, v4: 1.0, v5: 0.9 },
  { date: "Aug 11", v1: 3.5, v2: 2.1, v3: 1.5, v4: 1.1, v5: 1.0 },
  { date: "Sep 1", v1: 3.8, v2: 2.4, v3: 1.8, v4: 1.2, v5: 1.1 },
  { date: "Sep 15", v1: 4.1, v2: 2.1, v3: 1.6, v4: 1.3, v5: 1.2 },
  { date: "Oct 13", v1: 4.3, v2: 2.5, v3: 1.7, v4: 1.4, v5: 1.3 },
  { date: "Nov 3", v1: 4.8, v2: 2.8, v3: 1.9, v4: 1.5, v5: 1.4 },
  { date: "Nov 24", v1: 5.2, v2: 3.1, v3: 2.1, v4: 1.6, v5: 1.5 },
  { date: "Dec 15", v1: 4.9, v2: 2.9, v3: 2.0, v4: 1.7, v5: 1.6 },
  { date: "Dec 22", v1: 5.4, v2: 3.3, v3: 2.2, v4: 1.8, v5: 1.7 },
];

const modelRankings = [
  {
    rank: 1,
    name: "Claude Sonnet 4.5",
    author: "anthropic",
    tokens: "521B",
    change: "+50%",
    changePositive: true,
  },
  {
    rank: 6,
    name: "Gemini 2.5 Flash",
    author: "google",
    tokens: "369B",
    change: "+3%",
    changePositive: true,
  },
  {
    rank: 2,
    name: "Grok Code Fast 1",
    author: "x-ai",
    tokens: "421B",
    change: "+5%",
    changePositive: true,
  },
  {
    rank: 7,
    name: "DeepSeek V3.2",
    author: "deepseek",
    tokens: "309B",
    change: "+12%",
    changePositive: true,
  },
  {
    rank: 3,
    name: "MiMo - V2 - Flash (free)",
    author: "xiaomi",
    tokens: "384B",
    change: "+8%",
    changePositive: true,
  },
  {
    rank: 8,
    name: "Gemini 2.5 Flash Lite",
    author: "google",
    tokens: "248B",
    change: "+52%",
    changePositive: true,
  },
  {
    rank: 4,
    name: "Gemini 3 Flash Preview",
    author: "google",
    tokens: "381B",
    change: "+39%",
    changePositive: true,
  },
  {
    rank: 9,
    name: "Grok 4.1 Fast",
    author: "x-ai",
    tokens: "240B",
    change: "+26%",
    changePositive: true,
  },
  {
    rank: 5,
    name: "Claude Opus 4.5",
    author: "anthropic",
    tokens: "377B",
    change: "+127%",
    changePositive: true,
  },
  {
    rank: 10,
    name: "GLM 4.7",
    author: "z-ai",
    tokens: "165B",
    change: "+43%",
    changePositive: true,
  },
];

const LLMLeaderboard = () => {
  return (
    <section id="leaderboard" className="container py-8 max-w-[1280px]">
      <div className="flex flex-col gap-10">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-5 text-slate-400" />
              <a href="#leaderboard" className="hover:underline">
                <h2 className="text-lg font-medium text-[#64748B]">
                  LLM Leaderboard
                </h2>
              </a>
            </div>
            <p className="text-[12px] font-medium text-[#64748B] flex items-center gap-1">
              Token usage across models on OpenRouter
              <Info className="size-3.5 inline text-[#64748B] opacity-70" />
            </p>
          </div>
          <button className="pill-dropdown h-8 px-4 text-[12px] text-[#64748B] bg-white border border-[#E2E8F0] rounded-full flex items-center gap-2 hover:shadow-sm transition-shadow">
            This Week
            <ChevronDown className="size-4 opacity-50" />
          </button>
        </div>

        {/* Chart Area */}
        <div className="w-full h-[320px] chart-container-gap">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                vertical={false}
                stroke="#E2E8F0"
                strokeDasharray="0"
              />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tick={{ fill: "#64748B" }}
                dy={10}
                interval={Math.floor(chartData.length / 8)}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tick={{ fill: "#64748B" }}
                tickFormatter={(value) => (value === 0 ? "" : `${value}T`)}
              />
              <Tooltip
                cursor={{ fill: "rgba(241, 245, 249, 0.5)" }}
                contentStyle={{ borderRadius: "8px", border: "1px solid #E2E8F0" }}
              />
              <Bar
                dataKey="v1"
                stackId="a"
                fill="#FF1F9D"
                radius={[0, 0, 0, 0]}
                barSize={15}
              />
              <Bar
                dataKey="v2"
                stackId="a"
                fill="#0088FF"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="v3"
                stackId="a"
                fill="#00C49F"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="v4"
                stackId="a"
                fill="#FFBB28"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="v5"
                stackId="a"
                fill="#10B981"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Rankings List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {modelRankings
            .sort((a, b) => a.rank - b.rank)
            .map((model) => (
              <div
                key={model.rank}
                className="ranking-row flex items-center justify-between group cursor-pointer border-b border-[#E2E8F0]/30"
              >
                <div className="flex items-start gap-4 py-3">
                  <span className="text-[14px] text-[#64748B] font-medium w-4 tabular-nums">
                    {model.rank}.
                  </span>
                  <div className="flex flex-col">
                    <span className="text-model-name text-[#0F172A]">
                      {model.name}
                    </span>
                    <span className="text-muted-sm text-[#64748B]">
                      by <span className="hover:underline">{model.author}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-[14px] font-tabular text-[#0F172A]">
                    {model.tokens} tokens
                  </span>
                  <span
                    className={`text-[12px] font-medium tabular-nums ${
                      model.changePositive ? "text-[#10B981]" : "text-[#EF4444]"
                    }`}
                  >
                    ↑{model.change.replace("+", "")}
                  </span>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-1 text-[12px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors">
            Show more
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

<<<<<<< Updated upstream
export default LLMLeaderboard;
>>>>>>> Stashed changes
=======
export default LLMLeaderboard;
>>>>>>> Stashed changes
