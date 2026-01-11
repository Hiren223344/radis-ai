"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { Search } from "lucide-react";

/**
 * Navbar component for OpenRouter website.
 */
const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const navLinks = [
    { name: "Models", href: "/models" },
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
      className="sticky top-0 z-40 transition-all duration-150 bg-background w-full border-b border-border/50"
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
        <div className="align-center relative flex flex-row justify-between text-sm md:text-base items-center">
          <div className="flex flex-1 items-center gap-4">
            <Link className="text-muted-foreground" href="/">
              <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center text-muted-foreground px-2">
                <span className="flex items-center gap-2 text-base transform cursor-pointer font-medium duration-100 ease-in-out fill-current stroke-current text-foreground">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                    className="size-4"
                    aria-label="Logo"
                  >
                    <title>OpenRouter</title>
                    <g>
                      <path d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 464c-114.875 0-208-93.125-208-208S141.125 48 256 48s208 93.125 208 208-93.125 208-208 208z" />
                      <path d="M344 144h-64v64h64v-64zM232 144h-64v64h64v-64zM232 304h-64v64h64v-64zM344 304h-64v64h64v-64z" />
                    </g>
                  </svg>
                  <span className="font-display tracking-tight">OpenRouter</span>
                </span>
              </button>
            </Link>

            <div className="flex h-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground">
              <div
                role="combobox"
                className="flex items-center gap-2 rounded-md h-9 w-0 ring-ring md:w-44 lg:w-48 transition-colors relative bg-slate-100 text-slate-500 focus-within:bg-slate-200 focus-within:text-slate-900 border border-transparent"
                data-state="closed"
              >
                <div className="flex items-center px-3 gap-2 w-full focus-visible:outline-none h-full">
                  <Search className="h-4 w-4 shrink-0 opacity-50" />
                  <input
                    className="flex h-full w-full rounded-md bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                <kbd className="flex items-center justify-center aspect-square h-5 w-5 p-1 pointer-events-none rounded-sm bg-white border border-slate-200 text-[10px] text-muted-foreground absolute right-2 transition-opacity duration-200">
                  /
                </kbd>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:gap-1 items-center text-sm">
            {navLinks.map((link) => (
              <Link key={link.name} className="text-muted-foreground" href={link.href}>
                <button className="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent h-9 rounded-md w-auto justify-center px-2 text-muted-foreground">
                  {link.name}
                </button>
              </Link>
            ))}

            <div className="flex ml-2 w-24 justify-end">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 h-9 w-full rounded-full">
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
