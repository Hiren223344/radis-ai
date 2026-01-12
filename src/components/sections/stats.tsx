import React from "react";

/**
 * StatsSection Component
 * 
 * A horizontal statistics grid featuring four key metrics with high-contrast 
 * bold typography and hover-scale effects as seen on Radison.
 * 
 * Features:
 * - Responsive grid (1 col mobile -> 4 col desktop)
 * - Pixel-perfect typography based on computed styles (Inter font)
 * - Hover scaling effect (scale-110)
 * - Navigation links for relevant metrics
 */
const StatsSection = () => {
  const stats = [
    {
      value: "25T",
      label: "Monthly Tokens",
      href: "/rankings",
      isPrimary: false,
    },
    {
      value: "5M+",
      label: "Global Users",
      href: null, // Note: Global Users doesn't have a link in the provided HTML structure
      isPrimary: false,
    },
    {
      value: "60+",
      label: "Active Providers",
      href: "/models",
      isPrimary: false,
    },
    {
      value: "300+",
      label: "Models",
      href: "/models",
      isPrimary: true, // Color matches the primary indigo brand color
    },
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-12 w-full py-8 md:py-12">
      <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto w-full">
        {stats.map((stat, index) => {
          const Content = (
            <div className="p-4 md:p-6">
              <div className="flex flex-col items-center gap-1 md:gap-2 text-center">
                <p
                  className={`text-3xl md:text-[2.25rem] font-bold tracking-tight leading-none ${
                    stat.isPrimary ? "text-[#6366f1]" : "text-[#020617]"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-[0.75rem] md:text-sm text-[#64748B] uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          );

          const wrapperClasses = "group/card rounded-xl transition-all duration-200 bg-white text-[#020617] border-none hover:scale-110 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] block";

          if (stat.href) {
            return (
              <a 
                key={index} 
                href={stat.href} 
                className={wrapperClasses}
              >
                {Content}
              </a>
            );
          }

          return (
            <div 
              key={index} 
              className={wrapperClasses}
            >
              {Content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;