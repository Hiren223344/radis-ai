import React from 'react';
import { Search } from 'lucide-react';

const Navigation = () => {
  return (
    <nav id="main-nav" className="sticky top-0 z-40 transition-all duration-150 bg-white w-full border-b border-border/40">
      <div className="mx-auto w-full transition-all duration-150 px-6 py-3.5 lg:py-4 max-w-screen-2xl">
        <div className="align-center relative flex flex-row justify-between items-center text-sm md:text-base">
          {/* Left Section: Logo & Search */}
          <div className="flex flex-1 items-center gap-4">
            <a className="text-muted-foreground flex items-center" href="/">
              <div className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-slate-100 p-1.5 px-2 rounded-md">
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-medium duration-100 ease-in-out">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 512 512" 
                    className="size-5 fill-current" 
                    aria-label="Logo"
                  >
                    <g>
                      <path d="M256 0L0 256l256 256 256-256L256 0zm0 100.3L411.7 256 256 411.7 100.3 256 256 100.3z" />
                      <path d="M256 170.7L170.7 256 256 341.3 341.3 256 256 170.7z" />
                    </g>
                    <title>OpenRouter</title>
                  </svg>
                  <span className="text-[#020617] font-semibold tracking-tight">OpenRouter</span>
                </span>
              </div>
            </a>

            {/* Command Palette Search */}
            <div className="relative group">
              <div 
                className="flex items-center gap-2 rounded-md h-9 w-0 md:w-48 transition-all relative bg-[#f1f5f9] text-[#64748b] focus-within:bg-white focus-within:ring-1 focus-within:ring-slate-200 border border-transparent focus-within:border-slate-200"
              >
                <div className="flex items-center px-3 w-full">
                  <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <input 
                    className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-[#64748b] font-normal" 
                    placeholder="Search"
                    type="text"
                  />
                </div>
                <kbd className="hidden md:flex items-center justify-center aspect-square h-5 w-5 pointer-events-none rounded border bg-white border-slate-200 text-[10px] font-medium text-slate-400 absolute right-2 shadow-sm uppercase">
                  /
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Section: Menu Links & Sign Up */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <a className="text-[#64748b] hover:text-[#020617] transition-colors" href="/models">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors h-9 rounded-md px-3 text-sm">
                Models
              </button>
            </a>
            <a className="text-[#64748b] hover:text-[#020617] transition-colors" href="/providers">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors h-9 rounded-md px-3 text-sm">
                Providers
              </button>
            </a>
            <a className="text-[#64748b] hover:text-[#020617] transition-colors" href="/chat">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors h-9 rounded-md px-3 text-sm">
                Chat
              </button>
            </a>
            <a className="text-[#64748b] hover:text-[#020617] transition-colors" href="/rankings">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors h-9 rounded-md px-3 text-sm">
                Rankings
              </button>
            </a>
            <a className="text-[#64748b] hover:text-[#020617] transition-colors" href="/enterprise">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors h-9 rounded-md px-3 text-sm">
                Enterprise
              </button>
            </a>
            <a className="text-[#64748b] hover:text-[#020617] transition-colors" href="/pricing">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors h-9 rounded-md px-3 text-sm">
                Pricing
              </button>
            </a>
            <a className="text-[#64748b] hover:text-[#020617] transition-colors" href="/docs/quickstart">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors h-9 rounded-md px-3 mr-4 text-sm">
                Docs
              </button>
            </a>
            
            <div className="flex pl-2 border-l border-slate-200/60 ml-1">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none border border-[#e2e8f0] bg-white shadow-sm hover:bg-slate-50 px-5 h-9 rounded-full text-sm text-[#020617]">
                Sign up
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon (Placeholder for functionality) */}
          <div className="lg:hidden">
            <button className="p-2 text-slate-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;