"use client";
import React from 'react';
import { Search, Scale, LayoutGrid, List, ChevronDown } from 'lucide-react';

const ModelsHeader = () => {
  return (
    <div className="w-full flex flex-col gap-6 pt-8 pb-4 bg-background">
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-bold tracking-tight text-foreground leading-[1.2]">
          Models
        </h1>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 h-9 text-[14px] font-medium border border-border rounded-md bg-white hover:bg-accent transition-colors">
            <Scale className="size-4" />
            Compare
          </button>
          <div className="flex items-center border border-border rounded-md overflow-hidden bg-white">
            <button className="p-2 border-r border-border hover:bg-accent">
              <LayoutGrid className="size-4" />
            </button>
            <button className="p-2 bg-accent">
              <List className="size-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="flex items-center gap-2 rounded-lg h-10 w-full bg-slate-100 text-slate-500 border border-transparent focus-within:bg-white focus-within:border-slate-300 transition-all">
          <div className="flex items-center px-3 w-full">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input 
              type="text"
              placeholder="Search"
              className="flex h-10 w-full rounded-md bg-transparent text-sm outline-none"
            />
          </div>
          <kbd className="flex items-center justify-center aspect-square h-5 w-5 rounded border border-border bg-white text-[10px] font-medium mr-3">
            /
          </kbd>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground font-medium">
        <div>607 models</div>
        <button className="inline-flex items-center gap-1.5 text-foreground hover:opacity-80">
          Most Popular
          <ChevronDown className="size-4 opacity-50" />
        </button>
      </div>
    </div>
  );
};
export default ModelsHeader;
