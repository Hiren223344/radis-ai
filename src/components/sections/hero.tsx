import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center max-w-full lg:mt-8">
      <div className="flex flex-col items-center gap-14 px-6 md:gap-20 md:px-8 md:pt-8 w-full">
        <div className="flex w-full max-w-4xl flex-col justify-center pt-8 gap-12 md:gap-16">
          <div className="flex flex-col gap-4 md:gap-6 text-center">
            {/* Headline Group */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="my-0 w-full text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold tracking-tight leading-[1.2] text-[#020617]">
                The Unified Interface For LLMs
              </h1>
              <p className="text-[#64748b] text-[16px] md:text-[20px] md:pt-2 leading-[1.6]">
                Better{" "}
                <a
                  href="/models?order=pricing-low-to-high"
                  className="text-[#4f46e5] hover:underline transition-all"
                >
                  prices
                </a>
                , better{" "}
                <a
                  href="/docs/features/uptime-optimization"
                  className="text-[#4f46e5] hover:underline transition-all"
                >
                  uptime
                </a>
                , no subscriptions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a href="/settings/keys" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-[#4f46e5] leading-6 bg-[#4f46e5] text-white shadow hover:bg-[#4f46e5]/90 h-11 px-10 py-4 gap-2 w-full sm:w-auto text-[14px]">
                  Get API Key
                </button>
              </a>
              <a href="/models" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-[#4f46e5] leading-[24px] border border-[#e2e8f0] bg-transparent shadow-sm hover:bg-[#f1f5f9] hover:text-[#0f172a] h-11 px-10 py-4 gap-2 text-[#020617] w-full sm:w-auto text-[14px]">
                  Explore Models
                  <div className="flex gap-1 ml-1">
                    {/* OpenAI Icon */}
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full size-5 border-0 shadow-none bg-transparent p-0">
                      <div className="overflow-hidden rounded-full">
                        <Image
                          width={20}
                          height={20}
                          alt="OpenAI"
                          className="h-full w-full object-cover"
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg"
                        />
                      </div>
                    </div>
                    {/* Google Gemini Icon */}
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full size-5 border-0 shadow-none bg-transparent p-0">
                      <div className="overflow-hidden rounded-full">
                        <Image
                          width={20}
                          height={20}
                          alt="Google"
                          className="h-full w-full object-cover"
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg"
                        />
                      </div>
                    </div>
                    {/* Anthropic Icon */}
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full size-5 border-0 shadow-none bg-transparent p-0">
                      <div className="overflow-hidden rounded-full">
                        <Image
                          width={20}
                          height={20}
                          alt="Anthropic"
                          className="h-full w-full object-cover"
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>

          {/* Key Metrics Stats */}
          <div className="flex flex-col gap-8 md:gap-12 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto w-full">
              {/* Monthly Tokens */}
              <a href="/rankings" className="block group/card rounded-xl transition-all duration-200 bg-white hover:scale-105 active:scale-100">
                <div className="p-4 md:p-6 text-center">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <p className="text-[30px] md:text-[36px] font-bold text-[#020617] tabular-nums leading-none">25T</p>
                    <p className="text-[12px] md:text-[14px] text-[#64748b] font-medium leading-[1.5]">Monthly Tokens</p>
                  </div>
                </div>
              </a>

              {/* Global Users */}
              <div className="group/card rounded-xl transition-all duration-200 bg-white hover:scale-105">
                <div className="p-4 md:p-6 text-center">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <p className="text-[30px] md:text-[36px] font-bold text-[#020617] tabular-nums leading-none">5M+</p>
                    <p className="text-[12px] md:text-[14px] text-[#64748b] font-medium leading-[1.5]">Global Users</p>
                  </div>
                </div>
              </div>

              {/* Active Providers */}
              <a href="/providers" className="block group/card rounded-xl transition-all duration-200 bg-white hover:scale-105 active:scale-100">
                <div className="p-4 md:p-6 text-center">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <p className="text-[30px] md:text-[36px] font-bold text-[#020617] tabular-nums leading-none">60+</p>
                    <p className="text-[12px] md:text-[14px] text-[#64748b] font-medium leading-[1.5]">Active Providers</p>
                  </div>
                </div>
              </a>

              {/* Models */}
              <a href="/models" className="block group/card rounded-xl transition-all duration-200 bg-white hover:scale-105 active:scale-100">
                <div className="p-4 md:p-6 text-center">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <p className="text-[30px] md:text-[36px] font-bold text-[#4f46e5] tabular-nums leading-none">300+</p>
                    <p className="text-[12px] md:text-[14px] text-[#64748b] font-medium leading-[1.5]">Models</p>
                  </div>
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