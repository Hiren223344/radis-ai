"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface Model {
  id: string;
  name: string;
  description: string;
  pricing: {
    prompt: string;
    completion: string;
  };
  context_length: number;
}

interface ModelCardProps {
  name: string;
  provider: string;
  tokens: string;
  trend: string;
  isPositive?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({ name, provider, tokens, trend, isPositive = true }) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:border-primary hover:shadow-card-hover cursor-pointer">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-slate-50 overflow-hidden">
          <div className="h-8 w-8 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase">
            {provider.substring(0, 2)}
          </div>
        </div>
        <div>
          <h3 className="text-[1.125rem] font-semibold leading-[1.5] text-foreground m-0">
            {name}
          </h3>
          <p className="text-[14px] leading-[1.5] text-muted-foreground m-0 lowercase">
            by {provider}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-[12px] font-medium text-muted-foreground leading-none mb-1 uppercase tracking-wider">
            Context
          </p>
          <p className="text-[16px] font-semibold text-foreground leading-none tabular-nums">
            {tokens}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[12px] font-medium text-muted-foreground leading-none mb-1 uppercase tracking-wider">
            Price / M
          </p>
          <p className={`text-[16px] font-semibold leading-none tabular-nums text-success`}>
            ${trend}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturedModels: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_MODELS_URL || "https://openrouter.ai/api/v1/models";
        const res = await fetch(url);
        const data = await res.json();
        // Just take the first 3 for featured
        setModels(data.data?.slice(0, 3) || []);
      } catch (err) {
        console.error("Error fetching featured models:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
  }, []);

  if (loading) return null;

  return (
    <section className="w-full max-w-[1440px] px-6 py-12 md:py-20 mx-auto">
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center gap-2 text-[1.5rem] font-semibold leading-[1.4] text-foreground m-0 group cursor-pointer">
              Featured Models
              <ChevronRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </h2>
            <p className="text-[14px] text-muted-foreground m-0">
              Top models from the OpenRouter community
            </p>
          </div>
          <a 
            href="/models" 
            className="text-[14px] font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModelCard
              key={model.id}
              name={model.name}
              provider={model.id.split('/')[0]}
              tokens={`${Math.round(model.context_length / 1000)}k`}
              trend={(Number(model.pricing.prompt) * 1000000).toFixed(2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
