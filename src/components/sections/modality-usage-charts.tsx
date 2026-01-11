import React from 'react';
import { HelpCircle, Wrench, Image as ImageIcon } from 'lucide-react';

interface ChartItem {
  name: string;
  author: string;
  count: string;
  percentage: string;
  color: string;
}

interface ModalityChartProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  data: ChartItem[];
  yAxisLabel?: string;
}

const ModalityChart: React.FC<ModalityChartProps> = ({ title, description, icon, data, yAxisLabel = "100%" }) => {
  // Mock data for the stacked bar chart visualization
  const bars = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    segments: [
      { height: '40%', color: '#ec4899' },
      { height: '15%', color: '#3b82f6' },
      { height: '10%', color: '#f59e0b' },
      { height: '5%', color: '#14b8a6' },
      { height: '8%', color: '#22c55e' },
      { height: '22%', color: '#8b5cf6' },
    ],
  }));

  const months = ['Oct 13, 2025', 'Oct 27', 'Nov 10', 'Nov 24', 'Dec 8', 'Dec 22', 'Jan 5'];

  return (
    <div className="w-full flex flex-col gap-6 py-12 border-b border-border/50">
      <div className="flex flex-col gap-1 px-6">
        <h2 className="text-[1.125rem] font-semibold text-foreground flex items-center gap-2">
          {icon}
          {title}
        </h2>
        <div className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
          {description}
          <HelpCircle className="size-3 cursor-help" />
        </div>
      </div>

      <div className="w-full px-6">
        <div className="relative h-[240px] w-full flex flex-col justify-end border-b border-border/50 pb-2">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[11px] text-muted-foreground tabular-nums opacity-60 pointer-events-none">
            <span>{yAxisLabel}</span>
            <span>60%</span>
            <span>30%</span>
            <span className="opacity-0">0%</span>
          </div>

          {/* Chart Area */}
          <div className="ml-12 h-full flex items-end justify-between gap-1.5">
            {bars.map((bar) => (
              <div key={bar.id} className="flex-1 h-full flex flex-col justify-end gap-[1px]">
                {bar.segments.map((segment, idx) => (
                  <div
                    key={idx}
                    style={{ height: segment.height, backgroundColor: segment.color }}
                    className="w-full min-h-[2px] transition-opacity hover:opacity-80"
                  />
                ))}
              </div>
            ))}
          </div>

          {/* X-Axis Labels */}
          <div className="ml-12 absolute -right-4 -bottom-6 w-[calc(100%-3rem)] flex justify-between text-[11px] text-muted-foreground tabular-nums">
            {months.map((month, idx) => (
              <span key={idx} className="whitespace-nowrap">{month}</span>
            ))}
            <span className="whitespace-nowrap opacity-40">Jan 19</span>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="px-6 mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0.5">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-b border-border/40 last:border-0 md:[&:nth-last-child(-n+2)]:border-0">
            <div className="flex items-center gap-4">
              <span className="text-[13px] text-muted-foreground w-4 text-right tabular-nums">{idx + 1}.</span>
              <div className="size-2 rounded-full" style={{ backgroundColor: item.color }}></div>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-foreground leading-tight">{item.name}</span>
                <span className="text-[12px] text-muted-foreground leading-tight">by {item.author}</span>
              </div>
            </div>
            <div className="text-right flex flex-col items-end">
              <span className="text-[14px] font-medium text-foreground tabular-nums">{item.count}</span>
              <span className="text-[12px] text-muted-foreground tabular-nums">{item.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ToolCallsSection = () => {
  const toolCallsData: ChartItem[] = [
    { name: "Model", author: "test", count: "0", percentage: "0.0%", color: "#22c55e" }
  ];

  return (
    <ModalityChart
      title="Tool Calls"
      description="Tool usage across models on Radison"
      icon={<Wrench className="size-4 text-muted-foreground" />}
      data={toolCallsData}
    />
  );
};

const ImagesSection = () => {
  const imagesData: ChartItem[] = [
    { name: "Model", author: "test", count: "0", percentage: "0.0%", color: "#22c55e" }
  ];

  return (
    <ModalityChart
      title="Images"
      description="Total images processed on Radison"
      icon={<ImageIcon className="size-4 text-muted-foreground" />}
      data={imagesData}
    />
  );
};

const ModalityUsageCharts = () => {
  return (
    <section id="special-modalities" className="w-full bg-background flex flex-col">
      <ToolCallsSection />
      <ImagesSection />
    </section>
  );
};

export default ModalityUsageCharts;