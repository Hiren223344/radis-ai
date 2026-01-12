import React from "react";
import Image from "next/image";

/**
 * HeroSection Component
 * Clones the OpenRouter hero section with pixel-perfect accuracy.
 * Features:
 * - Headline: "The Unified Interface For LLMs"
 * - Subtext with specific links for prices and uptime.
 * - Dual action buttons: "Get API Key" (Primary) and "Explore Models" (Secondary with provider icons).
 * - Key Metrics grid (Tokens, Users, Providers, Models).
 */
const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-6 pt-16 pb-12 md:px-8 md:pt-16 lg:pt-20 bg-background overflow-hidden">
      <div className="flex w-full max-w-4xl flex-col justify-center gap-12 md:gap-16">
        
        {/* Headline & Subtext */}
        <div className="flex flex-col gap-4 md:gap-6 text-center">
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="my-0 w-full text-3xl sm:text-4xl md:text-[3rem] font-semibold leading-[1.1] tracking-tight text-[#0F172A]">
              The Unified Interface For LLMs
            </h1>
            <p className="text-[#64748B] text-md md:pt-2 md:text-xl font-normal">
              Better{" "}
              <a 
                href="/models?order=pricing-low-to-high" 
                className="text-[#5F6FFF] hover:underline transition-all"
              >
                prices
              </a>
              , better{" "}
              <a 
                href="/docs/features/uptime-optimization" 
                className="text-[#5F6FFF] hover:underline transition-all"
              >
                uptime
              </a>
              , no subscriptions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-2">
            <a href="/settings/keys" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-[#5F6FFF] leading-6 bg-[#5F6FFF] text-white shadow-sm hover:bg-[#5F6FFF]/90 h-11 px-10 py-4 gap-2 w-full sm:w-auto text-base">
                Get API Key
              </button>
            </a>
            <a href="/models" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-[#5F6FFF] leading-6 border border-[#E2E8F0] bg-transparent shadow-sm hover:bg-[#F8FAFC] hover:text-[#5F6FFF] h-11 px-10 py-4 gap-2 text-[#0F172A] w-full sm:w-auto text-base">
                Explore Models
                <div className="flex -space-x-1.5 ml-1">
                  {/* OpenAI Icon */}
                  <div className="flex items-center justify-center flex-shrink-0 rounded-full size-5 border border-white bg-white overflow-hidden relative z-30">
                    <img 
                      width="20" 
                      height="20" 
                      alt="OpenAI" 
                      className="h-full w-full object-cover" 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg" 
                    />
                  </div>
                  {/* Google Gemini Icon */}
                  <div className="flex items-center justify-center flex-shrink-0 rounded-full size-5 border border-white bg-white overflow-hidden relative z-20">
                    <img 
                      width="20" 
                      height="20" 
                      alt="Google" 
                      className="h-full w-full object-cover" 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg" 
                    />
                  </div>
                  {/* Anthropic Icon */}
                  <div className="flex items-center justify-center flex-shrink-0 rounded-full size-5 border border-white bg-white overflow-hidden relative z-10">
                    <img 
                      width="20" 
                      height="20" 
                      alt="Anthropic" 
                      className="h-full w-full object-cover" 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg" 
                    />
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
            {/* Metric 1: Monthly Tokens */}
            <a href="/rankings" className="group/card block outline-none">
              <div className="rounded-xl transition-all duration-300 md:group-hover/card:scale-110 md:group-hover/card:shadow-xl md:group-hover/card:shadow-slate-200 bg-card text-foreground border-none">
                <div className="p-4 md:p-6 text-center">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <p className="text-3xl md:text-4xl font-bold text-[#0F172A]">25T</p>
                    <p className="text-xs md:text-sm text-[#64748B] font-medium uppercase tracking-wide">Monthly Tokens</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Metric 2: Global Users */}
            <div className="group/card rounded-xl transition-all duration-300 md:group-hover/card:scale-110 md:group-hover/card:shadow-xl md:group-hover/card:shadow-slate-200 bg-card text-foreground border-none">
              <div className="p-4 md:p-6 text-center">
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <p className="text-3xl md:text-4xl font-bold text-[#0F172A]">5M+</p>
                  <p className="text-xs md:text-sm text-[#64748B] font-medium uppercase tracking-wide">Global Users</p>
                </div>
              </div>
            </div>

            {/* Metric 3: Providers */}
            <a href="/models" className="group/card block outline-none">
              <div className="rounded-xl transition-all duration-300 md:group-hover/card:scale-110 md:group-hover/card:shadow-xl md:group-hover/card:shadow-slate-200 bg-card text-foreground border-none">
                <div className="p-4 md:p-6 text-center">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <p className="text-3xl md:text-4xl font-bold text-[#0F172A]">60+</p>
                    <p className="text-xs md:text-sm text-[#64748B] font-medium uppercase tracking-wide">Active Providers</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Metric 4: Models */}
            <a href="/models" className="group/card block outline-none">
              <div className="rounded-xl transition-all duration-300 md:group-hover/card:scale-110 md:group-hover/card:shadow-xl md:group-hover/card:shadow-slate-200 bg-card text-foreground border-none">
                <div className="p-4 md:p-6 text-center">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <p className="text-3xl md:text-4xl font-bold text-[#5F6FFF]">300+</p>
                    <p className="text-xs md:text-sm text-[#64748B] font-medium uppercase tracking-wide">Models</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;