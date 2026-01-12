import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
      <div className="flex flex-col items-center gap-14 px-6 md:gap-20 md:px-8 md:pt-8 w-full">
        {/* Main Hero Header and Buttons */}
        <div className="flex w-full max-w-4xl flex-col justify-center pt-8 gap-12 md:gap-16">
          <div className="flex flex-col gap-4 md:gap-6 text-center">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="my-0 w-full text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.2]">
                Radison: The Unified Interface For LLMs
              </h1>
              <p className="text-[#64748B] text-lg md:pt-2 md:text-xl font-normal">
                Better{' '}
                <a href="/models?order=pricing-low-to-high" className="text-[#6366F1] hover:underline">
                  prices
                </a>
                , better{' '}
                <a href="/docs/features/uptime-optimization" className="text-[#6366F1] hover:underline">
                  uptime
                </a>
                , no subscriptions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a href="/settings/keys" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring leading-6 bg-[#6366F1] text-white shadow hover:bg-[#6366F1]/90 h-11 px-10 py-4 gap-2 w-full">
                  Get API Key
                </button>
              </a>
              <a href="/models" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring leading-6 border border-[#E2E8F0] bg-transparent shadow-sm hover:bg-[#F1F5F9] h-11 px-10 py-4 gap-3 text-foreground w-full">
                  Explore Models
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <div className="inline-block size-5 rounded-full border-2 border-white bg-white ring-0">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg" 
                        alt="OpenAI" 
                        width={20} 
                        height={20} 
                        className="rounded-full"
                      />
                    </div>
                    <div className="inline-block size-5 rounded-full border-2 border-white bg-white ring-0">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg" 
                        alt="Google Gemini" 
                        width={20} 
                        height={20} 
                        className="rounded-full"
                      />
                    </div>
                    <div className="inline-block size-5 rounded-full border-2 border-white bg-white ring-0">
                      <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg" 
                        alt="Anthropic" 
                        width={20} 
                        height={20} 
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>

          {/* Stats Metrics Grid */}
          <div className="flex flex-col gap-8 md:gap-12 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 max-w-4xl mx-auto w-full">
              <a href="/rankings" className="group">
                <div className="flex flex-col items-center gap-1 md:gap-2 transition-transform duration-200 group-hover:scale-105">
                  <p className="text-3xl md:text-[2.25rem] font-bold text-foreground leading-none">25T</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-[#64748B]">Monthly Tokens</p>
                </div>
              </a>
              <div className="group">
                <div className="flex flex-col items-center gap-1 md:gap-2 transition-transform duration-200 group-hover:scale-105">
                  <p className="text-3xl md:text-[2.25rem] font-bold text-foreground leading-none">5M+</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-[#64748B]">Global Users</p>
                </div>
              </div>
              <a href="/models" className="group">
                <div className="flex flex-col items-center gap-1 md:gap-2 transition-transform duration-200 group-hover:scale-105">
                  <p className="text-3xl md:text-[2.25rem] font-bold text-foreground leading-none">60+</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-[#64748B]">Active Providers</p>
                </div>
              </a>
              <a href="/models" className="group">
                <div className="flex flex-col items-center gap-1 md:gap-2 transition-transform duration-200 group-hover:scale-105">
                  <p className="text-3xl md:text-[2.25rem] font-bold text-[#6366F1] leading-none">300+</p>
                  <p className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-[#64748B]">Models</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;