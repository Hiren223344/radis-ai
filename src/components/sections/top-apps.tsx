import React from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronDown, LayoutGrid } from 'lucide-react';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
interface AppRanking {
  id: number;
  name: string;
  description: string;
  tokens: string;
  logoUrl: string;
  isNew?: boolean;
}

const TOP_APPS_DATA: AppRanking[] = [
  { id: 1, name: "Janitor AI", description: "Character chat and creation", tokens: "45.7B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_1.png" },
  { id: 2, name: "Kilo Code", description: "AI coding agent for VS Code", tokens: "45.5B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_2.png" },
  { id: 3, name: "liteLLM", description: "Open-source library to simplify L...", tokens: "30.1B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_3.png" },
  { id: 4, name: "BLACKBOXAI", description: "AI agent for builders", tokens: "27.8B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_4.png" },
  { id: 5, name: "Roo Code", description: "A whole dev team of AI agents in ...", tokens: "27.6B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_5.png" },
  { id: 6, name: "Cline", description: "Autonomous coding agent right in...", tokens: "18.5B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_6.png" },
  { id: 7, name: "Lemonade", description: "new", tokens: "9.96B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_7.png", isNew: true },
  { id: 8, name: "HammerAI", description: "Chat with AI characters for free", tokens: "8.48B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_8.png" },
  { id: 9, name: "SillyTavern", description: "LLM frontend for power users", tokens: "8.22B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_9.png" },
  { id: 10, name: "Claude", description: "The AI for problem solvers", tokens: "4.97B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_10.png" },
  { id: 11, name: "New API", description: "Unified AI framework", tokens: "4.68B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_11.png" },
  { id: 12, name: "Chub AI", description: "GenAI for everyone", tokens: "4.4B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_12.png" },
  { id: 13, name: "Sophia's LoreBary", description: "new", tokens: "4.1B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_13.png", isNew: true },
  { id: 14, name: "JobLeads LLM", description: "Use AI to find jobs for you", tokens: "3.99B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_14.png" },
  { id: 15, name: "Stock Qualitative Screen...", description: "new", tokens: "3.98B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_15.png", isNew: true },
  { id: 16, name: "Portkey AI", description: "Control panel for AI apps", tokens: "2.75B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_16.png" },
  { id: 17, name: "OpenCharacter", description: "Open-source recreation of the ol...", tokens: "2.64B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_17.png" },
  { id: 18, name: "GDevelop", description: "AI-powered game engine", tokens: "2.06B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_18.png" },
  { id: 19, name: "Pax Historia", description: "An alternate history sandbox game", tokens: "2.04B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_19.png" },
  { id: 20, name: "JuicyChat", description: "new", tokens: "1.91B", logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_20.png", isNew: true },
];

const AppCard = ({ app }: { app: AppRanking }) => (
  <div className="flex items-center justify-between py-4 group cursor-pointer hover:bg-slate-50/50 transition-colors px-2 -mx-2 rounded-lg">
    <div className="flex items-center gap-4 flex-1">
      <div className="w-6 text-sm font-medium text-slate-400 tabular-nums">
        {app.id}.
      </div>
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm flex items-center justify-center">
        <Image
          src={app.logoUrl}
          alt={app.name}
          width={40}
          height={40}
          className="object-contain p-1"
        />
      </div>
      <div className="flex flex-col min-w-0 pr-4">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-[14px] text-slate-12 truncate group-hover:underline">
            {app.name}
          </span>
          <ChevronRight className="size-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-[12px] text-slate-500 truncate leading-relaxed">
          {app.isNew ? <span className="text-blue-500 font-medium">new</span> : app.description}
        </span>
      </div>
    </div>
    <div className="flex flex-col items-end shrink-0">
      <div className="flex items-baseline gap-1">
        <span className="font-mono text-[14px] font-semibold text-slate-900">
          {app.tokens}
        </span>
        <span className="text-[12px] text-slate-400">tokens</span>
      </div>
    </div>
  </div>
);

export default function TopAppsSection() {
  const leftColumn = TOP_APPS_DATA.slice(0, 10);
  const rightColumn = TOP_APPS_DATA.slice(10, 20);

  return (
    <section id="top-apps" className="container py-24 mb-16 scroll-mt-24">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LayoutGrid className="size-5 text-slate-400" strokeWidth={1.5} />
                <a href="#top-apps" className="hover:underline">
                  <h2 className="text-lg font-medium text-slate-500">Top Apps</h2>
                </a>
              </div>
              <p className="text-xs font-medium text-slate-400">
                Largest public apps{" "}
                <a href="#" className="underline text-slate-400 hover:text-slate-600">
                  opting into
                </a>{" "}
                usage tracking on OpenRouter
              </p>
            </div>
            
            <button className="pill-button flex items-center gap-2 text-slate-400 h-9 px-4 text-xs md:text-sm shadow-none hover:shadow-sm">
              <span>Today</span>
              <ChevronDown className="size-4 opacity-50" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20">
          <div className="flex flex-col">
            {leftColumn.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className="flex flex-col">
            {rightColumn.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
interface AppData {
  rank: number;
  name: string;
  description: string;
  icon: string;
  tokens: string;
  isNew?: boolean;
}

const apps: AppData[] = [
  { rank: 1, name: "Janitor AI", description: "Character chat and creation", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_1.png", tokens: "45.7B tokens" },
  { rank: 2, name: "Kilo Code", description: "AI coding agent for VS Code", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_2.png", tokens: "45.5B tokens" },
  { rank: 3, name: "liteLLM", description: "Open-source library to simplify L...", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_3.png", tokens: "30.1B tokens" },
  { rank: 4, name: "BLACKBOXAI", description: "AI agent for builders", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_4.png", tokens: "27.8B tokens" },
  { rank: 5, name: "Roo Code", description: "A whole dev team of AI agents in ...", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_5.png", tokens: "27.6B tokens" },
  { rank: 6, name: "Cline", description: "Autonomous coding agent right in...", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_6.png", tokens: "18.5B tokens" },
  { rank: 7, name: "Lemonade", description: "new", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_7.png", tokens: "9.96B tokens", isNew: true },
  { rank: 8, name: "HammerAI", description: "Chat with AI characters for free", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_8.png", tokens: "8.48B tokens" },
  { rank: 9, name: "SillyTavern", description: "LLM frontend for power users", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_9.png", tokens: "8.22B tokens" },
  { rank: 10, name: "Claude", description: "The AI for problem solvers", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_10.png", tokens: "4.97B tokens" },
  { rank: 11, name: "New API", description: "Unified AI framework", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_11.png", tokens: "4.68B tokens" },
  { rank: 12, name: "Chub AI", description: "GenAl for everyone", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_12.png", tokens: "4.4B tokens" },
  { rank: 13, name: "Sophia's LoreBary", description: "new", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_13.png", tokens: "4.1B tokens", isNew: true },
  { rank: 14, name: "JobLeads LLM", description: "Use AI to find jobs for you", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_14.png", tokens: "3.99B tokens" },
  { rank: 15, name: "Stock Qualitative Screen...", description: "new", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_15.png", tokens: "3.98B tokens", isNew: true },
  { rank: 16, name: "Portkey AI", description: "Control panel for AI apps", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_16.png", tokens: "2.75B tokens" },
  { rank: 17, name: "OpenCharacter", description: "Open-source recreation of the ol...", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_17.png", tokens: "2.64B tokens" },
  { rank: 18, name: "GDevelop", description: "AI-powered game engine", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_18.png", tokens: "2.06B tokens" },
  { rank: 19, name: "Pax Historia", description: "An alternate history sandbox game", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_19.png", tokens: "2.04B tokens" },
  { rank: 20, name: "JuicyChat", description: "new", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_20.png", tokens: "1.91B tokens", isNew: true },
];

const TopApps: React.FC = () => {
  const leftColumn = apps.slice(0, 10);
  const rightColumn = apps.slice(10, 20);

  return (
    <section id="top-apps" className="container py-8 md:py-16 scroll-mt-24">
      {/* Header Container */}
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <LayoutGrid className="size-5 text-[#64748B]" strokeWidth={1.5} />
            <a href="#top-apps" className="hover:underline">
              <h2 className="text-[18px] font-medium text-[#64748B]">Top Apps</h2>
            </a>
          </div>
          <p className="text-[12px] font-medium text-[#64748B]">
            Largest public apps{" "}
            <a href="#" className="underline decoration-[#64748B]/30 hover:decoration-[#64748B]">opting into</a>
            {" "}usage tracking on OpenRouter
          </p>
        </div>

        {/* Time Selector Pill */}
        <button className="pill-dropdown h-8 md:h-9 px-4 min-w-[128px] justify-between text-muted-foreground border-border hover:bg-slate-50 transition-colors">
          <span className="text-[14px] md:text-xs">Today</span>
          <ChevronDown className="size-4 opacity-50" />
        </button>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0.5">
        {/* Left Column */}
        <div className="flex flex-col">
          {leftColumn.map((app) => (
            <AppRow key={app.rank} app={app} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          {rightColumn.map((app) => (
            <AppRow key={app.rank} app={app} />
          ))}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </div>
      </div>
    </section>
  );
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
}
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
};

const AppRow: React.FC<{ app: AppData }> = ({ app }) => {
  return (
    <div className="ranking-row flex items-center justify-between group cursor-pointer border-transparent rounded-[0.5rem] px-2 -mx-2">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="w-8 flex-shrink-0 text-[14px] font-normal text-[#64748B] tabular-nums">
          {app.rank}.
        </div>
        
        <div className="app-icon-wrapper size-10 rounded-[0.5rem] border border-border bg-white p-1 flex items-center justify-center">
          <Image 
            src={app.icon} 
            alt={app.name} 
            width={32} 
            height={32} 
            className="rounded-[0.25rem] object-contain"
          />
        </div>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-model-name text-[14px] text-[#0F172A] truncate">
              {app.name}
            </span>
            <ChevronRight className="size-3 text-muted-foreground opacity-70" />
          </div>
          <span className={`text-[12px] font-medium truncate ${app.isNew ? 'text-[#4F46E5]' : 'text-[#64748B]'}`}>
            {app.description}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end flex-shrink-0 tabular-nums">
        <span className="text-[14px] font-semibold text-[#0F172A]">
          {app.tokens}
        </span>
      </div>
    </div>
  );
};

<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default TopApps;
>>>>>>> Stashed changes
=======
export default TopApps;
>>>>>>> Stashed changes
=======
export default TopApps;
>>>>>>> Stashed changes
