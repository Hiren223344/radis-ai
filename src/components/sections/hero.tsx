import React from "react";

/**
 * Hero component for the OpenRouter home page.
 */
const HeroSection = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
