"use client";

import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav 
      id="main-nav" 
      className="sticky top-0 z-40 transition-all duration-150 bg-background w-full border-b border-transparent"
      style={{ backgroundColor: 'rgb(255, 255, 255)' }}
    >
      <div className="mx-auto w-full transition-all duration-150 px-6 py-3.5 lg:py-6 max-w-screen-2xl">
        <span>
          <a href="#skip" className="sr-only absolute left-0 top-0 bg-background text-primary focus:not-sr-only">
            Skip to content
          </a>
        </span>
        
        <div className="align-center relative flex flex-row justify-between items-center text-sm md:text-base">
          {/* Left Side: Logo and Search */}
          <div className="flex flex-1 items-center gap-4">
            <Link href="/" className="text-muted-foreground">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-2 text-accent-foreground"
              >
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-medium duration-100 ease-in-out">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 512 512" 
                    className="size-4" 
                    aria-label="Logo"
                    fill="currentColor"
                  >
                    <path d="M256 0L0 256l256 256 256-256L256 0zM128 256l128-128 128 128-128 128-128-128z" />
                  </svg>
                  <span className="font-semibold tracking-tight text-[#0F172A]">Radison</span>
                </span>
              </motion.button>
            </Link>

            <div className="hidden md:flex items-center relative">
              <div 
                role="combobox" 
                className="flex items-center gap-2 rounded-md h-9 w-48 transition-colors relative bg-[#F1F5F9] text-[#64748B] focus-within:bg-[#E2E8F0] focus-within:text-[#0F172A] border border-transparent"
              >
                <div className="flex items-center px-3 w-full">
                  <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <input 
                    className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search"
                    role="combobox"
                  />
                </div>
                <kbd className="flex items-center justify-center aspect-square h-5 w-5 p-1 pointer-events-none rounded-sm bg-white border border-[#E2E8F0] text-[10px] font-mono font-medium text-muted-foreground absolute right-2 transition-opacity duration-200">
                  /
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Side: Links and Sign up */}
          <div className="hidden lg:flex lg:items-center lg:gap-1 text-sm font-medium">
            <Link href="/models" className="text-muted-foreground">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-[#64748B] px-3"
              >
                Models
              </motion.button>
            </Link>
            <Link href="/rankings" className="text-muted-foreground">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-[#64748B] px-3"
              >
                Rankings
              </motion.button>
            </Link>
            <Link href="/status" className="text-muted-foreground">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-[#64748B] px-3"
              >
                Status
              </motion.button>
            </Link>
            <div className="flex pl-2">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 bg-[#5F6FFF] text-white shadow hover:bg-[#5F6FFF]/90 px-5 h-9 rounded-full"
              >
                Sign up
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Icon (Placeholder for functionality) */}
          <div className="lg:hidden flex items-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-[#64748B]"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;