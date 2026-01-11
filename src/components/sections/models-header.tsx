<<<<<<< Updated upstream
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
=======
import React from 'react';
import { Search, LayoutGrid, List, ArrowUpDown, Scale } from 'lucide-react';

/**
 * ModelsHeader Component
 * 
 * Clones the header section of the models page which includes:
 * - "Models" title
 * - "Compare" action button
 * - View toggles (Grid/List)
 * - Large search input with keyboard shortcut
 * - Summary line with model count and sorting dropdown
 */

const ModelsHeader: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-background pt-8 pb-4">
      {/* Title and Top Actions Row */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[30px] font-semibold tracking-tight text-[#020617] leading-[1.2]">
          Models
        </h1>
        
        <div className="flex items-center gap-2">
          {/* Compare Button */}
          <button className="inline-flex items-center gap-2 px-3 h-9 text-[14px] font-medium border border-[#E2E8F0] rounded-md bg-white hover:bg-[#F1F5F9] transition-colors text-[#020617]">
            <Scale className="size-4" />
            Compare
          </button>
          
          {/* View Toggle Group */}
          <div className="flex items-center border border-[#E2E8F0] rounded-md overflow-hidden bg-white">
            <button className="p-2 border-r border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#020617] transition-colors">
              <LayoutGrid className="size-4" />
            </button>
            <button className="p-2 bg-[#F1F5F9] text-[#020617] transition-colors">
>>>>>>> Stashed changes
              <List className="size-4" />
            </button>
          </div>
        </div>
      </div>
<<<<<<< Updated upstream
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
=======

      {/* Large Search Input */}
      <div className="relative mb-6">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none">
          <Search className="size-4" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[40px] pl-10 pr-12 text-[14px] bg-[#F1F5F9] border-none rounded-md focus:ring-1 focus:ring-[#020817] outline-none transition-all placeholder:text-[#64748B]"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded border border-[#E2E8F0] bg-white text-[10px] font-medium text-[#64748B] tracking-tighter opacity-100 pointer-events-none">
          /
        </kbd>
      </div>

      {/* Model Count and Sort Summary Row */}
      <div className="flex items-center justify-between text-[14px] text-[#020617]">
        <div className="font-normal">
          607 models
        </div>
        
        <div className="group relative flex items-center gap-1 cursor-pointer hover:bg-[#F1F5F9] px-2 py-1 rounded transition-colors">
          <span className="font-medium">Most Popular</span>
          <ArrowUpDown className="size-3.5 text-[#64748B]" />
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};
<<<<<<< Updated upstream
export default ModelsHeader;
=======

export default ModelsHeader;
>>>>>>> Stashed changes
