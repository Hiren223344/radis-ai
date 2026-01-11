import React from 'react';
import { Settings2, Image as ImageIcon } from 'lucide-react';

/**
 * ToolCallsAndImagesSection Component
 * 
 * Clones the "Tool Calls" and "Images" sections from the OpenRouter Rankings page.
 * These are 100% stacked bar charts showing model distribution for specific capabilities.
 */

const CHART_COLORS = [
  '#3b82f6', // chart-blue
  '#10b981', // chart-green
  '#f59e0b', // chart-orange
  '#f43f5e', // chart-red
  '#8b5cf6', // chart-purple
  '#f472b6', // chart-pink
  '#0ea5e9', // chart-cyan
  '#ec4899', // alternative pink
  '#84cc16', // lime
  '#14b8a6', // teal
];

const DATES = [
  'Oct 13, 2025',
  'Oct 27',
  'Nov 10',
  'Nov 24',
  'Dec 8',
  'Dec 22',
  'Jan 5',
  'Jan 19'
];

interface BarData {
  segments: { height: string; color: string }[];
}

// Generate dummy data that mimics the 100% stacked look with 100% vertical coverage
const generateStackedData = (count: number): BarData[] => {
  return Array.from({ length: count }, () => {
    let remaining = 100;
    const segments = [];
    for (let i = 0; i < 9; i++) {
      const take = Math.floor(Math.random() * (remaining / 2)) + 5;
      segments.push({ height: `${take}%`, color: CHART_COLORS[i % CHART_COLORS.length] });
      remaining -= take;
    }
    segments.push({ height: `${remaining}%`, color: CHART_COLORS[9 % CHART_COLORS.length] });
    return { segments };
  });
};

const TOOL_CALLS_DATA = generateStackedData(12);
const IMAGES_DATA = generateStackedData(12);

const CapabilitySection = ({
  id,
  title,
  subtitle,
  icon: Icon,
  data
}: {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  data: BarData[];
}) => {
  return (
    <div id={id} className="flex flex-col gap-10 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Icon className="size-5 text-slate-400" />
          <a href={`#${id}`} className="hover:underline">
            <h2 className="text-lg font-medium text-slate-500">{title}</h2>
          </a>
        </div>
        <p className="text-xs font-medium text-slate-400">
          {subtitle}
        </p>
      </div>

      {/* 100% Stacked Bar Chart */}
      <div className="flex flex-col gap-4">
        <div className="relative h-[320px] w-full flex items-end gap-[2px]">
          {/* Y-Axis labels */}
          <div className="absolute left-[-40px] top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 pointer-events-none">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
            <span className="opacity-0">0%</span>
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0 pointer-events-none border-b border-slate-100">
            <div className="absolute top-0 w-full border-t border-slate-100 opacity-50"></div>
            <div className="absolute top-[40%] w-full border-t border-slate-100 opacity-50"></div>
            <div className="absolute top-[70%] w-full border-t border-slate-100 opacity-50"></div>
          </div>

          {/* Bars */}
          <div className="flex-1 h-full flex items-end justify-between px-2">
            {data.map((bar, idx) => (
              <div 
                key={idx} 
                className="flex flex-col-reverse w-full max-w-[48px] h-full group transition-opacity hover:opacity-80 cursor-pointer"
              >
                {bar.segments.map((segment, sIdx) => (
                  <div 
                    key={sIdx} 
                    style={{ height: segment.height, backgroundColor: segment.color }}
                    className="w-full"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* X-Axis labels */}
        <div className="flex justify-between px-2 text-[11px] text-slate-400">
          {DATES.map((date, i) => (
            <span key={i} className={i > 6 ? "opacity-0 md:opacity-100" : ""}>{date}</span>
          ))}
        </div>
      </div>

      {/* Leaderboard Table (Simplified as per screenshot) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-2xl">
        <div className="flex items-center gap-8 py-2">
          <span className="text-slate-400 text-sm w-4">1.</span>
          <div className="flex items-center gap-3">
            <div className="size-2 rounded-full bg-[#84cc16]" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900 leading-tight">Model</span>
              <span className="text-[11px] text-slate-400 font-medium">by <a href="#" className="hover:underline">test</a></span>
            </div>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <span className="text-sm font-mono font-medium text-slate-900 uppercase">0</span>
            <span className="text-[11px] text-slate-400 font-medium">0.0%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ToolCallsAndImagesSection() {
  return (
    <section className="flex flex-col gap-32 w-full max-w-[1440px] px-6 mx-auto mb-16">
      <CapabilitySection
        id="tool-calls"
        title="Tool Calls"
        subtitle="Tool usage across models on OpenRouter"
        icon={Settings2}
        data={TOOL_CALLS_DATA}
      />

      <CapabilitySection
        id="images"
        title="Images"
        subtitle="Total images processed on OpenRouter"
        icon={ImageIcon}
        data={IMAGES_DATA}
      />
    </section>
  );
}