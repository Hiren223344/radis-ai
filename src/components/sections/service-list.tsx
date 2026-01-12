import React from 'react';
import { 
  Cpu, 
  Globe, 
  KeyRound, 
  Database, 
  Cloud, 
  CircleCheckBig, 
  ChevronDown,
  TriangleAlert,
  Info,
  ArrowRight
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: 'Operational' | 'Degraded Performance' | 'Limited Performance';
  lastChecked?: string;
  isExpandable?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  status, 
  lastChecked,
  isExpandable = false 
}) => {
  const isOperational = status === 'Operational';
  const isDegraded = status === 'Degraded Performance';
  const isLimited = status === 'Limited Performance';

  const statusStyles = {
    Operational: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-500/30",
    "Degraded Performance": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-500/30",
    "Limited Performance": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-500/30"
  };

  const StatusBadge = () => (
    <div className={`inline-flex items-center rounded-md border font-semibold transition-colors text-xs px-2 py-1 w-full justify-center sm:w-auto ${statusStyles[status]}`}>
      {isOperational && <CircleCheckBig className="h-3.5 w-3.5 mr-1.5" />}
      {isDegraded && <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />}
      {isLimited && <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />}
      {status}
    </div>
  );

  return (
    <div className="rounded-xl border text-card-foreground overflow-hidden shadow-sm border-border bg-card hover:shadow-md transition-shadow duration-200">
      <div className={`${isExpandable ? 'hover:bg-muted/30 dark:hover:bg-muted/10 cursor-pointer' : ''} p-4 sm:p-5`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className={`p-2 rounded-md flex items-center justify-center ${statusStyles[isOperational ? 'Operational' : isDegraded ? 'Degraded Performance' : 'Limited Performance']}`}>
              {icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-medium text-foreground truncate">{title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-1">{description}</p>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch sm:items-end sm:flex-row sm:items-center gap-2 sm:gap-3 ml-auto flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
            <StatusBadge />
            {lastChecked && (
              <p className="text-xs text-muted-foreground text-right sm:text-left whitespace-nowrap w-full sm:w-auto">
                Checked: {lastChecked}
              </p>
            )}
          </div>
          {isExpandable && (
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 hidden sm:block" />
          )}
        </div>
      </div>
    </div>
  );
};

export default function ServiceList() {
  const services: ServiceCardProps[] = [
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "API Services",
      description: "Core API access and model routing.",
      status: "Operational",
      isExpandable: true
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Website & Dashboard",
      description: "Main website, user accounts, and dashboard services.",
      status: "Operational",
      lastChecked: "less than a minute ago"
    },
    {
      icon: <KeyRound className="h-5 w-5" />,
      title: "Authentication Service",
      description: "User sign-in and session management.",
      status: "Operational",
      lastChecked: "less than a minute ago"
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Database Service",
      description: "User profiles and application data storage.",
      status: "Operational",
      lastChecked: "less than a minute ago"
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Provider Connections",
      description: "Connectivity to underlying LLM providers.",
      status: "Operational",
      lastChecked: "less than a minute ago"
    },
    {
      icon: <span className="text-lg font-bold">$$</span>,
      title: "Payment Services",
      description: "Subscription and payment processing.",
      status: "Degraded Performance",
      isExpandable: true
    },
    {
      icon: <div className="text-primary"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 001.9 1.387h6.112l-4.943 3.593a2 2 0 00-.727 2.238l1.889 5.769-4.944-3.594a2 2 0 00-2.352 0l-4.944 3.594 1.889-5.769a2 2 0 00-.727-2.238L2.076 10.2h6.112a2 2 0 001.9-1.387L12 3z"/></svg></div>,
      title: "Free Tier API Access",
      description: "Access to select models with usage limits.",
      status: "Limited Performance",
      lastChecked: "less than a minute ago"
    }
  ];

  return (
    <section className="w-full space-y-4">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}

      {/* Free Tier Callout - Appears inside/after the list in the original design */}
      <div className="rounded-xl border text-card-foreground overflow-hidden shadow-sm border-border bg-card mt-4">
        <div className="p-5 sm:p-6 bg-slate-50/50 dark:bg-slate-900/10">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 shrink-0">
              <Info className="h-5 w-5" />
            </div>
            <div className="space-y-4 flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Free tier services may experience variable performance and context window limitations. For a stable and uninterrupted experience with full capabilities:
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-indigo-600 text-white hover:bg-indigo-700 h-9 rounded-md px-4 py-2 w-full sm:w-auto">
                Upgrade to a Paid Plan <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 space-y-2">
        <p className="text-sm text-muted-foreground">
          If you are experiencing an issue not listed here, please <a href="/support" className="text-primary hover:underline font-medium">contact support</a>.
        </p>
        <p className="text-xs text-muted-foreground/60">
          All times are displayed in your local timezone.
        </p>
      </div>
    </section>
  );
}