import React from 'react';
<<<<<<< Updated upstream
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
>>>>>>> Stashed changes
import { ChevronDown, FileText, Info } from 'lucide-react';

/**
 * ContextLength component replicates the "Context Length" section of the OpenRouter Rankings page.
 * It features a grouped/stacked bar chart representing requests by prompt and completion length,
 * along with a ranking list of models most active in the selected context window.
 */

interface ChartBarData {
  date: string;
  values: { color: string; height: number }[];
}

interface ModelRanking {
  rank: number;
  name: string;
  author: string;
  value: string;
  percentage: string;
  color: string;
}

const SECTION_TITLE = "Context Length";
const SECTION_DESCRIPTION = "Requests by prompt & completion length on OpenRouter";

const CHART_DATA: ChartBarData[] = [
  { date: "Jul 21, 2025", values: [{ color: "#FF1F9D", height: 120 }, { color: "#0088FF", height: 40 }, { color: "#00C49F", height: 20 }, { color: "#FFBB28", height: 15 }] },
  { date: "Aug 11", values: [{ color: "#FF1F9D", height: 110 }, { color: "#0088FF", height: 45 }, { color: "#00C49F", height: 25 }, { color: "#FFBB28", height: 10 }] },
  { date: "Sep 1", values: [{ color: "#FF1F9D", height: 130 }, { color: "#0088FF", height: 50 }, { color: "#00C49F", height: 30 }, { color: "#FFBB28", height: 20 }] },
  { date: "Sep 22", values: [{ color: "#FF1F9D", height: 150 }, { color: "#0088FF", height: 60 }, { color: "#00C49F", height: 40 }, { color: "#FFBB28", height: 25 }] },
  { date: "Oct 13", values: [{ color: "#FF1F9D", height: 140 }, { color: "#0088FF", height: 55 }, { color: "#00C49F", height: 35 }, { color: "#FFBB28", height: 15 }] },
  { date: "Nov 3", values: [{ color: "#FF1F9D", height: 160 }, { color: "#0088FF", height: 70 }, { color: "#00C49F", height: 45 }, { color: "#FFBB28", height: 30 }] },
  { date: "Nov 24", values: [{ color: "#FF1F9D", height: 210 }, { color: "#0088FF", height: 80 }, { color: "#00C49F", height: 50 }, { color: "#FFBB28", height: 35 }] },
  { date: "Dec 15", values: [{ color: "#FF1F9D", height: 180 }, { color: "#0088FF", height: 65 }, { color: "#00C49F", height: 40 }, { color: "#FFBB28", height: 25 }] },
  { date: "Jan 5", values: [{ color: "#FF1F9D", height: 175 }, { color: "#0088FF", height: 62 }, { color: "#00C49F", height: 38 }, { color: "#FFBB28", height: 20 }] },
];

const RANKINGS: ModelRanking[] = [
  { rank: 1, name: "Gemini 2.5 Flash", author: "google", value: "47.2M", percentage: "9.3%", color: "#00C49F" },
  { rank: 2, name: "Gemini 2.5 Flash Lite", author: "google", value: "34.5M", percentage: "6.8%", color: "#FF1F9D" },
  { rank: 3, name: "Gemini 2.0 Flash", author: "google", value: "32.2M", percentage: "6.3%", color: "#0088FF" },
  { rank: 4, name: "Grok 4.1 Fast", author: "x-ai", value: "24.3M", percentage: "4.8%", color: "#FF1F9D" },
  { rank: 5, name: "DeepSeek V3.2", author: "deepseek", value: "23.3M", percentage: "4.6%", color: "#00C49F" },
  { rank: 6, name: "Gemini 3 Flash Preview", author: "google", value: "20.9M", percentage: "4.1%", color: "#10B981" },
  { rank: 7, name: "MiMo-V2-Flash (free)", author: "xiaomi", value: "20.2M", percentage: "4.0%", color: "#FF1F9D" },
  { rank: 8, name: "gpt-oss-120b", author: "openai", value: "19.7M", percentage: "3.9%", color: "#4F46E5" },
  { rank: 9, name: "Mistral Nemo", author: "mistralai", value: "18.6M", percentage: "3.7%", color: "#FFBB28" },
  { rank: 10, name: "Others", author: "unknown", value: "268M", percentage: "52.7%", color: "#FF1F9D" },
];

export default function ContextLength() {
  return (
    <div className="flex flex-col gap-10 scroll-mt-24 w-full" id="context-length">
      {/* Header Container */}
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FileText className="size-5 text-slate-500" />
              <a href="#context-length" className="hover:underline">
                <h2 className="text-lg font-medium text-slate-500">{SECTION_TITLE}</h2>
              </a>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-slate-500 hidden md:flex">
              {SECTION_DESCRIPTION}
              <Info className="size-4 text-slate-400 cursor-pointer" />
            </div>
          </div>

          {/* Context Window Selector Pill */}
          <button className="pill-dropdown text-muted-foreground shadow-none hover:shadow-sm md:h-8 px-4 py-1.5 border flex items-center gap-2 rounded-full text-xs font-medium bg-white">
            <span>1K - 10K tokens</span>
            <ChevronDown className="size-4 opacity-50" />
<<<<<<< Updated upstream
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
>>>>>>> Stashed changes
          </button>
        </div>
      </div>

<<<<<<< Updated upstream
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
>>>>>>> Stashed changes
      {/* Chart Section */}
      <div className="w-full relative py-4">
        <div className="h-[320px] w-full flex flex-col justify-end">
          {/* Y-Axis Labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[11px] text-slate-400 font-medium pointer-events-none">
<<<<<<< Updated upstream
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
>>>>>>> Stashed changes
            <span>800M</span>
            <span>600M</span>
            <span>400M</span>
            <span>200M</span>
<<<<<<< Updated upstream
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
=======
>>>>>>> Stashed changes
          </div>

          {/* Bar Container */}
          <div className="pl-12 w-full h-full flex items-end justify-between border-b border-slate-100 pb-1">
            {CHART_DATA.map((bar, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 group cursor-pointer relative">
                <div className="flex flex-col-reverse w-[80%] max-w-[40px] transition-all duration-200 group-hover:opacity-80">
                  {bar.values.map((segment, sIdx) => (
                    <div
                      key={sIdx}
                      style={{ 
                        height: `${segment.height}px`,
                        backgroundColor: segment.color
                      }}
                      className="w-full"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* X-Axis Labels */}
          <div className="pl-12 w-full flex justify-between pt-3">
            {CHART_DATA.map((bar, idx) => (
              <span key={idx} className="text-[11px] text-slate-400 font-medium whitespace-nowrap text-center flex-1">
                {bar.date}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Ranking List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0.5 mt-4">
        {/* Left Column (1-5) */}
        <div className="flex flex-col">
          {RANKINGS.slice(0, 5).map((model) => (
            <RankingRow key={model.rank} model={model} />
          ))}
        </div>
        {/* Right Column (6-10) */}
        <div className="flex flex-col">
          {RANKINGS.slice(5, 10).map((model) => (
            <RankingRow key={model.rank} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RankingRow({ model }: { model: ModelRanking }) {
  return (
    <div className="ranking-row flex items-center justify-between group cursor-pointer border-transparent rounded-md px-1">
      <div className="flex items-center gap-4">
        <span className="text-[14px] text-slate-400 min-w-[24px] tabular-nums text-right">
          {model.rank}.
        </span>
        <div 
          className="size-2 rounded-full" 
          style={{ backgroundColor: model.color }} 
        />
        <div className="flex flex-col leading-tight">
          <span className="text-[14px] font-semibold text-slate-900 group-hover:text-primary transition-colors">
            {model.name}
          </span>
          <span className="text-[12px] font-medium text-slate-500">
            by <span className="hover:underline">{model.author}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end text-right">
        <span className="text-[14px] font-medium text-slate-700 tabular-nums">
          {model.value}
        </span>
        <span className="text-[12px] font-medium text-slate-400 tabular-nums">
          {model.percentage}
        </span>
      </div>
    </div>
  );
<<<<<<< Updated upstream
}
=======
}
=======
}
=======
}
=======
}
=======
}
=======
}
=======
}
=======
}
=======
}
=======
}
>>>>>>> Stashed changes
