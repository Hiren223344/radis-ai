import React from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Primary Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="h-16 flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-6">
            <a 
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors" 
              href="/"
            >
              A4F
            </a>
            
            <nav aria-label="Main" className="relative z-10 max-w-max flex-1 items-center justify-center hidden md:flex">
              <ul className="group flex flex-1 list-none items-center justify-center gap-1">
                <li>
                  <a 
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none bg-transparent hover:bg-accent focus:bg-accent" 
                    href="/models"
                  >
                    Models
                  </a>
                </li>
                <li>
                  <a 
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none bg-transparent hover:bg-accent focus:bg-accent" 
                    href="/chat"
                  >
                    Chat
                  </a>
                </li>
                <li>
                  <a 
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none bg-transparent hover:bg-accent focus:bg-accent" 
                    href="/trending"
                  >
                    Rankings
                  </a>
                </li>
                <li>
                  <a 
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none bg-transparent hover:bg-accent focus:bg-accent" 
                    href="/docs"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a 
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none bg-transparent hover:bg-accent focus:bg-accent" 
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {/* Product Hunt Badge - Desktop */}
            <div className="hidden md:block mr-2">
              <a 
                href="https://www.producthunt.com/products/a4f-ai-for-free/reviews?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-a4f-ai-for-free"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  alt="A4F - AI For Free - Access hundreds of LLMs through one API for Free!!! | Product Hunt" 
                  width="250" 
                  height="54" 
                  className="h-[40px] w-auto" 
                  src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1069263&theme=light"
                />
              </a>
            </div>

            {/* User Controls - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <div className="border border-input rounded-full h-9 overflow-hidden shadow-sm text-sm font-medium flex items-center bg-background">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring py-2 px-3 h-full rounded-none border-none shadow-none hover:bg-accent hover:text-accent-foreground">
                  Sign in
                </button>
                <div className="border-l h-5 self-center bg-border"></div>
                <button 
                  className="h-full w-9 flex items-center justify-center rounded-none border-none shadow-none hover:bg-accent focus-visible:outline-none focus-visible:ring-0"
                  aria-label="More options"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Product Hunt Badge - Mobile */}
            <div className="md:hidden mr-1">
              <a href="https://www.producthunt.com/products/a4f-ai-for-free/reviews?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-a4f-ai-for-free">
                <img 
                  alt="A4F - AI For Free | Product Hunt" 
                  width="120" 
                  height="26" 
                  className="h-[26px] w-auto" 
                  src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1069263&theme=light"
                />
              </a>
            </div>

            {/* User Controls - Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <div className="border border-input rounded-full h-9 overflow-hidden shadow-sm text-sm font-medium flex items-center bg-background">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring py-2 px-3 h-full rounded-none border-none shadow-none hover:bg-accent hover:text-accent-foreground">
                  Sign in
                </button>
                <div className="border-l h-5 self-center bg-border"></div>
                <button className="h-full w-9 flex items-center justify-center rounded-none border-none shadow-none hover:bg-accent focus-visible:outline-none focus-visible:ring-0">
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Product Hunt Support Banner */}
      <div className="w-full bg-muted py-2 text-center text-sm">
        <p className="max-w-screen-xl mx-auto px-4">
          We are on Product Hunt! It would be great if you could take a moment to{" "}
          <a href="https://www.producthunt.com/products/a4f-ai-for-free/reviews" className="text-primary hover:underline font-medium">
            review us and show your support
          </a>.
        </p>
      </div>

      {/* Pricing Announcement Banner */}
      <div className="w-full bg-[#fff7ed] border-b border-orange-200 py-2 text-center text-sm">
        <p className="max-w-screen-xl mx-auto px-4 text-orange-900">
          <span className="font-semibold">Ultra Plan Pricing Update:</span> Lock in $40/mo (or $336/yr) before it rises to $45/mo soon. Exclusive access to Gemini 3, Claude, Grok & GPT Codex.{" "}
          <a className="text-orange-700 hover:underline font-medium" href="/announcement/2025-11-20-ultra-plan-pricing-update">
            Learn more
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Header;