import React from 'react';
import { Sun } from 'lucide-react';
import Image from 'next/image';

<<<<<<< Updated upstream
=======
/**
 * Footer component for the OpenRouter Status page.
 * Features a divider, a centered theme toggle icon, and "Powered by OnlineOrNot" branding.
 * Tailored to match the clean, minimalist "Status Page" utility aesthetic.
 */
>>>>>>> Stashed changes
const Footer = () => {
  return (
    <footer className="w-full mt-20 pb-12">
      <div className="max-w-[768px] mx-auto px-4 sm:px-0">
<<<<<<< Updated upstream
        <div className="w-full h-px bg-gray-200 dark:bg-zinc-800 mb-8" />
        <div className="flex flex-col items-center justify-center space-y-6">
          <button className="p-2 text-zinc-500 transition-colors">
            <Sun className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-1 text-sm text-zinc-500">
            <span>Powered by</span>
            <a href="https://onlineornot.com" target="_blank" rel="noopener noreferrer">
=======
        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gray-200 dark:bg-zinc-800 mb-8" />

        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Theme Toggle Button (Visual only as per design) */}
          <button 
            type="button"
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5" />
          </button>

          {/* Powered By Section */}
          <div className="flex items-center space-x-1 text-sm text-zinc-500 dark:text-zinc-400">
            <span>Powered by</span>
            <a 
              href="https://onlineornot.com?utm_source=status_page&utm_medium=footer&utm_campaign=openrouter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
>>>>>>> Stashed changes
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-status-openrouter-ai/assets/images/powered-by-logo-COJk90XZ-1.png"
                alt="OnlineOrNot Logo"
                width={100}
                height={20}
                className="h-[18px] w-auto"
<<<<<<< Updated upstream
=======
                priority
>>>>>>> Stashed changes
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
