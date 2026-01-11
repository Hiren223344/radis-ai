"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { Search } from "lucide-react";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <nav className="sticky top-0 z-40 bg-background w-full border-b border-border/50">
      <div className="mx-auto w-full px-6 py-4 max-w-screen-4xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          OpenRouter
        </Link>
        <div className="hidden lg:flex gap-6 items-center text-sm">
          <Link href="/models">Models</Link>
          <Link href="/rankings">Rankings</Link>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
