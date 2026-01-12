'use client';

import React from 'react';
import { Search, LayoutGrid, List, ArrowUpDown, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const ModelsHeader: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-background pt-8 pb-4">
        <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-[30px] font-semibold tracking-tight text-[#020617] leading-[1.2]">
                Models
              </h1>
            </div>

        
        <div className="flex items-center gap-2">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-3 h-9 text-[14px] font-medium border border-[#E2E8F0] rounded-md bg-white hover:bg-[#F1F5F9] transition-colors text-[#020617]"
          >
            <Scale className="size-4" />
            Compare
          </motion.button>
          
          <div className="flex items-center border border-[#E2E8F0] rounded-md overflow-hidden bg-white">
            <motion.button 
              whileHover={{ backgroundColor: '#F1F5F9' }}
              whileTap={{ scale: 0.9 }}
              className="p-2 border-r border-[#E2E8F0] text-[#64748B] hover:text-[#020617] transition-colors"
            >
              <LayoutGrid className="size-4" />
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: '#E2E8F0' }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-[#F1F5F9] text-[#020617] transition-colors"
            >
              <List className="size-4" />
            </motion.button>
          </div>
        </div>
      </div>

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

      <div className="flex items-center justify-between text-[14px] text-[#020617]">
        <div className="font-normal">
          607 models
        </div>
        
        <motion.div 
          whileHover={{ backgroundColor: '#F1F5F9' }}
          className="group relative flex items-center gap-1 cursor-pointer px-2 py-1 rounded transition-colors"
        >
          <span className="font-medium">Most Popular</span>
          <ArrowUpDown className="size-3.5 text-[#64748B]" />
        </motion.div>
      </div>
    </div>
  );
};

export default ModelsHeader;
