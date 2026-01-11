import React from 'react';
import { CheckCircle2, PlusCircle } from 'lucide-react';

interface UptimeData {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  uptimePercentage: string;
  history: ('success' | 'error')[];
  hasInfoIcon?: boolean;
}

const UptimeMonitoring: React.FC = () => {
  // Generating a list of services based on the design instructions
  const services: UptimeData[] = [
    {
      name: 'Chat (/api/v1/chat/completions)',
      status: 'operational',
      uptimePercentage: '100% uptime',
      history: Array(90).fill('success'),
    },
    {
      name: 'Data API',
      status: 'operational',
      uptimePercentage: '99.98% uptime',
      // Simulating the red bars from the screenshot
      history: Array(90).fill('success').map((val, idx) => {
        if (idx === 42 || idx === 53) return 'error';
        return val;
      }),
      hasInfoIcon: true,
    },
    {
      name: 'Homepage',
      status: 'operational',
      uptimePercentage: '100% uptime',
      history: Array(90).fill('success'),
      hasInfoIcon: true,
    },
    {
      name: 'Clerk (UI account auth)',
      status: 'operational',
      uptimePercentage: '100% uptime',
      history: Array(90).fill('success'),
      hasInfoIcon: true,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-2 sm:py-6">
      {/* Branding Header Area */}
      <header className="flex justify-between items-center mb-6">
          <a 
            href="/" 
            className="text-2xl leading-9 tracking-tight font-bold text-gray-900 dark:text-white hover:underline"
          >
            Radison
          </a>
        <button className="text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 border border-zinc-950/10 rounded-lg hover:bg-zinc-950/2.5 transition-colors dark:border-white/15 dark:text-white dark:hover:bg-white/5">
          Subscribe to updates
        </button>
      </header>

      {/* Main Status Banner */}
      <div className="p-2 sm:p-3 mb-8 rounded-lg shadow-lg bg-[#22c55e]">
        <div className="flex items-center">
          <CheckCircle2 className="h-6 w-6 text-white" />
          <p className="ml-2 font-medium text-lg text-white truncate">
            All Systems Operational
          </p>
        </div>
      </div>

      {/* Component Uptime Matrix */}
      <div className="mb-12 space-y-8">
        {services.map((service, sIndex) => (
          <div key={sIndex} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                {service.hasInfoIcon && (
                  <button className="mr-2 inline-flex items-center rounded-full text-gray-400">
                    <PlusCircle className="h-4 w-4 border border-gray-400 rounded-full p-[1px]" />
                  </button>
                )}
                <p className="text-[16px] text-gray-900 dark:text-white">
                  {service.name}
                </p>
              </div>
              <span className="capitalize inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-xs font-medium bg-[#22c55e]/15 text-[#15803d] dark:bg-[#22c55e]/10 dark:text-[#4ade80]">
                {service.status}
              </span>
            </div>

            {/* Uptime Bars Container */}
            <div className="mt-1 h-12 flex items-center justify-between sm:justify-start sm:gap-[2px]">
              {service.history.map((status, bIndex) => (
                <div
                  key={bIndex}
                  className={`h-8 sm:h-9 w-[2px] sm:w-[4px] md:w-[5px] rounded-[1px] transition-opacity hover:opacity-70 ${
                    status === 'success' ? 'bg-[#22c55e]' : 'bg-[#ef4444]'
                  } ${bIndex === 0 ? 'rounded-l-[2px]' : ''} ${
                    bIndex === service.history.length - 1 ? 'rounded-r-[2px]' : ''
                  }`}
                  title={`${90 - bIndex} days ago: ${status === 'success' ? 'Operational' : 'Incident'}`}
                />
              ))}
            </div>

            {/* Timeline Labels */}
            <div className="flex items-center justify-between mt-1 text-[13px] text-gray-500 dark:text-zinc-400">
              <span className="whitespace-nowrap">90 days ago</span>
              <div className="bg-gray-300 dark:bg-zinc-700 flex-1 mx-3 h-[1px]"></div>
              <span className="underline decoration-gray-300 underline-offset-4 cursor-help">
                {service.uptimePercentage}
              </span>
              <div className="bg-gray-300 dark:bg-zinc-700 flex-1 mx-3 h-[1px]"></div>
              <span className="whitespace-nowrap">today</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Incidents Section */}
      <div className="mt-12">
        <div className="flex justify-between items-end border-b border-gray-100 pb-2 mb-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-white">Recent Incidents</h2>
          <a href="/history" className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2">
            view incident history
          </a>
        </div>
        <div className="py-10 text-center">
          <p className="text-gray-500 text-[15px]">No incidents reported in the last 14 days.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 pb-12">
        <div className="flex items-center cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors">
          <span className="text-gray-400">☀️</span>
        </div>
        <div className="text-sm text-gray-500 flex items-center gap-1.5">
          <span>Powered by</span>
          <a href="#" className="flex items-center gap-1 font-semibold text-gray-700 hover:text-black">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            OnlineOrNot
          </a>
        </div>
      </footer>
    </div>
  );
};

export default UptimeMonitoring;