import React from 'react';
import { ChevronDown, Wrench, ImageIcon, Info } from 'lucide-react';

interface RankingData {
  id: number;
  name: string;
  author: string;
  value: string;
  percentage: string;
  color: string;
}

const TOOL_CALLS_RANKINGS: RankingData[] = [
  {
    id: 1,
    name: "Model",
    author: "test",
    value: "0",
    percentage: "0.0%",
    color: "#84cc16",
  },
];

const IMAGES_RANKINGS: RankingData[] = [
  {
    id: 1,
    name: "Model",
    author: "test",
    value: "0",
    percentage: "0.0%",
    color: "#84cc16",
  },
];

const STACKED_BAR_COLORS = [
  "#ff4eac", "#0091ff", "#00cba9", "#f59e0b", "#8b5cf6", 
  "#ef4444", "#06b6d4", "#f472b6", "#fbbf24", "#34d399"
];

const ToolCallsAndImages = () => {
  return (
    <div className="flex flex-col gap-32 w-full max-w-screen-xl mx-auto px-6">
      {/* Tool Calls Section */}
      <section id="tool-calls" className="flex flex-col gap-10 scroll-mt-24">
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Wrench className="size-5 text-slate-400" strokeWidth={2} />
                <a href="#tool-calls" className="hover:underline">
                  <h2 className="text-lg font-medium text-slate-500">Tool Calls</h2>
                </a>
              </div>
              <p className="text-xs font-medium text-slate-400 hidden md:flex items-center gap-1">
                Tool usage across models on OpenRouter
                <Info className="h-3.5 w-3.5 text-slate-400 cursor-help" />
              </p>
            </div>
          </div>
        </div>

        {/* Stacked Bar Chart Visualization */}
        <div className="w-full">
          <div className="h-[240px] w-full flex items-end gap-[2px] mb-4">
            {/* Generating mock bars that represent the 100% stacked view from screenshots */}
            {Array.from({ length: 12 }).map((_, barIdx) => (
               <div key={barIdx} className="flex-1 flex flex-col h-full gap-[1px]">
                  <div className="bg-[#ff4eac] flex-[45]"></div>
                  <div className="bg-[#0091ff] flex-[10]"></div>
                  <div className="bg-[#00cba9] flex-[15]"></div>
                  <div className="bg-[#f59e0b] flex-[12]"></div>
                  <div className="bg-[#8b5cf6] flex-[8]"></div>
                  <div className="bg-[#ef4444] flex-[10]"></div>
               </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-medium px-1">
            <span>Oct 13, 2025</span>
            <span>Oct 27</span>
            <span>Nov 10</span>
            <span>Nov 24</span>
            <span>Dec 8</span>
            <span>Dec 22</span>
            <span>Jan 5</span>
            <span className="opacity-0">Jan 19</span>
          </div>
          <div className="flex flex-col gap-1 mt-4 text-[11px] text-slate-400 font-medium h-0 overflow-visible relative">
            <div className="absolute left-[-2.5rem] bottom-0 flex flex-col justify-between h-[240px] text-right">
              <span>100%</span>
              <span className="mb-[30%]">60%</span>
              <span className="mb-[30%]">30%</span>
            </div>
          </div>
        </div>

        {/* Ranking List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
          {TOOL_CALLS_RANKINGS.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-1 group">
              <div className="flex items-center gap-4">
                <span className="text-[14px] font-medium text-slate-400 w-4">{item.id}.</span>
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-slate-900 leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[12px] text-slate-400">
                    by <span className="hover:underline cursor-pointer">{item.author}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[14px] font-mono text-slate-900">{item.value}</span>
                <span className="text-[12px] font-mono text-slate-400">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Images Section */}
      <section id="images" className="flex flex-col gap-10 scroll-mt-24">
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ImageIcon className="size-5 text-slate-400" strokeWidth={2} />
                <a href="#images" className="hover:underline">
                  <h2 className="text-lg font-medium text-slate-500">Images</h2>
                </a>
              </div>
              <p className="text-xs font-medium text-slate-400 hidden md:block">
                Total images processed on OpenRouter
              </p>
            </div>
          </div>
        </div>

        {/* Stacked Bar Chart Visualization */}
        <div className="w-full">
          <div className="h-[240px] w-full flex items-end gap-[2px] mb-4">
            {/* Images distribution visual */}
            {Array.from({ length: 12 }).map((_, barIdx) => (
               <div key={barIdx} className="flex-1 flex flex-col h-full gap-[1px]">
                  <div className="bg-[#f59e0b] flex-[50]"></div>
                  <div className="bg-[#ff4eac] flex-[15]"></div>
                  <div className="bg-[#0091ff] flex-[5]"></div>
                  <div className="bg-[#00cba9] flex-[10]"></div>
                  <div className="bg-[#8b5cf6] flex-[20]"></div>
               </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-medium px-1">
            <span>Oct 13, 2025</span>
            <span>Oct 27</span>
            <span>Nov 10</span>
            <span>Nov 24</span>
            <span>Dec 8</span>
            <span>Dec 22</span>
            <span>Jan 5</span>
            <span className="opacity-0">Jan 19</span>
          </div>
          <div className="flex flex-col gap-1 mt-4 text-[11px] text-slate-400 font-medium h-0 overflow-visible relative">
            <div className="absolute left-[-2.5rem] bottom-0 flex flex-col justify-between h-[240px] text-right">
              <span>100%</span>
              <span className="mb-[30%]">60%</span>
              <span className="mb-[30%]">30%</span>
            </div>
          </div>
        </div>

        {/* Ranking List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
          {IMAGES_RANKINGS.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-1 group">
              <div className="flex items-center gap-4">
                <span className="text-[14px] font-medium text-slate-400 w-4">{item.id}.</span>
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-slate-900 leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[12px] text-slate-400">
                    by <span className="hover:underline cursor-pointer">{item.author}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[14px] font-mono text-slate-900">{item.value}</span>
                <span className="text-[12px] font-mono text-slate-400">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ToolCallsAndImages;