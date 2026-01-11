import React from 'react';

interface UptimeSegment {
  status: 'operational' | 'outage' | 'partial-outage';
}

interface ServiceStatusProps {
  name: string;
  uptimePercentage: string;
  segments: UptimeSegment[];
  hasExpandButton?: boolean;
}

const ServiceStatusRow: React.FC<ServiceStatusProps> = ({ 
  name, 
  uptimePercentage, 
  segments,
  hasExpandButton = false 
}) => {
  return (
    <div className="sm:flex sm:flex-col sm:justify-center">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center">
          {hasExpandButton && (
            <button className="mr-2 sm:mr-2 inline-flex items-center justify-center shadow-sm border border-[#d1d5db] w-[18px] h-[18px] rounded-full text-zinc-500 hover:bg-zinc-50 transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="h-3 w-3"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </button>
          )}
          <p className="text-[#111827] text-base leading-6">{name}</p>
        </div>
        <span className="capitalize inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-xs font-medium bg-[#22c55e26] text-[#15803d]">
          operational
        </span>
      </div>

      <div className="mt-1 h-12 flex flex-row items-center justify-between sm:justify-start sm:gap-[2px] self-center">
        {segments.map((segment, index) => {
          let bgColor = 'bg-[#22c55e]';
          if (segment.status === 'outage') bgColor = 'bg-[#ef4444]';
          if (segment.status === 'partial-outage') bgColor = 'bg-[#f59e0b]';

          const isFirst = index === 0;
          const isLast = index === segments.length - 1;

          return (
            <div
              key={index}
              className={`h-8 sm:h-9 w-0.5 sm:w-1 md:w-1.5 ${bgColor} transition-opacity hover:opacity-80 ${
                isFirst ? 'rounded-tl-md rounded-bl-md' : ''
              } ${isLast ? 'rounded-tr-md rounded-br-md' : ''}`}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-between text-sm text-[#6b7280] gap-3">
        <span className="whitespace-nowrap">90 days ago</span>
        <div className="bg-[#d1d5db] flex-1 h-px"></div>
        <span className="underline decoration-[#d1d5db] underline-offset-4">{uptimePercentage} uptime</span>
        <div className="bg-[#d1d5db] flex-1 h-px"></div>
        <span className="whitespace-nowrap">today</span>
      </div>
    </div>
  );
};

const ServiceUptimeList: React.FC = () => {
  // Generate mock data for 90 days. 
  // Normally this would come from an API.
  const generateSegments = (outages: number[] = []): UptimeSegment[] => {
    return Array.from({ length: 90 }, (_, i) => ({
      status: outages.includes(i) ? 'outage' : 'operational'
    }));
  };

  const services = [
    {
      name: "Chat (/api/v1/chat/completions)",
      uptime: "100%",
      outages: [],
      expand: false
    },
    {
      name: "Data API",
      uptime: "99.98%",
      outages: [42, 53], // Visual match for the screenshot red bars
      expand: true
    },
    {
      name: "Homepage",
      uptime: "100%",
      outages: [],
      expand: true
    },
    {
      name: "Clerk (UI account auth)",
      uptime: "100%",
      outages: [],
      expand: true
    }
  ];

  return (
    <div className="mb-8 space-y-6">
      {services.map((service, idx) => (
        <ServiceStatusRow
          key={idx}
          name={service.name}
          uptimePercentage={service.uptime}
          segments={generateSegments(service.outages)}
          hasExpandButton={service.expand}
        />
      ))}
    </div>
  );
};

export default ServiceUptimeList;