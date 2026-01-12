import React from "react";

/**
 * StatusHero Component
 * 
 * Clones the status page hero section featuring the "Radison System Status" title
 * and the subtitle "Current operational status of our platform and services."
 * 
 * Adheres to the light theme and design specifications provided.
 */
const StatusHero: React.FC = () => {
  return (
    <section className="w-full">
      <div className="container max-w-screen-lg mx-auto px-4 pt-12 pb-10 md:pt-16 md:pb-14 lg:pt-20 lg:pb-14">
        <div className="text-center">
          {/* Main Title - H1 */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[#020817] mb-3 leading-[1.2]">
            Radison System Status
          </h1>
          
          {/* Subtitle / Description */}
          <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Current operational status of our platform and services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatusHero;