'use client';

import React from 'react';
import { ChevronDown, Info, LayoutGrid, Languages, Code2, Maximize2, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const RankingSection = ({ 
  id, 
  title, 
  subtitle, 
  icon: Icon, 
  imageSrc 
}: { 
  id: string; 
  title: string; 
  subtitle: string; 
  icon: any; 
  imageSrc?: string;
}) => {
  return (
    <div id={id} className="flex flex-col gap-10 scroll-mt-24">
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Icon className="size-5 text-[#687076]" />
              <a href={`#${id}`} className="hover:underline">
                <h2 className="text-[18px] font-medium text-[#0f172a]">{title}</h2>
              </a>
            </div>
            <p className="text-[12px] font-medium text-[#64748b] hidden md:flex items-center gap-1">
              {subtitle}
              <Info className="h-4 w-4 text-[#64748b]/60 cursor-help" />
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-between whitespace-nowrap border border-[#e2e8f0] bg-white px-4 py-2 transition-colors hover:bg-[#f1f5f9]/60 focus:outline-none h-8 rounded-full text-[#64748b] text-[12px] font-medium shadow-none hover:shadow-sm w-32"
          >
            <span>This Week</span>
            <ChevronDown className="size-4 opacity-50" />
          </motion.button>
        </div>
      </div>

      <div className="w-full bg-white rounded-md flex flex-col items-center justify-center min-h-[320px]">
        {imageSrc ? (
          <ImageWrapper src={imageSrc} alt={title} />
        ) : (
          <div className="w-full flex items-center justify-center border border-dashed border-[#e2e8f0] rounded-lg h-[320px] bg-[#f8fafc]">
            <span className="text-[#94a3b8] text-sm">Visualizing {title} Data...</span>
          </div>
        )}
      </div>
    </div>
  );
};

const ImageWrapper = ({ src, alt }: { src: string; alt: string }) => (
  <motion.img 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    src={src} 
    alt={`${alt} rankings chart`} 
    className="w-full h-auto object-contain max-h-[400px]"
  />
);

export default function RankingsCategories() {
  const assetsMap = {
    categories: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-radison-ai/assets/images/images_8.png",
    languages: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-radison-ai/assets/images/images_9.png",
    programming: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-radison-ai/assets/images/images_10.png",
    context: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-radison-ai/assets/images/images_11.png",
    toolcalls: "" 
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 py-12 flex flex-col gap-32">
      <RankingSection 
        id="categories"
        title="Categories"
        subtitle="Compare models by usecase on Radison"
        icon={LayoutGrid}
        imageSrc={assetsMap.categories}
      />

      <RankingSection 
        id="languages"
        title="Languages"
        subtitle="Compare models by natural language on Radison"
        icon={Languages}
        imageSrc={assetsMap.languages}
      />

      <RankingSection 
        id="programming"
        title="Programming"
        subtitle="Compare models by programming language on Radison"
        icon={Code2}
        imageSrc={assetsMap.programming}
      />

      <RankingSection 
        id="context-length"
        title="Context Length"
        subtitle="Requests by prompt & completion length on Radison"
        icon={Maximize2}
        imageSrc={assetsMap.context}
      />

      <RankingSection 
        id="tool-calls"
        title="Tool Calls"
        subtitle="Tool usage across models on Radison"
        icon={Wrench}
        imageSrc={assetsMap.toolcalls}
      />
    </section>
  );
}
