import React from 'react';
import { Tag, ChevronDown, Info } from 'lucide-react';

interface CategoryData {
  date: string;
  models: {
    id: string;
    name: string;
    author: string;
    value: number;
    percent: string;
    color: string;
  }[];
}

const CATEGORIES_DATA: CategoryData[] = [
  {
    date: 'Oct 6, 2025',
    models: [
      { id: '1', name: 'Grok Code Fast 1', author: 'x-ai', value: 590, percent: '25.7%', color: '#0088ff' },
      { id: '2', name: 'MiniMax M2.1', author: 'minimax', value: 287, percent: '12.5%', color: '#00c49f' },
      { id: '3', name: 'Claude Opus 4.5', author: 'anthropic', value: 267, percent: '11.6%', color: '#10b981' },
      { id: '4', name: 'Gemini 3 Flash Preview', author: 'google', value: 192, percent: '8.3%', color: '#ffbb28' },
      { id: '5', name: 'Claude Sonnet 4.5', author: 'anthropic', value: 159, percent: '6.9%', color: '#00c49f' },
      { id: '6', name: 'Devstral 2 2512 (free)', author: 'mistralai', value: 120, percent: '5.2%', color: '#ffbb28' },
      { id: '7', name: 'Mimo V2 Flash', author: 'xiaomi', value: 94.3, percent: '4.1%', color: '#0088ff' },
      { id: '8', name: 'GLM 4.7', author: 'z-ai', value: 88.5, percent: '3.9%', color: '#ff1f9d' },
      { id: '9', name: 'Qwen3 Next 80B A3B Instruct', author: 'qwen', value: 56.6, percent: '2.5%', color: '#00c49f' },
      { id: '10', name: 'Others', author: 'unknown', value: 442, percent: '19.3%', color: '#ff1f9d' },
    ]
  },
  // Simplified for other dates to simulate trend
  { date: 'Oct 20', models: [] },
  { date: 'Nov 3', models: [] },
  { date: 'Nov 17', models: [] },
  { date: 'Dec 1', models: [] },
  { date: 'Dec 15', models: [] },
  { date: 'Dec 29', models: [] },
];

// Mock chart display since we're not using external libs for this specific block
const StackedBar = () => {
  const bars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const colors = ['#0088ff', '#00c49f', '#10b981', '#ffbb28', '#ff1f9d', '#8b5cf6', '#64748b', '#ef4444', '#f59e0b', '#14b8a6'];
  
  return (
    <div className="flex h-[320px] w-full items-end justify-between gap-1 md:gap-4 px-2">
      {bars.map((i) => (
        <div key={i} className="flex flex-col w-full h-full gap-[2px]">
          {[...colors].reverse().map((color, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: color,
                height: `${Math.random() * 20 + 5}%` 
              }} 
              className="w-full transition-opacity hover:opacity-80 cursor-pointer"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const CategoriesRanking: React.FC = () => {
  return (
    <section id="categories" className="container mx-auto px-6 py-20 flex flex-col gap-10 scroll-mt-24">
      {/* Header Area */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Tag className="size-5 text-slate-500" />
              <a href="#categories" className="hover:underline">
                <h2 className="text-lg font-medium text-slate-600">Categories</h2>
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 hidden md:flex items-center gap-1">
              Compare models by usecase on OpenRouter
              <Info className="h-3 w-3 text-slate-400 cursor-help" />
            </p>
          </div>
          
          <button className="pill-dropdown text-slate-600 hover:bg-slate-50">
            <span>Programming</span>
            <ChevronDown className="size-3.5 opacity-50" />
          </button>
        </div>
      </div>

      {/* Chart Visualization */}
      <div className="w-full relative">
        <div className="absolute left-0 top-0 bottom-10 flex flex-col justify-between text-[10px] text-slate-400 h-[320px] pb-6">
          <span>100%</span>
          <span>60%</span>
          <span>30%</span>
        </div>
        
        <div className="pl-10">
          <StackedBar />
          
          <div className="flex justify-between mt-4 text-[11px] text-slate-400">
            <span>Oct 6, 2025</span>
            <span>Oct 20</span>
            <span>Nov 3</span>
            <span>Nov 17</span>
            <span>Dec 1</span>
            <span>Dec 15</span>
            <span>Dec 29</span>
          </div>
        </div>
      </div>

      {/* Model Legend/Ranking List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 mt-4">
        {/* Left Column (1-5) */}
        <div className="flex flex-col">
          {CATEGORIES_DATA[0].models.slice(0, 5).map((model, idx) => (
            <div key={model.id} className="ranking-row flex items-center justify-between border-b border-slate-50 last:border-0 md:last:border-b">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground w-4 text-xs">{idx + 1}.</span>
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: model.color }} />
                <div className="flex flex-col">
                  <span className="text-model-name text-slate-900">{model.name}</span>
                  <span className="text-muted-sm">by <span className="hover:underline cursor-pointer">{model.author}</span></span>
                </div>
              </div>
              <div className="flex flex-col items-end tabular-nums">
                <span className="text-[13px] font-medium text-slate-600">{model.value}B</span>
                <span className="text-[11px] text-slate-400">{model.percent}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (6-10) */}
        <div className="flex flex-col">
          {CATEGORIES_DATA[0].models.slice(5, 10).map((model, idx) => (
            <div key={model.id} className="ranking-row flex items-center justify-between border-b border-slate-50 last:border-0">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground w-4 text-xs">{idx + 6}.</span>
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: model.color }} />
                <div className="flex flex-col">
                  <span className="text-model-name text-slate-900">{model.name}</span>
                  <span className="text-muted-sm">by <span className="hover:underline cursor-pointer">{model.author}</span></span>
                </div>
              </div>
              <div className="flex flex-col items-end tabular-nums">
                <span className="text-[13px] font-medium text-slate-600">{model.value}{model.id === '10' ? 'B' : 'B'}</span>
                <span className="text-[11px] text-slate-400">{model.percent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesRanking;