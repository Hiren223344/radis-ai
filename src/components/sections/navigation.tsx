<<<<<<< Updated upstream
import React from 'react';
import { Search } from 'lucide-react';

const Navigation = () => {
  return (
    <nav 
      id="main-nav" 
      className="sticky top-0 z-40 transition-all duration-150 bg-background/80 backdrop-blur-md w-full border-b border-border"
      style={{ height: '64px' }}
    >
      <div className="mx-auto w-full transition-all duration-150 px-6 max-w-[1440px] h-full flex items-center">
        <span>
          <a 
            href="#skip" 
            className="sr-only absolute left-0 top-0 bg-background text-primary focus:not-sr-only"
          >
            Skip to content
          </a>
        </span>
        
        <div className="align-center relative flex flex-row justify-between text-sm md:text-base w-full items-center">
          {/* Left Section: Logo & Search */}
          <div className="flex flex-1 items-center gap-4">
            <a className="text-muted-foreground" href="/">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-2 text-accent-foreground">
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-semibold duration-100 ease-in-out fill-current">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 512 512" 
                    className="size-5" 
                    aria-label="Logo"
                  >
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208z" fill="currentColor"/>
                    <path d="M356.5 155.5c-55.5-55.5-145.5-55.5-201 0s-55.5 145.5 0 201 145.5 55.5 201 0 55.5-145.5 0-201zm-22.6 178.4c-43 43-112.8 43-155.8 0s-43-112.8 0-155.8 112.8-43 155.8 0 43 112.8 0 155.8z" fill="currentColor"/>
                    <title>OpenRouter</title>
                  </svg>
                  OpenRouter
                </span>
              </button>
            </a>

            <div className="hidden md:flex items-center">
              <div 
                role="combobox" 
                className="flex items-center gap-2 rounded-md h-9 ring-ring w-48 transition-colors relative bg-[#f1f5f9] text-[#64748b] focus-within:bg-white focus-within:ring-1 focus-within:ring-primary border border-transparent focus-within:border-primary/20 px-3 cursor-text"
                data-state="closed"
              >
                <Search className="h-4 w-4 shrink-0 opacity-50" />
                <input 
                  className="flex h-full w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Search"
                  role="combobox"
                  id="search-nav"
                />
                <kbd className="flex items-center justify-center aspect-square h-4 w-4 p-1 pointer-events-none rounded-sm bg-border/50 text-[10px] text-muted-foreground absolute right-2.5 transition-opacity duration-200 border border-border">
=======
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

/**
 * Navigation component for OpenRouter.
 * Features a pixel-perfect recreation of the sticky header with Logo, 
 * functional-looking search bar, menu links, and rounded sign-up button.
 */
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Models", href: "/models", active: true },
    { name: "Providers", href: "/providers" },
    { name: "Chat", href: "/chat" },
    { name: "Rankings", href: "/rankings" },
    { name: "Enterprise", href: "/enterprise" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs/quickstart" },
  ];

  return (
    <nav
      id="main-nav"
      className={`sticky top-0 z-40 w-full transition-all duration-150 bg-background border-b border-border/50 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-[1920px] px-6 py-3.5 lg:py-4 transition-all duration-150">
        <div className="flex flex-row items-center justify-between text-sm">
          {/* Left Section: Logo and Search */}
          <div className="flex flex-1 items-center gap-4">
            <a href="/" className="flex items-center gap-2 group">
              <div className="flex items-center gap-2 text-base font-medium transition-colors hover:bg-accent rounded-md px-2 py-1.5 -ml-2 text-muted-foreground group-hover:text-accent-foreground">
                <div className="size-5 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 512 512"
                    className="size-4 fill-foreground stroke-foreground"
                    aria-label="OpenRouter Logo"
                  >
                    <path d="M256 0L476.9 127.5V384.5L256 512L35.1 384.5V127.5L256 0ZM256 64.9L87.1 162.5V349.5L256 447.1L424.9 349.5V162.5L256 64.9Z" />
                    <circle cx="256" cy="256" r="64" />
                  </svg>
                </div>
                <span className="text-foreground font-medium">OpenRouter</span>
              </div>
            </a>

            {/* Search Bar */}
            <div className="relative flex items-center flex-1 max-w-[192px] group">
              <div
                className={`flex items-center w-full gap-2 rounded-md h-9 px-3 transition-all duration-200 border border-transparent ${
                  searchFocused
                    ? "bg-slate-100 text-slate-900 ring-1 ring-ring"
                    : "bg-[#F1F5F9] text-muted-foreground hover:bg-slate-200/70"
                }`}
              >
                <Search className="size-4 shrink-0 opacity-50" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-sm w-full h-full placeholder:text-muted-foreground"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <kbd className="hidden md:flex items-center justify-center aspect-square h-4 w-4 p-1 pointer-events-none rounded-sm bg-border/50 text-[10px] text-muted-foreground absolute right-2.5">
>>>>>>> Stashed changes
                  /
                </kbd>
              </div>
            </div>
          </div>

<<<<<<< Updated upstream
          {/* Right Section: Navigation Links */}
          <div className="hidden lg:flex items-center lg:gap-1 text-[15px]">
            <a className="text-muted-foreground" href="/models">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Models
              </button>
            </a>
            <a className="text-muted-foreground" href="/providers">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Providers
              </button>
            </a>
            <a className="text-muted-foreground" href="/chat">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Chat
              </button>
            </a>
            <a className="text-muted-foreground" href="/rankings">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Rankings
              </button>
            </a>
            <a className="text-muted-foreground" href="/enterprise">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Enterprise
              </button>
            </a>
            <a className="text-muted-foreground" href="/pricing">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Pricing
              </button>
            </a>
            <a href="/docs/quickstart" className="text-muted-foreground">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-3">
                Docs
              </button>
            </a>
            
            <div className="flex pl-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-none bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground px-5 h-9 rounded-full text-sm">
=======
          {/* Right Section: Nav Links and Action */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`inline-flex items-center justify-center h-9 px-3 rounded-md font-medium transition-colors whitespace-nowrap border border-transparent ${
                  link.active
                    ? "text-accent-foreground bg-accent/50"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="ml-2 flex items-center justify-end w-24">
              <button className="inline-flex items-center justify-center h-9 w-full px-4 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-opacity hover:opacity-90 shadow-sm active:scale-[0.98]">
>>>>>>> Stashed changes
                Sign up
              </button>
            </div>
          </div>

<<<<<<< Updated upstream
          {/* Mobile Menu Icon (Placeholder for functionality) */}
          <div className="lg:hidden flex items-center">
            <button className="p-2 text-muted-foreground hover:bg-accent rounded-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
=======
          {/* Mobile Menu Placeholder (Not requested but for layout completeness) */}
          <div className="flex lg:hidden">
            <button className="p-2 -mr-2 text-muted-foreground hover:bg-accent rounded-md">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
>>>>>>> Stashed changes
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
<<<<<<< Updated upstream
};

export default Navigation;
=======
}
>>>>>>> Stashed changes
