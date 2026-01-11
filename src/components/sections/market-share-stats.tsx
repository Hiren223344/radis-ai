import React from 'react';
import { ChevronDown, Info } from 'lucide-react';

const ChartHeader = ({ icon: Icon, title, description, selector }: { icon: any, title: string, description: string, selector?: string }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-1">
      <h2 className="text-[18px] font-semibold flex items-center gap-2">
        <Icon className="size-4" />
        {title}
      </h2>
      {selector && (
        <button className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-md text-xs font-medium text-muted-foreground hover:bg-accent transition-colors">
          {selector}
          <ChevronDown className="size-3" />
        </button>
      )}
    </div>
    <p className="text-xs text-muted-foreground flex items-center gap-1">
      {description}
      <Info className="size-3" />
    </p>
  </div>
);

const MarketShareChart = () => {
  // Mock data representing the colorful 100% stacked bars seen in snapshots
  const columns = Array.from({ length: 40 });
  const colors = [
    '#3b82f6', // blue
    '#14b8a6', // teal
    '#ec4899', // pink
    '#f59e0b', // orange
    '#8b5cf6', // purple
    '#22c55e', // green
    '#ef4444', // red
  ];

  return (
    <div className="w-full">
      <div className="h-[200px] flex items-end gap-[2px] w-full mb-4">
        {columns.map((_, i) => (
          <div key={i} className="flex-1 h-full flex flex-col-reverse group cursor-pointer">
            <div className="w-full bg-blue-500 transition-all" style={{ height: `${20 + Math.random() * 20}%` }} />
            <div className="w-full bg-teal-500 transition-all" style={{ height: `${10 + Math.random() * 15}%` }} />
            <div className="w-full bg-pink-500 transition-all" style={{ height: `${15 + Math.random() * 20}%` }} />
            <div className="w-full bg-orange-500 transition-all" style={{ height: `${5 + Math.random() * 10}%` }} />
            <div className="w-full bg-purple-500 transition-all" style={{ height: `${5 + Math.random() * 10}%` }} />
            <div className="w-full bg-slate-200 transition-all" style={{ height: '5%' }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
        <span>Jan 12, 2025</span>
        <span>Feb 23</span>
        <span>Apr 6</span>
        <span>May 18</span>
        <span>Jun 29</span>
        <span>Aug 10</span>
        <span>Sep 21</span>
        <span>Nov 2</span>
        <span>Dec 14</span>
        <span>Jan 25</span>
      </div>
    </div>
  );
};

const CategoriesChart = () => {
  const columns = Array.from({ length: 12 });
  return (
    <div className="w-full">
      <div className="h-[240px] flex items-end gap-4 w-full mb-4">
        {columns.map((_, i) => (
          <div key={i} className="flex-1 h-full flex flex-col-reverse">
            <div className="w-full bg-blue-500" style={{ height: `${30 + Math.random() * 20}%` }} />
            <div className="w-full bg-teal-400" style={{ height: `${10 + Math.random() * 10}%` }} />
            <div className="w-full bg-emerald-500" style={{ height: `${5 + Math.random() * 10}%` }} />
            <div className="w-full bg-pink-500" style={{ height: `${15 + Math.random() * 15}%` }} />
            <div className="w-full bg-orange-400" style={{ height: `${5 + Math.random() * 5}%` }} />
            <div className="w-full bg-purple-400" style={{ height: `${5 + Math.random() * 10}%` }} />
            <div className="w-full bg-amber-400" style={{ height: `${2 + Math.random() * 8}%` }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
        <span>Oct 6, 2025</span>
        <span>Oct 20</span>
        <span>Nov 3</span>
        <span>Nov 17</span>
        <span>Dec 1</span>
        <span>Dec 15</span>
        <span>Dec 29</span>
      </div>
    </div>
  );
};

const LeaderboardRow = ({ rank, color, name, author, value, percentage }: { rank: number, color: string, name: string, author: string, value: string, percentage: string }) => (
  <div className="flex items-center text-sm py-3 border-b border-border/50 group hover:bg-slate-50/50 transition-colors">
    <div className="w-8 text-muted-foreground font-medium">{rank}.</div>
    <div className="size-2 rounded-full mr-3" style={{ backgroundColor: color }} />
    <div className="flex-1">
      <div className="font-semibold text-[#020817] flex items-center gap-1">
        {name}
        {name !== "Others" && <span className="text-[10px] text-muted-foreground font-normal">›</span>}
      </div>
      <div className="text-[11px] text-muted-foreground">by {author}</div>
    </div>
    <div className="text-right">
      <div className="font-medium text-[#020817]">{value}</div>
      <div className="text-[11px] text-muted-foreground">{percentage}</div>
    </div>
  </div>
);

export default function MarketShareStats() {
  return (
    <section className="w-full py-12 px-6 max-w-screen-4xl mx-auto space-y-20">
      {/* Market Share Section */}
      <div className="max-w-[1200px]">
        <ChartHeader 
          icon={() => <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
          title="Market Share"
          description="Compare Radison token share by model author"
        />
        <div className="bg-white rounded-xl border border-border p-6 mb-8 shadow-sm">
          <MarketShareChart />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 max-w-[800px]">
           {/* Leaderboard data based on screenshot values */}
           <div className="space-y-0 text-[13px]">
             <LeaderboardRow rank={1} color="#00a3ff" name="test" author="test" value="38K" percentage="100.0%" />
           </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-[1200px]">
        <ChartHeader 
          icon={() => <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>}
          title="Categories"
          description="Compare models by usecase in Radison"
          selector="Programming"
        />
        <div className="bg-white rounded-xl border border-border p-6 mb-8 shadow-sm">
          <CategoriesChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <div className="space-y-0">
            <LeaderboardRow rank={1} color="#3b82f6" name="Grok Code Fast 1" author="x-ai" value="590B" percentage="25.7%" />
            <LeaderboardRow rank={2} color="#22c55e" name="MiniMax M2.1" author="minimax" value="287B" percentage="12.5%" />
            <LeaderboardRow rank={3} color="#10b981" name="Claude Opus 4.5" author="anthropic" value="267B" percentage="11.6%" />
            <LeaderboardRow rank={4} color="#ef4444" name="Gemini 3 Flash Preview" author="google" value="192B" percentage="8.3%" />
            <LeaderboardRow rank={5} color="#14b8a6" name="Claude Sonnet 4.5" author="anthropic" value="159B" percentage="6.9%" />
          </div>
          <div className="space-y-0">
            <LeaderboardRow rank={6} color="#f59e0b" name="Devstral 2 2512 (free)" author="mistralai" value="120B" percentage="5.2%" />
            <LeaderboardRow rank={7} color="#2dd4bf" name="Mimo V2 Flash" author="xiaomi" value="94.3B" percentage="4.1%" />
            <LeaderboardRow rank={8} color="#a855f7" name="GLM 4.7" author="z-ai" value="88.5B" percentage="3.9%" />
            <LeaderboardRow rank={9} color="#06b6d4" name="Qwen3 Next 80B A3B Instruct" author="qwen" value="56.6B" percentage="2.5%" />
            <LeaderboardRow rank={10} color="#f472b6" name="Others" author="unknown" value="442B" percentage="19.3%" />
          </div>
        </div>
      </div>
    </section>
  );
}