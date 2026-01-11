import React from 'react';

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-between items-center py-2 sm:py-6 md:justify-start md:space-x-10">
          <div className="container w-full mx-auto md:flex md:justify-between md:items-center">
            <div className="w-full py-3 md:p-0 grid grid-cols-12 gap-4">
              {/* Logo Section */}
              <div className="col-span-6 sm:col-span-4 flex items-center">
                <a 
                  href="/" 
                  className="flex items-center text-2xl leading-9 tracking-tight font-bold text-gray-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-zinc-400"
                  style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.025em' }}
                >
                  <span className="dark:hidden">OpenRouter</span>
                  <span className="hidden dark:inline">OpenRouter</span>
                </a>
              </div>

              {/* Action Button Section */}
              <div className="col-span-6 sm:col-span-8 flex items-center justify-end gap-3">
                <button 
                  type="button"
                  className="relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border border-zinc-950/10 px-[calc(0.875rem-1px)] py-[calc(0.625rem-1px)] text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-950/5 focus:outline-none dark:border-white/15 dark:text-white dark:hover:bg-white/5 sm:px-[calc(0.75rem-1px)] sm:py-[calc(0.375rem-1px)]"
                >
                  <span className="absolute top-1/2 left-1/2 h-[max(100%,2.75rem)] w-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" aria-hidden="true" />
                  Subscribe to updates
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;