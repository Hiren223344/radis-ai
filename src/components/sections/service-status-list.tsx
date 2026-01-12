import React from 'react';
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
  ArrowRight
} from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  status: 'operational' | 'degraded' | 'limited';
  statusText: string;
  lastChecked?: string;
  isExpandable?: boolean;
  extraContent?: React.ReactNode;
}

const ServiceItem = ({ 
  icon, 
  name, 
  description, 
  status, 
  statusText, 
  lastChecked, 
  isExpandable = false,
  extraContent 
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
                <div className={`status-badge ${statusColors[status]}`}>
                  {isDegraded && <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />}
                  {isOperational && <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />}
                  {statusText}
                </div>
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
              <div className={`status-badge w-full justify-center sm:w-auto ${statusColors[status]}`}>
                {isOperational && <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />}
                {isLimited && <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />}
                {statusText}
              </div>
              {lastChecked && (
                <p className="text-xs text-muted-foreground text-right sm:text-left whitespace-nowrap w-full sm:w-auto">
                  Checked: {lastChecked}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      {extraContent && <div className="p-4 sm:p-5 pt-0">{extraContent}</div>}
    </div>
  );
};

const ServiceStatusList = () => {
  return (
    <div className="w-full space-y-4">
      {/* API Services */}
      <ServiceItem 
        icon={<Cpu className="h-5 w-5" />}
        name="API Services"
        description="Core API access and model routing."
        status="degraded"
        statusText="Degraded Performance"
        isExpandable={true}
      />

      {/* Website & Dashboard */}
      <ServiceItem 
        icon={<Globe className="h-5 w-5" />}
        name="Website & Dashboard"
        description="Main website, user accounts, and dashboard services."
        status="operational"
        statusText="Operational"
        lastChecked="less than a minute ago"
      />

      {/* Authentication Service */}
      <ServiceItem 
        icon={<KeyRound className="h-5 w-5" />}
        name="Authentication Service"
        description="User sign-in and session management."
        status="operational"
        statusText="Operational"
        lastChecked="less than a minute ago"
      />

      {/* Database Service */}
      <ServiceItem 
        icon={<Database className="h-5 w-5" />}
        name="Database Service"
        description="User profiles and application data storage."
        status="operational"
        statusText="Operational"
        lastChecked="less than a minute ago"
      />

      {/* Provider Connections */}
      <ServiceItem 
        icon={<Cloud className="h-5 w-5" />}
        name="Provider Connections"
        description="Connectivity to underlying LLM providers."
        status="operational"
        statusText="Operational"
        lastChecked="less than a minute ago"
      />

      {/* Payment Services */}
      <ServiceItem 
        icon={<CreditCard className="h-5 w-5" />}
        name="Payment Services"
        description="Subscription and payment processing."
        status="degraded"
        statusText="Degraded Performance"
        isExpandable={true}
      />

      {/* Free Tier API Access */}
      <ServiceItem 
        icon={<Sparkles className="h-5 w-5 text-sky-700 dark:text-sky-300" />}
        name="Free Tier API Access"
        description="Access to select models with usage limits."
        status="limited"
        statusText="Limited Performance"
        lastChecked="less than a minute ago"
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