import React from 'react';
import Image from 'next/image';
import { Sun } from 'lucide-react';

/**
 * Footer component for the OpenRouter Home page.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image 
              src="https://openrouter.ai/static/favicon.ico" 
              alt="OpenRouter" 
              width={24} 
              height={24} 
              className="rounded-sm"
            />
            <span className="font-semibold text-[18px]">OpenRouter</span>
          </div>
          <p className="text-[14px] text-muted-foreground max-w-[300px]">
            The unified interface for LLMs. Better prices, better uptime, no subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold">Product</h4>
            <ul className="flex flex-col gap-2 text-[14px] text-muted-foreground">
              <li><a href="/models" className="hover:text-foreground">Models</a></li>
              <li><a href="/rankings" className="hover:text-foreground">Rankings</a></li>
              <li><a href="/docs" className="hover:text-foreground">Documentation</a></li>
              <li><a href="/pricing" className="hover:text-foreground">Pricing</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold">Company</h4>
            <ul className="flex flex-col gap-2 text-[14px] text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground">About</a></li>
              <li><a href="/careers" className="hover:text-foreground">Careers</a></li>
              <li><a href="/privacy" className="hover:text-foreground">Privacy</a></li>
              <li><a href="/terms" className="hover:text-foreground">Terms</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-semibold">Community</h4>
            <ul className="flex flex-col gap-2 text-[14px] text-muted-foreground">
              <li><a href="https://twitter.com/openrouterai" className="hover:text-foreground">Twitter</a></li>
              <li><a href="https://discord.gg/openrouter" className="hover:text-foreground">Discord</a></li>
              <li><a href="https://github.com/openrouter" className="hover:text-foreground">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-muted-foreground">
        <p>© {currentYear} OpenRouter. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-md hover:bg-slate-100">
            <Sun className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
