=======
=======
=======
=======
=======
=======
=======
=======
=======
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
=======
=======
=======
=======
=======
=======
=======
=======
=======
        </button>
      </a>
    </div>
  );
};

=======
=======
=======
=======
=======
=======
=======
=======
=======
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
=======
=======
=======
=======
=======
=======
=======
=======
=======
            <div className="flex flex-col gap-1">
              {children}
            </div>
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
=======
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default function ModelsSidebar() {
  return (
=======
=======
=======
=======
=======
=======
=======
=======
=======
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

=======
=======
=======
=======
=======
=======
=======
=======
=======
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
    </aside>
=======
    </aside>
=======
    </aside>
=======
    </aside>
=======
    </aside>
=======
    </aside>
=======
    </aside>
=======
    </aside>
=======
    </aside>
=======
    </aside>
=======
    </aside>
  );
}