import React from 'react';

const RecentIncidents = () => {
  return (
    <section className="mt-8 mb-12">
<<<<<<< Updated upstream
=======
      {/* Header with Heading and View History Link */}
>>>>>>> Stashed changes
      <div className="flex justify-between items-baseline mb-6">
        <h2 
          className="text-[20px] font-medium tracking-tight text-[#111827]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Recent Incidents
        </h2>
        <a 
          href="/history" 
          className="text-[14px] text-[#6b7280] hover:text-[#111827] transition-colors duration-200 underline decoration-[#d1d5db] underline-offset-4"
        >
          view incident history
        </a>
      </div>

<<<<<<< Updated upstream
=======
      {/* No Activity Area */}
>>>>>>> Stashed changes
      <div className="py-8 flex flex-col items-center justify-center">
        <p className="text-[14px] leading-6 text-[#6b7280] font-normal">
          No incidents reported in the last 14 days.
        </p>
      </div>

<<<<<<< Updated upstream
=======
      {/* Subtle bottom divider and footer branding will likely be in the footer component, 
          but adding the horizontal rule here to match the visual spacing if required */}
>>>>>>> Stashed changes
      <div className="mt-8 w-full h-px bg-[#d1d5db]/40"></div>
    </section>
  );
};

export default RecentIncidents;
