import React from 'react';
import { ChevronDown, Info, BarChart2, Hash, Code, BookOpen, Layers, Terminal, Image as ImageIcon } from 'lucide-react';

const UsageMetrics = () => {
  return (
    <div className="flex flex-col gap-12 py-8 px-6 max-w-screen-4xl mx-auto w-full bg-white tabular-nums">
      {/* Title Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-[30px] font-semibold tracking-tight text-[#020617]">AI Model Rankings</h1>
      </div>

      {/* Market Share Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#020617] font-medium text-sm">
              <BarChart2 className="size-4" />
              <span>Market Share</span>
            </div>
            <p className="text-[#64748B] text-xs">Compare OpenRouter token share by model author</p>
          </div>
        </div>

        {/* Stacked Bar Chart Component Placeholder - Replicating Visual Style */}
        <div className="relative w-full h-[240px] flex items-end gap-[2px]">
          {/* Mock Bars to simulate the screenshot distribution */}
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col gap-0 h-full justify-end group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="bg-[#3b82f6]" style={{ height: `${20 + Math.random() * 10}%` }} />
              <div className="bg-[#10b981]" style={{ height: `${15 + Math.random() * 10}%` }} />
              <div className="bg-[#f59e0b]" style={{ height: `${10 + Math.random() * 15}%` }} />
              <div className="bg-[#f43f5e]" style={{ height: `${30 + Math.random() * 20}%` }} />
              <div className="bg-[#8b5cf6]" style={{ height: `${5 + Math.random() * 10}%` }} />
            </div>
          ))}
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-[#94a3b8] -ml-8">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
          </div>
        </div>
        
        <div className="flex justify-between text-[10px] text-[#94a3b8] border-t border-[#e2e8f0] pt-2 px-1">
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

        <div className="flex items-center gap-2 text-xs mt-2 px-8">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#10b981]" />
            <span className="font-medium text-[#020617]">test</span>
            <span className="text-[#64748B]">38K</span>
            <span className="text-[#94a3b8] text-[10px]">100.0%</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#020617] font-medium text-sm">
              <Layers className="size-4" />
              <span>Categories</span>
              <Info className="size-3 text-[#94a3b8]" />
            </div>
            <p className="text-[#64748B] text-xs">Compare models by usecase on OpenRouter</p>
          </div>
          <button className="flex items-center gap-2 border border-[#e2e8f0] rounded-md px-3 py-1.5 text-xs text-[#64748B] hover:bg-[#f1f5f9]">
            Programming
            <ChevronDown className="size-3" />
          </button>
        </div>

        <div className="relative w-full h-[200px] flex items-end gap-[6px]">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col gap-0 h-full justify-end cursor-pointer">
              <div className="bg-[#3b82f6]" style={{ height: `${30 + (i % 3) * 5}%` }} />
              <div className="bg-[#10b981]" style={{ height: `${10 + (i % 2) * 8}%` }} />
              <div className="bg-[#f43f5e]" style={{ height: `${25}%` }} />
              <div className="bg-[#f59e0b]" style={{ height: `${15}%` }} />
            </div>
          ))}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-[#94a3b8] -ml-8">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-[#94a3b8] border-t border-[#e2e8f0] pt-2 px-1">
          <span>Oct 6, 2024</span>
          <span>Oct 20</span>
          <span>Nov 3</span>
          <span>Nov 17</span>
          <span>Dec 1</span>
          <span>Dec 15</span>
          <span>Dec 29</span>
        </div>

        {/* Top Models for Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-4">
          {[
            { name: "Grok Code Fast 1", author: "x-ai", tokens: "590B", share: "25.7%", color: "#3b82f6" },
            { name: "MiniMax M2.1", author: "minimax", tokens: "287B", share: "12.5%", color: "#10b981" },
            { name: "Claude Opus 4.5", author: "anthropic", tokens: "261B", share: "11.4%", color: "#10b981" },
            { name: "Gemini 3 Flash Preview", author: "google", tokens: "192B", share: "8.3%", color: "#f43f5e" },
            { name: "Claude Sonnet 4.5", author: "anthropic", tokens: "159B", share: "6.9%", color: "#10b981" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between group cursor-pointer border-b border-[#f1f5f9] pb-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#94a3b8] w-4">{idx + 1}.</span>
                <span className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="flex flex-col">
                  <span className="text-[13px] font-medium text-[#020617] group-hover:underline">{item.name}</span>
                  <span className="text-[11px] text-[#64748B]">by {item.author}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[13px] font-medium text-[#020617]">{item.tokens}</span>
                <span className="text-[11px] text-[#94a3b8]">{item.share}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#020617] font-medium text-sm">
              <BookOpen className="size-4" />
              <span>Languages</span>
              <Info className="size-3 text-[#94a3b8]" />
            </div>
            <p className="text-[#64748B] text-xs">Compare models by natural language on OpenRouter</p>
          </div>
          <button className="flex items-center gap-2 border border-[#e2e8f0] rounded-md px-3 py-1.5 text-xs text-[#64748B] hover:bg-[#f1f5f9]">
            English
            <ChevronDown className="size-3" />
          </button>
        </div>

        <div className="relative w-full h-[180px] flex items-end">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col gap-0 h-full justify-end">
              <div className="bg-[#f43f5e]" style={{ height: `${60}%` }} />
              <div className="bg-[#10b981]" style={{ height: `${10}%` }} />
              <div className="bg-[#3b82f6]" style={{ height: `${30}%` }} />
            </div>
          ))}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-[#94a3b8] -ml-8">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-[#94a3b8] border-t border-[#e2e8f0] pt-2 px-1">
          <span>Dec 19, 2024</span>
          <span>Dec 22</span>
          <span>Dec 25</span>
          <span>Dec 28</span>
          <span>Dec 31</span>
          <span>Jan 3</span>
          <span>Jan 6</span>
          <span>Jan 9</span>
        </div>
      </section>

      {/* Context Length Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#020617] font-medium text-sm">
              <BarChart2 className="size-4" />
              <span>Context Length</span>
            </div>
            <p className="text-[#64748B] text-xs">Requests by prompt & completion length on OpenRouter</p>
          </div>
          <button className="flex items-center gap-2 border border-[#e2e8f0] rounded-md px-3 py-1.5 text-xs text-[#64748B] hover:bg-[#f1f5f9]">
            1K - 10K tokens
            <ChevronDown className="size-3" />
          </button>
        </div>

        <div className="relative w-full h-[220px] flex items-end gap-[4px]">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col gap-0 h-full justify-end">
              <div className="bg-[#f43f5e]" style={{ height: `${Math.random() * 50 + 40}%` }} />
              <div className="bg-[#10b981]" style={{ height: `${Math.random() * 20 + 10}%` }} />
              <div className="bg-[#3b82f6]" style={{ height: `${Math.random() * 15 + 5}%` }} />
            </div>
          ))}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-[#94a3b8] -ml-12">
            <span>600M</span>
            <span>400M</span>
            <span>200M</span>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-[#94a3b8] border-t border-[#e2e8f0] pt-2 px-1">
          <span>Jul 21, 2024</span>
          <span>Aug 11</span>
          <span>Sep 1</span>
          <span>Sep 22</span>
          <span>Oct 13</span>
          <span>Nov 3</span>
          <span>Nov 24</span>
          <span>Dec 15</span>
          <span>Jan 5</span>
        </div>
      </section>

      {/* Tool Calls Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#020617] font-medium text-sm">
              <Terminal className="size-4" />
              <span>Tool Calls</span>
            </div>
            <p className="text-[#64748B] text-xs">Tool usage across models on OpenRouter</p>
          </div>
        </div>

        <div className="relative w-full h-[160px] flex items-end">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col gap-0 h-full justify-end border-r border-white">
              <div className="bg-[#f43f5e]" style={{ height: `${Math.random() * 70 + 20}%` }} />
              <div className="bg-[#f59e0b]" style={{ height: `${Math.random() * 10}%` }} />
              <div className="bg-[#3b82f6]" style={{ height: `${Math.random() * 15}%` }} />
            </div>
          ))}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-[#94a3b8] -ml-8">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-[#94a3b8] border-t border-[#e2e8f0] pt-2 px-1">
          <span>Oct 13, 2024</span>
          <span>Oct 27</span>
          <span>Nov 10</span>
          <span>Nov 24</span>
          <span>Dec 8</span>
          <span>Dec 22</span>
          <span>Jan 5</span>
          <span>Jan 19</span>
        </div>
      </section>

      {/* Images Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#020617] font-medium text-sm">
              <ImageIcon className="size-4" />
              <span>Images</span>
            </div>
            <p className="text-[#64748B] text-xs">Total images processed on OpenRouter</p>
          </div>
        </div>

        <div className="relative w-full h-[160px] flex items-end">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col gap-0 h-full justify-end border-r border-white">
              <div className="bg-[#f59e0b]" style={{ height: `${Math.random() * 40 + 30}%` }} />
              <div className="bg-[#f43f5e]" style={{ height: `${Math.random() * 20}%` }} />
              <div className="bg-[#3b82f6]" style={{ height: `${Math.random() * 10}%` }} />
            </div>
          ))}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-[#94a3b8] -ml-8">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-[#94a3b8] border-t border-[#e2e8f0] pt-2 px-1">
          <span>Oct 13, 2024</span>
          <span>Oct 27</span>
          <span>Nov 10</span>
          <span>Nov 24</span>
          <span>Dec 8</span>
          <span>Dec 22</span>
          <span>Jan 5</span>
          <span>Jan 19</span>
        </div>
        
        <div className="flex items-center justify-between text-xs mt-4 px-8 border-b border-[#f1f5f9] pb-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-[#94a3b8] w-4">1.</span>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#8b5cf6]" />
              <span className="font-medium text-[#020617]">Model</span>
              <span className="text-[#64748B]">by test</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-medium">0</span>
            <span className="text-[10px] text-[#94a3b8]">0.0%</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsageMetrics;