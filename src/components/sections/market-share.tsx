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
              Compare OpenRouter token share by model author
            </p>
          </div>
        </div>
      </div>

      <div className="chart-container relative h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            stackOffset="expand"
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            barGap={0}
            barCategoryGap={1}
          >
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
                    </div>
                  );
                }
                return null;
              }}
            />
            {KEY_ORDER.map((key, index) => (
              <Bar 
                key={key} 
                dataKey={key} 
                stackId="a" 
                fill={COLORS[index % COLORS.length]} 
                isAnimationActive={false}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

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
  );
}