import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mt-12 pb-12 max-w-3xl mx-auto px-4 sm:px-0">
      <div className="border-t border-gray-200 dark:border-zinc-800 pt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center">
        {/* Theme Toggle Placeholder - Centered on mobile, left on desktop according to screenshot context */}
        <div className="flex justify-center flex-1 sm:justify-start">
          <button
            type="button"
            className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            aria-label="Toggle theme"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
        </div>

        {/* Powered By Attribution */}
        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-400">
          <span>Powered by</span>
          <a
            href="https://onlineornot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-medium hover:underline text-gray-600 dark:text-zinc-300"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-status-openrouter-ai/assets/images/powered-by-logo-COJk90XZ-1.png"
              alt="OnlineOrNot Logo"
              width={16}
              height={16}
              className="object-contain grayscale opacity-80"
              unoptimized
            />
            <span>OnlineOrNot</span>
          </a>
        </div>
        
        {/* Spacer for desktop symmetry if needed */}
        <div className="hidden sm:block flex-1"></div>
      </div>
    </footer>
  );
};

export default Footer;