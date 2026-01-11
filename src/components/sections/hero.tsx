<<<<<<< Updated upstream
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
>>>>>>> Stashed changes
