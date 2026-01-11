import React from 'react';
import { CircleCheck, PlusCircle } from 'lucide-react';

interface UptimeComponentProps {
  name: string;
  uptime: string;
  incidents?: number[];
  showPlus?: boolean;
}

const UptimeComponent: React.FC<UptimeComponentProps> = ({ name, uptime, incidents = [], showPlus = false }) => {
  // Generate 90 bars for 90 days
  const bars = Array.from({ length: 90 }, (_, i) => {
    const isIncident = incidents.includes(i);
    return (
      <div
        key={i}
        className={`h-8 sm:h-9 w-0.5 sm:w-1 md:w-1.5 ${
          isIncident ? 'bg-red-500' : 'bg-green-500'
        } ${i === 0 ? 'rounded-tl-md rounded-bl-md' : ''} ${i === 89 ? 'rounded-tr-md rounded-br-md' : ''}`}
      />
    );
  });

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center">
          {showPlus && (
            <button className="mr-2 inline-flex items-center shadow-sm border border-gray-400 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white">
              <PlusCircle className="h-4 sm:h-3 w-4 sm:w-3 text-gray-400" />
            </button>
          )}
          <p className="text-[16px] text-gray-900 dark:text-white font-normal">{name}</p>
        </div>
        <span className="capitalize inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-[12px] font-medium forced-colors:outline bg-[#22c55e26] text-[#15803d] dark:bg-green-500/10 dark:text-green-400">
          operational
        </span>
      </div>
      <div className="sm:flex sm:flex-col sm:justify-center">
        <div className="mt-1 h-12 flex flex-row items-center justify-between sm:justify-start sm:gap-0.5 self-center">
          {bars}
        </div>
        <div className="flex items-center justify-between text-[14px] text-gray-500 dark:text-zinc-400 gap-3">
          <span className="whitespace-nowrap">90 days ago</span>
          <div className="bg-gray-300 dark:bg-zinc-700 flex-1 h-px"></div>
          <span className="underline cursor-default decoration-gray-400 underline-offset-4">{uptime} uptime</span>
          <div className="bg-gray-300 dark:bg-zinc-700 flex-1 h-px"></div>
          <span className="whitespace-nowrap">today</span>
        </div>
      </div>
    </div>
  );
};

export default function ComponentsUptime() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      {/* Global Status Banner */}
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-[#22c55e]">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <CircleCheck className="h-6 w-6 text-white" />
            <p className="ml-2 font-medium text-[18px] text-white truncate">
              All Systems Operational
            </p>
          </div>
        </div>
      </div>

      {/* Service List */}
      <div className="mb-8 space-y-6">
        <UptimeComponent 
          name="Chat (/api/v1/chat/completions)" 
          uptime="100%" 
        />
        <UptimeComponent 
          name="Data API" 
          uptime="99.98%" 
          incidents={[42, 53]} 
          showPlus 
        />
        <UptimeComponent 
          name="Homepage" 
          uptime="100%" 
          showPlus 
        />
        
        {/* Special case for Clerk with no grid visible in the instruction screenshot but listed in content */}
        <div className="flex justify-between items-center py-1">
          <div className="flex flex-row items-center">
            <button className="mr-2 inline-flex items-center shadow-sm border border-gray-400 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white">
              <PlusCircle className="h-4 sm:h-3 w-4 sm:w-3 text-gray-400" />
            </button>
            <p className="text-[16px] text-gray-900 dark:text-white font-normal">Clerk (UI account auth)</p>
          </div>
          <span className="capitalize inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-[12px] font-medium forced-colors:outline bg-[#22c55e26] text-[#15803d] dark:bg-green-500/10 dark:text-green-400">
            operational
          </span>
        </div>
      </div>

      {/* Recent Incidents Section */}
      <div className="mt-12">
        <div className="flex justify-between items-baseline mb-4">
          <h2 className="text-[20px] font-semibold text-gray-900 dark:text-white">Recent Incidents</h2>
          <a href="#" className="text-[14px] text-gray-500 dark:text-zinc-400 hover:underline">
            view incident history
          </a>
        </div>
        <div className="text-center py-12 border-t border-gray-100 dark:border-zinc-800">
          <p className="text-[16px] text-gray-500 dark:text-zinc-400">
            No incidents reported in the last 14 days.
          </p>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col items-center gap-6">
        <div className="flex items-center justify-between w-full text-[14px] text-gray-500 dark:text-zinc-400">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </button>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Powered by</span>
            <div className="flex items-center gap-1 text-gray-900 dark:text-white">
              <div className="w-4 h-4 bg-[#3B82F6] rounded flex items-center justify-center">
                <CircleCheck className="w-3 h-3 text-white" />
              </div>
              <span>OnlineOrNot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}