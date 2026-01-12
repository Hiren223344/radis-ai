import React from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Discord, 
  Send, 
  Youtube,
  Twitter
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Status', href: '/status' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'About', href: '/about' },
    { name: 'Contacts', href: '/contacts' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-4 w-4" />, href: 'https://github.com/a4f' },
    { name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com/company/a4f' },
    { name: 'X', icon: <Twitter className="h-4 w-4" />, href: 'https://x.com/a4f' },
    { name: 'Instagram', icon: <Instagram className="h-4 w-4" />, href: 'https://instagram.com/a4f' },
    { name: 'Discord', icon: <Discord className="h-4 w-4" />, href: 'https://discord.gg/a4f' },
    { name: 'Telegram', icon: <Send className="h-4 w-4" />, href: 'https://t.me/a4f' },
    { name: 'YouTube', icon: <Youtube className="h-4 w-4" />, href: 'https://youtube.com/a4f' },
  ];

  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-12 pb-8">
        {/* Top Section: Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              A4F
            </a>
          </div>
          
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-8"></div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {currentYear} A4F, Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;