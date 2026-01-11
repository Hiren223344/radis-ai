import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav id="main-nav" className="sticky top-0 z-40 transition-all duration-150 bg-background w-full">
      <div className="mx-auto w-full transition-all duration-150 px-6 py-3.5 lg:py-6 max-w-[1440px]">
        <span>
          <a href="#skip" className="sr-only absolute left-0 top-0 bg-background text-primary focus:not-sr-only">
            Skip to content
          </a>
        </span>
        <div className="flex flex-row justify-between items-center text-sm md:text-base">
          {/* Left: Logo & Search */}
          <div className="flex flex-1 items-center gap-4">
            <a className="text-muted-foreground flex items-center" href="/">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-2 text-accent-foreground">
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-medium duration-100 ease-in-out fill-current stroke-current">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/favicon-6.ico"
                    alt="OpenRouter Logo"
                    width={16}
                    height={16}
                    className="size-4"
                  />
                  OpenRouter
                </span>
              </button>
            </a>
            
            <div className="flex flex-col overflow-hidden rounded-md">
              <div 
                role="combobox" 
                className="flex items-center gap-2 rounded-md h-9 w-0 ring-ring md:w-48 transition-colors relative bg-[#F1F5F9] text-[#64748B] focus-within:bg-[#E2E8F0] focus-within:text-[#020617]"
              >
                <div className="flex items-center px-3 w-full">
                  <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <input 
                    className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
                    placeholder="Search"
                    role="combobox"
                    id="search-input"
                  />
                </div>
                <kbd className="flex items-center justify-center aspect-square h-4 w-4 p-1 pointer-events-none rounded-sm bg-border text-[10px] text-muted-foreground absolute right-3.5 transition-opacity duration-200">
                  /
                </kbd>
              </div>
            </div>
          </div>

          {/* Right: Menu Links & Sign Up */}
          <div className="hidden lg:flex lg:gap-1 text-sm items-center">
            <a className="text-muted-foreground" href="/models">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                Models
              </button>
            </a>
            <a className="text-muted-foreground" href="/providers">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                Providers
              </button>
            </a>
            <a className="text-muted-foreground" href="/chat">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                Chat
              </button>
            </a>
            <a className="text-muted-foreground" href="/rankings">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                Rankings
              </button>
            </a>
            <a className="text-muted-foreground" href="/enterprise">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                Enterprise
              </button>
            </a>
            <a className="text-muted-foreground" href="/pricing">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                Pricing
              </button>
            </a>
            <a href="/docs/quickstart" className="text-muted-foreground mr-4">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                Docs
              </button>
            </a>
            <div className="flex w-24 justify-end">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground px-4 h-9 w-full rounded-full text-sm">
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