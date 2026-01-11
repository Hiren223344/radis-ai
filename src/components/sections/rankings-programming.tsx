import React from 'react';
import { ChevronDown, Code2, HelpCircle } from 'lucide-react';

/**
 * ProgrammingSection Component
 * Clones the Programming section showing usage by programming language (filtered to Python)
 * with a stacked bar chart and a ranked list of models.
 */

const programmingData = [
  { id: 1, name: 'MiMo V2 Flash', author: 'xiaomi', value: '27.2B', percentage: '10.1%', color: '#93A36D' },
  { id: 2, name: 'Grok Code Fast 1', author: 'x-ai', value: '20.4B', percentage: '7.6%', color: '#EAB308' },
  { id: 3, name: 'DeepSeek V3.2', author: 'deepseek', value: '18B', percentage: '6.7%', color: '#D9913E' },
  { id: 4, name: 'Claude Sonnet 4.5', author: 'anthropic', value: '15.1B', percentage: '5.6%', color: '#EE7452' },
  { id: 5, name: 'Claude Opus 4.5', author: 'anthropic', value: '12.5B', percentage: '4.6%', color: '#EB5C5C' },
  { id: 6, name: 'Gemini 3 Flash Preview', author: 'google', value: '11.7B', percentage: '4.3%', color: '#F14C1A' },
  { id: 7, name: 'Gemini 2.5 Flash Lite', author: 'google', value: '10.8B', percentage: '4.0%', color: '#10B981' },
  { id: 8, name: 'Gemini 2.5 Flash', author: 'google', value: '9.44B', percentage: '3.5%', color: '#0EA5E9' },
  { id: 9, name: 'Grok 4.1 Fast', author: 'x-ai', value: '8.96B', percentage: '3.3%', color: '#D946EF' },
  { id: 10, name: 'Others', author: 'unknown', value: '135B', percentage: '50.1%', color: '#EC4899' },
];

const chartDates = ['Dec 12, 2025', 'Dec 15', 'Dec 18', 'Dec 21', 'Dec 24', 'Dec 27', 'Dec 30', 'Jan 2', 'Jan 5', 'Jan 8'];

export default function ProgrammingSection() {
  return (
    <section id="programming" className="w-full flex flex-col gap-10 scroll-mt-24">
      {/* Header Area */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Code2 className="size-5 text-[#64748b]" />
              <a href="#programming" className="hover:underline">
                <h2 className="text-[1.125rem] font-medium text-[#64748b]">Programming</h2>
              </a>
            </div>
            <p className="text-[12px] font-medium text-[#64748b] hidden md:flex items-center gap-1">
              Compare models by programming language on Radison
              <HelpCircle className="size-4 text-muted-foreground" />
            </p>
          </div>
          
          <button className="flex items-center justify-between whitespace-nowrap border border-[#e2e8f0] bg-white px-3 py-2 ring-offset-background transition-colors hover:bg-[#f1f5f9] h-9 rounded-full text-[#64748b] shadow-none md:h-8 md:text-[12px] w-32 text-sm pl-4 pr-6 relative">
            <span>Python</span>
            <ChevronDown className="absolute right-2 size-4 opacity-50" />
          </button>
        </div>
      </div>

      {/* Chart Simulation */}
      <div className="relative w-full">
        <div className="h-[320px] w-full flex flex-col justify-end">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-[290px] flex flex-col justify-between text-[12px] text-[#64748b] pointer-events-none">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
          </div>

          {/* Stacked Bars Container */}
          <div className="ml-12 h-[290px] flex items-end justify-between gap-1 group">
            {chartDates.map((_, idx) => (
              <div key={idx} className="flex-1 flex flex-col cursor-pointer transition-opacity group-hover:opacity-100 hover:!opacity-100 opacity-100">
                {/* Simulated Stacked Bar Segments */}
                <div className="w-full bg-[#EC4899] h-[50%]" />
                <div className="w-full bg-[#D946EF] h-[3%]" />
                <div className="w-full bg-[#0EA5E9] h-[4%]" />
                <div className="w-full bg-[#10B981] h-[4%]" />
                <div className="w-full bg-[#F14C1A] h-[4%]" />
                <div className="w-full bg-[#EB5C5C] h-[5%]" />
                <div className="w-full bg-[#EE7452] h-[6%]" />
                <div className="w-full bg-[#D9913E] h-[7%]" />
                <div className="w-full bg-[#EAB308] h-[8%]" />
                <div className="w-full bg-[#93A36D] h-[13%]" />
              </div>
            ))}
          </div>

          {/* X-Axis Labels */}
          <div className="ml-12 mt-4 flex items-center justify-between text-[12px] text-[#64748b]">
            {chartDates.map((date, idx) => (
              <span key={idx} className="flex-1 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                {date}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Ranked List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 mt-4">
        {/* Left Column (1-5) */}
        <div className="flex flex-col gap-6">
          {programmingData.slice(0, 5).map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[14px] text-[#64748b] w-4 tabular-nums text-right">{item.id}.</span>
                <div 
                  className="size-2 rounded-full" 
                  style={{ backgroundColor: item.color }} 
                />
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-[#0f172a]">{item.name}</span>
                  <span className="text-[12px] text-[#64748b]">
                    by <span className="underline cursor-pointer">{item.author}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[14px] font-medium text-[#64748b] tabular-nums">{item.value}</span>
                <span className="text-[12px] text-[#64748b] tabular-nums opacity-60">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (6-10) */}
        <div className="flex flex-col gap-6">
          {programmingData.slice(5, 10).map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-[14px] text-[#64748b] w-4 tabular-nums text-right">{item.id}.</span>
                <div 
                  className="size-2 rounded-full" 
                  style={{ backgroundColor: item.color }} 
                />
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-[#0f172a]">{item.name}</span>
                  <span className="text-[12px] text-[#64748b]">
                    by <span className="underline cursor-pointer">{item.author}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[14px] font-medium text-[#64748b] tabular-nums">{item.value}</span>
                <span className="text-[12px] text-[#64748b] tabular-nums opacity-60">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}