import React from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { LayoutGrid, List, Search as SearchIcon } from 'lucide-react';

const ModelsHeader = () => {
  return (
    <div className="flex flex-col gap-6 pt-8 px-6 w-full max-w-screen-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Models
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-2.5 py-0.5 rounded-full border border-border/50">
            <span className="font-medium text-foreground">284</span>
            <span className="opacity-70">models</span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end md:self-auto">
          {/* Search Box inside header context if mobile or supplemental */}
          <div className="relative flex items-center md:hidden">
            <div className="flex items-center gap-2 rounded-md h-9 w-full ring-offset-background transition-colors relative bg-muted/50 border border-input px-3 focus-within:ring-1 focus-within:ring-ring">
              <SearchIcon className="h-4 w-4 shrink-0 opacity-50" />
              <input 
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="Search models..."
              />
            </div>
          </div>

          {/* View Controls */}
          <div className="inline-flex items-center rounded-md border border-border bg-background p-1 shadow-sm">
            <button 
              className="inline-flex items-center justify-center rounded-sm px-2 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground shadow-sm"
              title="Card view"
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              Cards
            </button>
            <button 
              className="inline-flex items-center justify-center rounded-sm px-2 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground text-muted-foreground"
              title="Table view"
            >
              <List className="h-4 w-4 mr-2" />
              Table
            </button>
          </div>

          <div className="h-8 w-[1px] bg-border mx-1 hidden md:block"></div>

          {/* Sort/Filter Dropdowns (Mocked for UI accuracy) */}
          <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-2">
            Sort by: Popular
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 opacity-50"
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64057 5.94637 3.84203 6.13523L7.5 9.56464L11.158 6.13523C11.3594 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67597 11.842 6.86482L7.84199 10.6148C7.74491 10.7058 7.625 10.75 7.5 10.75C7.375 10.75 7.25509 10.7058 7.15801 10.6148L3.15801 6.86482C2.95655 6.67597 2.94635 6.35949 3.13523 6.15803Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Optional: Separator Line mimicking the sticky nav interaction border */}
      <div className="h-[1px] w-full bg-border/50"></div>
=======
=======
>>>>>>> Stashed changes
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
              <List className="size-4" />
            </button>
          </div>
        </div>
      </div>

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
      </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </div>
  );
};

export default ModelsHeader;