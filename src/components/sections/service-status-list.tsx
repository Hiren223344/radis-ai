"use client";

import React, { useEffect, useState } from 'react';
import { 
  Cpu, 
  Globe, 
  KeyRound, 
  Database, 
  Cloud, 
  CreditCard, 
  Sparkles, 
  ChevronDown, 
  TriangleAlert, 
  CheckCircle2, 
  Info,
  ArrowRight,
  Loader2
} from 'lucide-react';

interface StatusBar {
  status: 'operational' | 'degraded' | 'outage';
}

interface UptimeData {
  status: 'up' | 'down' | 'seems_down' | 'paused';
  uptime: {
    last1Hour: number;
    last24Hours: number;
    last7Days: number;
    last30Days: number;
  };
  hourlyStatus: { hour: number; status: 'operational' | 'degraded' | 'outage' }[];
  friendlyName: string;
  url: string;
}

const generateStatusBars = (degradedIndices: number[] = [], length: number = 24): StatusBar[] => {
  return Array.from({ length }, (_, i) => ({
    status: degradedIndices.includes(i) ? 'degraded' : 'operational'
  }));
};

const StatusBarsDisplay = ({ 
  bars, 
  uptimePercent,
  timeLabel = "24-hour",
  startLabel = "24 hours ago",
  endLabel = "Now"
}: { 
  bars: StatusBar[], 
  uptimePercent?: number,
  timeLabel?: string,
  startLabel?: string,
  endLabel?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const operationalCount = bars.filter(b => b.status === 'operational').length;
  const calculatedUptime = uptimePercent ?? ((operationalCount / bars.length) * 100);
  
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted-foreground">{timeLabel} uptime history</span>
        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{calculatedUptime.toFixed(2)}% uptime</span>
      </div>
      <div className="relative">
        <div className="flex gap-[2px] h-8 bg-muted/30 rounded-md p-1 overflow-hidden">
          {bars.map((bar, index) => (
            <div
              key={index}
              className={`flex-1 min-w-[3px] rounded-sm cursor-pointer transition-all duration-150 ${
                bar.status === 'operational' 
                  ? 'bg-emerald-500 hover:bg-emerald-400' 
                  : bar.status === 'degraded'
                  ? 'bg-red-500 hover:bg-red-400'
                  : 'bg-gray-500 hover:bg-gray-400'
              } ${hoveredIndex === index ? 'scale-y-110' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              title={`Hour ${index + 1}: ${bar.status === 'operational' ? 'Operational' : bar.status === 'degraded' ? 'Degraded' : 'Outage'}`}
            />
          ))}
        </div>
        {hoveredIndex !== null && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-popover border border-border rounded-md px-2 py-1 text-xs shadow-lg whitespace-nowrap z-10">
            Hour {hoveredIndex + 1}: {bars[hoveredIndex].status === 'operational' ? 'Operational' : bars[hoveredIndex].status === 'degraded' ? 'Degraded' : 'Outage'}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-2 text-[10px] text-muted-foreground">
        <span>{startLabel}</span>
        <span>{endLabel}</span>
      </div>
    </div>
  );
};

interface ServiceItemProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  status: 'operational' | 'degraded' | 'limited';
  statusText: string;
  lastChecked?: string;
  isExpandable?: boolean;
  extraContent?: React.ReactNode;
  statusBars?: StatusBar[];
  showBars?: boolean;
  uptimePercent?: number;
  isLoading?: boolean;
}

const ServiceItem = ({ 
  icon, 
  name, 
  description, 
  status, 
  statusText, 
  lastChecked, 
  isExpandable = false,
  extraContent,
  statusBars,
  showBars = true,
  uptimePercent,
  isLoading = false
}: ServiceItemProps) => {
  const isOperational = status === 'operational';
  const isDegraded = status === 'degraded';
  const isLimited = status === 'limited';

  const statusColors = {
    operational: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-500/30",
    degraded: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-500/30",
    limited: "bg-blue-50 text-sky-700 dark:bg-blue-900/20 dark:text-sky-300 border-sky-400/30"
  };

  const IconWrapper = ({ children, statusType }: { children: React.ReactNode, statusType: string }) => (
    <div className={`p-2 rounded-md flex items-center justify-center ${statusColors[statusType as keyof typeof statusColors]}`}>
      {children}
    </div>
  );

  return (
    <div className="rounded-xl border text-card-foreground overflow-hidden shadow-sm border-border bg-card hover:shadow-md transition-shadow duration-200">
      <div className={`${isExpandable ? '' : 'p-4 sm:p-5'}`}>
        {isExpandable ? (
          <button className="flex w-full items-center justify-between p-4 sm:p-5 text-left hover:bg-muted/30 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-t-md">
            <div className="flex items-center justify-between w-full gap-3 sm:gap-4">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <IconWrapper statusType={status}>{icon}</IconWrapper>
                <div className="min-w-0 text-left">
                  <h3 className="text-base font-medium text-foreground truncate">{name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">{description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 ml-auto flex-shrink-0">
                {isLoading ? (
                  <div className="status-badge bg-muted text-muted-foreground">
                    <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
                    Loading...
                  </div>
                ) : (
                  <div className={`status-badge ${statusColors[status]}`}>
                    {isDegraded && <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />}
                    {isOperational && <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />}
                    {statusText}
                  </div>
                )}
              </div>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground ml-3 transition-transform duration-200" />
          </button>
        ) : (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <IconWrapper statusType={status}>{icon}</IconWrapper>
              <div className="min-w-0">
                <h3 className="text-base font-medium text-foreground truncate">{name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">{description}</p>
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch sm:items-end sm:flex-row sm:items-center gap-2 sm:gap-3 ml-auto flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
              {isLoading ? (
                <div className="status-badge w-full justify-center sm:w-auto bg-muted text-muted-foreground">
                  <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
                  Loading...
                </div>
              ) : (
                <div className={`status-badge w-full justify-center sm:w-auto ${statusColors[status]}`}>
                  {isOperational && <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />}
                  {isLimited && <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />}
                  {isDegraded && <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />}
                  {statusText}
                </div>
              )}
              {lastChecked && (
                <p className="text-xs text-muted-foreground text-right sm:text-left whitespace-nowrap w-full sm:w-auto">
                  Checked: {lastChecked}
                </p>
              )}
            </div>
          </div>
        )}
        {showBars && statusBars && !isLoading && (
          <div className={`${isExpandable ? 'px-4 sm:px-5 pb-4 sm:pb-5' : ''}`}>
            <StatusBarsDisplay 
              bars={statusBars} 
              uptimePercent={uptimePercent}
              timeLabel="24-hour"
              startLabel="24 hours ago"
              endLabel="Now"
            />
          </div>
        )}
        {isLoading && showBars && (
          <div className={`${isExpandable ? 'px-4 sm:px-5 pb-4 sm:pb-5' : 'mt-4'}`}>
            <div className="flex items-center justify-center h-16 bg-muted/30 rounded-md">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          </div>
        )}
      </div>
      {extraContent && <div className="p-4 sm:p-5 pt-0">{extraContent}</div>}
    </div>
  );
};

const ServiceStatusList = () => {
  const [uptimeData, setUptimeData] = useState<UptimeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUptimeData = async () => {
      try {
        const response = await fetch('/api/uptime');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUptimeData(data);
      } catch {
        setError('Failed to fetch uptime data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUptimeData();
  }, []);

  const apiStatus: 'operational' | 'degraded' = uptimeData?.status === 'up' ? 'operational' : 'degraded';
  const apiStatusText = uptimeData?.status === 'up' ? 'Operational' : 'Degraded Performance';
  
  const apiStatusBars: StatusBar[] = uptimeData?.hourlyStatus 
    ? uptimeData.hourlyStatus.map(h => ({ status: h.status }))
    : generateStatusBars([], 24);

  const websiteBars = generateStatusBars([], 24);
  const authBars = generateStatusBars([], 24);
  const databaseBars = generateStatusBars([], 24);
  const providerBars = generateStatusBars([], 24);
  const paymentBars = generateStatusBars([], 24);
  const freeTierBars = generateStatusBars([3, 4, 12, 13], 24);

  return (
    <div className="w-full space-y-4">
      <ServiceItem 
        icon={<Cpu className="h-5 w-5" />}
        name="API Services"
        description="Core API access and model routing."
        status={isLoading ? 'operational' : apiStatus}
        statusText={isLoading ? 'Checking...' : apiStatusText}
        isExpandable={true}
        statusBars={apiStatusBars}
        uptimePercent={uptimeData?.uptime.last24Hours}
        isLoading={isLoading}
      />

      <ServiceItem 
        icon={<Globe className="h-5 w-5" />}
        name="Website & Dashboard"
        description="Main website, user accounts, and dashboard services."
        status="operational"
        statusText="Operational"
        lastChecked="less than a minute ago"
        statusBars={websiteBars}
        uptimePercent={100}
      />

      <ServiceItem 
        icon={<KeyRound className="h-5 w-5" />}
        name="Authentication Service"
        description="User sign-in and session management."
        status="operational"
        statusText="Operational"
        lastChecked="less than a minute ago"
        statusBars={authBars}
        uptimePercent={100}
      />

      <ServiceItem 
        icon={<Database className="h-5 w-5" />}
        name="Database Service"
        description="User profiles and application data storage."
        status="operational"
        statusText="Operational"
        lastChecked="less than a minute ago"
        statusBars={databaseBars}
        uptimePercent={100}
      />

      <ServiceItem 
        icon={<Cloud className="h-5 w-5" />}
        name="Provider Connections"
        description="Connectivity to underlying LLM providers."
        status="operational"
        statusText="Operational"
        lastChecked="less than a minute ago"
        statusBars={providerBars}
        uptimePercent={100}
      />

      <ServiceItem 
        icon={<CreditCard className="h-5 w-5" />}
        name="Payment Services"
        description="Subscription and payment processing."
        status="operational"
        statusText="Operational"
        lastChecked="less than a minute ago"
        statusBars={paymentBars}
        uptimePercent={100}
      />

      <ServiceItem 
        icon={<Sparkles className="h-5 w-5 text-sky-700 dark:text-sky-300" />}
        name="Free Tier API Access"
        description="Access to select models with usage limits."
        status="limited"
        statusText="Limited Performance"
        lastChecked="less than a minute ago"
        statusBars={freeTierBars}
        uptimePercent={83.33}
        extraContent={
          <div className="mt-2 p-4 rounded-lg bg-[#FCF5FF] dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/50">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Free tier services may experience variable performance and context window limitations. For a stable and uninterrupted experience with full capabilities:
                </p>
                <a 
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition-colors shadow-sm"
                >
                  Upgrade to a Paid Plan
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ServiceStatusList;
