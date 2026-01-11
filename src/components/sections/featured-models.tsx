import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ModelCardProps {
  logo: string;
  name: string;
  provider: string;
  tokens: string;
  trend: string;
  isPositive?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({ logo, name, provider, tokens, trend, isPositive = true }) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:border-primary hover:shadow-card-hover cursor-pointer">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-slate-50 overflow-hidden">
          <Image 
            src={logo} 
            alt={`${provider} logo`} 
            width={32} 
            height={32} 
            className="h-8 w-8 object-contain"
          />
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
            Tokens
          </p>
          <p className="text-[16px] font-semibold text-foreground leading-none tabular-nums">
            {tokens}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[12px] font-medium text-muted-foreground leading-none mb-1 uppercase tracking-wider">
            Weekly Trend
          </p>
          <p className={`text-[16px] font-semibold leading-none tabular-nums ${isPositive ? 'text-success' : 'text-destructive'}`}>
            {isPositive ? '+' : ''}{trend}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturedModels: React.FC = () => {
  const models = [
    {
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg",
      name: "Claude Opus 4.5",
      provider: "anthropic",
      tokens: "380.4B",
      trend: "87.61%",
    },
    {
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg",
      name: "GPT-5.2",
      provider: "openai",
      tokens: "95.4B",
      trend: "15.15%",
    },
    {
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg",
      name: "Gemini 3 Pro Preview",
      provider: "google",
      tokens: "132.5B",
      trend: "8.23%",
    }
  ];

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
              300+ active models on 60+ providers
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
              key={model.name}
              logo={model.logo}
              name={model.name}
              provider={model.provider}
              tokens={model.tokens}
              trend={model.trend}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;