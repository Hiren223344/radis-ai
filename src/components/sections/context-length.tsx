import React from 'react';
import { ChevronDown, BarChart2 } from 'lucide-react';

const ContextLength = () => {
  const chartData = [
    { date: 'Jul 21, 2025', values: [180, 150, 60, 40, 30, 20, 10, 5] },
    { date: 'Aug 11', values: [195, 140, 55, 45, 35, 25, 12, 6] },
    { date: 'Sep 1', values: [210, 160, 65, 50, 32, 22, 11, 7] },
    { date: 'Sep 22', values: [240, 180, 75, 55, 40, 30, 15, 8] },
    { date: 'Oct 13', values: [220, 175, 70, 52, 38, 28, 14, 7] },
    { date: 'Nov 3', values: [235, 190, 80, 58, 42, 32, 16, 9] },
    { date: 'Nov 24', values: [280, 210, 95, 65, 50, 40, 20, 12] },
    { date: 'Dec 15', values: [260, 200, 85, 60, 45, 35, 18, 10] },
    { date: 'Jan 5', values: [250, 195, 82, 59, 43, 33, 17, 9] },
  ];

  const colors = [
    '#EC4899', // Pink
    '#3B82F6', // Blue
    '#10B981', // Green
    '#F59E0B', // Amber
    '#8B5CF6', // Violet
    '#EF4444', // Red
    '#06B6D4', // Cyan
    '#6366F1', // Indigo
  ];

  const rankingData = [
    { id: 1, name: 'Gemini 2.5 Flash', author: 'google', color: '#10B981', value: '47.2M', percentage: '9.3%' },
    { id: 2, name: 'Gemini 2.5 Flash Lite', author: 'google', color: '#EC4899', value: '34.5M', percentage: '6.8%' },
    { id: 3, name: 'Gemini 2.0 Flash', author: 'google', color: '#3B82F6', value: '32.2M', percentage: '6.3%' },
    { id: 4, name: 'Grok 4.1 Fast', author: 'x-ai', color: '#F59E0B', value: '24.3M', percentage: '4.8%' },
    { id: 5, name: 'DeepSeek V3.2', author: 'deepseek', color: '#10B981', value: '23.3M', percentage: '4.6%' },
    { id: 6, name: 'Gemini 3 Flash Preview', author: 'google', color: '#8B5CF6', value: '20.9M', percentage: '4.1%' },
    { id: 7, name: 'MiMo-V2-Flash (free)', author: 'xiaomi', color: '#EC4899', value: '20.2M', percentage: '4.0%' },
    { id: 8, name: 'gpt-oss-120b', author: 'openai', color: '#8B5CF6', value: '19.7M', percentage: '3.9%' },
    { id: 9, name: 'Mistral Nemo', author: 'mistralai', color: '#F59E0B', value: '18.6M', percentage: '3.7%' },
    { id: 10, name: 'Others', author: 'unknown', color: '#EC4899', value: '268M', percentage: '52.7%' },
  ];

  return (
    <section id="context-length" className="flex flex-col gap-10 scroll-mt-24 max-w-[1280px] mx-auto w-full px-6 py-20">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BarChart2 className="size-5 text-[#64748b]" />
              <a href="#context-length" className="hover:underline">
                <h2 className="text-[18px] font-medium text-[#64748b]">Context Length</h2>
              </a>
            </div>
            <p className="text-[12px] font-medium text-[#64748b] hidden md:block">
              Requests by prompt & completion length on OpenRouter
            </p>
          </div>
          <button className="flex items-center justify-between border border-[#e2e8f0] bg-white px-4 h-8 rounded-full text-[#64748b] text-[12px] min-w-[140px] shadow-none hover:bg-[#f1f5f9] transition-colors">
            <span>1K - 10K tokens</span>
            <ChevronDown className="size-4 opacity-50 ml-2" />
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="h-[300px] w-full relative flex items-end justify-between border-b border-[#e2e8f0] pb-8">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[11px] text-[#64748b] pointer-events-none">
            <span>800M</span>
            <span>600M</span>
            <span>400M</span>
            <span>200M</span>
            <span className="opacity-0">0</span>
          </div>

          <div className="flex-1 flex justify-around ml-12 h-full items-end gap-1 md:gap-4">
            {chartData.map((data, idx) => (
              <div key={idx} className="relative flex flex-col items-center flex-1 h-full">
                <div className="flex flex-col-reverse w-full max-w-[40px] h-full justify-start mt-auto">
                  {data.values.map((val, vIdx) => (
                    <div
                      key={vIdx}
                      style={{ 
                        height: `${val / 8.5}%`,
                        backgroundColor: colors[vIdx % colors.length]
                      }}
                      className="w-full opacity-90 hover:opacity-100 transition-opacity cursor-pointer border-x border-white/10"
                    />
                  ))}
                </div>
                <div className="absolute -bottom-7 text-[11px] text-[#64748b] whitespace-nowrap">
                  {data.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-4">
        {rankingData.map((item, index) => (
          <div key={item.id} className="flex items-center justify-between text-[14px] py-1 border-b border-transparent hover:border-[#f1f5f9]">
            <div className="flex items-center gap-4">
              <span className="w-6 text-[#64748b] font-medium text-right">{item.id}.</span>
              <div 
                className="w-2.5 h-2.5 rounded-full shrink-0" 
                style={{ backgroundColor: item.color }} 
              />
              <div className="flex flex-col">
                <span className="font-semibold text-[#0f172a] line-clamp-1">{item.name}</span>
                <span className="text-[12px] text-[#64748b] line-clamp-1">
                  by <span className="hover:underline cursor-pointer">{item.author}</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end tabular-nums">
              <span className="font-medium text-[#0f172a]">{item.value}</span>
              <span className="text-[12px] text-[#64748b]">{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContextLength;