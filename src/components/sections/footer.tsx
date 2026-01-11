import React from 'react';
import Image from 'next/image';
import { Sun } from 'lucide-react';

/**
 * Footer component for the status page.
 * Contains a theme toggle icon and "Powered by OnlineOrNot" branding.
 * 
 * Design matches the light theme specification and pixel-perfect requirements.
 */
const Footer = () => {
  return (
    <footer className="mt-12 mb-8 max-w-3xl mx-auto px-4 sm:px-0">
      {/* Top Divider Line */}
      <div className="w-full h-px bg-gray-200 dark:bg-zinc-800 mb-6" />

      <div className="flex items-center justify-between">
        {/* Theme Toggle Icon (Visual only) */}
        <div className="flex items-center justify-center">
          <button 
            type="button"
            className="p-1 text-blue-500 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        {/* Branding Section */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500 font-sans">
          <span>Powered by</span>
          <a 
            href="https://onlineornot.com?utm_source=status_page&utm_medium=watermark&utm_campaign=openrouter" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
          >
            <div className="relative w-[18px] h-[18px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-status-openrouter-ai/assets/images/powered-by-logo-COJk90XZ-1.png"
                alt="OnlineOrNot Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-medium">OnlineOrNot</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;