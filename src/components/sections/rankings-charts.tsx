import React, { useState } from 'react';
import { ChevronDown, Info, BarChart2 } from 'lucide-react';

/**
 * AI Model Rankings Section
 * 
 * Features:
 * - Header with "AI Model Rankings" title
 * - "LLM Leaderboard" chart section with a time filter dropdown
 * - Stacked bar chart representing token usage (simulated with CSS for accuracy)
 * - Ranked list of models (2-column layout) with specific metrics
 * - "Show more" interactive dropdown
 */

const RankingsCharts = () => {
  const [timeFilter, setTimeFilter] = useState('This Week');
  const [showMoreModels, setShowMoreModels] = useState(false);

  const topModels = [
    {
      rank: 1,
      name: 'Claude Sonnet 4.5',
      author: 'anthropic',
      tokens: '521B tokens',
      change: '↑ 50%',
      changeType: 'positive',
    },
    {
      rank: 6,
      name: 'Gemini 2.5 Flash',
      author: 'google',
      tokens: '369B tokens',
      change: '↑ 3%',
      changeType: 'positive',
    },
    {
      rank: 2,
      name: 'Grok Code Fast 1',
      author: 'x-ai',
      tokens: '421B tokens',
      change: '↑ 5%',
      changeType: 'positive',
    },
    {
      rank: 7,
      name: 'DeepSeek V3.2',
      author: 'deepseek',
      tokens: '309B tokens',
      change: '↓ 12%',
      changeType: 'negative',
    },
    {
      rank: 3,
      name: 'MiMo - V2 - Flash (free)',
      author: 'xiaomi',
      tokens: '384B tokens',
      change: '↑ 8%',
      changeType: 'positive',
    },
    {
      rank: 8,
      name: 'Gemini 2.5 Flash Lite',
      author: 'google',
      tokens: '248B tokens',
      change: '↑ 52%',
      changeType: 'positive',
    },
    {
      rank: 4,
      name: 'Gemini 3 Flash Preview',
      author: 'google',
      tokens: '381B tokens',
      change: '↑ 39%',
      changeType: 'positive',
    },
    {
      rank: 9,
      name: 'Grok 4.1 Fast',
      author: 'x-ai',
      tokens: '240B tokens',
      change: '↑ 26%',
      changeType: 'positive',
    },
    {
      rank: 5,
      name: 'Claude Opus 4.5',
      author: 'anthropic',
      tokens: '377B tokens',
      change: '↑ 127%',
      changeType: 'positive',
    },
    {
      rank: 10,
      name: 'GLM 4.7',
      author: 'z-ai',
      tokens: '165B tokens',
      change: '↑ 43%',
      changeType: 'positive',
    },
  ];

  // Helper to reorder the models for a 2-column layout (1, 6, 2, 7...)
  const getPairs = (arr: typeof topModels) => {
    const pairs = [];
    const len = arr.length / 2;
    for (let i = 0; i < len; i++) {
        pairs.push(arr[i * 2]);
        pairs.push(arr[i * 2 + 1]);
    }
    return pairs;
  };

  // Stacked bar chart data visualization blocks
  const chartWeeks = [
    { label: 'Jan 13, 2025', height: '15%' },
    { label: '', height: '18%' },
    { label: '', height: '16%' },
    { label: '', height: '20%' },
    { label: '', height: '22%' },
    { label: '', height: '21%' },
    { label: 'Mar 3', height: '25%' },
    { label: '', height: '27%' },
    { label: '', height: '24%' },
    { label: '', height: '23%' },
    { label: '', height: '29%' },
    { label: '', height: '32%' },
    { label: 'Apr 21', height: '30%' },
    { label: '', height: '35%' },
    { label: '', height: '33%' },
    { label: '', height: '31%' },
    { label: '', height: '36%' },
    { label: '', height: '34%' },
    { label: 'Jun 9', height: '38%' },
    { label: '', height: '40%' },
    { label: '', height: '37%' },
    { label: '', height: '39%' },
    { label: '', height: '42%' },
    { label: '', height: '45%' },
    { label: 'Jul 28', height: '48%' },
    { label: '', height: '52%' },
    { label: '', height: '50%' },
    { label: '', height: '47%' },
    { label: '', height: '55%' },
    { label: '', height: '53%' },
    { label: 'Sep 15', height: '58%' },
    { label: '', height: '62%' },
    { label: '', height: '60%' },
    { label: '', height: '59%' },
    { label: '', height: '65%' },
    { label: '', height: '68%' },
    { label: 'Nov 3', height: '72%' },
    { label: '', height: '85%' }, // Peak
    { label: '', height: '70%' },
    { label: '', height: '73%' },
    { label: '', height: '75%' },
    { label: 'Dec 22', height: '74%' },
  ];

  const barColors = [
    '#f43f5e', // Pink
    '#3b82f6', // Blue
    '#8b5cf6', // Violet
    '#10b981', // Emerald
    '#f59e0b', // Amber
    '#0ea5e9', // Sky
    '#ec4899', // Rose
    '#6366f1', // Indigo
  ];

  return (
    <section className="w-full bg-white px-6 py-8">
      <div className="mx-auto max-w-screen-4xl">
        {/* Main Title */}
        <h1 className="mb-8 text-[30px] font-semibold tracking-tight text-[#020617]">
          AI Model Rankings
        </h1>

        {/* LLM Leaderboard Container */}
        <div className="mb-12">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BarChart2 className="size-4 text-[#64748b]" />
              <h2 className="text-[18px] font-semibold text-[#020617]">LLM Leaderboard</h2>
            </div>
            
            <button className="inline-flex h-8 items-center gap-2 rounded-full border border-[#e2e8f0] bg-transparent px-3 text-[13px] font-medium text-[#020617] hover:bg-[#f1f5f9]">
              {timeFilter}
              <ChevronDown className="size-3 text-[#64748b]" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 mb-8">
            <span className="text-[14px] text-[#64748b]">Token usage across models on OpenRouter</span>
            <Info className="size-3.5 text-[#94a3b8] cursor-help" />
          </div>

          {/* Chart Area */}
          <div className="relative mb-12 flex h-[350px] w-full flex-col">
            {/* Y-Axis Labels */}
            <div className="absolute left-[-10px] top-0 flex h-full flex-col justify-between text-[12px] font-mono text-[#64748b]">
              <span>8T</span>
              <span>6T</span>
              <span>4T</span>
              <span>2T</span>
              <span className="opacity-0">0</span>
            </div>

            {/* Bars Area */}
            <div className="ml-10 flex h-full items-end gap-[2px] border-b border-[#e2e8f0] pb-[1px]">
              {chartWeeks.map((week, idx) => (
                <div key={idx} className="group relative flex flex-1 flex-col items-center justify-end h-full">
                  <div 
                    className="w-full flex flex-col-reverse overflow-hidden rounded-t-[2px] transition-all hover:opacity-80"
                    style={{ height: week.height }}
                  >
                    {barColors.map((color, cIdx) => (
                      <div 
                        key={cIdx} 
                        className="w-full" 
                        style={{ 
                          backgroundColor: color, 
                          flexGrow: Math.max(1, 8 - cIdx) 
                        }} 
                      />
                    ))}
                  </div>
                  {/* X-Axis labels */}
                  {week.label && (
                    <div className="absolute top-[calc(100%+8px)] whitespace-nowrap text-[12px] font-mono text-[#64748b]">
                      {week.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard Table / Grid */}
          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
            {topModels.map((model, idx) => (
              <div 
                key={idx} 
                className="flex items-start justify-between border-b border-transparent py-2 transition-colors hover:bg-[#f8fafc]/50"
              >
                <div className="flex items-start gap-3">
                  <span className="w-5 text-[14px] font-mono text-[#64748b]">{model.rank}.</span>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#0f172a] leading-tight">
                      {model.name}
                    </span>
                    <span className="flex items-center gap-1 text-[12px] text-[#64748b]">
                      by <a href={`/models?q=${model.author}`} className="underline decoration-transparent underline-offset-2 transition-colors hover:decoration-[#64748b]">{model.author}</a>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-[14px] font-mono text-[#64748b]">
                    {model.tokens}
                  </span>
                  <span className={`text-[12px] font-mono ${model.changeType === 'positive' ? 'text-emerald-600' : 'text-rose-500'}`}>
                    {model.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Dropdown */}
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setShowMoreModels(!showMoreModels)}
              className="flex items-center gap-2 text-[13px] font-medium text-[#64748b] transition-colors hover:text-[#0f172a]"
            >
              Show more
              <ChevronDown className={`size-4 transition-transform duration-200 ${showMoreModels ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingsCharts;