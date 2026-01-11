import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social Discord Icon (Custom since Lucide doesn't have a perfect match)
  const DiscordIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.966 2.419-2.156 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z" />
    </svg>
  );

  const footerLinks = [
    { label: "Status", href: "/status" },
    { label: "Announcements", href: "/blog" },
    { label: "Docs", href: "/docs" },
    { label: "Support", href: "https://discord.gg/openrouter" },
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Careers", href: "/careers" },
    { label: "Pricing", href: "/pricing" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <footer className="w-full border-t border-slate-200 bg-white py-6 mt-12">
      <div className="mx-auto max-w-screen-4xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left section: Copyright & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 md:justify-start">
            <span className="tabular-nums">
              © {currentYear} OpenRouter, Inc
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://discord.gg/openrouter"
                className="text-slate-400 transition-colors hover:text-slate-900"
                aria-label="Discord"
              >
                <DiscordIcon />
              </a>
              <a
                href="https://github.com/OpenRouter"
                className="text-slate-400 transition-colors hover:text-slate-900"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/company/openrouter"
                className="text-slate-400 transition-colors hover:text-slate-900"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://x.com/openrouterai"
                className="text-slate-400 transition-colors hover:text-slate-900"
                aria-label="X (formerly Twitter)"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Right section: Links */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;