import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from 'recharts';
import { Wrench } from 'lucide-react';

const data = [
  { date: 'Oct 13, 2025', model1: 40, model2: 20, model3: 15, model4: 10, others: 15 },
  { date: 'Oct 27', model1: 35, model2: 25, model3: 15, model4: 12, others: 13 },
  { date: 'Nov 10', model1: 45, model2: 15, model3: 15, model4: 10, others: 15 },
  { date: 'Nov 24', model1: 50, model2: 10, model3: 15, model4: 10, others: 15 },
  { date: 'Dec 8', model1: 30, model2: 30, model3: 20, model4: 10, others: 10 },
  { date: 'Dec 22', model1: 25, model2: 35, model3: 15, model4: 15, others: 10 },
  { date: 'Jan 5', model1: 20, model2: 40, model3: 15, model4: 15, others: 10 },
  { date: 'Jan 19', model1: 0, model2: 0, model3: 0, model4: 0, others: 0 },
];

const COLORS = ['#FF1F9D', '#0088FF', '#00C49F', '#FFBB28', '#10B981', '#6366F1', '#A855F7'];

export default function ToolCalls() {
  return (
    <div id="tool-calls" className="flex flex-col gap-10 scroll-mt-24 w-full">
      {/* Header Section */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Wrench className="size-5 text-slate-500" />
              <a href="#tool-calls" className="hover:underline">
                <h2 className="text-lg font-medium text-slate-900">Tool Calls</h2>
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 hidden md:block">
              Tool usage across models on Radison
            </p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full h-[320px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            stackOffset="expand"
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barGap={0}
          >
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
              tickFormatter={(tick) => `${tick * 100}%`}
              domain={[0, 1]}
              ticks={[0.3, 0.6, 1.0]}
            />
            <Tooltip
              cursor={{ fill: 'rgba(241, 245, 249, 0.4)' }}
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                fontSize: '12px',
              }}
            />
            <Bar dataKey="model1" stackId="a" fill={COLORS[0]} />
            <Bar dataKey="model2" stackId="a" fill={COLORS[1]} />
            <Bar dataKey="model3" stackId="a" fill={COLORS[2]} />
            <Bar dataKey="model4" stackId="a" fill={COLORS[3]} />
            <Bar dataKey="others" stackId="a" fill={COLORS[4]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend / Ranking List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-12 mt-4">
        {[
          { name: 'Model', author: 'test', value: '0', percentage: '0.0%' }
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2 px-4 hover:bg-slate-50 transition-colors rounded-md cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-400 w-4">{idx + 1}.</span>
              <div className="size-2 rounded-full bg-[#10B981]" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900">{item.name}</span>
                <span className="text-[11px] text-slate-500">
                  by <span className="underline decoration-slate-300">{item.author}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end tabular-nums">
              <span className="text-sm text-slate-900">{item.value}</span>
              <span className="text-[11px] text-slate-400 font-medium">{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}