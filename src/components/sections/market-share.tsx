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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Info } from "lucide-react";

const marketShareData = [
  { date: "Jan 12, 2025", google: 35, anthropic: 25, openai: 15, meta: 10, mistral: 5, xai: 5, deepseek: 5 },
  { date: "Feb 2", google: 38, anthropic: 22, openai: 16, meta: 12, mistral: 4, xai: 4, deepseek: 4 },
  { date: "Feb 23", google: 32, anthropic: 28, openai: 14, meta: 11, mistral: 6, xai: 5, deepseek: 4 },
  { date: "Mar 16", google: 30, anthropic: 35, openai: 12, meta: 10, mistral: 5, xai: 4, deepseek: 4 },
  { date: "Apr 6", google: 42, anthropic: 30, openai: 10, meta: 8, mistral: 4, xai: 3, deepseek: 3 },
  { date: "Apr 27", google: 45, anthropic: 25, openai: 12, meta: 7, mistral: 4, xai: 4, deepseek: 3 },
  { date: "May 18", google: 38, anthropic: 22, openai: 15, meta: 10, mistral: 6, xai: 5, deepseek: 4 },
  { date: "Jun 8", google: 35, anthropic: 28, openai: 14, meta: 9, mistral: 5, xai: 5, deepseek: 4 },
  { date: "Jun 29", google: 32, anthropic: 32, openai: 12, meta: 11, mistral: 5, xai: 4, deepseek: 4 },
  { date: "Jul 20", google: 30, anthropic: 35, openai: 10, meta: 12, mistral: 4, xai: 5, deepseek: 4 },
  { date: "Aug 10", google: 28, anthropic: 38, openai: 12, meta: 10, mistral: 5, xai: 4, deepseek: 3 },
  { date: "Aug 31", google: 25, anthropic: 40, openai: 14, meta: 9, mistral: 4, xai: 5, deepseek: 3 },
  { date: "Sep 21", google: 24, anthropic: 35, openai: 16, meta: 12, mistral: 5, xai: 4, deepseek: 4 },
  { date: "Oct 12", google: 26, anthropic: 30, openai: 18, meta: 14, mistral: 4, xai: 4, deepseek: 4 },
  { date: "Nov 2", google: 25, anthropic: 28, openai: 20, meta: 15, mistral: 5, xai: 4, deepseek: 3 },
  { date: "Nov 23", google: 22, anthropic: 25, openai: 22, meta: 18, mistral: 6, xai: 4, deepseek: 3 },
  { date: "Dec 14", google: 24, anthropic: 22, openai: 24, meta: 16, mistral: 7, xai: 4, deepseek: 3 },
  { date: "Jan 4", google: 26, anthropic: 20, openai: 26, meta: 14, mistral: 6, xai: 5, deepseek: 3 },
  { date: "Jan 25", google: 28, anthropic: 18, openai: 28, meta: 12, mistral: 5, xai: 6, deepseek: 3 },
];

const COLORS = {
  google: "#3B82F6",    // chart-blue
  anthropic: "#F472B6", // chart-pink
  openai: "#10B981",    // chart-green
  meta: "#F59E0B",      // chart-orange
  mistral: "#8B5CF6",   // chart-purple
  xai: "#F43F5E",       // chart-red
  deepseek: "#0EA5E9",  // chart-cyan
};

const MarketShare = () => {
  return (
    <section id="market-share" className="w-full scroll-mt-24">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="flex items-center md:items-start justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg
                  data-slot="icon"
                  className="size-5 text-slate-11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
                <a href="#market-share" className="hover:underline">
                  <h2 className="text-lg font-medium text-slate-11">
                    Market Share
                  </h2>
                </a>
              </div>
              <p className="text-xs font-medium text-slate-11 hidden md:flex items-center gap-1.5">
                Compare OpenRouter token share by model author
                <Info className="size-3.5 text-muted-foreground cursor-help" />
              </p>
            </div>
          </div>
        </div>

        <div className="chart-container" style={{ height: "320px", marginBottom: "3rem" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={marketShareData}
              stackOffset="expand" // This makes it a 100% stacked bar chart
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              barGap={0}
              barCategoryGap={1}
            >
              <CartesianGrid vertical={false} stroke="#f1f5f9" strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#64748b" }}
                dy={10}
                interval={Math.floor(marketShareData.length / 8)}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#64748b" }}
                tickFormatter={(value) => `${Math.round(value * 100)}%`}
                ticks={[0.3, 0.6, 1]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "12px",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                }}
                formatter={(value: number) => [`${Math.round(value * 100)}%`]}
              />
              <Bar dataKey="google" stackId="a" fill={COLORS.google} />
              <Bar dataKey="anthropic" stackId="a" fill={COLORS.anthropic} />
              <Bar dataKey="openai" stackId="a" fill={COLORS.openai} />
              <Bar dataKey="meta" stackId="a" fill={COLORS.meta} />
              <Bar dataKey="mistral" stackId="a" fill={COLORS.mistral} />
              <Bar dataKey="xai" stackId="a" fill={COLORS.xai} />
              <Bar dataKey="deepseek" stackId="a" fill={COLORS.deepseek} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-medium text-xs w-4">1.</span>
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: COLORS.google }}
                />
                <span className="font-semibold text-sm">google</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-tabular font-medium text-sm">38B</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">
                28.0%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-medium text-xs w-4">2.</span>
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: COLORS.openai }}
                />
                <span className="font-semibold text-sm">openai</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-tabular font-medium text-sm">36B</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">
                26.5%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-medium text-xs w-4">3.</span>
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: COLORS.anthropic }}
                />
                <span className="font-semibold text-sm">anthropic</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-tabular font-medium text-sm">25B</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">
                18.2%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-medium text-xs w-4">4.</span>
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: COLORS.meta }}
                />
                <span className="font-semibold text-sm">meta</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-tabular font-medium text-sm">16B</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">
                12.1%
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors">
            Show more
            <svg
              className="size-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketShare;
=======
=======
>>>>>>> Stashed changes
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
              Compare OpenRouter token share by model author
            </p>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="w-full relative min-h-[320px] chart-container-gap">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            barGap={0}
            barCategoryGap={1}
          >
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
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="google" name="google" stackId="a" fill={COLORS.google} />
            <Bar dataKey="anthropic" name="anthropic" stackId="a" fill={COLORS.anthropic} />
            <Bar dataKey="openai" name="openai" stackId="a" fill={COLORS.openai} />
            <Bar dataKey="xai" name="xai" stackId="a" fill={COLORS.xai} />
            <Bar dataKey="meta" name="meta" stackId="a" fill={COLORS.meta} />
            <Bar dataKey="other" name="other" stackId="a" fill={COLORS.other} />
          </BarChart>
        </ResponsiveContainer>
      </div>

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
  );
<<<<<<< Updated upstream
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
