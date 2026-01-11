import React from 'react';
import { ChevronDown, FileText } from 'lucide-react';

const contextLengthData = [
  {
    rank: 1,
    name: 'Gemini 2.5 Flash',
    author: 'google',
    value: '47.2M',
    percentage: '9.3%',
    color: '#00CBA9',
  },
  {
    rank: 2,
    name: 'Gemini 2.5 Flash Lite',
    author: 'google',
    value: '34.5M',
    percentage: '6.8%',
    color: '#FF4EAC',
  },
  {
    rank: 3,
    name: 'Gemini 2.0 Flash',
    author: 'google',
    value: '32.2M',
    percentage: '6.3%',
    color: '#0091FF',
  },
  {
    rank: 4,
    name: 'Grok 4.1 Fast',
    author: 'x-ai',
    value: '24.3M',
    percentage: '4.8%',
    color: '#F59E0B',
  },
  {
    rank: 5,
    name: 'DeepSeek V3.2',
    author: 'deepseek',
    value: '23.3M',
    percentage: '4.6%',
    color: '#00CBA9',
  },
  {
    rank: 6,
    name: 'Gemini 3 Flash Preview',
    author: 'google',
    value: '20.9M',
    percentage: '4.1%',
    color: '#8B5CF6',
  },
  {
    rank: 7,
    name: 'MiMo-V2-Flash (free)',
    author: 'xiaomi',
    value: '20.2M',
    percentage: '4.0%',
    color: '#FF4EAC',
  },
  {
    rank: 8,
    name: 'gpt-oss-120b',
    author: 'openai',
    value: '19.7M',
    percentage: '3.9%',
    color: '#7C3AED',
  },
  {
    rank: 9,
    name: 'Mistral Nemo',
    author: 'mistralai',
    value: '18.6M',
    percentage: '3.7%',
    color: '#F59E0B',
  },
  {
    rank: 10,
    name: 'Others',
    author: 'unknown',
    value: '268M',
    percentage: '52.7%',
    color: '#FF69B4',
  },
];

const chartDates = ['Jul 21, 2025', 'Aug 11', 'Sep 1', 'Sep 22', 'Oct 13', 'Nov 3', 'Nov 24', 'Dec 15', 'Jan 5'];

export default function ContextLengthRankings() {
  return (
    <section id="context-length" className="w-full flex flex-col gap-10 scroll-mt-24 py-16">
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FileText className="size-5 text-slate-500" strokeWidth={1.5} />
              <a href="#context-length" className="hover:underline">
                <h2 className="text-[18px] font-medium text-[#64748b]">Context Length</h2>
              </a>
            </div>
            <p className="text-[12px] font-medium text-[#64748b] hidden md:block">
              Requests by prompt & completion length on Radison
            </p>
          </div>
          <button className="flex items-center justify-between whitespace-nowrap border border-[#e2e8f0] bg-white px-3 py-2 transition-colors hover:bg-[#f1f5f9] h-8 rounded-full text-[#64748b] shadow-none md:text-[12px] w-36 text-sm pl-4 pr-6">
            <span>1K - 10K tokens</span>
            <ChevronDown className="size-4 opacity-50" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Mock Stacked Bar Chart */}
        <div className="w-full h-[320px] pt-4 relative">
          <div className="absolute left-0 h-full flex flex-col justify-between text-[12px] text-[#94a3b8] font-tabular pb-10">
            <span>800M</span>
            <span>600M</span>
            <span>400M</span>
            <span>200M</span>
          </div>

          <div className="ml-12 h-full flex flex-col">
            <div className="flex-1 flex items-end justify-between gap-1 md:gap-2 pb-6 border-b border-[#e2e8f0]">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="flex-1 flex flex-col gap-[2px] min-w-[8px]">
                  <div className="bg-[#FF4EAC] w-full" style={{ height: `${20 + Math.random() * 40}px` }}></div>
                  <div className="bg-[#0091FF] w-full" style={{ height: `${10 + Math.random() * 20}px` }}></div>
                  <div className="bg-[#00CBA9] w-full" style={{ height: `${5 + Math.random() * 15}px` }}></div>
                  <div className="bg-[#F59E0B] w-full" style={{ height: `${5 + Math.random() * 25}px` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 ml-4">
              {chartDates.map((date, i) => (
                <span key={i} className="text-[12px] text-[#94a3b8] first:text-left last:text-right">
                  {date}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Ranking List - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-8">
          <div className="flex flex-col gap-4">
            {contextLengthData.slice(0, 5).map((model) => (
              <div key={model.rank} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <span className="text-[14px] text-slate-400 w-4">{model.rank}.</span>
                  <div 
                    className="size-2.5 rounded-full shrink-0" 
                    style={{ backgroundColor: model.color }}
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#0f172a] leading-tight">
                      {model.name}
                    </span>
                    <span className="text-[12px] text-[#64748b]">
                      by <span className="hover:underline cursor-pointer">{model.author}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[14px] text-[#0f172a]">{model.value}</span>
                  <span className="text-[12px] text-[#64748b]">{model.percentage}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {contextLengthData.slice(5, 10).map((model) => (
              <div key={model.rank} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <span className="text-[14px] text-slate-400 w-4">{model.rank}.</span>
                  <div 
                    className="size-2.5 rounded-full shrink-0" 
                    style={{ backgroundColor: model.color }}
                  />
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#0f172a] leading-tight">
                      {model.name}
                    </span>
                    <span className="text-[12px] text-[#64748b]">
                      by <span className="hover:underline cursor-pointer">{model.author}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[14px] text-[#0f172a]">{model.value}</span>
                  <span className="text-[12px] text-[#64748b]">{model.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}