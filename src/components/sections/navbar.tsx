"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

/**
 * Navbar component cloned to match OpenRouter.ai's sticky navigation.
 * Features:
 * - Logo with text
 * - Responsive search combobox with slash key indicator
 * - Navigation links (Models, Providers, Chat, Rankings, Enterprise, Pricing, Docs)
 * - Rounded "Sign up" button
 */
const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

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
      className="sticky top-0 z-40 transition-all duration-150 bg-background w-full border-b border-border"
    >
      <div className="mx-auto w-full transition-all duration-150 px-6 py-3.5 lg:py-6 max-w-screen-4xl">
        <span>
          <a
            href="#skip"
            className="sr-only absolute left-0 top-0 bg-background text-primary focus:not-sr-only"
          >
            Skip to content
          </a>
        </span>
        
        <div className="flex flex-row items-center justify-between text-sm md:text-base">
          {/* Left Section: Logo & Search */}
          <div className="flex flex-1 items-center gap-4">
            <a className="text-muted-foreground" href="/">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-medium duration-100 ease-in-out fill-current stroke-current">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/icons/favicon-1.ico"
                    alt="OpenRouter Logo"
                    width={16}
                    height={16}
                    className="size-4"
                  />
                  OpenRouter
                </span>
              </button>
            </a>

            {/* Search Combobox */}
            <div className="flex flex-col overflow-hidden rounded-md bg-popover text-popover-foreground">
              <div
                role="combobox"
                className="flex items-center gap-2 rounded-md h-9 w-0 ring-ring md:w-48 transition-colors relative bg-[#f1f5f9] text-[#64748b] focus-within:bg-[#e2e8f0] focus-within:text-[#0f172a]"
                data-state="closed"
              >
                <div className="flex items-center px-3 w-full focus-visible:outline-none">
                  <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <input
                    className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                <kbd className="flex items-center justify-center aspect-square h-4 w-4 p-1 pointer-events-none rounded-sm bg-border text-[10px] text-muted-foreground absolute right-3.5 transition-opacity duration-200">
                  /
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Section: Nav Links & Sign Up */}
          <div className="hidden lg:flex lg:gap-1 items-center text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="text-muted-foreground"
                href={link.href}
              >
                <button
                  className={`inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-2 ${
                    link.active ? "text-foreground bg-transparent" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </button>
              </a>
            ))}

            <div className="ml-2 flex w-24 justify-end">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 h-9 rounded-full">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;