import React from 'react';
import { Info, Sparkles, ArrowRight, TriangleAlert } from 'lucide-react';

const FreeTierNotice = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="rounded-xl border text-card-foreground overflow-hidden shadow-sm border-border bg-card hover:shadow-md transition-shadow duration-200">
        <div className="p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* Icon Container */}
              <div className="p-2 rounded-md flex items-center justify-center bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 border border-sky-200/50 dark:border-sky-700/50">
                <Sparkles size={20} className="text-sky-600 dark:text-sky-400" />
              </div>
              
              {/* Text Content */}
              <div className="min-w-0">
                <h3 className="text-base font-medium text-foreground truncate">
                  Free Tier API Access
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  Access to select models with usage limits.
                </p>
              </div>
            </div>

            {/* Status & Check Time */}
            <div className="flex flex-col items-start self-stretch sm:items-end sm:flex-row sm:items-center gap-2 sm:gap-3 ml-auto flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
              <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-2 py-1 w-full justify-center sm:w-auto bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 border-sky-500/30">
                <TriangleAlert className="h-3.5 w-3.5 mr-1.5" />
                Limited Performance
              </div>
              <p className="text-xs text-muted-foreground text-right sm:text-left whitespace-nowrap w-full sm:w-auto">
                Checked: less than a minute ago
              </p>
            </div>
          </div>

          {/* Supplementary Information Box */}
          <div className="mt-5 p-5 rounded-lg border bg-[#FCF5FF] border-[#E9D5FF]/50 dark:bg-purple-950/20 dark:border-purple-900/50">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
              <div className="space-y-4 flex-1">
                <p className="text-[#6B21A8] dark:text-purple-300 text-sm leading-relaxed">
                  Free tier services may experience variable performance and context window limitations. For a stable and uninterrupted experience with full capabilities:
                </p>
                
                {/* Upgrade Button */}
                <a 
                  href="/pricing" 
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all bg-[#6366f1] hover:bg-[#5254e0] rounded-md shadow-sm group w-full sm:w-auto"
                >
                  Upgrade to a Paid Plan
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTierNotice;