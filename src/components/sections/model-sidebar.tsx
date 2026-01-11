"use client";

import * as React from "react";
import { ChevronRight, FileText, ImageIcon, File, Mic, Video, BarChart3, Tag, Settings, User, Zap, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  href?: string;
  isNew?: boolean;
}

const SidebarItem = ({ label, href = "#", isNew = false }: SidebarItemProps) => {
  return (
    <div className="relative flex w-[calc(100%-0.5rem)] items-center gap-3">
      <span className="h-3 w-2.5 rounded-full"></span>
      <a className="text-muted-foreground w-full" href={href}>
        <button className="inline-flex whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent rounded-md text-muted-foreground px-2 group h-8 w-full items-center truncate duration-0 justify-between">
          <span className="flex items-center gap-3">
            {label}
            {isNew && (
              <div className="border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[10px] border-transparent bg-[#f1f5f9] text-[#4f46e5] inline-flex items-center gap-1 px-2 py-0.5 rounded-full no-underline hover:no-underline border-none uppercase tracking-wider">
                <span>New</span>
                <Zap className="size-2.5 fill-current" />
              </div>
            )}
          </span>
        </button>
      </a>
    </div>
  );
};

interface AccordionSectionProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionSection = ({ title, icon, children, defaultOpen = false }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-none" data-orientation="vertical">
      <h3 className="flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex flex-1 items-center justify-between gap-2 py-4 text-sm font-medium transition-all px-2 hover:no-underline group",
            isOpen ? "[&>svg:last-child]:rotate-90" : ""
          )}
        >
          <div className="text-foreground flex items-center gap-2 truncate">
            {icon}
            <span className="group-hover:underline">{title}</span>
          </div>
          <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </button>
      </h3>
      {isOpen && (
        <div className="overflow-hidden text-sm animate-accordion-down">
          <div className="pb-4 pt-0">
            <div className="relative flex flex-col gap-1 truncate">
              <span className="border-border/50 absolute left-4 h-full border-l"></span>
              <div className="flex flex-col gap-1">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ModelSidebar() {
  return (
    <aside className="flex-col transition-all border-border/50 md:border-r md:h-[calc(100dvh-5.25rem)] sticky top-20 z-10 h-full w-64 hidden md:flex pt-8 flex-shrink-0 gap-0 overflow-visible pl-6 text-sm tabular-nums">
      <div className="relative overflow-hidden flex h-full w-full flex-col gap-2 pb-4 pr-5">
        <div className="h-full w-full overflow-y-auto scrollbar-hide">
          <div className="flex flex-col" data-orientation="vertical">
            
            <AccordionSection 
              title="Input Modalities" 
              icon={<Layers className="size-4" />} 
              defaultOpen={true}
            >
              <SidebarItem label="Text" href="/models?input_modalities=text" />
              <SidebarItem label="Image" href="/models?input_modalities=image" />
              <SidebarItem label="File" href="/models?input_modalities=file" />
              <SidebarItem label="Audio" href="/models?input_modalities=audio" />
              <SidebarItem label="Video" href="/models?input_modalities=video" isNew={true} />
            </AccordionSection>

            <AccordionSection 
              title="Output Modalities" 
              icon={<BarChart3 className="size-4" />}
              defaultOpen={true}
            >
              <SidebarItem label="Text" href="/models?output_modalities=text" />
              <SidebarItem label="Image" href="/models?output_modalities=image" />
              <SidebarItem label="Embeddings" href="/models?output_modalities=embeddings" isNew={true} />
            </AccordionSection>

            <AccordionSection 
              title="Context length" 
              icon={<Settings className="size-4" />} 
            />

            <AccordionSection 
              title="Prompt pricing" 
              icon={<Tag className="size-4" />} 
            />

            <AccordionSection 
              title="Series" 
              icon={<Layers className="size-4" />} 
            />

            <AccordionSection 
              title="Categories" 
              icon={
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              } 
            />

            <AccordionSection 
              title="Supported Parameters" 
              icon={<Settings className="size-4" />} 
            />

            <AccordionSection 
              title="Distillable" 
              icon={<Zap className="size-4" />}
            >
              <SidebarItem label="Yes" isNew={true} />
              <SidebarItem label="No" />
            </AccordionSection>

            <AccordionSection 
              title="Providers" 
              icon={<Layers className="size-4" />} 
            />

            <AccordionSection 
              title="Model Authors" 
              icon={<User className="size-4" />} 
            />

          </div>
        </div>
      </div>
    </aside>
  );
}