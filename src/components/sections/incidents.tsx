import React from 'react';

const Incidents = () => {
  return (
    <section className="max-w-3xl mx-auto pt-8 pb-12">
      {/* Recent Incidents Header */}
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-[20px] font-semibold text-gray-900 leading-tight">
          Recent Incidents
        </h2>
        <a 
          href="/history" 
          className="text-[14px] text-gray-500 hover:text-gray-700 underline decoration-gray-300 underline-offset-4 transition-colors"
        >
          view incident history
        </a>
      </div>

      {/* No Incidents Placeholder */}
      <div className="py-8">
        <p className="text-[16px] text-gray-500 text-center font-normal">
          No incidents reported in the last 14 days.
        </p>
      </div>
    </section>
  );
};

export default Incidents;