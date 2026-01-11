import React from 'react';

export default function HeroHeader() {
  return (
    <div className="flex flex-col gap-12 pt-0 lg:pt-8">
      <h1 
        className="text-[30px] font-semibold tracking-tight text-[#0F172A] leading-[1.25]"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        AI Model Rankings
      </h1>
    </div>
  );
}