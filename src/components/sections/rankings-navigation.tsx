"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Models", href: "/models" },
    { name: "Providers", href: "/providers" },
    { name: "Chat", href: "/chat" },
    { name: "Rankings", href: "/rankings", active: true },
    { name: "Enterprise", href: "/enterprise" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs/quickstart" },
  ];

  return (
    <nav
      id="main-nav"
      className={`sticky top-0 z-40 w-full transition-all duration-150 bg-background ${
        isScrolled ? "border-b border-border" : ""
      }`}
    >
      <div className="mx-auto w-full transition-all duration-150 px-6 py-3.5 lg:py-6 max-w-[1440px]">
        <span>
          <a
            href="#skip"
            className="sr-only absolute left-0 top-0 bg-background text-primary focus:not-sr-only"
          >
            Skip to content
          </a>
        </span>

        <div className="align-center relative flex flex-row justify-between items-center text-sm md:text-base">
          {/* Left Section: Logo & Search */}
          <div className="flex flex-1 items-center gap-4">
            <a className="text-muted-foreground flex items-center" href="/">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-0">
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-medium duration-100 ease-in-out fill-current stroke-current text-foreground">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    className="size-5"
                    aria-label="Logo"
                  >
                    <title>Radison</title>
                    <g fill="currentColor">
                      <path d="M256 0L476.9 127.5V384.5L256 512L35.1 384.5V127.5L256 0ZM256 61.3L88.2 158.2V353.8L256 450.7L423.8 353.8V158.2L256 61.3Z" />
                      <path d="M256 128L384 202V310L256 384L128 310V202L256 128Z" />
                    </g>
                  </svg>
                  <span className="font-semibold tracking-tight text-[#0F172A]">Radison</span>
                </span>
              </button>
            </a>

            {/* Search Bar */}
            <div className="relative flex items-center group">
              <div
                role="combobox"
                aria-expanded="false"
                aria-haspopup="listbox"
                className="flex items-center gap-2 rounded-full h-9 w-0 md:w-48 transition-all relative bg-[#F1F5F9] text-slate-11 focus-within:ring-1 focus-within:ring-slate-300 focus-within:bg-[#F1F5F9]"
              >
                <div className="flex items-center px-3 w-full">
                  <Search className="h-4 w-4 shrink-0 text-slate-400" />
                  <input
                    className="flex h-9 w-full rounded-md bg-transparent py-2 pl-2 text-sm outline-none placeholder:text-[#64748B] text-[#0F172A] disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search"
                    type="text"
                  />
                </div>
                <kbd className="hidden md:flex items-center justify-center aspect-square h-5 w-5 pointer-events-none rounded border border-slate-300 bg-white text-[10px] font-medium text-slate-400 absolute right-2.5 shadow-sm">
                  /
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Section: Links & Sign Up */}
          <div className="hidden lg:flex lg:items-center lg:gap-1 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="text-muted-foreground"
                href={link.href}
              >
                <button
                  className={`inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-3 ${
                    link.active
                      ? "text-[#0F172A]"
                      : "text-[#64748B]"
                  }`}
                >
                  {link.name}
                </button>
              </a>
            ))}

            <div className="flex w-24 justify-end ml-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 bg-[#4F46E5] text-white shadow hover:bg-[#4338CA] px-4 h-9 w-full rounded-full text-sm">
                Sign up
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon (Placeholder for functionality) */}
          <div className="flex lg:hidden">
             <button className="p-2 text-slate-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
}