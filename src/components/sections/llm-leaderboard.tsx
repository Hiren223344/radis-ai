"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
  {
    rank: 1,
    name: "Claude Sonnet 4.5",
    author: "anthropic",
    tokens: "521B",
    change: 50,
  },
  {
    rank: 6,
    name: "Gemini 2.5 Flash",
    author: "google",
    tokens: "369B",
    change: 3,
  },
  {
    rank: 2,
    name: "Grok Code Fast 1",
    author: "x-ai",
    tokens: "421B",
    change: 5,
  },
  {
    rank: 7,
    name: "DeepSeek V3.2",
    author: "deepseek",
    tokens: "309B",
    change: 12,
  },
  {
    rank: 3,
    name: "MiMo-V2-Flash (free)",
    author: "xiaomi",
    tokens: "384B",
    change: 8,
  },
  {
    rank: 8,
    name: "Gemini 2.5 Flash Lite",
    author: "google",
    tokens: "248B",
    change: 52,
  },
  {
    rank: 4,
    name: "Gemini 3 Flash Preview",
    author: "google",
    tokens: "381B",
    change: 39,
  },
  {
    rank: 9,
    name: "Grok 4.1 Fast",
    author: "x-ai",
    tokens: "240B",
    change: 26,
  },
  {
    rank: 5,
    name: "Claude Opus 4.5",
    author: "anthropic",
    tokens: "377B",
    change: 127,
  },
  {
    rank: 10,
    name: "GLM 4.7",
    author: "z-ai",
    tokens: "165B",
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
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ 
                    fontSize: 12, 
                    fill: '#64748b',
                    fontFamily: 'Inter'
                }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
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
            </BarChart>
          </ResponsiveContainer>
        </div>

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
            Show more
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}