<<<<<<< Updated upstream
"use client";
import React from 'react';
import Image from 'next/image';

/**
 * Hero component for the OpenRouter Home page.
 * Clones the main heading "The Unified Interface For LLMs" with pixel-perfect accuracy.
 */
const Hero = () => {
  return (
    <section className="flex flex-1 flex-col items-center mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
      {/* Hero Content Wrapper */}
      <div className="flex flex-col items-center gap-14 px-6 md:gap-20 md:px-8 md:pt-8 w-full max-w-4xl">
        <div className="flex w-full flex-col justify-center pt-8 gap-12 md:gap-16">
          
          {/* Headline & Subtext */}
          <div className="flex flex-col gap-4 md:gap-6 text-center">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="my-0 w-full text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0F172A] leading-[1.2]">
                The Unified Interface For LLMs
              </h1>
              <p className="text-[#475569] text-md md:pt-2 md:text-xl font-normal">
                Better{' '}
                <a href="/models?order=pricing-low-to-high" className="text-[#6366f1] underline-offset-4 hover:underline">
                  prices
                </a>
                , better{' '}
                <a href="/docs/features/uptime-optimization" className="text-[#6366f1] underline-offset-4 hover:underline">
                  uptime
                </a>
                , no subscriptions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a href="/settings/keys" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring bg-[#6366f1] text-white shadow hover:bg-[#6366f1]/90 h-11 px-10 py-4 gap-2 w-full">
                  Get API Key
                </button>
              </a>
              <a href="/models" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring border border-[#e2e8f0] bg-white shadow-sm hover:bg-[#f1f5f9] h-11 px-10 py-4 gap-2 text-[#0F172A] w-full">
                  Explore Models
                  <div className="flex gap-1 ml-1">
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full size-5 bg-transparent p-0">
                      <div className="overflow-hidden rounded-full border border-transparent">
                        <Image 
                          width={20} 
                          height={20} 
                          alt="OpenAI" 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/OpenAI-1.svg" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full size-5 bg-transparent p-0">
                      <div className="overflow-hidden rounded-full">
                        <Image 
                          width={20} 
                          height={20} 
                          alt="Google" 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/GoogleGemini-2.svg" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full size-5 bg-transparent p-0">
                      <div className="overflow-hidden rounded-full">
                        <Image 
                          width={20} 
                          height={20} 
                          alt="Anthropic" 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/svgs/Anthropic-3.svg" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
=======
import React from "react";

/**
 * Hero component for the OpenRouter Rankings page.
 * Clones the main heading "AI Model Rankings" with pixel-perfect accuracy
 * according to the provided design system and computed styles.
 */
const Hero = () => {
  return (
    <section className="w-full flex-col items-center bg-background px-6 pt-0 lg:pt-8">
      {/* 
        Container wrapping the main heading. 
        As specified in high_level_design, the content max-width is 1280px (screen-xl).
        The HTML structure shows 'main-content-container-lg w-full flex flex-col gap-32'.
      */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col overflow-hidden">
        {/*
          The vertical spacing between the nav and heading is controlled by mt-0 (md) and mt-8 (lg) 
          on the parent div in the provided HTML structure.
          The gap between the H1 and the first section is defined as gap-12 in the HTML structure.
        */}
        <div className="flex flex-col gap-12 pb-8 lg:pb-0">
          <h1 
            style={{
              fontSize: "1.875rem", // 30px from typography_scale and computed_styles h1
              fontWeight: 600,      // Semibold
              lineHeight: 1.2,      // From typography_scale
              letterSpacing: "-0.02em",
              color: "#0F172A",     // text-slate-12 / Slate-950/900 approximation for Slate-12 equivalent
            }}
            className="text-slate-12"
          >
            AI Model Rankings
          </h1>
>>>>>>> Stashed changes
        </div>
      </div>
    </section>
  );
};

<<<<<<< Updated upstream
export default Hero;
=======
export default Hero;
>>>>>>> Stashed changes
