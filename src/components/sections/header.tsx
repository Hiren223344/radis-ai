"use client";

import React from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-16 flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Radison
          </Link>
          <nav
            aria-label="Main"
            className="relative z-10 max-w-max flex-1 items-center justify-center hidden md:flex"
          >
            <ul className="group flex flex-1 list-none items-center justify-center gap-1">
              <li>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/models"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Models
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/rankings"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Rankings
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/status"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Status
                  </Link>
                </motion.div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop Product Hunt Badge */}
          <div className="hidden md:block mr-2">
            <a
              href="https://www.producthunt.com/products/a4f-ai-for-free/reviews?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-a4f-ai-for-free"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Radison - AI For Free - Access hundreds of LLMs through one API for Free!!! | Product Hunt"
                width="250"
                height="54"
                className="h-[40px] w-auto"
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1069263&theme=light"
              />
            </a>
          </div>

          {/* Desktop Sign In Group */}
          <div className="hidden md:flex items-center">
            <div className="border border-input rounded-full h-9 overflow-hidden shadow-sm text-sm font-medium flex items-center bg-background">
              <motion.div whileHover={{ backgroundColor: "var(--accent)" }} className="h-full">
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center px-3 h-full hover:text-accent-foreground transition-colors"
                >
                  Sign in
                </Link>
              </motion.div>
              <div className="border-l h-5 self-center bg-border"></div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-full w-9 flex items-center justify-center hover:bg-accent transition-colors focus:outline-none"
                aria-label="More options"
              >
                <div className="relative flex items-center justify-center h-5 w-5">
                  <Menu className="h-5 w-5" />
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Product Hunt Badge */}
          <div className="md:hidden mr-1">
            <a
              href="https://www.producthunt.com/products/a4f-ai-for-free/reviews?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-a4f-ai-for-free"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Radison - AI For Free | Product Hunt"
                width="120"
                height="26"
                className="h-[26px] w-auto"
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1069263&theme=light"
              />
            </a>
          </div>

          {/* Mobile Sign In Group */}
          <div className="flex md:hidden items-center">
            <div className="border border-input rounded-full h-9 overflow-hidden shadow-sm text-sm font-medium flex items-center bg-background">
              <motion.div whileHover={{ backgroundColor: "var(--accent)" }} className="h-full">
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center px-3 h-full hover:text-accent-foreground"
                >
                  Sign in
                </Link>
              </motion.div>
              <div className="border-l h-5 self-center bg-border"></div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-full w-9 flex items-center justify-center hover:bg-accent focus:outline-none"
                aria-label="More options"
              >
                <div className="relative flex items-center justify-center h-5 w-5">
                  <Menu className="h-5 w-5" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;