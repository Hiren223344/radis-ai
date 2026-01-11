import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const Navigation = () => {
  return (
    <nav
      id="main-nav"
      className="sticky top-0 z-40 transition-all duration-150 bg-background w-full border-b border-border/50"
    >
      <div className="mx-auto w-full transition-all duration-150 px-6 py-3.5 lg:py-4.5 max-w-screen-4xl">
        <span>
          <a
            href="#skip"
            className="sr-only absolute left-0 top-0 bg-background text-primary focus:not-sr-only"
          >
            Skip to content
          </a>
        </span>
        <div className="flex flex-row justify-between items-center text-sm md:text-base">
          {/* Left Section: Logo & Search */}
          <div className="flex flex-1 items-center gap-4">
            <Link
              href="/"
              className="text-muted-foreground flex items-center"
            >
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-medium duration-100 ease-in-out fill-current stroke-current">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    className="size-4"
                    aria-label="Logo"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>OpenRouter</title>
                    <g fill="currentColor">
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208z" />
                      <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 208c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                    </g>
                  </svg>
                  <span className="text-[15px] font-semibold tracking-tight text-foreground">
                    OpenRouter
                  </span>
                </span>
              </button>
            </Link>

            {/* Search Bar */}
            <div className="flex h-full flex-col overflow-hidden rounded-md">
              <div
                role="combobox"
                aria-expanded="false"
                aria-haspopup="listbox"
                className="flex items-center gap-2 rounded-md h-9 w-0 md:w-48 transition-colors relative bg-[#F8FAFC] border border-border/50 text-slate-500 focus-within:bg-[#F1F5F9] focus-within:ring-1 focus-within:ring-ring"
              >
                <div className="flex items-center px-3 w-full">
                  <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <input
                    className="flex h-9 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/70 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search models..."
                    spellCheck="false"
                  />
                </div>
                <kbd className="hidden md:flex items-center justify-center aspect-square h-5 w-5 pointer-events-none rounded border bg-background font-mono text-[10px] font-medium text-muted-foreground absolute right-2 transition-opacity duration-200">
                  /
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Section: Nav Links & Sign Up */}
          <div className="hidden lg:flex lg:gap-1 items-center text-sm">
            <Link href="/models">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-3 text-foreground">
                Models
              </button>
            </Link>
            <Link href="/providers">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-3 text-muted-foreground">
                Providers
              </button>
            </Link>
            <Link href="/chat">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-3 text-muted-foreground">
                Chat
              </button>
            </Link>
            <Link href="/rankings">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-3 text-muted-foreground">
                Rankings
              </button>
            </Link>
            <Link href="/enterprise">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-3 text-muted-foreground">
                Enterprise
              </button>
            </Link>
            <Link href="/pricing">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-3 text-muted-foreground">
                Pricing
              </button>
            </Link>
            <Link href="/docs/quickstart">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-3 text-muted-foreground">
                Docs
              </button>
            </Link>
            
            <div className="ml-2 flex items-center">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-5 rounded-full">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;