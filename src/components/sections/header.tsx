import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 sm:py-6 md:justify-start md:space-x-10">
      <div className="container w-full mx-auto md:flex md:justify-between md:items-center px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="w-full py-3 md:p-0 grid grid-cols-12 gap-4">
          <div className="col-span-6 sm:col-span-4">
            <a 
              className="hover:underline hover:text-gray-600 dark:hover:text-zinc-400 flex w-full h-full text-2xl leading-9 tracking-tight font-bold text-gray-900 dark:text-white" 
              href="/"
            >
              <span className="dark:hidden">OpenRouter</span>
              <span className="hidden dark:inline">OpenRouter</span>
            </a>
          </div>
          <div className="col-span-6 sm:col-span-8 flex items-center justify-end gap-3">
            <button 
              className="text-xs sm:text-sm relative isolate inline-flex items-baseline justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-3.5 py-2 sm:px-3 sm:py-1.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 border-zinc-950/10 text-zinc-950 active:bg-zinc-950/5 hover:bg-zinc-950/5 dark:border-white/15 dark:text-white dark:bg-transparent dark:active:bg-white/5 dark:hover:bg-white/5 cursor-default transition-colors"
            >
              <span className="absolute top-1/2 left-1/2 w-full h-full min-w-[2.75rem] min-height-[2.75rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none md:hidden" aria-hidden="true"></span>
              Subscribe to updates
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;