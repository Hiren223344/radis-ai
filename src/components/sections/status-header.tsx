import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 sm:py-6 md:justify-start md:space-x-10">
      <div className="container w-full mx-auto md:flex md:justify-between md:items-center">
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
              type="button"
              className="text-xs sm:text-sm relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border border-zinc-950/10 dark:border-white/15 bg-white dark:bg-transparent px-3 py-1.5 sm:px-4 sm:py-2 text-zinc-950 dark:text-white font-semibold shadow-sm hover:bg-zinc-950/[0.025] dark:hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
            >
              Subscribe to updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;