<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  Cell
} from 'recharts';
import { 
  Info, 
  ChevronDown, 
  BarChart3, 
  PieChart, 
  TrendingUp,
  LayoutGrid,
  Zap
} from 'lucide-react';

const llmLeaderboardData = [
  { name: 'o1', value: 92, color: '#0ea5e9' },
  { name: 'Claude 3.5 Sonnet', value: 88, color: '#ec4899' },
  { name: 'GPT-4o', value: 86, color: '#f97316' },
  { name: 'Llama 3.1 405B', value: 82, color: '#eab308' },
  { name: 'Gemini 1.5 Pro', value: 79, color: '#a855f7' },
  { name: 'Mistral Large 2', value: 75, color: '#10b981' },
];

const marketShareData = [
  { date: 'Jan', openai: 45, anthropic: 20, meta: 15, google: 10, others: 10 },
  { date: 'Feb', openai: 42, anthropic: 22, meta: 18, google: 12, others: 6 },
  { date: 'Mar', openai: 38, anthropic: 25, meta: 22, google: 10, others: 5 },
  { date: 'Apr', openai: 35, anthropic: 28, meta: 20, google: 12, others: 5 },
  { date: 'May', openai: 32, anthropic: 30, meta: 22, google: 11, others: 5 },
  { date: 'Jun', openai: 30, anthropic: 32, meta: 25, google: 10, others: 3 },
];

const categoryUsage = [
  { name: 'Programming', value: 35, color: '#0ea5e9' },
  { name: 'Creative Writing', value: 25, color: '#ec4899' },
  { name: 'Data Analysis', value: 20, color: '#f97316' },
  { name: 'Summarization', value: 15, color: '#eab308' },
  { name: 'Other', value: 5, color: '#a855f7' },
];

const RankingsCharts = () => {
  return (
    <section className="w-full bg-background pt-8 pb-16">
      <div className="container max-w-screen-4xl px-6">
        <div className="flex flex-col gap-12">
          
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-[30px] font-bold tracking-tight text-foreground">AI Model Rankings</h1>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors">
                <TrendingUp className="size-4" />
                Trends
              </button>
              <button className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors">
                <LayoutGrid className="size-4" />
                Comparison
              </button>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* LLM Leaderboard Bar Chart */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-5 text-primary" />
                  <h2 className="text-[18px] font-semibold text-foreground">LLM Leaderboard Score</h2>
                  <Info className="size-4 text-muted-foreground cursor-help" />
                </div>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  Last 30 days
                  <ChevronDown className="size-4" />
                </button>
              </div>
              <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={llmLeaderboardData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={120}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 13, fontWeight: 500, fill: '#64748b' }}
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                      {llmLeaderboardData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Market Share Stacked Area Chart */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PieChart className="size-5 text-primary" />
                  <h2 className="text-[18px] font-semibold text-foreground">Provider Market Share</h2>
                  <Info className="size-4 text-muted-foreground cursor-help" />
                </div>
                <div className="flex gap-4">
                   <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                     <span className="size-2 rounded-full bg-[#0ea5e9]" /> OpenAI
                   </div>
                   <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                     <span className="size-2 rounded-full bg-[#ec4899]" /> Anthropic
                   </div>
                </div>
              </div>
              <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={marketShareData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorOpenAI" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="date" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#64748b' }} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#64748b' }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                    />
                    <Area type="monotone" dataKey="openai" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="anthropic" stackId="1" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="meta" stackId="1" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Category Usage Chart */}
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="size-5 text-primary" />
                  <h2 className="text-[18px] font-semibold text-foreground">Usage by Category</h2>
                </div>
              </div>
              <div className="h-[250px] w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryUsage} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#64748b' }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                      {categoryUsage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Key Insights / Meta Data */}
            <div className="flex flex-col justify-center gap-6 rounded-xl border border-dashed border-border bg-slate-50/50 p-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Key Insights</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1 size-1.5 shrink-0 rounded-full bg-data-cyan" />
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>OpenAI o1</strong> continues to dominate reasoning benchmarks, maintaining a 4% lead over its nearest competitor.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 size-1.5 shrink-0 rounded-full bg-data-pink" />
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>Programming</strong> tasks remain the primary driver for high-context model usage, accounting for 35% of total API calls.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 size-1.5 shrink-0 rounded-full bg-data-orange" />
                    <p className="text-sm text-foreground leading-relaxed">
                      Market share is diversifying as <strong>Llama 3.1</strong> adoption increases among open-source focused enterprise users.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-xs text-muted-foreground">
                  Data updated daily based on anonymized usage metrics across the OpenRouter platform and public leaderboard results.
                </p>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingsCharts;