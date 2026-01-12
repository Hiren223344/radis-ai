import React from 'react';
import { RefreshCw, TriangleAlert } from 'lucide-react';

/**
 * OverallStatusCard component
 * 
 * Clones the large status card summarizing the current state ("Some Systems Experiencing Issues"),
 * featuring a pulsing amber indicator, the "Refresh Status" button, and an alert box.
 */
export default function OverallStatusCard() {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="rounded-xl border text-card-foreground overflow-hidden shadow-lg border-border bg-card">
        {/* Header Section */}
        <div 
          className="p-5 sm:p-6 flex flex-row items-center justify-between space-y-0 pb-3 sm:pb-4 border-b border-amber-500/30"
          data-state="closed"
        >
          <div className="text-xl sm:text-2xl font-semibold tracking-tight text-amber-700">
            Some Systems Experiencing Issues
          </div>
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-500"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
            <p className="text-sm text-muted-foreground">
              Current status of all A4F services. Last updated: less than a minute ago.
            </p>
            <button 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs w-full sm:w-auto shrink-0"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Status
            </button>
          </div>

          {/* Alert Box */}
          <div className="mt-4 p-3 rounded-md border text-xs flex items-start gap-2 bg-amber-50 border-amber-200 text-amber-700">
            <TriangleAlert className="h-4 w-4 mt-px shrink-0" />
            <span>
              We are currently experiencing issues with some services. We are investigating the issue.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}