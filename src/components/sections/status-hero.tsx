import React from "react";

/**
 * StatusHero Component
 * 
 * Clones the hero section of the status page containing:
 * - Main heading: "A4F System Status"
 * - Subtext: "Current operational status of our platform and services."
 */
const StatusHero: React.FC = () => {
  return (
    <section className="text-center mb-10 md:mb-14 px-4">
      {/* 
          H1 Styling details from computed styles and globals.css:
          - font-size: 36px/2.25rem (md:text-4xl)
          - font-weight: 800 (extrabold)
          - tracking-tighter
          - mb-3 (margin-bottom: 0.75rem)
      */}
      <h1 className="text-3xl md:text-[2.25rem] font-extrabold tracking-tighter text-[#09090B] mb-3 leading-tight">
        A4F System Status
      </h1>
      
      {/* 
          Subtext Styling details from High-Level Design:
          - text-muted-foreground (#71717A)
          - text-lg (1.125rem)
          - max-width 2xl
          - mx-auto 
      */}
      <p className="text-[#71717A] text-lg max-w-2xl mx-auto leading-relaxed">
        Current operational status of our platform and services.
      </p>
    </section>
  );
};

export default StatusHero;