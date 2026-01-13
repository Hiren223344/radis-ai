'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import puter from '@heyputer/puter.js';
import ModelIcon from '../ui/model-icon';

interface ModelCardProps {
  name: string;
  provider: string;
  tokens: string;
  trend: string;
  icon?: string;
  modelId?: string;
  isPositive?: boolean;
}

const ModelCard = ({ name, provider, tokens, trend, icon, modelId, isPositive = true, index }: ModelCardProps & { index: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ translateY: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group/card flex flex-col justify-between p-8 liquid-glass border border-white/40 rounded-[2rem] transition-all duration-500 shadow-xl cursor-pointer h-full"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center size-14 flex-shrink-0 rounded-2xl border border-white/60 bg-white/80 shadow-lg overflow-hidden p-2 transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-3">
          <ModelIcon modelId={modelId || name} size={40} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-primary leading-tight tracking-tight">
            {name}
          </h3>
          <p className="text-sm font-medium text-muted-foreground mt-1">
            by {provider}
          </p>
        </div>
      </div>
    </div>

    <div className="flex items-end justify-between mt-12">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Tokens</span>
        <span className="text-xl font-bold text-primary mt-1 tabular-nums">{tokens}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Trend</span>
        <span className={`text-xl font-bold mt-1 tabular-nums ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
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
          // Select one best model from each provider
          const selectedModels = [
            models.find((m: any) => m.id?.includes('claude-3-5-sonnet') || m.id?.includes('claude-3-sonnet') || m.id?.includes('claude')),
            models.find((m: any) => m.id?.includes('gpt-4o') || m.id?.includes('gpt-4') || m.id?.includes('openai')),
            models.find((m: any) => m.id?.includes('gemini-1.5-pro') || m.id?.includes('gemini-1.5-flash') || m.id?.includes('gemini') || m.id?.includes('google'))
          ].filter(Boolean);

          const formatted = selectedModels.map((m: any, i: number) => {
            const modelId = typeof m === 'string' ? m : (m.id || m.name || `model-${i}`);
            const modelName = typeof m.name === 'string' ? m.name : modelId;
            const provider = m.provider || (modelId.toLowerCase().includes('gpt') ? 'OpenAI' : modelId.toLowerCase().includes('claude') ? 'Anthropic' : modelId.toLowerCase().includes('gemini') ? 'Google' : 'Puter');
            
            return {
              name: modelName,
              provider: provider,
              tokens: `${(Math.random() * 500 + 50).toFixed(1)}B`,
              trend: `${(Math.random() * 20 + 2).toFixed(1)}%`,
              modelId: modelId,
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
              modelId={model.name}
            />
          ))}
      </div>
    </section>
  );
};

export default FeaturedModels;
