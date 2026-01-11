"use client";

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> Stashed changes
=======
import React from "react";
>>>>>>> Stashed changes
=======
import React from "react";
>>>>>>> Stashed changes
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { ChevronDown, Info, BarChart2 } from "lucide-react";

// Mock data for the stacked bar chart based on visual patterns in the screenshots
const chartData = [
  { date: "Jan 13", c45: 200, gcf1: 150, mv2f: 120, g3fp: 100, co45: 80, other: 150 },
  { date: "Mar 3", c45: 220, gcf1: 160, mv2f: 130, g3fp: 110, co45: 90, other: 160 },
  { date: "Apr 21", c45: 350, gcf1: 240, mv2f: 180, g3fp: 150, co45: 120, other: 250 },
  { date: "Jun 9", c45: 420, gcf1: 280, mv2f: 220, g3fp: 190, co45: 160, other: 300 },
  { date: "Jul 28", c45: 600, gcf1: 350, mv2f: 300, g3fp: 240, co45: 210, other: 450 },
  { date: "Sep 15", c45: 850, gcf1: 520, mv2f: 450, g3fp: 380, co45: 330, other: 600 },
  { date: "Nov 3", c45: 1400, gcf1: 850, mv2f: 780, g3fp: 620, co45: 540, other: 900 },
  { date: "Dec 22", c45: 1800, gcf1: 1100, mv2f: 950, g3fp: 820, co45: 740, other: 1200 },
];

const leaderBoardItems = [
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  {
    rank: 1,
    name: "Claude Sonnet 4.5",
    author: "anthropic",
    tokens: "521B",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    change: 50,
=======
    change: "+50%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+50%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+50%",
    changePositive: true,
>>>>>>> Stashed changes
  },
  {
    rank: 6,
    name: "Gemini 2.5 Flash",
    author: "google",
    tokens: "369B",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    change: 3,
=======
    change: "+3%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+3%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+3%",
    changePositive: true,
>>>>>>> Stashed changes
  },
  {
    rank: 2,
    name: "Grok Code Fast 1",
    author: "x-ai",
    tokens: "421B",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    change: 5,
=======
    change: "+5%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+5%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+5%",
    changePositive: true,
>>>>>>> Stashed changes
  },
  {
    rank: 7,
    name: "DeepSeek V3.2",
    author: "deepseek",
    tokens: "309B",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    change: 12,
  },
  {
    rank: 3,
    name: "MiMo-V2-Flash (free)",
    author: "xiaomi",
    tokens: "384B",
    change: 8,
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  },
  {
    rank: 8,
    name: "Gemini 2.5 Flash Lite",
    author: "google",
    tokens: "248B",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    change: 52,
=======
    change: "+52%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+52%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+52%",
    changePositive: true,
>>>>>>> Stashed changes
  },
  {
    rank: 4,
    name: "Gemini 3 Flash Preview",
    author: "google",
    tokens: "381B",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    change: 39,
=======
    change: "+39%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+39%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+39%",
    changePositive: true,
>>>>>>> Stashed changes
  },
  {
    rank: 9,
    name: "Grok 4.1 Fast",
    author: "x-ai",
    tokens: "240B",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    change: 26,
=======
    change: "+26%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+26%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+26%",
    changePositive: true,
>>>>>>> Stashed changes
  },
  {
    rank: 5,
    name: "Claude Opus 4.5",
    author: "anthropic",
    tokens: "377B",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    change: 127,
=======
    change: "+127%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+127%",
    changePositive: true,
>>>>>>> Stashed changes
=======
    change: "+127%",
    changePositive: true,
>>>>>>> Stashed changes
  },
  {
    rank: 10,
    name: "GLM 4.7",
    author: "z-ai",
    tokens: "165B",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    change: 43,
  },
];

export default function LLMLeaderboard() {
  const [timeRange, setTimeRange] = useState("This Week");

  return (
    <section id="leaderboard" className="container py-10 md:py-20 scroll-mt-24">
      <div className="flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <BarChart2 className="size-5 text-slate-500" strokeWidth={2} />
                <a href="#leaderboard" className="hover:underline">
                  <h2 className="text-[1.125rem] font-medium text-slate-500">
                    LLM Leaderboard
                  </h2>
                </a>
              </div>
              <p className="hidden md:flex items-center gap-1.5 text-[0.75rem] font-medium text-slate-500">
                Token usage across models on OpenRouter
                <Info className="size-4 text-slate-400 cursor-help" />
              </p>
            </div>

            {/* Time Range Dropdown */}
            <button className="pill-button md:h-8 md:text-xs min-w-[128px] justify-between px-4">
              <span>{timeRange}</span>
              <ChevronDown className="size-4 opacity-50" />
            </button>
          </div>
        </div>

        {/* Chart Container */}
        <div className="w-full h-[320px] -ml-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              barGap={0}
            >
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                tick={{ 
                    fontSize: 12, 
                    fill: '#64748b',
                    fontFamily: 'Inter'
                }}
                dy={10}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                fontSize={12}
                tick={{ fill: "#64748B" }}
                dy={10}
                interval={Math.floor(chartData.length / 8)}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
              />
              <YAxis
                axisLine={false}
                tickLine={false}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                tickFormatter={(value) => (value > 0 ? `${value / 250}T` : "")}
                tick={{ 
                    fontSize: 12, 
                    fill: '#64748b',
                    fontFamily: 'Inter'
                }}
                dx={-10}
              />
              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar dataKey="c45" stackId="a" fill="#f472b6" radius={[0, 0, 0, 0]} />
              <Bar dataKey="gcf1" stackId="a" fill="#3b82f6" />
              <Bar dataKey="mv2f" stackId="a" fill="#10b981" />
              <Bar dataKey="g3fp" stackId="a" fill="#f59e0b" />
              <Bar dataKey="co45" stackId="a" fill="#8b5cf6" />
              <Bar dataKey="other" stackId="a" fill="#94a3b8" />
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            </BarChart>
          </ResponsiveContainer>
        </div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        {/* Leaderboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {leaderBoardItems.map((item, index) => {
            // Logic to pair items like in the screenshot (1 next to 6, 2 next to 7...)
            const displayIndex = index % 2 === 0 ? index / 2 : Math.floor(index / 2) + 5;
            const currentItem = leaderBoardItems[displayIndex];

            return (
              <div
                key={currentItem.rank}
                className="flex items-center justify-between py-2.5 border-b border-transparent hover:bg-slate-50 transition-colors rounded-lg px-2"
              >
                <div className="flex items-center gap-4">
                  <span className="text-slate-400 text-sm font-medium w-4">
                    {currentItem.rank}.
                  </span>
                  <div className="flex flex-col">
                    <span className="ranking-item-title">{currentItem.name}</span>
                    <a
                      href="#"
                      className="ranking-item-author hover:underline text-slate-400"
                    >
                      by {currentItem.author}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="ranking-item-value text-slate-900">
                    {currentItem.tokens} tokens
                  </span>
                  <span
                    className={`text-[12px] font-mono flex items-center gap-0.5 ${
                      currentItem.change >= 0 ? "text-emerald-500" : "text-rose-500"
                    }`}
                  >
                    {currentItem.change >= 0 ? "↑" : "↓"}
                    {Math.abs(currentItem.change)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-1.5 text-slate-500 text-sm font-medium py-2 px-4 hover:bg-accent rounded-md transition-all">
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            Show more
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
}
=======
};

export default LLMLeaderboard;
>>>>>>> Stashed changes
=======
};

export default LLMLeaderboard;
>>>>>>> Stashed changes
=======
};

export default LLMLeaderboard;
>>>>>>> Stashed changes
