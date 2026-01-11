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
=======

>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< Updated upstream
export default RankingsCharts;
=======
export default RankingsCharts;
>>>>>>> Stashed changes
