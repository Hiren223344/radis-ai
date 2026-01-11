import React from "react";

/**
 * Hero component for the OpenRouter Rankings page.
 * Clones the main heading "AI Model Rankings" with pixel-perfect accuracy
 * according to the provided design system and computed styles.
 */
const Hero = () => {
  return (
<<<<<<< Updated upstream
    <section className="w-full bg-background px-6 pt-16 pb-24 text-center">
      <div className="mx-auto max-w-[800px]">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-6">
          A unified interface for LLMs
        </h1>
        <p className="text-xl text-slate-600 mb-10">
          Find the best models for your use case and use them with a single API. OpenRouter is a unified interface for LLMs.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
            Get Started
          </button>
          <button className="border border-slate-200 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 transition-colors">
            View Models
          </button>
=======
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
export default HeroSection;
=======

export default Hero;
>>>>>>> Stashed changes
