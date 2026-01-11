import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ModelCardProps {
  name: string;
  provider: string;
  providerLogo: string;
  tokens: string;
  trend: string;
  isPositive?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({ name, provider, providerLogo, tokens, trend, isPositive = true }) => {
  return (
    <div className="group/card bg-card text-card-foreground rounded-xl border border-border shadow-sm transition-all duration-200 hover:border-primary hover:shadow-lg overflow-hidden flex flex-col h-full cursor-pointer">
      <div className="p-4 md:p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <div className="flex items-center justify-center size-10 flex-shrink-0 rounded-full border border-border bg-white p-1">
              <div className="overflow-hidden rounded-full h-full w-full">
                <Image
                  src={providerLogo}
                  alt={`Logo for ${provider}`}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base md:text-[1.125rem] font-semibold leading-tight m-0 text-foreground">
                {name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                by {provider}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground font-medium m-0">
              Tokens
            </p>
            <p className="text-sm md:text-base font-bold text-foreground tabular-nums m-0">
              {tokens}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground font-medium m-0">
              Weekly Trend
            </p>
            <p className={`text-sm md:text-base font-bold tabular-nums m-0 ${isPositive ? 'text-chart-2' : 'text-destructive'}`}>
              {trend}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedModels = () => {
  const models: ModelCardProps[] = [
    {
      name: 'Claude Opus 4.5',
      provider: 'anthropic',
      providerLogo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg',
      tokens: '380.4B',
      trend: '+87.61%',
      isPositive: true,
    },
    {
      name: 'GPT-5.2',
      provider: 'openai',
      providerLogo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg',
      tokens: '95.4B',
      trend: '+15.15%',
      isPositive: true,
    },
    {
      name: 'Gemini 3 Pro Preview',
      provider: 'google',
      providerLogo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg',
      tokens: '132.5B',
      trend: '+8.23%',
      isPositive: true,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 group cursor-pointer w-fit">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground m-0">
                Featured Models
              </h2>
              <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-sm md:text-base text-muted-foreground m-0">
              300+ active models on 60+ providers
            </p>
          </div>
          <a 
            href="/models" 
            className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;