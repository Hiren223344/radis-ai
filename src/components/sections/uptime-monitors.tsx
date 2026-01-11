import React from 'react';
import { Plus } from 'lucide-react';

interface UptimeSegment {
  status: 'operational' | 'outage' | 'degraded';
}

interface MonitorProps {
  name: string;
  status: string;
  uptimePercentage: string;
  hasExpand?: boolean;
  segments: UptimeSegment[];
}

const UptimeBar = ({ segments }: { segments: UptimeSegment[] }) => {
  return (
    <div className="mt-1 h-12 flex flex-row items-center justify-between sm:justify-start sm:gap-0.5 self-center">
      {segments.map((segment, index) => {
        const isFirst = index === 0;
        const isLast = index === segments.length - 1;
        
        let bgColor = 'bg-green-500';
        if (segment.status === 'outage') bgColor = 'bg-red-500';
        if (segment.status === 'degraded') bgColor = 'bg-amber-500';

        return (
          <div
            key={index}
            className={`h-8 sm:h-9 w-0.5 sm:w-1 md:w-1.5 ${bgColor} ${
              isFirst ? 'rounded-tl-md rounded-bl-md' : ''
            } ${isLast ? 'rounded-tr-md rounded-br-md' : ''}`}
          />
        );
      })}
    </div>
  );
};

const MonitorRow = ({ name, status, uptimePercentage, hasExpand = false, segments }: MonitorProps) => {
  return (
    <div className="sm:flex sm:flex-col sm:justify-center">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center">
          {hasExpand && (
            <button className="mr-2 sm:mr-2 inline-flex items-center shadow-sm border border-gray-400 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white">
              <Plus className="h-4 sm:h-3 w-4 sm:w-3 text-gray-400" />
            </button>
          )}
          <p className="text-gray-900 dark:text-white text-base leading-6">{name}</p>
        </div>
        <span className="capitalize inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-xs font-medium bg-green-500/15 text-green-700 dark:bg-green-500/10 dark:text-green-400">
          {status}
        </span>
      </div>
      
      <UptimeBar segments={segments} />
      
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-zinc-400 gap-3">
        <span className="shrink-0">90 days ago</span>
        <div className="bg-gray-300 dark:bg-zinc-700 flex-1 h-px"></div>
        <span className="underline decoration-gray-300 underline-offset-4 shrink-0 font-normal">
          {uptimePercentage} uptime
        </span>
        <div className="bg-gray-300 dark:bg-zinc-700 flex-1 h-px"></div>
        <span className="shrink-0">today</span>
      </div>
    </div>
  );
};

const UptimeMonitors = () => {
  // Generate 90 segments for each (mostly green)
  const generateSegments = (outages: number[] = []) => {
    return Array.from({ length: 90 }, (_, i) => ({
      status: outages.includes(i) ? 'outage' : 'operational' as const,
    }));
  };

  const monitors = [
    {
      name: 'Chat (/api/v1/chat/completions)',
      status: 'operational',
      uptimePercentage: '100%',
      hasExpand: false,
      segments: generateSegments(),
    },
    {
      name: 'Data API',
      status: 'operational',
      uptimePercentage: '99.98%',
      hasExpand: true,
      // Visualizing the specific red bars seen in the screenshot around the middle
      segments: generateSegments([42, 53]),
    },
    {
      name: 'Homepage',
      status: 'operational',
      uptimePercentage: '100%',
      hasExpand: true,
      segments: generateSegments(),
    },
    {
      name: 'Clerk (UI account auth)',
      status: 'operational',
      uptimePercentage: '100%',
      hasExpand: true,
      segments: generateSegments(),
    },
  ];

  return (
    <section className="mb-12 space-y-8">
      {monitors.map((monitor, idx) => (
        <MonitorRow
          key={idx}
          name={monitor.name}
          status={monitor.status}
          uptimePercentage={monitor.uptimePercentage}
          hasExpand={monitor.hasExpand}
          segments={monitor.segments}
        />
      ))}
    </section>
  );
};

export default UptimeMonitors;