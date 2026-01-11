import React from 'react';
import { Check, Plus } from 'lucide-react';

interface UptimeMonitorProps {
  name: string;
  uptime: string;
  history: boolean[]; // true for operational, false for incident
  hasExpandButton?: boolean;
}

const UptimeMonitor = ({ name, uptime, history, hasExpandButton = false }: UptimeMonitorProps) => {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          {hasExpandButton && (
            <button className="mr-2 inline-flex items-center justify-center h-4 w-4 border border-gray-400 rounded-full hover:bg-gray-50 transition-colors">
              <Plus className="h-3 w-3 text-gray-400" />
            </button>
          )}
          <p className="text-gray-900 font-normal text-base leading-6">{name}</p>
        </div>
        <span className="capitalize inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-xs font-medium bg-[#22c55e26] text-[#15803d]">
          operational
        </span>
      </div>
      
      <div className="sm:flex sm:flex-col sm:justify-center">
        <div className="mt-1 h-12 flex flex-row items-center justify-between sm:justify-start sm:gap-0.5">
          {history.map((isUp, index) => {
            const isFirst = index === 0;
            const isLast = index === history.length - 1;
            
            return (
              <div
                key={index}
                className={`h-8 sm:h-9 w-0.5 sm:w-1 md:w-1.5 flex-1 sm:flex-none ${
                  isUp ? 'bg-[#22c55e]' : 'bg-[#ef4444]'
                } ${isFirst ? 'rounded-tl-[2px] rounded-bl-[2px]' : ''} ${
                  isLast ? 'rounded-tr-[2px] rounded-br-[2px]' : ''
                }`}
              />
            );
          })}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mt-1 gap-3">
          <span className="whitespace-nowrap">90 days ago</span>
          <div className="bg-gray-200 flex-1 h-px"></div>
          <span className="underline cursor-default hover:text-gray-700 decoration-gray-300">
            {uptime} uptime
          </span>
          <div className="bg-gray-200 flex-1 h-px"></div>
          <span className="whitespace-nowrap">today</span>
        </div>
      </div>
    </div>
  );
};

export default function UptimeMonitors() {
  // Mock data for 90 days - mostly green with some incidents for Data API
  const generateHistory = (incidents: number[] = []) => {
    return Array.from({ length: 90 }, (_, i) => !incidents.includes(i));
  };

  const monitors = [
    {
      name: "Chat (/api/v1/chat/completions)",
      uptime: "100%",
      history: generateHistory(),
      hasExpandButton: false
    },
    {
      name: "Data API",
      uptime: "99.98%",
      history: generateHistory([42, 53]),
      hasExpandButton: true
    },
    {
      name: "Homepage",
      uptime: "100%",
      history: generateHistory(),
      hasExpandButton: true
    },
    {
      name: "Clerk (UI account auth)",
      uptime: "100%",
      history: generateHistory(),
      hasExpandButton: true
    }
  ];

  return (
    <section className="container max-w-3xl mx-auto px-4">
      {/* Global Status Banner */}
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-[#22c55e]">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <Check className="h-6 w-6 text-white" strokeWidth={3} />
            <p className="ml-2 font-medium text-lg text-white truncate">
              All Systems Operational
            </p>
          </div>
        </div>
      </div>

      {/* Uptime Monitors Grid */}
      <div className="mb-8 space-y-6">
        {monitors.map((monitor, idx) => (
          <UptimeMonitor
            key={idx}
            name={monitor.name}
            uptime={monitor.uptime}
            history={monitor.history}
            hasExpandButton={monitor.hasExpandButton}
          />
        ))}
      </div>

      {/* Recent Incidents Section */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between border-b border-transparent mb-4">
          <h2 className="text-2xl font-normal text-[#111827]">Recent Incidents</h2>
          <a
            href="/history"
            className="text-sm text-gray-500 hover:text-gray-700 underline decoration-gray-300"
          >
            view incident history
          </a>
        </div>
        <div className="py-8 text-center text-gray-500 font-normal text-base">
          No incidents reported in the last 14 days.
        </div>
      </div>

      {/* Footer / Divider */}
      <div className="mt-12 border-t border-gray-100"></div>
    </section>
  );
}