import React from 'react';
import { ChevronDown, Languages as LanguagesIcon, Info } from 'lucide-react';

/**
 * LanguagesRankings Component
 * 
 * Clones the "Languages" leaderboard section of Radison.
 * Features a stacked bar chart visualization and a two-column numbered list 
 * of top-performing models for natural language usage.
 */

interface LeaderboardItem {
  rank: number;
  name: string;
  author: string;
  authorUrl: string;
  value: string;
  percentage: string;
  dotColor: string;
}

const languagesLeaderboardData: LeaderboardItem[] = [
  { rank: 1, name: 'Grok Code Fast 1', author: 'x-ai', authorUrl: '#', value: '137B', percentage: '11.5%', dotColor: '#f59e0b' },
  { rank: 2, name: 'Mimo V2 Flash', author: 'xiaomi', authorUrl: '#', value: '92.6B', percentage: '7.8%', dotColor: '#3b82f6' },
  { rank: 3, name: 'DeepSeek V3.2', author: 'deepseek', authorUrl: '#', value: '80.7B', percentage: '6.8%', dotColor: '#10b981' },
  { rank: 4, name: 'Claude Sonnet 4.5', author: 'anthropic', authorUrl: '#', value: '78.2B', percentage: '6.6%', dotColor: '#f43f5e' },
  { rank: 5, name: 'Gemini 2.5 Flash Lite', author: 'google', authorUrl: '#', value: '70.8B', percentage: '5.9%', dotColor: '#0ea5e9' },
  { rank: 6, name: 'Gemini 3 Flash Preview', author: 'google', authorUrl: '#', value: '64.6B', percentage: '5.4%', dotColor: '#8b5cf6' },
  { rank: 7, name: 'Claude Opus 4.5', author: 'anthropic', authorUrl: '#', value: '47B', percentage: '3.9%', dotColor: '#f472b6' },
  { rank: 8, name: 'Devstral 2 2512 (free)', author: 'mistralai', authorUrl: '#', value: '42.8B', percentage: '3.6%', dotColor: '#ea580c' },
  { rank: 9, name: 'Gemini 2.5 Flash', author: 'google', authorUrl: '#', value: '40.6B', percentage: '3.4%', dotColor: '#f43f5e' },
  { rank: 10, name: 'Others', author: 'unknown', authorUrl: '#', value: '538B', percentage: '45.1%', dotColor: '#f472b6' },
];

export default function LanguagesRankings() {
  return (
    <section className="container section-gap px-6 max-w-[1440px]">
      <div id="languages" className="flex flex-col gap-10 scroll-mt-24">
        {/* Section Header */}
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="flex items-center md:items-start justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LanguagesIcon className="size-5 text-slate-500" />
                <a href="#languages" className="hover:underline">
                  <h2 className="text-lg font-medium text-slate-500">Languages</h2>
                </a>
              </div>
              <p className="text-xs font-medium text-slate-500 hidden md:block">
                Compare models by natural language on Radison
                <Info className="inline h-4 w-4 ml-1 text-muted-foreground cursor-help" />
              </p>
            </div>

            {/* Language Selection Filter */}
            <button className="pill-button h-9 rounded-full px-4 text-sm text-slate-500 border-slate-200">
              <span>English</span>
              <ChevronDown className="size-4 opacity-50" />
            </button>
          </div>
        </div>

        {/* 100% Stacked Bar Chart Simulation */}
        <div className="chart-container h-[200px] md:h-[300px] mb-10 w-full overflow-hidden">
          <div className="flex items-end h-[240px] md:h-full gap-[2px] w-full">
            {/* Generating 30 vertical bars for the timeline effect */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="flex-1 flex flex-col h-full bg-slate-50">
                <div style={{ height: '35%' }} className="w-full bg-[#f472b6]" /> {/* Others/Top */}
                <div style={{ height: '5%' }} className="w-full bg-[#8b5cf6]" />
                <div style={{ height: '40%' }} className="w-full bg-[#f472b6] opacity-90" /> {/* Large pink block typical for Lang charts */}
                <div style={{ height: '5%' }} className="w-full bg-[#10b981]" />
                <div style={{ height: '10%' }} className="w-full bg-[#3b82f6]" />
                <div style={{ height: '5%' }} className="w-full bg-[#f59e0b]" />
              </div>
            ))}
          </div>
          
          {/* Chart X-Axis Labels */}
          <div className="flex justify-between mt-4 text-[10px] md:text-xs text-muted-foreground font-medium">
            <span>Dec 19, 2025</span>
            <span>Dec 22</span>
            <span>Dec 25</span>
            <span>Dec 28</span>
            <span>Dec 31</span>
            <span>Jan 3</span>
            <span>Jan 6</span>
            <span>Jan 9</span>
          </div>

          {/* Chart Y-Axis Labels */}
          <div className="absolute left-[-40px] top-0 h-full flex flex-col justify-between py-0 text-[10px] md:text-xs text-muted-foreground text-right w-8 pointer-events-none">
            <span className="translate-y-[-50%]">100%</span>
            <span className="translate-y-[-50%]">60%</span>
            <span className="translate-y-[-50%]">30%</span>
          </div>
        </div>

        {/* Modal List - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-tabular">
          {/* Split data into two columns for desktop list view */}
          {[languagesLeaderboardData.slice(0, 5), languagesLeaderboardData.slice(5)].map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {column.map((item) => (
                <div key={item.rank} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-sm font-medium text-slate-400">{item.rank}.</span>
                    <div 
                      className="size-2 rounded-full" 
                      style={{ backgroundColor: item.dotColor }} 
                    />
                    <div className="flex flex-col">
                      <span className="ranking-item-title leading-tight hover:underline cursor-pointer">
                        {item.name}
                      </span>
                      <span className="ranking-item-author">
                        by <a href={item.authorUrl} className="hover:underline text-slate-400 font-medium">{item.author}</a>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="ranking-item-value">{item.value}</span>
                    <span className="text-[12px] font-medium text-slate-400">{item.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}