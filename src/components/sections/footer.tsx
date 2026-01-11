import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

/**
<<<<<<< Updated upstream
 * Footer component for the OpenRouter clone.
 * Implements a pixel-perfect light-themed footer based on the provided design instructions,
 * screenshots, and high-level design system.
=======
 * Footer component for the OpenRouter Status page.
 * Features a divider, a centered theme toggle icon, and "Powered by OnlineOrNot" branding.
 * Tailored to match the clean, minimalist "Status Page" utility aesthetic.
>>>>>>> Stashed changes
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Status', href: '/status' },
    { label: 'Announcements', href: '/announcements' },
    { label: 'Docs', href: '/docs' },
    { label: 'Support', href: '/support' },
    { label: 'About', href: '/about' },
    { label: 'Partners', href: '/partners' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Careers', href: '/careers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ];

  /* 
     Custom Discord icon as it's not present in lucide-react 
     and per instructions we should try to match the brand icons.
  */
  const DiscordIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.295 1.192-1.995a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );

  return (
<<<<<<< Updated upstream
    <footer className="w-full border-t border-border bg-background py-8 md:py-12 mt-auto">
      <div className="container max-w-[1440px] px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side: Copyright & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="text-sm font-tabular text-slate-11">
              &copy; {currentYear} OpenRouter, Inc
            </span>
            
            <div className="flex items-center gap-5 text-slate-11">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
                aria-label="Discord"
              >
                <DiscordIcon />
              </a>
              <a
                href="https://github.com/openrouter-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/openrouterai"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
                aria-label="X (formerly Twitter)"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Right Side: Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-11 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
=======
    <footer className="w-full mt-20 pb-12">
      <div className="max-w-[768px] mx-auto px-4 sm:px-0">
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
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-status-openrouter-ai/assets/images/powered-by-logo-COJk90XZ-1.png"
                alt="OnlineOrNot Logo"
                width={100}
                height={20}
                className="h-[18px] w-auto"
                priority
              />
            </a>
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </footer>
  );
};

export default Footer;