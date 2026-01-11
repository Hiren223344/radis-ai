import React from 'react';
import { ChevronRight } from 'lucide-react';

interface AppItem {
  rank: number;
  name: string;
  description: string;
  usage: string;
  usageUnit: string;
  icon?: string;
  isNew?: boolean;
}

const topAppsData: AppItem[] = [
  { rank: 1, name: "Janitor AI", description: "Character chat and creation", usage: "45.7B", usageUnit: "tokens" },
  { rank: 2, name: "Kilo Code", description: "AI coding agent for VS Code", usage: "45.5B", usageUnit: "tokens" },
  { rank: 3, name: "liteLLM", description: "Open-source library to simplify L...", usage: "30.1B", usageUnit: "tokens" },
  { rank: 4, name: "BLACKBOXAI", description: "AI agent for builders", usage: "27.8B", usageUnit: "tokens" },
  { rank: 5, name: "Roo Code", description: "A whole dev team of AI agents in ...", usage: "27.6B", usageUnit: "tokens" },
  { rank: 6, name: "Cline", description: "Autonomous coding agent right in...", usage: "18.5B", usageUnit: "tokens" },
  { rank: 7, name: "Lemonade", description: "new", usage: "9.96B", usageUnit: "tokens", isNew: true },
  { rank: 8, name: "HammerAI", description: "Chat with AI characters for free", usage: "8.48B", usageUnit: "tokens" },
  { rank: 9, name: "SillyTavern", description: "LLM frontend for power users", usage: "8.22B", usageUnit: "tokens" },
  { rank: 10, name: "Claude", description: "The AI for problem solvers", usage: "4.97B", usageUnit: "tokens" },
  { rank: 11, name: "New API", description: "Unified AI framework", usage: "4.61B", usageUnit: "tokens" },
  { rank: 12, name: "Chub AI", description: "GenAI for everyone", usage: "4.4B", usageUnit: "tokens" },
  { rank: 13, name: "Sophia's LoreBary", description: "new", usage: "4.1B", usageUnit: "tokens", isNew: true },
  { rank: 14, name: "JobLeads LLM", description: "Use AI to find jobs for you", usage: "3.99B", usageUnit: "tokens" },
  { rank: 15, name: "Stock Qualitative Screen...", description: "new", usage: "3.98B", usageUnit: "tokens", isNew: true },
  { rank: 16, name: "Portkey AI", description: "Control panel for AI apps", usage: "2.75B", usageUnit: "tokens" },
  { rank: 17, name: "OpenCharacter", description: "Open-source recreation of the ol...", usage: "2.64B", usageUnit: "tokens" },
  { rank: 18, name: "GDevelop", description: "AI-powered game engine", usage: "2.06B", usageUnit: "tokens" },
  { rank: 19, name: "Pax Historia", description: "An alternate history sandbox game", usage: "2.04B", usageUnit: "tokens" },
  { rank: 20, name: "JuicyChat", description: "new", usage: "1.91B", usageUnit: "tokens", isNew: true },
];

const AppRow = ({ app }: { app: AppItem }) => (
  <div className="flex items-center justify-between py-3 border-b border-[#e2e8f0] last:border-0">
    <div className="flex items-center gap-4 flex-1 min-w-0">
      <span className="w-6 text-[14px] text-[#64748b] font-medium tabular-nums shrink-0">
        {app.rank}.
      </span>
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-md bg-[#f1f5f9] flex items-center justify-center shrink-0 border border-[#e2e8f0]">
           {/* Fallback for missing icon assets */}
           <div className="w-4 h-4 bg-[#94a3b8] rounded-sm opacity-20" />
        </div>
        <div className="flex flex-col truncate">
          <div className="flex items-center gap-1.5">
            <h4 className="text-[14px] font-semibold text-[#020817] truncate hover:underline cursor-pointer">
              {app.name}
            </h4>
            <ChevronRight className="w-3 h-3 text-[#94a3b8] shrink-0" />
          </div>
          {app.isNew ? (
             <span className="text-[12px] text-[#4f46e5] font-medium leading-tight">new</span>
          ) : (
            <p className="text-[12px] text-[#64748b] truncate leading-tight">
              {app.description}
            </p>
          )}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-end shrink-0 ml-4">
      <span className="text-[14px] font-medium text-[#020817] tabular-nums">
        {app.usage}{" "}
        <span className="text-[#64748b] font-normal">{app.usageUnit}</span>
      </span>
    </div>
  </div>
);

export default function TopAppsGrid() {
  const leftColumn = topAppsData.slice(0, 10);
  const rightColumn = topAppsData.slice(10, 20);

  return (
    <section className="w-full max-w-screen-4xl mx-auto px-6 py-12 bg-white">
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-[18px] font-semibold text-[#020817] flex items-center gap-2">
            <svg 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Top Apps
          </h2>
          <p className="text-[13px] text-[#64748b]">
            Largest public apps <span className="text-[#4f46e5] cursor-pointer hover:underline">opting into</span> usage tracking on OpenRouter
          </p>
        </div>
        
        <div className="relative">
          <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium border border-[#e2e8f0] rounded-md bg-white hover:bg-[#f1f5f9] transition-colors">
            Today
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" className="opacity-50">
              <path d="M3 4.5L6 7.5L9 4.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 mt-6">
        <div className="flex flex-col">
          {leftColumn.map((app) => (
            <AppRow key={app.rank} app={app} />
          ))}
        </div>
        <div className="flex flex-col">
          {rightColumn.map((app) => (
            <AppRow key={app.rank} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}