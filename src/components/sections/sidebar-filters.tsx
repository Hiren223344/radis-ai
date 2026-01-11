"use client";

import React from 'react';
import { ChevronRight, Type, Image, FileText, Music, Video, Hash, DollarSign, Layers, Tag, Settings2, Sparkles } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-none">
      <h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-1 items-center justify-between gap-2 py-4 text-sm font-medium transition-all px-2 hover:no-underline group w-full text-left"
          data-state={isOpen ? 'open' : 'closed'}
        >
          <div className="text-foreground flex items-center gap-2 truncate">
            {icon}
            <span className="group-hover:underline">{title}</span>
          </div>
          <ChevronRight 
            className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
          />
        </button>
      </h3>
      {isOpen && (
        <div className="overflow-hidden text-sm animate-accordion-down">
          <div className="pb-4 pt-0">
            <div className="relative flex flex-col gap-1 truncate">
              <span className="border-border/50 absolute left-4 h-full border-l"></span>
              <div className="flex flex-col gap-1 pl-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface FilterLinkProps {
  label: string;
  isNew?: boolean;
  href: string;
}

const FilterLink: React.FC<FilterLinkProps> = ({ label, isNew, href }) => (
  <div className="relative flex w-full items-center gap-3">
    <a 
      className="text-muted-foreground w-full hover:text-foreground transition-colors" 
      href={href}
    >
      <button className="inline-flex whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent rounded-md text-muted-foreground px-2 group h-8 w-full items-center truncate duration-0 justify-between">
        <span className="flex items-center gap-3">
          {label}
          {isNew && (
            <div className="border font-semibold transition-colors focus:outline-none text-[10px] border-transparent bg-muted text-primary inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full no-underline hover:no-underline border-none ml-1">
              <span>New</span>
              <Sparkles className="size-2.5 text-primary" />
            </div>
          )}
        </span>
      </button>
    </a>
  </div>
);

const SidebarFilters = () => {
  return (
    <aside className="flex-col transition-all border-border/50 md:border-r md:h-[calc(100dvh-5.25rem)] sticky top-20 z-10 h-full w-64 hidden md:flex pt-8 flex-shrink-0 gap-0 overflow-visible pl-6 text-sm bg-background">
      <div className="relative overflow-hidden flex h-full w-full flex-col gap-2 pb-4 pr-5">
        <div className="h-full w-full overflow-y-auto no-scrollbar">
          <div className="flex flex-col" data-orientation="vertical">
            
            <AccordionItem 
              title="Input Modalities" 
              icon={<Type className="size-4" />} 
              defaultOpen={true}
            >
              <FilterLink label="Text" href="/models?input_modalities=text" />
              <FilterLink label="Image" href="/models?input_modalities=image" />
              <FilterLink label="File" href="/models?input_modalities=file" />
              <FilterLink label="Audio" href="/models?input_modalities=audio" />
              <FilterLink label="Video" isNew href="/models?input_modalities=video" />
            </AccordionItem>

            <AccordionItem 
              title="Output Modalities" 
              icon={<Layers className="size-4" />} 
              defaultOpen={true}
            >
              <FilterLink label="Text" href="/models?output_modalities=text" />
              <FilterLink label="Image" href="/models?output_modalities=image" />
              <FilterLink label="Embeddings" isNew href="/models?output_modalities=embeddings" />
            </AccordionItem>

            <AccordionItem 
              title="Context length" 
              icon={<Hash className="size-4" />} 
            >
              {/* Empty in original state but structure exists */}
            </AccordionItem>

            <AccordionItem 
              title="Prompt pricing" 
              icon={<DollarSign className="size-4" />} 
            >
              {/* Collapsed by default */}
            </AccordionItem>

            <AccordionItem 
              title="Series" 
              icon={<Layers className="size-4 rotate-90" />} 
            >
              {/* Collapsed by default */}
            </AccordionItem>

            <AccordionItem 
              title="Categories" 
              icon={<Tag className="size-4" />} 
            >
              {/* Collapsed by default */}
            </AccordionItem>

            <AccordionItem 
              title="Supported Parameters" 
              icon={<Settings2 className="size-4" />} 
            >
              {/* Collapsed by default */}
            </AccordionItem>

          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </aside>
  );
};

export default SidebarFilters;
