<<<<<<< Updated upstream
"use client";

import * as React from "react";
import { ChevronRight, Box, Type, Image as ImageIcon, FileText, Mic, Video, Layers, DollarSign, List, Grid2X2, Settings2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  count?: number;
  isActive?: boolean;
  isNew?: boolean;
  href?: string;
}

const SidebarItem = ({ label, count, isActive, isNew, href }: SidebarItemProps) => {
  return (
    <div className="relative flex w-[calc(100%-0.5rem)] items-center gap-3">
      <span className={cn("h-3 w-2.5 rounded-full transition-colors", isActive ? "bg-primary" : "bg-transparent")} />
      <a 
        className="text-muted-foreground w-full group" 
        href={href || "#"}
      >
        <button className={cn(
          "inline-flex whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent rounded-md px-2 group h-8 w-full items-center truncate duration-0 justify-between",
          isActive ? "text-accent-foreground bg-accent" : "text-muted-foreground"
        )}>
          <span className="flex items-center gap-3">
            {label}
            {isNew && (
              <div class="border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs border-transparent bg-muted text-primary inline-flex items-center gap-1 px-2 py-1 rounded-full no-underline hover:no-underline border-none">
                <span>New</span>
                <Sparkles className="size-3 text-primary" />
              </div>
            )}
          </span>
          {count !== undefined && <span className="text-xs text-muted-foreground/50">{count}</span>}
=======
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronRight, Layers, FileText, Image as ImageIcon, Music, Video, Zap, Hash, Tag, Settings2, Sparkles, Building2, UserCircle } from 'lucide-react';

const SidebarItem = ({ 
  label, 
  href = '#', 
  isNew = false 
}: { 
  label: string; 
  href?: string; 
  isNew?: boolean 
}) => {
  return (
    <div className="relative flex w-[calc(100%-0.5rem)] items-center gap-3">
      <span className="h-3 w-2.5 rounded-full" />
      <a className="text-muted-foreground w-full" href={href}>
        <button className="inline-flex whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 hover:bg-accent hover:text-accent-foreground border border-transparent rounded-md text-muted-foreground px-2 group h-8 w-full items-center truncate duration-0 justify-between">
          <span className="flex items-center gap-3">
            {label}
            {isNew && (
              <div className="border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[10px] border-transparent bg-muted text-primary inline-flex items-center gap-1 px-2 py-0.5 rounded-full no-underline hover:no-underline border-none leading-tight">
                <span>New</span>
                <Sparkles className="size-2.5 text-primary fill-current" />
              </div>
            )}
          </span>
>>>>>>> Stashed changes
        </button>
      </a>
    </div>
  );
};

<<<<<<< Updated upstream
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
          className="flex flex-1 items-center justify-between gap-2 py-4 text-sm font-medium transition-all px-2 hover:no-underline group"
        >
          <div className="text-foreground flex items-center gap-2 truncate">
            {icon}
            <span className="group-hover:underline">{title}</span>
          </div>
          <ChevronRight 
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
              isOpen ? "rotate-90" : "rotate-0"
            )} 
          />
        </button>
      </h3>
      <div 
        className={cn(
          "overflow-hidden text-sm transition-all duration-200 ease-in-out",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pb-4 pt-0">
          <div className="relative flex flex-col gap-1 truncate">
            <span className="border-border/50 absolute left-4 h-full border-l"></span>
=======
const AccordionItem = ({ 
  value, 
  title, 
  icon: Icon, 
  children, 
  defaultOpen = false 
}: { 
  value: string; 
  title: string; 
  icon: React.ElementType; 
  children?: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  return (
    <Accordion.Item value={value} className="border-b border-none">
      <Accordion.Header className="flex">
        <Accordion.Trigger className="flex flex-1 items-center justify-between gap-2 py-4 text-sm font-medium transition-all [&[data-state=open]>svg:last-child]:rotate-90 px-2 hover:no-underline group text-left">
          <div className="text-foreground flex items-center gap-2 truncate">
            <Icon className="size-4 shrink-0" />
            <span className="group-hover:underline truncate">{title}</span>
          </div>
          <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="pb-4 pt-0">
          <div className="relative flex flex-col gap-1 truncate">
            <span className="border-border/50 absolute left-4 h-full border-l" />
>>>>>>> Stashed changes
            <div className="flex flex-col gap-1">
              {children}
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
      </div>
    </div>
=======
      </Accordion.Content>
    </Accordion.Item>
>>>>>>> Stashed changes
  );
};

export default function ModelsSidebar() {
  return (
<<<<<<< Updated upstream
    <div className="flex-col transition-all border-border/50 md:border-r md:h-[calc(100dvh-5.25rem)] sticky top-20 z-10 h-full w-64 hidden md:flex pt-8 flex-shrink-0 gap-0 overflow-visible pl-6 text-sm">
      <div className="relative overflow-hidden flex h-full w-full flex-col gap-2 pb-4 pr-5 custom-scrollbar">
        <AccordionSection 
          title="Input Modalities" 
          icon={<Box className="size-4" />} 
          defaultOpen={true}
        >
          <SidebarItem label="Text" href="/models?input_modalities=text" />
          <SidebarItem label="Image" href="/models?input_modalities=image" />
          <SidebarItem label="File" href="/models?input_modalities=file" />
          <SidebarItem label="Audio" href="/models?input_modalities=audio" />
          <SidebarItem label="Video" href="/models?input_modalities=video" isNew />
        </AccordionSection>

        <AccordionSection 
          title="Output Modalities" 
          icon={<Type className="size-4" />} 
          defaultOpen={true}
        >
          <SidebarItem label="Text" href="/models?output_modalities=text" />
          <SidebarItem label="Image" href="/models?output_modalities=image" />
          <SidebarItem label="Embeddings" href="/models?output_modalities=embeddings" isNew />
        </AccordionSection>

        <AccordionSection 
          title="Context length" 
          icon={<Layers className="size-4" />} 
        >
          <SidebarItem label="< 4K" />
          <SidebarItem label="4K - 32K" />
          <SidebarItem label="32K - 128K" />
          <SidebarItem label="> 128K" />
        </AccordionSection>

        <AccordionSection 
          title="Prompt pricing" 
          icon={<DollarSign className="size-4" />} 
        >
          <SidebarItem label="Free" />
          <SidebarItem label="<$1 / 1M tokens" />
          <SidebarItem label=">$1 / 1M tokens" />
        </AccordionSection>

        <AccordionSection 
          title="Series" 
          icon={<List className="size-4" />} 
        >
          <SidebarItem label="Claude" />
          <SidebarItem label="GPT" />
          <SidebarItem label="Llama" />
          <SidebarItem label="Gemini" />
          <SidebarItem label="Mistral" />
        </AccordionSection>

        <AccordionSection 
          title="Categories" 
          icon={<Grid2X2 className="size-4" />} 
        >
          <SidebarItem label="General" />
          <SidebarItem label="Coding" />
          <SidebarItem label="Creative" />
          <SidebarItem label="Roleplay" />
        </AccordionSection>

        <AccordionSection 
          title="Supported Parameters" 
          icon={<Settings2 className="size-4" />} 
        >
          <SidebarItem label="Tools/Function Calling" />
          <SidebarItem label="Json Schema" />
          <SidebarItem label="Structured Output" />
        </AccordionSection>
      </div>
      
=======
    <aside className="flex-col transition-all border-border/50 md:border-r md:h-[calc(100dvh-5.25rem)] sticky top-20 z-10 h-full w-64 hidden md:flex pt-8 flex-shrink-0 gap-0 overflow-visible pl-6 text-sm">
      <div className="relative overflow-hidden flex h-full w-full flex-col gap-2 pb-4 pr-5 custom-scrollbar">
        <Accordion.Root type="multiple" defaultValue={['input-modalities', 'output-modalities']} className="w-full">
          
          <AccordionItem value="input-modalities" title="Input Modalities" icon={Layers}>
            <SidebarItem label="Text" />
            <SidebarItem label="Image" />
            <SidebarItem label="File" />
            <SidebarItem label="Audio" />
            <SidebarItem label="Video" isNew />
          </AccordionItem>

          <AccordionItem value="output-modalities" title="Output Modalities" icon={Zap}>
            <SidebarItem label="Text" />
            <SidebarItem label="Image" />
            <SidebarItem label="Embeddings" isNew />
          </AccordionItem>

          <AccordionItem value="context-length" title="Context length" icon={FileText} />
          
          <AccordionItem value="prompt-pricing" title="Prompt pricing" icon={Hash} />

          <AccordionItem value="series" title="Series" icon={Layers} />

          <AccordionItem value="categories" title="Categories" icon={Tag} />

          <AccordionItem value="supported-parameters" title="Supported Parameters" icon={Settings2} />

          <AccordionItem value="distillable" title="Distillable" icon={Sparkles}>
            <SidebarItem label="New" />
          </AccordionItem>

          <AccordionItem value="providers" title="Providers" icon={Building2} />

          <AccordionItem value="model-authors" title="Model Authors" icon={UserCircle} />

        </Accordion.Root>
      </div>

>>>>>>> Stashed changes
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
<<<<<<< Updated upstream
    </div>
=======
    </aside>
>>>>>>> Stashed changes
  );
}