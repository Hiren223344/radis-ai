import React from 'react';

const RecentIncidents = () => {
  return (
    <section className="mt-12 mb-8">
      <div className="flex flex-row items-baseline justify-between mb-8">
        <h2 className="text-xl sm:text-[1.125rem] font-medium leading-7 text-gray-900 dark:text-white">
          Recent Incidents
        </h2>
        <a 
          href="/history" 
          className="text-sm border-b border-gray-300 dark:border-zinc-700 text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-300 transition-colors pb-0"
        >
          view incident history
        </a>
      </div>
      
      <div className="flex justify-center items-center py-6">
        <p className="text-sm font-normal text-gray-500 dark:text-zinc-400">
          No incidents reported in the last 14 days.
        </p>
      </div>
    </section>
  );
};

export default RecentIncidents;