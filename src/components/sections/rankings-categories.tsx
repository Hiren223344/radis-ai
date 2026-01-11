import React from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { ChevronDown, Info, Tag } from 'lucide-react';

/**
 * RankingsCategories Component
 * Clones the "Categories" section of OpenRouter's AI Model Rankings.
 * Includes a stacked percent bar chart and a detailed ranked list.
 */

interface ModelRank {
  rank: number;
  name: string;
  author: string;
  tokens: string;
  percentage: string;
  color: string;
}

const rankingData: ModelRank[] = [
  { rank: 1, name: "Grok Code Fast 1", author: "x-ai", tokens: "590B", percentage: "25.7%", color: "#3b82f6" },
  { rank: 2, name: "MiniMax M2.1", author: "minimax", tokens: "287B", percentage: "12.5%", color: "#10b981" },
  { rank: 3, name: "Claude Opus 4.5", author: "anthropic", tokens: "267B", percentage: "11.6%", color: "#059669" },
  { rank: 4, name: "Gemini 3 Flash Preview", author: "google", tokens: "192B", percentage: "8.3%", color: "#f87171" },
  { rank: 5, name: "Claude Sonnet 4.5", author: "anthropic", tokens: "159B", percentage: "6.9%", color: "#14b8a6" },
  { rank: 6, name: "Devstral 2 2512 (free)", author: "mistralai", tokens: "120B", percentage: "5.2%", color: "#f59e0b" },
  { rank: 7, name: "Mimo V2 Flash", author: "xiaomi", tokens: "94.3B", percentage: "4.1%", color: "#3b82f6" },
  { rank: 8, name: "GLM 4.7", author: "z-ai", tokens: "88.5B", percentage: "3.9%", color: "#a855f7" },
  { rank: 9, name: "Qwen3 Next 80B A3B Instruct", author: "qwen", tokens: "56.6B", percentage: "2.5%", color: "#2dd4bf" },
  { rank: 10, name: "Others", author: "unknown", tokens: "442B", percentage: "19.3%", color: "#ec4899" },
];

// Mock data for the stacked bar chart columns
const chartColumns = [
  { date: "Oct 6, 2025", segments: ["#3b82f6", "#10b981", "#059669", "#f87171", "#14b8a6", "#f59e0b", "#a855f7", "#ec4899"] },
  { date: "Oct 20", segments: ["#3b82f6", "#10b981", "#059669", "#f87171", "#14b8a6", "#f59e0b", "#a855f7", "#ec4899"] },
  { date: "Nov 3", segments: ["#3b82f6", "#10b981", "#059669", "#f87171", "#14b8a6", "#f59e0b", "#a855f7", "#ec4899"] },
  { date: "Nov 17", segments: ["#3b82f6", "#10b981", "#059669", "#f87171", "#14b8a6", "#f59e0b", "#a855f7", "#ec4899"] },
  { date: "Dec 1", segments: ["#3b82f6", "#10b981", "#059669", "#f87171", "#14b8a6", "#f59e0b", "#a855f7", "#ec4899"] },
  { date: "Dec 15", segments: ["#3b82f6", "#10b981", "#059669", "#f87171", "#14b8a6", "#f59e0b", "#a855f7", "#ec4899"] },
  { date: "Dec 29", segments: ["#3b82f6", "#10b981", "#059669", "#f87171", "#14b8a6", "#f59e0b", "#a855f7", "#ec4899"] },
];

export default function RankingsCategories() {
  return (
    <section id="categories" className="flex flex-col gap-10 scroll-mt-24 w-full tabular-nums">
      {/* Header Area */}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import { ChevronDown, Info, LayoutGrid, Languages, Code2, Maximize2, Wrench } from 'lucide-react';

/**
 * RankingsCategories Component
 * 
 * Clones the detailed ranking sections for Categories, Languages, Programming, 
 * Context Length, and Tool Calls. 
 * 
 * Theme: Light
 * Styling: Tailwind CSS + Shadcn/UI principles
 */

const RankingSection = ({ 
  id, 
  title, 
  subtitle, 
  icon: Icon, 
  imageSrc 
}: { 
  id: string; 
  title: string; 
  subtitle: string; 
  icon: any; 
  imageSrc?: string;
}) => {
  return (
    <div id={id} className="flex flex-col gap-10 scroll-mt-24">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
              <Tag className="size-5 text-slate-500" strokeWidth={2.5} />
              <a href="#categories" className="hover:underline">
                <h2 className="text-[18px] font-medium text-slate-500">Categories</h2>
              </a>
            </div>
            <p className="text-[12px] font-medium text-slate-500 hidden md:flex items-center gap-1">
              Compare models by usecase on OpenRouter
              <Info className="h-4 w-4 text-slate-400 cursor-pointer" />
            </p>
          </div>

          {/* Filter Dropdown */}
          <button className="flex items-center justify-between border border-slate-200 bg-white px-4 py-2 hover:bg-slate-50 transition-colors h-9 rounded-full text-slate-500 text-[13px] min-w-[130px] shadow-none">
            <span>Programming</span>
            <ChevronDown className="size-4 opacity-50 ml-2" />
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
              <Icon className="size-5 text-[#687076]" />
              <a href={`#${id}`} className="hover:underline">
                <h2 className="text-[18px] font-medium text-[#0f172a]">{title}</h2>
              </a>
            </div>
            <p className="text-[12px] font-medium text-[#64748b] hidden md:flex items-center gap-1">
              {subtitle}
              <Info className="h-4 w-4 text-[#64748b]/60 cursor-help" />
            </p>
          </div>
          
          <button className="flex items-center justify-between whitespace-nowrap border border-[#e2e8f0] bg-white px-4 py-2 transition-colors hover:bg-[#f1f5f9]/60 focus:outline-none h-8 rounded-full text-[#64748b] text-[12px] font-medium shadow-none hover:shadow-sm w-32">
            <span>This Week</span>
            <ChevronDown className="size-4 opacity-50" />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
          </button>
        </div>
      </div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      {/* Stacked Percentage Chart */}
      <div className="w-full">
        <div className="relative h-[320px] w-full flex items-end justify-between px-2 border-b border-transparent">
          {/* Y-Axis Labels */}
          <div className="absolute left-[-45px] top-0 h-full flex flex-col justify-between text-[11px] text-slate-400 py-1">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
            <span className="opacity-0">0%</span>
          </div>

          {/* Chart Content */}
          <div className="flex-1 flex items-end justify-around h-full pt-4">
            {chartColumns.map((col, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 h-full w-full max-w-[48px]">
                <div className="w-full h-full flex flex-col-reverse rounded-sm overflow-hidden">
                  {/* Mimicking stacked bar segments */}
                  <div style={{ height: '35%', backgroundColor: col.segments[0] }} className="w-full transition-opacity hover:opacity-80 cursor-pointer" />
                  <div style={{ height: '10%', backgroundColor: col.segments[1] }} className="w-full transition-opacity hover:opacity-80 cursor-pointer" />
                  <div style={{ height: '12%', backgroundColor: col.segments[2] }} className="w-full transition-opacity hover:opacity-80 cursor-pointer" />
                  <div style={{ height: '8%', backgroundColor: col.segments[3] }} className="w-full transition-opacity hover:opacity-80 cursor-pointer" />
                  <div style={{ height: '7%', backgroundColor: col.segments[4] }} className="w-full transition-opacity hover:opacity-80 cursor-pointer" />
                  <div style={{ height: '5%', backgroundColor: col.segments[5] }} className="w-full transition-opacity hover:opacity-80 cursor-pointer" />
                  <div style={{ height: '5%', backgroundColor: col.segments[6] }} className="w-full transition-opacity hover:opacity-80 cursor-pointer" />
                  <div style={{ height: '18%', backgroundColor: col.segments[7] }} className="w-full transition-opacity hover:opacity-80 cursor-pointer" />
                </div>
                <span className="text-[11px] text-slate-400 whitespace-nowrap">{col.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Ranking Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mt-4">
        {rankingData.map((item) => (
          <div key={item.rank} className="flex items-center justify-between py-1 group">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-[14px] w-5">{item.rank}.</span>
              <div 
                className="size-2.5 rounded-full shrink-0" 
                style={{ backgroundColor: item.color }} 
              />
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-slate-900 leading-tight cursor-pointer hover:underline">
                  {item.name}
                </span>
                <span className="text-[12px] text-slate-500">
                  by <span className="hover:underline cursor-pointer">{item.author}</span>
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[14px] font-medium text-slate-700">{item.tokens} tokens</div>
              <div className="text-[12px] text-slate-400">{item.percentage}</div>
            </div>
          </div>
        ))}
      </div>
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      {/* Placeholder for Data Visualizations based on provided screenshots */}
      <div className="w-full bg-white rounded-md flex flex-col items-center justify-center min-h-[320px]">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={`${title} rankings chart`} 
            className="w-full h-auto object-contain max-h-[400px]"
          />
        ) : (
          <div className="w-full flex items-center justify-center border border-dashed border-[#e2e8f0] rounded-lg h-[320px] bg-[#f8fafc]">
            <span className="text-[#94a3b8] text-sm">Visualizing {title} Data...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default function RankingsCategories() {
  // Mapping the specific assets provided in the prompt to the correct sections
  // Using the fallback assets if specific ones aren't clearly labeled
  const assetsMap = {
    categories: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_8.png",
    languages: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_9.png",
    programming: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_10.png",
    context: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_11.png",
    toolcalls: "" // Fallback to placeholder
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 py-12 flex flex-col gap-32">
      {/* Categories Section */}
      <RankingSection 
        id="categories"
        title="Categories"
        subtitle="Compare models by usecase on OpenRouter"
        icon={LayoutGrid}
        imageSrc={assetsMap.categories}
      />

      {/* Languages Section */}
      <RankingSection 
        id="languages"
        title="Languages"
        subtitle="Compare models by natural language on OpenRouter"
        icon={Languages}
        imageSrc={assetsMap.languages}
      />

      {/* Programming Section */}
      <RankingSection 
        id="programming"
        title="Programming"
        subtitle="Compare models by programming language on OpenRouter"
        icon={Code2}
        imageSrc={assetsMap.programming}
      />

      {/* Context Length Section */}
      <RankingSection 
        id="context-length"
        title="Context Length"
        subtitle="Requests by prompt & completion length on OpenRouter"
        icon={Maximize2}
        imageSrc={assetsMap.context}
      />

      {/* Tool Calls Section */}
      <RankingSection 
        id="tool-calls"
        title="Tool Calls"
        subtitle="Tool usage across models on OpenRouter"
        icon={Wrench}
        imageSrc={assetsMap.toolcalls}
      />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </section>
  );
}