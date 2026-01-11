import React from 'react';

const HeroRankings = () => {
  return (
    <section 
      className="w-full flex flex-col pt-0 lg:pt-8"
      style={{
        maxWidth: '1280px',
        marginInline: 'auto'
      }}
    >
      <div 
        className="flex flex-col px-6"
        style={{
          gap: '48px' /* gap-12 = 3rem = 48px */
        }}
      >
        <h1 
          className="font-semibold text-slate-12 tracking-tight"
          style={{
            fontSize: '1.875rem', /* 30px */
            lineHeight: '1.2',
            color: '#0f172a', /* slate-12 equivalent from design system */
            fontFamily: 'Inter, sans-serif'
          }}
        >
          AI Model Rankings
        </h1>
      </div>
    </section>
  );
};

export default HeroRankings;