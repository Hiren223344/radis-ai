import React from 'react';
import { ChevronDown, Info, Tag } from 'lucide-react';

const CATEGORIES_DATA = [
  {
    rank: 1,
    name: "Grok Code Fast 1",
    author: "x-ai",
    tokens: "590B",
    percentage: "25.7%",
    color: "#3b82f6"
  },
  {
    rank: 2,
    name: "MiniMax M2.1",
    author: "minimax",
    tokens: "287B",
    percentage: "12.5%",
    color: "#10b981"
  },
  {
    rank: 3,
    name: "Claude Opus 4.5",
    author: "anthropic",
    tokens: "267B",
    percentage: "11.6%",
    color: "#0ea5e9"
  },
  {
    rank: 4,
    name: "Gemini 3 Flash Preview",
    author: "google",
    tokens: "192B",
    percentage: "8.3%",
    color: "#f59e0b"
  },
  {
    rank: 5,
    name: "Claude Sonnet 4.5",
    author: "anthropic",
    tokens: "159B",
    percentage: "6.9%",
    color: "#14b8a6"
  },
  {
    rank: 6,
    name: "Devstral 2 2512 (free)",
    author: "mistralai",
    tokens: "120B",
    percentage: "5.2%",
    color: "#f43f5e"
  },
  {
    rank: 7,
    name: "Mimo V2 Flash",
    author: "xiaomi",
    tokens: "94.3B",
    percentage: "4.1%",
    color: "#8b5cf6"
  },
  {
    rank: 8,
    name: "GLM 4.7",
    author: "z-ai",
    tokens: "88.5B",
    percentage: "3.9%",
    color: "#f472b6"
  },
  {
    rank: 9,
    name: "Qwen3 Next 80B A3B Instruct",
    author: "qwen",
    tokens: "56.6B",
    percentage: "2.5%",
    color: "#06b6d4"
  },
  {
    rank: 10,
    name: "Others",
    author: "unknown",
    tokens: "442B",
    percentage: "19.3%",
    color: "#ec4899"
  }
];

// Mock data for the 100% stacked bar chart
const CHART_WEEKS = [
  "Oct 6, 2025", "Oct 20", "Nov 3", "Nov 17", "Dec 1", "Dec 15", "Dec 29"
];

const STACK_COLORS = [
  "#3b82f6", "#10b981", "#0ea5e9", "#f59e0b", "#14b8a6", 
  "#f43f5e", "#8b5cf6", "#f472b6", "#06b6d4", "#ec4899"
];

const CategoriesSection: React.FC = () => {
  return (
    <div id="categories" className="flex flex-col gap-10 scroll-mt-24 w-full">
      {/* Header Container */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Tag className="size-5 text-slate-500" />
              <a href="#categories" className="hover:underline">
                <h2 className="text-lg font-medium text-slate-900">Categories</h2>
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 hidden md:flex items-center gap-1">
              Compare models by usecase on Radison
              <Info className="inline h-4 w-4 text-slate-400 cursor-pointer" />
            </p>
          </div>
          <button className="pill-button h-9 md:h-8 md:text-xs min-w-[128px] justify-between shadow-none hover:shadow-sm px-4">
            <span className="text-slate-600">Programming</span>
            <ChevronDown className="size-4 opacity-50" />
          </button>
        </div>
      </div>

      {/* 100% Stacked Bar Chart */}
      <div className="w-full">
        <div className="h-[320px] w-full flex flex-col">
          <div className="flex-1 flex items-end gap-[2%] px-[60px]">
            {CHART_WEEKS.map((week, idx) => (
              <div key={idx} className="flex-1 h-full flex flex-col-reverse rounded-t-sm overflow-hidden">
                {/* Simulated Stacked Bars */}
                {/* We alternate heights slightly to mimic the data in screenshots */}
                <div style={{ height: '30%', backgroundColor: STACK_COLORS[0] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
                <div style={{ height: '8%', backgroundColor: STACK_COLORS[1] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
                <div style={{ height: '12%', backgroundColor: STACK_COLORS[2] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
                <div style={{ height: '10%', backgroundColor: STACK_COLORS[3] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
                <div style={{ height: '7%', backgroundColor: STACK_COLORS[4] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
                <div style={{ height: '5%', backgroundColor: STACK_COLORS[5] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
                <div style={{ height: '10%', backgroundColor: STACK_COLORS[6] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
                <div style={{ height: '8%', backgroundColor: STACK_COLORS[7] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
                <div style={{ height: '5%', backgroundColor: STACK_COLORS[8] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
                <div style={{ height: '5%', backgroundColor: STACK_COLORS[9] }} className="hover:opacity-80 transition-opacity cursor-pointer"></div>
              </div>
            ))}
          </div>
          
          {/* Axis & Labels */}
          <div className="flex justify-between px-[60px] pt-4 border-t border-slate-100">
            {CHART_WEEKS.map((week, idx) => (
              <div key={idx} className="text-[11px] text-slate-400 font-medium text-center w-full">
                {week}
              </div>
            ))}
          </div>

          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-8">
            <span className="text-[11px] text-slate-400 font-medium">100%</span>
            <span className="text-[11px] text-slate-400 font-medium">60%</span>
            <span className="text-[11px] text-slate-400 font-medium">30%</span>
          </div>
        </div>
      </div>

      {/* Rankings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-4">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          {CATEGORIES_DATA.slice(0, 5).map((item) => (
            <div key={item.rank} className="flex items-center justify-between py-1 group">
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-sm w-4">{item.rank}.</span>
                <div className="size-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <div className="flex flex-col">
                  <span className="ranking-item-title group-hover:underline cursor-pointer">{item.name}</span>
                  <span className="ranking-item-author">
                    by <a href={`/authors/${item.author}`} className="hover:underline text-slate-400">{item.author}</a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="ranking-item-value">{item.tokens}</span>
                <span className="text-[11px] text-slate-400 font-medium tabular-nums">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          {CATEGORIES_DATA.slice(5, 10).map((item) => (
            <div key={item.rank} className="flex items-center justify-between py-1 group">
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-sm w-4">{item.rank}.</span>
                <div className="size-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <div className="flex flex-col">
                  <span className="ranking-item-title group-hover:underline cursor-pointer">{item.name}</span>
                  <span className="ranking-item-author">
                    by <a href={`/authors/${item.author}`} className="hover:underline text-slate-400">{item.author}</a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="ranking-item-value">{item.tokens}</span>
                <span className="text-[11px] text-slate-400 font-medium tabular-nums">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;