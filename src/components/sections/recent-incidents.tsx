import React from 'react';

const RecentIncidents = () => {
  return (
    <section className="max-w-3xl mx-auto mt-12 mb-20 px-4 sm:px-0">
      <div className="flex justify-between items-end border-b border-gray-100 pb-2 mb-8">
        <h2 className="text-2xl font-normal text-gray-900 leading-normal tracking-tight">
          Recent Incidents
        </h2>
        <a 
          href="/history" 
          className="text-sm text-gray-400 hover:text-gray-600 underline decoration-gray-300 underline-offset-4 transition-colors"
        >
          view incident history
        </a>
      </div>

      <div className="py-10 text-center">
        <p className="text-[#6b7280] text-sm sm:text-base font-normal">
          No incidents reported in the last 14 days.
        </p>
      </div>

      {/* Thin divider line matching the overall design system */}
      <div className="mt-12 w-full h-px bg-gray-200"></div>
    </section>
  );
};

export default RecentIncidents;