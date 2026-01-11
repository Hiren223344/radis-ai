import React from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronDown, LayoutGrid } from 'lucide-react';

interface AppItemProps {
  rank: number;
  name: string;
  authorDescription: string;
  tokens: string;
  iconUrl: string;
  isNew?: boolean;
}

const AppItem: React.FC<AppItemProps> = ({ rank, name, authorDescription, tokens, iconUrl, isNew }) => {
  return (
    <div className="flex items-center group cursor-pointer py-3 px-1 hover:bg-slate-50 rounded-lg transition-colors duration-150">
      <div className="w-8 shrink-0 text-[13px] font-medium text-slate-400">
        {rank}.
      </div>
      <div className="relative mr-4 shrink-0">
        <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
          <Image
            src={iconUrl}
            alt={`${name} icon`}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow min-w-0 pr-4">
        <div className="flex items-center gap-1.5">
          <span className="text-[14px] font-semibold text-slate-900 truncate leading-tight transition-colors group-hover:text-primary">
            {name}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-60" strokeWidth={2.5} />
        </div>
        <div className="text-[12px] text-slate-500 truncate mt-0.5 font-medium">
          {isNew ? (
            <span className="text-[#4f46e5] font-medium">new</span>
          ) : (
            authorDescription
          )}
        </div>
      </div>
      <div className="shrink-0 text-right">
        <div className="text-[14px] font-tabular font-medium text-slate-900">
          {tokens} <span className="text-slate-400 font-normal">tokens</span>
        </div>
      </div>
    </div>
  );
};

const TopApps: React.FC = () => {
  const leftApps: AppItemProps[] = [
    { rank: 1, name: 'Janitor AI', authorDescription: 'Character chat and creation', tokens: '45.7B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_1.png' },
    { rank: 2, name: 'Kilo Code', authorDescription: 'AI coding assistant for VS Code', tokens: '45.5B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_2.png' },
    { rank: 3, name: 'liteLLM', authorDescription: 'Open-source library to simplify L...', tokens: '30.1B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_3.png' },
    { rank: 4, name: 'BLACKBOXAI', authorDescription: 'AI agent for builders', tokens: '27.8B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_4.png' },
    { rank: 5, name: 'Roo Code', authorDescription: 'A whole dev team of AI agents in ...', tokens: '27.6B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_5.png' },
    { rank: 6, name: 'Cline', authorDescription: 'Autonomous coding agent right in...', tokens: '18.5B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_6.png' },
    { rank: 7, name: 'Lemonade', authorDescription: '', tokens: '9.96B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_7.png', isNew: true },
    { rank: 8, name: 'HammerAI', authorDescription: 'Chat with AI characters for free', tokens: '8.48B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_8.png' },
    { rank: 9, name: 'SillyTavern', authorDescription: 'LLM frontend for power users', tokens: '8.22B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_9.png' },
    { rank: 10, name: 'Claude', authorDescription: 'The AI for problem solvers', tokens: '4.97B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_10.png' },
  ];

  const rightApps: AppItemProps[] = [
    { rank: 11, name: 'New API', authorDescription: 'Unified AI framework', tokens: '4.68B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_1.png' },
    { rank: 12, name: 'Chub AI', authorDescription: 'GenAI for everyone', tokens: '4.4B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_2.png' },
    { rank: 13, name: "Sophia's LoreBary", authorDescription: '', tokens: '4.1B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_3.png', isNew: true },
    { rank: 14, name: 'JobLeads LLM', authorDescription: 'Use AI to find jobs for you', tokens: '3.99B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_4.png' },
    { rank: 15, name: 'Stock Qualitative Screen...', authorDescription: '', tokens: '3.98B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_5.png', isNew: true },
    { rank: 16, name: 'Portkey AI', authorDescription: 'Control panel for AI apps', tokens: '2.75B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_6.png' },
    { rank: 17, name: 'OpenCharacter', authorDescription: 'Open-source recreation of the ol...', tokens: '2.64B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_7.png' },
    { rank: 18, name: 'GDevelop', authorDescription: 'AI-powered game engine', tokens: '2.06B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_8.png' },
    { rank: 19, name: 'Pax Historia', authorDescription: 'An alternate history sandbox game', tokens: '2.04B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_9.png' },
    { rank: 20, name: 'JuicyChat', authorDescription: '', tokens: '1.91B', iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_10.png', isNew: true },
  ];

  return (
    <section className="container mx-auto px-6 section-gap max-w-[1440px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <LayoutGrid className="size-5 text-slate-400" />
              <h2 className="text-[18px] font-medium text-slate-500">Top Apps</h2>
            </div>
            <p className="text-[12px] font-medium text-slate-500">
              Largest public apps <a href="#" className="underline decoration-slate-300 hover:decoration-slate-400">opting into</a> usage tracking on OpenRouter
            </p>
          </div>
          <button className="pill-button w-fit h-8 text-[12px]">
            Today <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
          <div className="flex flex-col">
            {leftApps.map((app) => (
              <AppItem key={app.rank} {...app} />
            ))}
          </div>
          <div className="flex flex-col">
            {rightApps.map((app) => (
              <AppItem key={app.rank} {...app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopApps;