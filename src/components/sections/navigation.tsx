import React from 'react';
import { Search } from 'lucide-react';

const Navigation = () => {
  return (
    <nav 
      id="main-nav" 
      className="sticky top-0 z-40 transition-all duration-150 bg-background/80 backdrop-blur-md w-full border-b border-border"
      style={{ height: '64px' }}
    >
      <div className="mx-auto w-full transition-all duration-150 px-6 max-w-[1440px] h-full flex items-center">
        <span>
          <a 
            href="#skip" 
            className="sr-only absolute left-0 top-0 bg-background text-primary focus:not-sr-only"
          >
            Skip to content
          </a>
        </span>
        
        <div className="align-center relative flex flex-row justify-between text-sm md:text-base w-full items-center">
          {/* Left Section: Logo & Search */}
          <div className="flex flex-1 items-center gap-4">
            <a className="text-muted-foreground" href="/">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-2 text-accent-foreground">
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-semibold duration-100 ease-in-out fill-current">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 512 512" 
                    className="size-5" 
                    aria-label="Logo"
                  >
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208z" fill="currentColor"/>
                    <path d="M356.5 155.5c-55.5-55.5-145.5-55.5-201 0s-55.5 145.5 0 201 145.5 55.5 201 0 55.5-145.5 0-201zm-22.6 178.4c-43 43-112.8 43-155.8 0s-43-112.8 0-155.8 112.8-43 155.8 0 43 112.8 0 155.8z" fill="currentColor"/>
                    <title>OpenRouter</title>
                  </svg>
                  OpenRouter
                </span>
              </button>
            </a>

            <div className="hidden md:flex items-center">
              <div 
                role="combobox" 
                className="flex items-center gap-2 rounded-md h-9 ring-ring w-48 transition-colors relative bg-[#f1f5f9] text-[#64748b] focus-within:bg-white focus-within:ring-1 focus-within:ring-primary border border-transparent focus-within:border-primary/20 px-3 cursor-text"
                data-state="closed"
              >
                <Search className="h-4 w-4 shrink-0 opacity-50" />
                <input 
                  className="flex h-full w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Search"
                  role="combobox"
                  id="search-nav"
                />
                <kbd className="flex items-center justify-center aspect-square h-4 w-4 p-1 pointer-events-none rounded-sm bg-border/50 text-[10px] text-muted-foreground absolute right-2.5 transition-opacity duration-200 border border-border">
                  /
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="hidden lg:flex items-center lg:gap-1 text-[15px]">
            <a className="text-muted-foreground" href="/models">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Models
              </button>
            </a>
            <a className="text-muted-foreground" href="/providers">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Providers
              </button>
            </a>
            <a className="text-muted-foreground" href="/chat">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Chat
              </button>
            </a>
            <a className="text-muted-foreground" href="/rankings">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Rankings
              </button>
            </a>
            <a className="text-muted-foreground" href="/enterprise">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Enterprise
              </button>
            </a>
            <a className="text-muted-foreground" href="/pricing">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Pricing
              </button>
            </a>
            <a href="/docs/quickstart" className="text-muted-foreground">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Docs
              </button>
            </a>
            
            <div className="flex pl-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-none bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground px-5 h-9 rounded-full text-sm">
                Sign up
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon (Placeholder for functionality) */}
          <div className="lg:hidden flex items-center">
            <button className="p-2 text-muted-foreground hover:bg-accent rounded-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;