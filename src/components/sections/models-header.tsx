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
    </div>
  );
};

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default ModelsHeader;
export default ModelsHeader;
=======
export default ModelsHeader;
>>>>>>> Stashed changes
=======
export default ModelsHeader;
>>>>>>> Stashed changes
=======
export default ModelsHeader;
>>>>>>> Stashed changes
