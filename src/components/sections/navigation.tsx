'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <nav id="main-nav" className="sticky top-0 z-50 w-full transition-all duration-500 liquid-glass border-b border-white/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto transition-all duration-300 py-4">
        <div className="flex flex-row justify-between items-center text-sm md:text-base">
          {/* Left Section: Logo & Search */}
          <div className="flex items-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center" 
              href="/"
            >
              <div 
                onMouseMove={handleMouseMove}
                className="flex items-center gap-3 liquid-glass-button py-2 px-4 rounded-xl border border-white/60 shadow-sm"
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
            </motion.a>
  
            {/* Search Bar */}
            {setSearch && (
              <div className="hidden md:block relative group">
                <div 
                  onMouseMove={handleMouseMove}
                  className="flex items-center gap-2 rounded-xl h-11 w-80 transition-all liquid-glass-button px-4 border border-white/40 focus-within:ring-2 focus-within:ring-primary/10 focus-within:border-primary/20"
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
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <div className="flex items-center gap-1 bg-white/20 p-1 rounded-2xl border border-white/40">
              <a href="/models">
                <motion.button 
                  onMouseMove={handleMouseMove}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                  className="h-10 px-5 rounded-xl text-sm font-semibold transition-colors"
                >
                  Models
                </motion.button>
              </a>
              <a href="/rankings">
                <motion.button 
                  onMouseMove={handleMouseMove}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                  className="h-10 px-5 rounded-xl text-sm font-semibold transition-colors"
                >
                  Rankings
                </motion.button>
              </a>
              <a href="/status">
                <motion.button 
                  onMouseMove={handleMouseMove}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                  className="h-10 px-5 rounded-xl text-sm font-semibold transition-colors"
                >
                  Status
                </motion.button>
              </a>
            </div>
            
            <motion.button 
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="h-11 px-8 rounded-xl text-sm font-bold bg-primary text-primary-foreground shadow-lg"
            >
              Get Started
            </motion.button>
          </div>
  
          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <motion.button 
              onMouseMove={handleMouseMove}
              whileTap={{ scale: 0.9 }}
              className="p-3 liquid-glass-button rounded-xl border border-white/50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
