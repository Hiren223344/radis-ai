import React from 'react';
import { CreditCard, Zap, Info, TriangleAlert, ChevronDown, ArrowRight } from 'lucide-react';

const DegradedServices = () => {
  return (
    <div className="w-full space-y-4">
      {/* Payment Services Card */}
      <div className="rounded-xl border text-card-foreground overflow-hidden shadow-sm border-border bg-card hover:shadow-md transition-shadow duration-200">
        <div className="p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="p-2 rounded-md flex items-center justify-center bg-amber-100 text-amber-700 border border-amber-500/30">
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-medium text-foreground truncate">Payment Services</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">Subscription and payment processing.</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start self-stretch sm:items-end sm:flex-row sm:items-center gap-2 sm:gap-3 ml-auto flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
              <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-1 w-full justify-center sm:w-auto bg-amber-100 text-amber-700 border-amber-500/30">
                <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />
                Degraded Performance
                <ChevronDown className="h-3.5 w-3.5 ml-1 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free Tier API Access Card */}
      <div className="rounded-xl border text-card-foreground overflow-hidden shadow-sm border-border bg-card hover:shadow-md transition-shadow duration-200">
        <div className="p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="p-2 rounded-md flex items-center justify-center bg-blue-100 text-blue-700 border border-blue-500/30">
                <Zap className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-medium text-foreground truncate">Free Tier API Access</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">Access to select models with usage limits.</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start self-stretch sm:items-end sm:flex-row sm:items-center gap-2 sm:gap-3 ml-auto flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
              <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-1 w-full justify-center sm:w-auto bg-blue-100 text-blue-700 border-blue-500/30">
                <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />
                Limited Performance
              </div>
              <p className="text-xs text-muted-foreground text-right sm:text-left whitespace-nowrap w-full sm:w-auto">Checked: less than a minute ago</p>
            </div>
          </div>

          {/* Upgrade Callout */}
          <div className="mt-5 p-5 rounded-lg border text-sm bg-[#f8faff] border-blue-100/50">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <div className="space-y-4">
                <p className="text-[#4b5563] leading-relaxed">
                  Free tier services may experience variable performance and context window limitations. For a stable and uninterrupted experience with full capabilities:
                </p>
                <a 
                  href="/pricing" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#6366f1] text-[#fafafa] shadow hover:bg-[#6366f1]/90 h-9 rounded-md px-4 text-sm w-full sm:w-auto"
                >
                  Upgrade to a Paid Plan
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegradedServices;