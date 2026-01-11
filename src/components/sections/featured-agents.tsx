import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface AgentCardProps {
  image: string;
  logo: string;
  name: string;
  description: string;
  href: string;
}

const AgentCard = ({ image, logo, name, description, href }: AgentCardProps) => {
  return (
    <a 
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white transition-all duration-200 hover:border-[#6366F1] hover:shadow-lg"
    >
      {/* Top Graphic Section */}
      <div className="relative h-[200px] w-full overflow-hidden bg-[#0F172A]">
        <Image
          src={image}
          alt={`${name} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
        />
      </div>

      {/* Bottom Content Section */}
      <div className="flex flex-1 items-center gap-4 p-5">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[1.125rem] font-semibold leading-tight text-[#0F172A]">
            {name}
          </h3>
          <p className="text-[0.875rem] text-[#64748B] leading-snug">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

const FeaturedAgents = () => {
  const agents = [
    {
      name: 'Replit',
      description: 'The easiest way to go from idea to app',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_1.png',
      logo: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://replit.com/&size=256',
      href: '/apps/replit',
    },
    {
      name: 'BLACKBOXAI',
      description: 'AI agent for builders',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_2.png',
      logo: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.blackbox.ai/&size=256',
      href: '/apps/blackbox-ai',
    },
    {
      name: 'Kilo Code',
      description: 'Everything you need for agentic development',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_3.png',
      logo: 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kilocode.com/&size=256',
      href: '/apps/kilo-code',
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-20">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <div className="group flex items-center gap-1 cursor-pointer">
            <h2 className="text-[1.5rem] font-semibold text-[#0F172A]">
              Featured Agents
            </h2>
            <ChevronRight className="h-5 w-5 text-[#64748B] transition-transform group-hover:translate-x-0.5" />
          </div>
          <p className="text-[0.875rem] text-[#64748B]">
            250k+ apps using OpenRouter with 4.2M+ users globally
          </p>
        </div>
        <a 
          href="/apps"
          className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
        >
          View all →
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedAgents;