<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { LayoutGrid } from 'lucide-react';

/**
 * Market Share Section Component
 * 
 * Replicates the Market Share 100% stacked area bar chart visualization 
 * from the OpenRouter Rankings page.
 */

const data = [
  { date: 'Jan 12, 2025', anthropic: 35, google: 20, meta: 15, openai: 10, mistral: 5, xai: 10, other: 5 },
  { date: 'Feb 23', anthropic: 30, google: 25, meta: 18, openai: 12, mistral: 4, xai: 8, other: 3 },
  { date: 'Apr 6', anthropic: 40, google: 15, meta: 12, openai: 15, mistral: 8, xai: 5, other: 5 },
  { date: 'May 18', anthropic: 38, google: 22, meta: 14, openai: 10, mistral: 6, xai: 4, other: 6 },
  { date: 'Jun 29', anthropic: 45, google: 18, meta: 15, openai: 8, mistral: 2, xai: 7, other: 5 },
  { date: 'Aug 10', anthropic: 25, google: 35, meta: 10, openai: 12, mistral: 8, xai: 5, other: 5 },
  { date: 'Sep 21', anthropic: 20, google: 40, meta: 20, openai: 10, mistral: 4, xai: 3, other: 3 },
  { date: 'Nov 2', anthropic: 15, google: 45, meta: 25, openai: 8, mistral: 3, xai: 2, other: 2 },
  { date: 'Dec 14', anthropic: 22, google: 28, meta: 35, openai: 10, mistral: 2, xai: 2, other: 1 },
  { date: 'Jan 25', anthropic: 20, google: 20, meta: 40, openai: 15, mistral: 3, xai: 1, other: 1 },
];

const COLORS = [
  '#FF4EAC', // anthropic
  '#0091FF', // google
  '#00CBA9', // meta
  '#F59E0B', // openai
  '#8B5CF6', // mistral
  '#EC4899', // xai
  '#22C55E'  // other
];

const KEY_ORDER = ['anthropic', 'google', 'meta', 'openai', 'mistral', 'xai', 'other'];

export default function MarketShare() {
  return (
    <section id="market-share" className="container flex flex-col gap-10 scroll-mt-24 pt-12">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <LayoutGrid className="size-5 text-slate-500" strokeWidth={1.5} />
              <a href="#market-share" className="hover:underline">
                <h2 className="text-lg font-medium text-slate-500">Market Share</h2>
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 hidden md:block">
=======
=======
>>>>>>> Stashed changes
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
import { LayoutPanelLeft } from "lucide-react";

/**
 * Market Share Section Component
 *
 * Implements a 100% stacked bar chart for token share by model author.
 * Matches UI styling and typography from the OpenRouter Rankings page.
 */

// Mock data representing the market share over time
const data = [
  { date: "Jan 12, 2025", google: 35, anthropic: 25, openai: 15, xai: 10, meta: 10, other: 5 },
  { date: "Jan 19", google: 32, anthropic: 28, openai: 18, xai: 8, meta: 10, other: 4 },
  { date: "Jan 26", google: 30, anthropic: 30, openai: 20, xai: 10, meta: 5, other: 5 },
  { date: "Feb 2", google: 38, anthropic: 22, openai: 15, xai: 12, meta: 8, other: 5 },
  { date: "Feb 9", google: 40, anthropic: 20, openai: 12, xai: 15, meta: 8, other: 5 },
  { date: "Feb 16", google: 35, anthropic: 25, openai: 18, xai: 10, meta: 7, other: 5 },
  { date: "Feb 23", google: 33, anthropic: 27, openai: 20, xai: 8, meta: 7, other: 5 },
  { date: "Mar 2", google: 30, anthropic: 30, openai: 22, xai: 6, meta: 7, other: 5 },
  { date: "Mar 9", google: 28, anthropic: 35, openai: 20, xai: 7, meta: 5, other: 5 },
  { date: "Mar 16", google: 32, anthropic: 30, openai: 18, xai: 10, meta: 5, other: 5 },
  { date: "Mar 23", google: 35, anthropic: 25, openai: 20, xai: 10, meta: 5, other: 5 },
  { date: "Mar 30", google: 40, anthropic: 20, openai: 20, xai: 10, meta: 5, other: 5 },
  { date: "Apr 6", google: 45, anthropic: 15, openai: 15, xai: 15, meta: 5, other: 5 },
  { date: "Apr 13", google: 42, anthropic: 18, openai: 18, xai: 12, meta: 5, other: 5 },
  { date: "Apr 20", google: 38, anthropic: 22, openai: 20, xai: 10, meta: 5, other: 5 },
  { date: "Apr 27", google: 35, anthropic: 25, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "May 4", google: 30, anthropic: 30, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "May 11", google: 25, anthropic: 35, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "May 18", google: 28, anthropic: 32, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "May 25", google: 32, anthropic: 28, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "Jun 1", google: 35, anthropic: 25, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "Jun 8", google: 40, anthropic: 20, openai: 20, xai: 10, meta: 5, other: 5 },
  { date: "Jun 15", google: 42, anthropic: 18, openai: 18, xai: 12, meta: 5, other: 5 },
  { date: "Jun 22", google: 45, anthropic: 15, openai: 15, xai: 15, meta: 5, other: 5 },
  { date: "Jun 29", google: 40, anthropic: 20, openai: 20, xai: 10, meta: 5, other: 5 },
  { date: "Jul 6", google: 35, anthropic: 25, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "Jul 13", google: 30, anthropic: 30, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "Jul 20", google: 25, anthropic: 35, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "Jul 27", google: 28, anthropic: 32, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "Aug 3", google: 32, anthropic: 28, openai: 25, xai: 5, meta: 5, other: 5 },
  { date: "Aug 10", google: 25, anthropic: 25, openai: 20, xai: 10, meta: 15, other: 5 },
  { date: "Aug 17", google: 20, anthropic: 22, openai: 18, xai: 12, meta: 23, other: 5 },
  { date: "Aug 24", google: 22, anthropic: 20, openai: 15, xai: 15, meta: 23, other: 5 },
  { date: "Aug 31", google: 25, anthropic: 18, openai: 12, xai: 15, meta: 25, other: 5 },
  { date: "Sep 7", google: 22, anthropic: 15, openai: 10, xai: 15, meta: 33, other: 5 },
  { date: "Sep 14", google: 18, anthropic: 18, openai: 12, xai: 12, meta: 35, other: 5 },
  { date: "Sep 21", google: 15, anthropic: 20, openai: 15, xai: 10, meta: 35, other: 5 },
  { date: "Sep 28", google: 18, anthropic: 22, openai: 18, xai: 10, meta: 27, other: 5 },
  { date: "Oct 5", google: 20, anthropic: 25, openai: 20, xai: 8, meta: 22, other: 5 },
  { date: "Oct 12", google: 15, anthropic: 25, openai: 15, xai: 8, meta: 32, other: 5 },
  { date: "Oct 19", google: 18, anthropic: 22, openai: 18, xai: 10, meta: 27, other: 5 },
  { date: "Oct 26", google: 20, anthropic: 20, openai: 20, xai: 12, meta: 23, other: 5 },
  { date: "Nov 2", google: 22, anthropic: 18, openai: 15, xai: 15, meta: 25, other: 5 },
  { date: "Nov 9", google: 25, anthropic: 15, openai: 12, xai: 18, meta: 25, other: 5 },
  { date: "Nov 16", google: 22, anthropic: 18, openai: 15, xai: 15, meta: 25, other: 5 },
  { date: "Nov 23", google: 20, anthropic: 20, openai: 18, xai: 12, meta: 25, other: 5 },
  { date: "Nov 30", google: 18, anthropic: 22, openai: 20, xai: 10, meta: 25, other: 5 },
  { date: "Dec 7", google: 15, anthropic: 25, openai: 22, xai: 8, meta: 25, other: 5 },
  { date: "Dec 14", google: 18, anthropic: 22, openai: 18, xai: 10, meta: 27, other: 5 },
  { date: "Dec 21", google: 20, anthropic: 20, openai: 15, xai: 12, meta: 25, other: 8 },
  { date: "Dec 28", google: 22, anthropic: 18, openai: 12, xai: 15, meta: 25, other: 8 },
  { date: "Jan 4, 2026", google: 15, anthropic: 15, openai: 10, xai: 10, meta: 30, other: 20 },
  { date: "Jan 11", google: 15, anthropic: 15, openai: 10, xai: 10, meta: 30, other: 20 },
  { date: "Jan 18", google: 15, anthropic: 15, openai: 10, xai: 10, meta: 30, other: 20 },
  { date: "Jan 25", google: 15, anthropic: 15, openai: 10, xai: 10, meta: 30, other: 20 },
];

const COLORS = {
  google: "#0088FF",
  anthropic: "#00C49F",
  openai: "#FFBB28",
  xai: "#FF8042",
  meta: "#6a4c93",
  other: "#10b981",
};

export default function MarketShareSection() {
  return (
    <div id="market-share" className="flex flex-col gap-10 scroll-mt-24 w-full">
      {/* Header Area */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <LayoutPanelLeft className="size-5 text-[#64748B]" />
              <a href="#market-share" className="hover:underline">
                <h2 className="text-lg font-medium text-[#64748B]">Market Share</h2>
              </a>
            </div>
            <p className="text-xs font-medium text-[#64748B] hidden md:block">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
              Compare OpenRouter token share by model author
            </p>
          </div>
        </div>
      </div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <div className="chart-container relative h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            stackOffset="expand"
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      {/* Chart Area */}
      <div className="w-full relative min-h-[320px] chart-container-gap">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={data}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            barGap={0}
            barCategoryGap={1}
          >
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 11 }}
              interval={0}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 11 }}
              tickFormatter={(val) => `${Math.round(val * 100)}%`}
              ticks={[0.3, 0.6, 1.0]}
              domain={[0, 1]}
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 border rounded shadow-sm text-xs font-sans">
                      <p className="font-semibold mb-1">{payload[0].payload.date}</p>
                      {payload.slice().reverse().map((entry, index) => (
                        <div key={index} className="flex items-center gap-2 py-0.5">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                          <span className="capitalize text-slate-600">{entry.name}:</span>
                          <span className="font-mono ml-auto">{(Number(entry.value) * 100).toFixed(1)}%</span>
                        </div>
                      ))}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            <CartesianGrid vertical={false} stroke="#E2E8F0" strokeDasharray="0" />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              padding={{ left: 0, right: 0 }}
              tick={{ fill: "#64748B", fontSize: 10 }}
              interval={6} // Approx every ~7 items for readability
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B", fontSize: 10 }}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
              ticks={[30, 60, 100]}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 border border-[#E2E8F0] shadow-sm rounded-md text-xs font-sans">
                      <p className="font-semibold mb-2 text-[#0F172A]">{label}</p>
                      <div className="flex flex-col gap-1">
                        {payload.map((entry: any, index: number) => (
                          <div key={index} className="flex items-center gap-2 justify-between min-w-[120px]">
                            <div className="flex items-center gap-1.5">
                              <div 
                                className="w-2 h-2 rounded-full" 
                                style={{ backgroundColor: entry.color }} 
                              />
                               <span className="capitalize text-[#64748B]">{entry.name}</span>
                            </div>
                            <span className="font-tabular text-[#0F172A]">{entry.value}%</span>
                          </div>
                        ))}
                      </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
                    </div>
                  );
                }
                return null;
              }}
            />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            {KEY_ORDER.map((key, index) => (
              <Bar 
                key={key} 
                dataKey={key} 
                stackId="a" 
                fill={COLORS[index % COLORS.length]} 
                isAnimationActive={false}
              />
            ))}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            <Bar dataKey="google" name="google" stackId="a" fill={COLORS.google} />
            <Bar dataKey="anthropic" name="anthropic" stackId="a" fill={COLORS.anthropic} />
            <Bar dataKey="openai" name="openai" stackId="a" fill={COLORS.openai} />
            <Bar dataKey="xai" name="xai" stackId="a" fill={COLORS.xai} />
            <Bar dataKey="meta" name="meta" stackId="a" fill={COLORS.meta} />
            <Bar dataKey="other" name="other" stackId="a" fill={COLORS.other} />
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto w-full px-4">
        {/* We only render one item to match the instruction's provided screenshot layout strategy */}
        <div className="flex items-center justify-between group py-2">
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-medium w-4">1.</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
              <span className="ranking-label cursor-pointer group-hover:underline">test</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="ranking-value">38K</span>
            <span className="ranking-sublabel">100.0%</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <button className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors text-xs font-medium">
          Show more
          <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 w-full mt-4">
        <div className="flex items-center justify-between ranking-row border-b border-[#E2E8F0]">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground w-4 text-center text-xs">1.</span>
            <div className="flex items-center gap-2">
              <div 
                className="size-2 rounded-full" 
                style={{ backgroundColor: COLORS.other }}
              />
              <span className="text-sm font-semibold text-[#0F172A]">test</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-tabular">38K</div>
            <div className="text-[10px] text-muted-foreground font-tabular">100.0%</div>
          </div>
        </div>
        {/* Placeholder for visual consistency if needed, but the original shows only one column in some captures */}
      </div>
    </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  );
}