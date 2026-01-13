'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  search?: string;
  setSearch?: (value: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ search, setSearch }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

      return (
        <motion.nav 
          id="main-nav"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 1.02, 0.73, 1] }}
          className="fixed top-0 z-[100] w-full liquid-glass border-b border-white/80 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]"
          style={{ visibility: 'visible', display: 'flex' }}
        >
        <div className="container mx-auto py-3">
          <div className="flex flex-row justify-between items-center text-sm md:text-base">
            {/* Left Section: Logo & Search */}
            <div className="flex items-center gap-8">
              <Link href="/">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center cursor-pointer" 
                >
                  <div 
                    onMouseMove={handleMouseMove}
                    className="flex items-center gap-3 liquid-glass-button py-2 px-4 rounded-2xl border border-white/60 shadow-sm"
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 512 512" 
                      className="size-6 fill-primary" 
                      aria-label="Logo"
                    >
                      <path d="M256 0L0 256l256 256 256-256L256 0zm0 100.3L411.7 256 256 411.7 100.3 256 256 100.3z" />
                      <path d="M256 170.7L170.7 256 256 341.3 341.3 256 256 170.7z" />
                      <title>Radison</title>
                    </svg>
                    <span className="text-primary font-bold tracking-tight text-lg">Radison</span>
                  </div>
                </motion.div>
              </Link>

    
              {/* Search Bar */}
              {setSearch && (
                <div className="hidden md:block relative group">
                  <div 
                    onMouseMove={handleMouseMove}
                    className="flex items-center gap-2 rounded-2xl h-11 w-80 transition-all liquid-glass-button px-4 border border-white/40 focus-within:ring-2 focus-within:ring-primary/10 focus-within:border-primary/20"
                  >
                    <Search className="h-4 w-4 opacity-50" />
                    <input 
                      className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground font-medium" 
                      placeholder="Search anything..."
                      type="text"
                      value={search || ""}
                      onChange={(e) => setSearch?.(e.target.value)}
                    />
                    <kbd className="flex items-center justify-center h-5 px-1.5 rounded border bg-white/50 border-white/30 text-[10px] font-bold text-muted-foreground">
                      ⌘K
                    </kbd>
                  </div>
                </div>
              )}
            </div>
    
            {/* Right Section: Menu Links & Sign Up */}
              <div className="hidden lg:flex lg:items-center lg:gap-6">
                <div className="flex items-center gap-1 bg-white/30 p-1.5 rounded-2xl border border-white/60 backdrop-blur-sm">
                  <Link href="/models">
                    <Button variant="ghost" className="h-9 px-5 rounded-xl text-sm font-semibold hover:bg-white/50 hover:shadow-sm transition-all">
                      Models
                    </Button>
                  </Link>
                  <Link href="/rankings">
                    <Button variant="ghost" className="h-9 px-5 rounded-xl text-sm font-semibold hover:bg-white/50 hover:shadow-sm transition-all">
                      Rankings
                    </Button>
                  </Link>
                  <Link href="/status">
                    <Button variant="ghost" className="h-9 px-5 rounded-xl text-sm font-semibold hover:bg-white/50 hover:shadow-sm transition-all">
                      Status
                    </Button>
                  </Link>
                </div>

              
              <Button size="lg" className="rounded-2xl font-bold px-8 shadow-xl liquid-glass-button border-white/60 hover:scale-105 transition-transform">
                Get Started
              </Button>
            </div>
    
            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <Button variant="outline" size="icon" className="rounded-2xl border-white/60 liquid-glass-button">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>
    );
};

export default Navigation;
