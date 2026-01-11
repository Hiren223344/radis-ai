import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface AgentCardProps {
  image: string;
  logo: string;
  name: string;
  description: string;
}

const AgentCard = ({ image, logo, name, description }: AgentCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:border-primary hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden bg-slate-900 md:h-52">
        <Image
          src={image}
          alt={`${name} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>
      <div className="p-4 md:p-6 flex items-center gap-4">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-background border border-border">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold leading-tight text-foreground">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturedAgents = () => {
  const agents = [
    {
      name: 'Replit',
      description: 'The easiest way to go from idea to app',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_5.png',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_5.png', // Fallback to same asset if specific rounded logo not in list, usually these are extracted separately but using provided
    },
    {
      name: 'BLACKBOXAI',
      description: 'AI agent for builders',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_6.png',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_6.png',
    },
    {
      name: 'Kilo Code',
      description: 'Everything you need for agentic development',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_7.png',
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_7.png',
    },
  ];

  // Specific logo mappings as the assets array provided has the large previews
  // Using background-containing versions for the cards as they represent the brand visually
  const agentData = [
    {
      ...agents[0],
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_5.png'
    },
    {
      ...agents[1],
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_6.png'
    },
    {
      ...agents[2],
      logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_7.png'
    }
  ];

  return (
    <section className="w-full bg-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <h2 className="flex items-center gap-2 group cursor-pointer text-2xl font-semibold tracking-tight md:text-3xl">
              Featured Agents
              <ChevronRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              250k+ apps using OpenRouter with 4.2M+ users globally
            </p>
          </div>
          <a
            href="/apps"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agentData.map((agent) => (
            <AgentCard
              key={agent.name}
              image={agent.image}
              logo={agent.logo}
              name={agent.name}
              description={agent.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;