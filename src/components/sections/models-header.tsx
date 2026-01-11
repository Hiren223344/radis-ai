import React from 'react';
import { Search, Scale, LayoutGrid, List, ChevronDown } from 'lucide-react';

/**
 * ModelsHeader Component
 * 
 * Clones the model listing header which includes:
 * - "Models" title (H1)
 * - "Compare" button
 * - Layout toggle icons (Cards/List)
 * - Dedicated search bar with "/" shortcut indicator
 * - Model count and "Most Popular" sort dropdown
 * 
 * Theme: light
 */
export default function ModelsHeader() {
  return (
    <div className="w-full flex flex-col gap-6 pt-8 pb-4 bg-background">
      {/* Top Row: Title, Compare, Layout Toggle */}
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-bold tracking-tight text-foreground leading-[1.2]">
          Models
        </h1>
        
        <div className="flex items-center gap-2">
          {/* Compare Button */}
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-3 gap-2">
            <Scale className="size-4" />
            Compare
          </button>
          
          {/* Layout Toggle Group */}
          <div className="inline-flex items-center rounded-md border border-input bg-background p-1 shadow-sm">
            <button className="inline-flex items-center justify-center rounded-sm px-2 py-1 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground shadow-none">
              <LayoutGrid className="size-4" />
            </button>
            <button className="inline-flex items-center justify-center rounded-sm px-2 py-1 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              <List className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full">
        <div className="flex items-center gap-2 rounded-lg h-10 w-full transition-colors relative bg-[#f1f5f9] text-[#64748b] focus-within:bg-[#e2e8f0] border border-transparent focus-within:border-slate-300">
          <div className="flex items-center px-3 w-full">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input 
              type="text"
              placeholder="Search"
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <kbd className="flex items-center justify-center aspect-square h-5 w-5 pointer-events-none rounded border border-border bg-background text-[10px] font-medium text-muted-foreground absolute right-3 transition-opacity duration-200">
            /
          </kbd>
        </div>
      </div>

      {/* Stats and Sort Dropdown */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground font-medium">
          607 models
        </div>
        
        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-80 transition-opacity">
          Most Popular
          <ChevronDown className="size-4 opacity-50" />
        </button>
      </div>
    </div>
  );
}