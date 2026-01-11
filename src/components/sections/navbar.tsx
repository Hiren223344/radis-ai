import React from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav 
      id="main-nav" 
      className="sticky top-0 z-40 transition-all duration-150 bg-white w-full border-b border-transparent"
    >
      <div className="mx-auto w-full transition-all duration-150 px-6 py-3.5 lg:py-6 max-w-[1920px]">
        <span>
          <a 
            href="#skip" 
            className="sr-only absolute left-0 top-0 bg-white text-[#0f172a] focus:not-sr-only"
          >
            Skip to content
          </a>
        </span>
        
        <div className="items-center relative flex flex-row justify-between text-sm md:text-base">
          {/* Left Section: Logo & Search */}
          <div className="flex flex-1 items-center gap-4">
            <a className="text-[#64748b]" href="/">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94a3b8] gap-2 leading-6 hover:bg-[#f1f5f9] hover:text-[#0f172a] border border-transparent h-9 rounded-md w-auto justify-center px-2">
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-medium duration-100 ease-in-out fill-current stroke-current">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 512 512" 
                    className="size-4" 
                    aria-label="Logo"
                  >
                    <path d="M256 0L512 256L256 512L0 256L256 0Z" fill="currentColor" />
                    <title>OpenRouter</title>
                  </svg>
                  OpenRouter
                </span>
              </button>
            </a>

            {/* Global Search Bar */}
            <div className="flex h-full flex-col overflow-hidden rounded-md text-[#0f172a]">
              <div 
                role="combobox" 
                aria-expanded="false"
                className="flex items-center gap-2 rounded-md h-9 w-0 md:w-48 transition-colors relative bg-[#f1f5f9] text-[#64748b] focus-within:bg-white border border-transparent focus-within:border-[#e2e8f0] focus-within:ring-1 focus-within:ring-[#94a3b8]"
              >
                <div className="flex items-center px-3 w-full">
                  <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <input 
                    className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-[#64748b] disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search"
                    role="combobox"
                    autoComplete="off"
                  />
                </div>
                <kbd className="hidden md:flex items-center justify-center aspect-square h-4 w-4 p-1 pointer-events-none rounded-sm bg-[#e2e8f0] text-[10px] text-[#64748b] absolute right-3.5 transition-opacity duration-200">
                  /
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Section: Nav Links & Sign Up */}
          <div className="hidden lg:flex lg:items-center lg:gap-1 text-sm font-medium">
            <a className="text-[#64748b]" href="/models">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94a3b8] gap-2 leading-6 hover:bg-[#f1f5f9] hover:text-[#0f172a] border border-transparent h-9 rounded-md w-auto justify-center px-2">
                Models
              </button>
            </a>
            <a className="text-[#64748b]" href="/providers">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94a3b8] gap-2 leading-6 hover:bg-[#f1f5f9] hover:text-[#0f172a] border border-transparent h-9 rounded-md w-auto justify-center px-2">
                Providers
              </button>
            </a>
            <a className="text-[#64748b]" href="/chat">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94a3b8] gap-2 leading-6 hover:bg-[#f1f5f9] hover:text-[#0f172a] border border-transparent h-9 rounded-md w-auto justify-center px-2">
                Chat
              </button>
            </a>
            <a className="text-[#64748b]" href="/rankings">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94a3b8] gap-2 leading-6 hover:bg-[#f1f5f9] border border-transparent h-9 rounded-md w-auto justify-center px-2 text-[#0f172a]">
                Rankings
              </button>
            </a>
            <a className="text-[#64748b]" href="/enterprise">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94a3b8] gap-2 leading-6 hover:bg-[#f1f5f9] hover:text-[#0f172a] border border-transparent h-9 rounded-md w-auto justify-center px-2">
                Enterprise
              </button>
            </a>
            <a className="text-[#64748b]" href="/pricing">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94a3b8] gap-2 leading-6 hover:bg-[#f1f5f9] hover:text-[#0f172a] border border-transparent h-9 rounded-md w-auto justify-center px-2">
                Pricing
              </button>
            </a>
            <a href="/docs/quickstart" className="text-[#64748b]">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94a3b8] gap-2 leading-6 hover:bg-[#f1f5f9] hover:text-[#0f172a] border border-transparent h-9 rounded-md w-auto justify-center px-2">
                Docs
              </button>
            </a>

            <div className="flex w-24 justify-end ml-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#94a3b8] gap-2 leading-6 border border-[#e2e8f0] bg-transparent shadow-sm hover:bg-[#f1f5f9] hover:text-[#0f172a] px-3.5 h-9 w-full rounded-full">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;