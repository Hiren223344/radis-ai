import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const agents = [
  {
    name: 'Replit',
    tagline: 'The easiest way to go from idea to app',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_3.png',
    icon: (
      <div className="flex items-center justify-center size-8 bg-[#F34F1B] rounded-md shrink-0">
        <svg viewBox="0 0 24 24" className="size-5 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.4 2.4h7.2v7.2H2.4zM14.4 2.4h7.2v7.2h-7.2zM2.4 14.4h7.2v7.2H2.4z" />
        </svg>
      </div>
    )
  },
  {
    name: 'BLACKBOXAI',
    tagline: 'AI agent for builders',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_1.png',
    icon: (
      <div className="flex items-center justify-center size-8 bg-black rounded-full shrink-0">
        <svg viewBox="0 0 24 24" className="size-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    )
  },
  {
    name: 'Kilo Code',
    tagline: 'Everything you need for agentic development',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_2.png',
    icon: (
      <div className="flex items-center justify-center size-8 bg-white border border-slate-200 rounded-md shrink-0">
        <div className="text-[10px] font-bold leading-none bg-black text-white p-0.5 rounded-sm">Ki Lo</div>
      </div>
    )
  }
];

export default function FeaturedAgents() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="flex items-center gap-1.5 text-xl md:text-2xl font-semibold text-slate-900 group cursor-pointer hover:text-slate-600 transition-colors">
              Featured Agents
              <ChevronRight className="size-5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </h2>
              <p className="text-sm text-slate-500">
                250k+ apps using Radison with 4.2M+ users globally
              </p>
          </div>
          <a href="/rankings" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div 
              key={agent.name} 
              className="group flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-indigo-500 hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              {/* Preview Image Container */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden border-b border-slate-100">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Bottom Info Section */}
              <div className="p-5 flex items-start gap-4">
                {agent.icon}
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="font-semibold text-slate-900 truncate">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {agent.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}