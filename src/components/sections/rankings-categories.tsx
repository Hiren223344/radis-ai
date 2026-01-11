import React from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import { ChevronDown, Info, LayoutGrid, Languages, Code2, Maximize2, Wrench } from 'lucide-react';

/**
 * RankingsCategories Component
 * 
 * Clones the detailed ranking sections for Categories, Languages, Programming, 
 * Context Length, and Tool Calls. 
 * 
 * Theme: Light
 * Styling: Tailwind CSS + Shadcn/UI principles
 */

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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex items-center md:items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
          
          <button className="flex items-center justify-between whitespace-nowrap border border-[#e2e8f0] bg-white px-4 py-2 transition-colors hover:bg-[#f1f5f9]/60 focus:outline-none h-8 rounded-full text-[#64748b] text-[12px] font-medium shadow-none hover:shadow-sm w-32">
            <span>This Week</span>
            <ChevronDown className="size-4 opacity-50" />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
          </button>
        </div>
      </div>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      {/* Placeholder for Data Visualizations based on provided screenshots */}
      <div className="w-full bg-white rounded-md flex flex-col items-center justify-center min-h-[320px]">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={`${title} rankings chart`} 
            className="w-full h-auto object-contain max-h-[400px]"
          />
        ) : (
          <div className="w-full flex items-center justify-center border border-dashed border-[#e2e8f0] rounded-lg h-[320px] bg-[#f8fafc]">
            <span className="text-[#94a3b8] text-sm">Visualizing {title} Data...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default function RankingsCategories() {
  // Mapping the specific assets provided in the prompt to the correct sections
  // Using the fallback assets if specific ones aren't clearly labeled
  const assetsMap = {
    categories: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_8.png",
    languages: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_9.png",
    programming: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_10.png",
    context: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/553712b9-2c96-4989-89c0-e47787bf27ac-openrouter-ai/assets/images/images_11.png",
    toolcalls: "" // Fallback to placeholder
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 py-12 flex flex-col gap-32">
      {/* Categories Section */}
      <RankingSection 
        id="categories"
        title="Categories"
        subtitle="Compare models by usecase on OpenRouter"
        icon={LayoutGrid}
        imageSrc={assetsMap.categories}
      />

      {/* Languages Section */}
      <RankingSection 
        id="languages"
        title="Languages"
        subtitle="Compare models by natural language on OpenRouter"
        icon={Languages}
        imageSrc={assetsMap.languages}
      />

      {/* Programming Section */}
      <RankingSection 
        id="programming"
        title="Programming"
        subtitle="Compare models by programming language on OpenRouter"
        icon={Code2}
        imageSrc={assetsMap.programming}
      />

      {/* Context Length Section */}
      <RankingSection 
        id="context-length"
        title="Context Length"
        subtitle="Requests by prompt & completion length on OpenRouter"
        icon={Maximize2}
        imageSrc={assetsMap.context}
      />

      {/* Tool Calls Section */}
      <RankingSection 
        id="tool-calls"
        title="Tool Calls"
        subtitle="Tool usage across models on OpenRouter"
        icon={Wrench}
        imageSrc={assetsMap.toolcalls}
      />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    </section>
  );
}