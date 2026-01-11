import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip as RechartsTooltip, 
  Cell 
} from 'recharts';
import { ChevronDown, BarChart3, Info } from 'lucide-react';

const data = [
  { date: 'Jan 13, 2025', v1: 1.2, v2: 0.8, v3: 0.5, v4: 0.3, v5: 0.2, v6: 0.1, others: 1.5 },
  { date: 'Jan 27', v1: 1.4, v2: 0.9, v3: 0.6, v4: 0.4, v5: 0.3, v6: 0.2, others: 1.6 },
  { date: 'Feb 10', v1: 1.8, v2: 1.1, v3: 0.7, v4: 0.5, v5: 0.4, v6: 0.3, others: 1.8 },
  { date: 'Feb 24', v1: 2.1, v2: 1.3, v3: 0.8, v4: 0.6, v5: 0.5, v6: 0.4, others: 1.9 },
  { date: 'Mar 3', v1: 2.3, v2: 1.4, v3: 0.9, v4: 0.7, v5: 0.6, v6: 0.5, others: 2.0 },
  { date: 'Mar 17', v1: 2.2, v2: 1.3, v3: 1.0, v4: 0.8, v5: 0.7, v6: 0.6, others: 2.1 },
  { date: 'Apr 7', v1: 2.5, v2: 1.5, v3: 1.1, v4: 0.9, v5: 0.8, v6: 0.7, others: 2.2 },
  { date: 'Apr 21', v1: 2.8, v2: 1.7, v3: 1.3, v4: 1.0, v5: 0.9, v6: 0.8, others: 2.3 },
  { date: 'May 5', v1: 2.9, v2: 1.8, v3: 1.4, v4: 1.1, v5: 1.0, v6: 0.9, others: 2.4 },
  { date: 'May 19', v1: 3.1, v2: 1.9, v3: 1.5, v4: 1.2, v5: 1.1, v6: 1.0, others: 2.5 },
  { date: 'Jun 9', v1: 3.3, v2: 2.1, v3: 1.6, v4: 1.3, v5: 1.2, v6: 1.1, others: 2.6 },
  { date: 'Jun 23', v1: 3.5, v2: 2.3, v3: 1.8, v4: 1.5, v5: 1.3, v6: 1.2, others: 2.7 },
  { date: 'Jul 7', v1: 3.8, v2: 2.5, v3: 2.0, v4: 1.6, v5: 1.4, v6: 1.3, others: 2.8 },
  { date: 'Jul 28', v1: 4.2, v2: 2.8, v3: 2.2, v4: 1.8, v5: 1.6, v6: 1.5, others: 3.0 },
  { date: 'Aug 11', v1: 4.5, v2: 3.0, v3: 2.4, v4: 2.0, v5: 1.8, v6: 1.7, others: 3.2 },
  { date: 'Aug 25', v1: 4.8, v2: 3.2, v3: 2.6, v4: 2.2, v5: 2.0, v6: 1.9, others: 3.4 },
  { date: 'Sep 15', v1: 5.2, v2: 3.5, v3: 2.8, v4: 2.4, v5: 2.2, v6: 2.1, others: 3.6 },
  { date: 'Sep 29', v1: 5.5, v2: 3.8, v3: 3.1, v4: 2.7, v5: 2.4, v6: 2.3, others: 3.8 },
  { date: 'Oct 13', v1: 5.8, v2: 4.1, v3: 3.4, v4: 3.0, v5: 2.7, v6: 2.6, others: 4.0 },
  { date: 'Nov 3', v1: 6.2, v2: 4.4, v3: 3.7, v4: 3.3, v5: 3.0, v6: 2.9, others: 4.2 },
  { date: 'Nov 17', v1: 6.8, v2: 4.8, v3: 4.1, v4: 3.7, v5: 3.3, v6: 3.2, others: 4.5 },
  { date: 'Dec 1', v1: 6.3, v2: 4.5, v3: 3.8, v4: 3.4, v5: 3.1, v6: 3.0, others: 4.3 },
  { date: 'Dec 15', v1: 6.1, v2: 4.4, v3: 3.7, v4: 3.3, v5: 3.0, v6: 2.9, others: 4.1 },
  { date: 'Dec 22', v1: 6.0, v2: 4.3, v3: 3.6, v4: 3.2, v5: 2.9, v6: 2.8, others: 4.0 },
];

const models = [
  { rank: 1, name: 'Claude Sonnet 4.5', author: 'anthropic', tokens: '521B tokens', change: '+50%', color: '#ec4899' },
  { rank: 6, name: 'Gemini 2.5 Flash', author: 'google', tokens: '369B tokens', change: '+3%', color: '#ec4899' },
  { rank: 2, name: 'Grok Code Fast 1', author: 'x-ai', tokens: '421B tokens', change: '+5%', color: '#3b82f6' },
  { rank: 7, name: 'DeepSeek V3.2', author: 'deepseek', tokens: '309B tokens', change: '-12%', color: '#3b82f6' },
  { rank: 3, name: 'MiMo-V2-Flash (free)', author: 'xiaomi', tokens: '384B tokens', change: '+8%', color: '#f59e0b' },
  { rank: 8, name: 'Gemini 2.5 Flash Lite', author: 'google', tokens: '248B tokens', change: '+52%', color: '#f59e0b' },
  { rank: 4, name: 'Gemini 3 Flash Preview', author: 'google', tokens: '381B tokens', change: '+39%', color: '#14b8a6' },
  { rank: 9, name: 'Grok 4.1 Fast', author: 'x-ai', tokens: '240B tokens', change: '+28%', color: '#14b8a6' },
  { rank: 5, name: 'Claude Opus 4.5', author: 'anthropic', tokens: '377B tokens', change: '+127%', color: '#22c55e' },
  { rank: 10, name: 'GLM 4.7', author: 'z-ai', tokens: '165B tokens', change: '+43%', color: '#22c55e' },
];

export default function RankingsLeaderboard() {
  return (
    <section className="w-full max-w-screen-4xl mx-auto px-6 py-12 tabular-nums bg-background">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-[30px] font-bold tracking-tight mb-8">AI Model Rankings</h1>
          
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[18px] font-semibold flex items-center gap-2">
              <BarChart3 className="size-5 text-foreground" />
              LLM Leaderboard
            </h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-between px-3 py-1.5 text-sm font-medium border border-border rounded-md bg-transparent hover:bg-accent hover:text-accent-foreground min-w-[120px]">
                This Week
                <ChevronDown className="size-4 ml-2 text-muted-foreground" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-[14px] text-muted-foreground mb-4">
            Token usage across models on OpenRouter
            <Info className="size-3.5" />
          </div>
        </div>

        {/* Chart Section */}
        <div className="w-full aspect-[21/9] min-h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
              barGap={0}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#64748b' }} 
                dy={10}
                interval={Math.floor(data.length / 8)}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#64748b' }} 
                tickFormatter={(val) => `${val}T`}
                domain={[0, 8]}
                ticks={[2, 4, 6, 8]}
              />
              <RechartsTooltip 
                cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }} 
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }}
              />
              <Bar dataKey="v1" stackId="a" fill="#ec4899" radius={[0, 0, 0, 0]} barSize={24} />
              <Bar dataKey="v2" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} barSize={24} />
              <Bar dataKey="v3" stackId="a" fill="#f59e0b" radius={[0, 0, 0, 0]} barSize={24} />
              <Bar dataKey="v4" stackId="a" fill="#14b8a6" radius={[0, 0, 0, 0]} barSize={24} />
              <Bar dataKey="v5" stackId="a" fill="#22c55e" radius={[0, 0, 0, 0]} barSize={24} />
              <Bar dataKey="v6" stackId="a" fill="#8b5cf6" radius={[0, 0, 0, 0]} barSize={24} />
              <Bar dataKey="others" stackId="a" fill="#94a3b8" radius={[2, 2, 0, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top 10 Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {Array.from({ length: 5 }).map((_, i) => {
            const leftModel = models[i * 2];
            const rightModel = models[i * 2 + 1];
            
            return (
              <React.Fragment key={i}>
                {/* Left Column Item */}
                <div className="flex items-center justify-between py-3 border-b border-border/40 hover:bg-accent/30 px-2 rounded-sm transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] text-muted-foreground font-medium w-4">{leftModel.rank}.</span>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold text-foreground">{leftModel.name}</span>
                      <span className="text-[12px] text-muted-foreground hover:underline">by {leftModel.author}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[14px] font-medium text-foreground">{leftModel.tokens}</span>
                    <span className={`text-[12px] font-medium ${leftModel.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                      {leftModel.change.startsWith('+') ? '↑' : '↓'}{leftModel.change.replace(/[+-]/, '')}
                    </span>
                  </div>
                </div>

                {/* Right Column Item */}
                <div className="flex items-center justify-between py-3 border-b border-border/40 hover:bg-accent/30 px-2 rounded-sm transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] text-muted-foreground font-medium w-4">{rightModel.rank}.</span>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold text-foreground">{rightModel.name}</span>
                      <span className="text-[12px] text-muted-foreground hover:underline">by {rightModel.author}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[14px] font-medium text-foreground">{rightModel.tokens}</span>
                    <span className={`text-[12px] font-medium ${rightModel.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                      {rightModel.change.startsWith('+') ? '↑' : '↓'}{rightModel.change.replace(/[+-]/, '')}
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Footer Show More */}
        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
            Show more
            <ChevronDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}