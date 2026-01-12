import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ModelCardProps {
  name: string;
  provider: string;
  providerLogo: string;
  tokens: string;
  trend: string;
  isPositive: boolean;
  href: string;
}

const ModelCard = ({
  name,
  provider,
  providerLogo,
  tokens,
  trend,
  isPositive,
  href,
}: ModelCardProps) => {
  return (
    <a
      href={href}
      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-slate-50 p-2 shadow-sm">
            <Image
              src={providerLogo}
              alt={`${provider} logo`}
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-[17px] font-semibold tracking-tight text-foreground">
              {name}
            </h3>
            <p className="text-[13px] text-muted-foreground">
              by <span className="capitalize">{provider}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-end justify-between border-t pt-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
            Tokens
          </p>
          <p className="text-lg font-bold tabular-nums text-foreground">
            {tokens}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
            Weekly Trend
          </p>
          <p
            className={`text-lg font-bold tabular-nums ${
              isPositive ? "text-emerald-500" : "text-destructive"
            }`}
          >
            {isPositive ? "+" : ""}
            {trend}
          </p>
        </div>
      </div>
    </a>
  );
};

export default function FeaturedModels() {
  const models: ModelCardProps[] = [
    {
      name: "Claude Opus 4.5",
      provider: "anthropic",
      providerLogo:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg",
      tokens: "374.1B",
      trend: "65.1%",
      isPositive: true,
      href: "/models/anthropic/claude-3-5-opus",
    },
    {
      name: "GPT-5.2",
      provider: "openai",
      providerLogo:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg",
      tokens: "99.1B",
      trend: "11.1%",
      isPositive: true,
      href: "/models/openai/gpt-5-2",
    },
    {
      name: "Gemini 3 Pro Preview",
      provider: "google",
      providerLogo:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg",
      tokens: "130.9B",
      trend: "2.41%",
      isPositive: true,
      href: "/models/google/gemini-3-pro-preview",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between md:mb-8">
        <div className="space-y-1">
          <a
            href="/models"
            className="group flex items-center gap-1 text-2xl font-semibold text-foreground md:text-[24px]"
          >
            Featured Models
            <ChevronRight className="h-6 w-6 transform transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <p className="text-sm text-muted-foreground">
            300+ active models on 60+ providers
          </p>
        </div>
        <a
          href="/models"
          className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:block"
        >
          View all →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {models.map((model, index) => (
          <ModelCard key={index} {...model} />
        ))}
      </div>

      <div className="mt-4 text-right md:hidden">
        <a
          href="/models"
          className="text-xs font-medium text-muted-foreground hover:text-foreground"
        >
          View all →
        </a>
      </div>
    </section>
  );
}