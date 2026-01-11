import React from 'react';
import { LucideImage, ChevronDown } from 'lucide-react';

/**
 * ImagesRanking Component
 * Clones the "Images" section from OpenRouter's Rankings page.
 * Visualizes total images processed per model over time with a summary list.
 */

interface RankingItem {
  rank: number;
  model: string;
  author: string;
  value: string;
  percentage: string;
  color: string;
}

const rankingData: RankingItem[] = [
  {
    rank: 1,
    model: "Model",
    author: "test",
    value: "0",
    percentage: "0.0%",
    color: "#84cc16", // Lime-500 equivalent color from screenshot
  },
];

const ImagesRanking: React.FC = () => {
  return (
    <section id="images" className="flex flex-col gap-10 scroll-mt-24 w-full max-w-[1280px] mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <LucideImage className="size-5 text-slate-500" />
              <a href="#images" className="hover:underline">
                <h2 className="text-lg font-medium text-slate-900">Images</h2>
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 hidden md:block">
              Total images processed on OpenRouter
            </p>
          </div>
          
          {/* Time range selector - simplified placeholder matching screenshot UI */}
          <div className="flex items-center justify-between whitespace-nowrap border border-slate-200 bg-white px-3 py-2 transition-colors hover:bg-slate-50 relative h-8 rounded-full text-slate-500 shadow-none hover:shadow-sm text-xs w-32 cursor-pointer">
            <span>This Week</span>
            <ChevronDown className="size-4 opacity-50" />
          </div>
        </div>
      </div>

      {/* Bar Chart Visualization Placeholder */}
      <div className="w-full h-80 relative mt-10">
        <div className="absolute inset-0 flex flex-col justify-end gap-1">
          {/* Mock Chart Area - 100% stacked bar representation */}
          <div className="flex items-end h-full gap-[2px] w-full">
            {/* Generating mock bars that resemble the 100% stacked style in screenshot */}
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex-1 flex flex-col h-full rounded-t-sm overflow-hidden">
                <div style={{ height: `${20 + Math.random() * 30}%`, backgroundColor: '#0088ff' }} />
                <div style={{ height: `${10 + Math.random() * 20}%`, backgroundColor: '#10b981' }} />
                <div style={{ height: `${15 + Math.random() * 25}%`, backgroundColor: '#ffbb28' }} />
                <div style={{ height: `${5 + Math.random() * 15}%`, backgroundColor: '#ff1f9d' }} />
                <div style={{ height: '100%', backgroundColor: '#e2e8f0' }} className="flex-1" />
              </div>
            ))}
          </div>

          {/* X Axis Labels */}
          <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-medium">
            <span>Oct 13, 2025</span>
            <span>Oct 27</span>
            <span>Nov 10</span>
            <span>Nov 24</span>
            <span>Dec 8</span>
            <span>Dec 22</span>
            <span>Jan 5</span>
            <span>Jan 19</span>
          </div>

          {/* Y Axis Labels (Left-aligned as per screenshot) */}
          <div className="absolute left-[-40px] top-0 bottom-6 flex flex-col justify-between text-[10px] text-slate-400 font-medium pointer-events-none">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
          </div>
        </div>
      </div>

      {/* Ranking List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 mt-8">
        {rankingData.map((item) => (
          <div 
            key={item.rank} 
            className="flex items-center justify-between py-3 px-2 border-b border-transparent hover:bg-slate-50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-slate-400 w-4">{item.rank}.</span>
              <div 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900 group-hover:underline underline-offset-2">
                  {item.model}
                </span>
                <span className="text-xs text-slate-500">
                  by <span className="hover:underline cursor-pointer">{item.author}</span>
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-end tabular-nums">
              <span className="text-sm font-medium text-slate-900">{item.value}</span>
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                {item.percentage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImagesRanking;