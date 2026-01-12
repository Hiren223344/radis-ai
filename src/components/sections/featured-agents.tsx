import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const FeaturedAgents = () => {
  const agents = [
    {
      name: 'Replit',
      description: 'The easiest way to go from idea to app',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_5.png',
      logo: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://replit.com/&size=256',
    },
    {
      name: 'BLACKBOXAI',
      description: 'AI agent for builders',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_6.png',
      logo: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://blackbox.ai/&size=256',
    },
    {
      name: 'Kilo Code',
      description: 'Everything you need for agentic development',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_7.png',
      logo: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kilo.dev/&size=256',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 overflow-hidden">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="flex items-center gap-1 text-2xl font-semibold text-foreground tracking-tight">
              Featured Agents
              <ChevronRight className="h-5 w-5 text-muted-foreground/50" />
            </h2>
            <p className="text-sm text-muted-foreground">
              250k+ apps using Radison with 4.2M+ users globally
            </p>
          </div>
          <a
            href="/rankings"
            className="hidden sm:flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all
            <ChevronRight className="h-3 w-3" />
          </a>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <a
              key={agent.name}
              href="#"
              className="group flex flex-col h-full bg-card border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-primary/50"
            >
              {/* Product Screenshot Area */}
              <div className="relative h-48 w-full bg-[#0a0a0a] overflow-hidden border-b">
                <Image
                  src={agent.image}
                  alt={`${agent.name} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Info Area */}
              <div className="flex items-center gap-4 p-5 flex-1">
                <div className="flex-shrink-0 size-11 rounded-full border bg-white flex items-center justify-center p-2.5 overflow-hidden">
                   <img 
                    src={agent.logo} 
                    alt={agent.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{agent.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{agent.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Mobile View All */}
        <div className="flex sm:hidden justify-center mt-4">
           <a
            href="/rankings"
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground"
          >
            View all
            <ChevronRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;