import React from 'react';
import { ImageIcon } from 'lucide-react';

const ImagesProcessedSection = () => {
  // Mock data for the chart bars to replicate the stacked bar visual
  const chartData = [
    { date: 'Oct 13, 2025', heights: [25, 15, 12, 18, 10, 20] },
    { date: 'Oct 27', heights: [18, 22, 10, 15, 25, 10] },
    { date: 'Nov 10', heights: [30, 10, 15, 12, 18, 15] },
    { date: 'Nov 24', heights: [22, 18, 25, 10, 15, 10] },
    { date: 'Dec 8', heights: [15, 25, 18, 22, 10, 10] },
    { date: 'Dec 22', heights: [28, 12, 20, 15, 15, 10] },
    { date: 'Jan 5', heights: [20, 20, 15, 25, 10, 10] },
    { date: 'Jan 19', heights: [0, 0, 0, 0, 0, 0] }, // Future placeholder
  ];

  const colors = [
    '#0091FF', // Chart Blue
    '#10B981', // Chart Green
    '#F59E0B', // Chart Orange
    '#F87171', // Chart Pink
    '#8B5CF6', // Purple
    '#EAB308', // Yellow
  ];

  return (
    <section id="images-processed" className="w-full max-w-[1280px] mx-auto px-6 py-20 mb-32 scroll-mt-24">
      <div className="flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ImageIcon className="size-5 text-[#64748B]" strokeWidth={2} />
                <a href="#images-processed" className="hover:underline">
                  <h2 className="text-[18px] font-medium text-[#0F172A]">Images</h2>
                </a>
              </div>
              <p className="text-[12px] font-medium text-[#64748B] hidden md:block">
                Total images processed on OpenRouter
              </p>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="w-full h-[320px] relative mt-4">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-[280px] flex flex-col justify-between text-[12px] text-[#64748B] tabular-nums">
            <span>100%</span>
            <span>60%</span>
            <span>30%</span>
            <span className="opacity-0">0%</span>
          </div>

          {/* Grid Lines */}
          <div className="absolute left-10 right-0 top-0 h-[280px] flex flex-col justify-between pointer-events-none">
            <div className="border-t border-[#E2E8F0] w-full h-0"></div>
            <div className="border-t border-[#E2E8F0] w-full h-0"></div>
            <div className="border-t border-[#E2E8F0] w-full h-0"></div>
            <div className="border-t border-[#E2E8F0] w-full h-0"></div>
          </div>

          {/* Bars Container */}
          <div className="absolute left-10 right-0 top-0 h-[280px] flex justify-between items-end px-4">
            {chartData.map((data, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end">
                <div className="w-[38px] flex flex-col-reverse h-full group cursor-pointer transition-opacity hover:opacity-80">
                  {data.heights.map((height, hIdx) => (
                    <div
                      key={hIdx}
                      style={{ 
                        height: `${height}%`, 
                        backgroundColor: colors[hIdx % colors.length],
                        opacity: data.date === 'Jan 19' ? 0 : 1
                      }}
                      className="w-full border-b border-white/10"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* X-Axis Labels */}
          <div className="absolute left-10 right-0 bottom-0 h-6 flex justify-between text-[12px] text-[#64748B]">
            {chartData.map((data, idx) => (
              <div key={idx} className="flex-1 text-center">
                {data.date}
              </div>
            ))}
          </div>
        </div>

        {/* Model Ranking Table */}
        <div className="flex flex-col gap-6 w-full pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-center justify-between p-1">
              <div className="flex items-center gap-4">
                <span className="text-[14px] text-[#64748B] w-4">1.</span>
                <div className="size-3 rounded-full bg-[#10B981]"></div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium text-[#0F172A]">Model</span>
                  <span className="text-[12px] text-[#64748B]">
                    by <a href="#" className="underline decoration-[#E2E8F0] hover:text-[#0F172A]">test</a>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end tabular-nums">
                <span className="text-[14px] font-medium text-[#0F172A]">0</span>
                <span className="text-[12px] text-[#64748B]">0.0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesProcessedSection;