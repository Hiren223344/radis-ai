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
                  /
                </kbd>
              </div>
            </div>
          </div>

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
                Sign up
              </button>
            </div>
          </div>

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
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}