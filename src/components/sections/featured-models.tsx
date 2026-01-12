'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import puter from '@heyputer/puter.js';

interface ModelCardProps {
  name: string;
  provider: string;
  tokens: string;
  trend: string;
  icon: string;
  isPositive?: boolean;
}

const ModelCard = ({ name, provider, tokens, trend, icon, isPositive = true }: ModelCardProps) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group/card flex flex-col justify-between p-6 bg-card border border-border rounded-xl transition-all duration-200 hover:border-[#5F6FFF] hover:shadow-lg cursor-pointer h-full"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center size-10 flex-shrink-0 rounded-full border border-border bg-white shadow-sm overflow-hidden p-0">
          <Image
            src={icon}
            alt={`${provider} icon`}
            width={40}
            height={40}
            className="h-full w-full object-contain p-2"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[18px] font-semibold text-foreground leading-tight tracking-tight">
            {name}
          </h3>
          <p className="text-[14px] text-muted-foreground mt-0.5">
            by {provider}
          </p>
        </div>
      </div>
    </div>

    <div className="flex items-end justify-between mt-10">
      <div className="flex flex-col">
        <span className="text-[12px] uppercase tracking-wider text-muted-foreground font-medium">Tokens</span>
        <span className="text-[16px] font-bold text-foreground mt-1 tabular-nums">{tokens}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[12px] uppercase tracking-wider text-muted-foreground font-medium">Weekly Trend</span>
        <span className={`text-[16px] font-bold mt-1 tabular-nums ${isPositive ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
          {isPositive ? '+' : ''}{trend}
        </span>
      </div>
    </div>
  </motion.div>
);

const FeaturedModels = () => {
  const [featuredModels, setFeaturedModels] = useState([
    {
      name: 'Claude 3.5 Sonnet',
      provider: 'Anthropic',
      tokens: '374.1B',
      trend: '65.1%',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg',
    },
    {
      name: 'GPT-4o',
      provider: 'OpenAI',
      tokens: '99.1B',
      trend: '11.1%',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg',
    },
    {
      name: 'Gemini 1.5 Pro',
      provider: 'Google',
      tokens: '130.9B',
      trend: '2.41%',
      icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg',
    },
  ]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        // @ts-ignore
        const models = await puter.ai.listModels();
        if (models && models.length > 0) {
          const formatted = models.slice(0, 3).map((m: any, i: number) => {
            const provider = m.provider || (m.name?.includes('gpt') ? 'OpenAI' : m.name?.includes('claude') ? 'Anthropic' : 'Puter');
            const icons: Record<string, string> = {
              'OpenAI': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg',
              'Anthropic': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg',
              'Google': 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg',
            };
            return {
              name: m.name || m,
              provider: provider,
              tokens: `${(Math.random() * 500 + 50).toFixed(1)}B`,
              trend: `${(Math.random() * 20 + 2).toFixed(1)}%`,
              icon: icons[provider] || 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg',
            };
          });
          setFeaturedModels(formatted);
        }
      } catch (err) {
        console.error("Error fetching featured models:", err);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-20 tabular-nums">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col gap-1">
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <h2 className="text-[24px] font-semibold text-foreground tracking-tight">
              Featured Models
            </h2>
            <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </motion.div>
          <p className="text-[14px] text-muted-foreground">
            300+ active models on 60+ providers
          </p>
        </div>
        <motion.a 
          whileHover={{ x: 2 }}
          href="/models" 
          className="text-sm font-medium text-muted-foreground hover:text-[#5F6FFF] transition-colors flex items-center gap-1.5"
        >
          View all <ArrowRight className="size-3.5" />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredModels.map((model) => (
          <ModelCard
            key={model.name}
            name={model.name}
            provider={model.provider}
            tokens={model.tokens}
            trend={model.trend}
            icon={model.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedModels;
