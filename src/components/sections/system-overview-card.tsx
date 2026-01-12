"use client";

import React from "react";
import { RefreshCw, TriangleAlert } from "lucide-react";

const SystemOverviewCard: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mb-8">
      <div className="rounded-xl border border-border bg-card text-card-foreground overflow-hidden shadow-lg transition-shadow duration-200">
        {/* Card Header */}
        <div className="p-5 sm:p-6 flex flex-row items-center justify-between border-b border-amber-500/30">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#b45309] dark:text-amber-300">
            Some Systems Experiencing Issues
          </h2>
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-500"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
            <p className="text-sm text-[#64748b]">
              Current status of all Radison services. Last updated: less than a minute ago.
            </p>
            <button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs w-full sm:w-auto shrink-0"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Status
            </button>
          </div>

          {/* Investigation Alert Box */}
          <div className="mt-4 p-3 rounded-md border text-xs flex items-start gap-2 bg-[#fffbeb] dark:bg-amber-900/30 border-amber-200 dark:border-amber-700/50 text-[#b45309] dark:text-amber-300">
            <TriangleAlert className="h-4 w-4 mt-px shrink-0" />
            <span>
              We are currently experiencing issues with some services. We are investigating the issue.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemOverviewCard;