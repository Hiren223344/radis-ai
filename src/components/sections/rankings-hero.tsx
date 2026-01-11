import React from 'react';
import { ChevronDown, Info, BarChart3 } from 'lucide-react';

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
/**
 * RankingsHero Component
 * 
 * Clones the page header section featuring the "AI Model Rankings" title 
 * and the initial LLM Leaderboard heading with its token usage description 
 * and "This Week" filter dropdown.
 */
export default function RankingsHero() {
  return (
    <section className="w-full flex flex-col pt-0 lg:pt-8 bg-background">
      <div className="mx-auto w-full px-6 max-w-screen-xl">
        <div className="flex flex-col gap-12">
          {/* Main Page Title */}
          <h1 className="text-[30px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#0F172A]">
            AI Model Rankings
          </h1>

          {/* Leaderboard Header Section */}
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
          <div id="leaderboard" className="flex flex-col gap-10 scroll-mt-24">
            <div className="flex flex-col gap-2 md:gap-5">
              <div className="flex items-center md:items-start justify-between">
                <div className="flex flex-col gap-2">
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
                  {/* Section Title with Icon */}
                  <div className="flex items-center gap-2">
                    <BarChart3 className="size-5 text-[#64748B]" strokeWidth={2} />
                    <a href="#leaderboard" className="hover:underline">
                      <h2 className="text-[18px] font-medium leading-[1.5] text-[#64748B]">
                        LLM Leaderboard
                      </h2>
                    </a>
                  </div>
                  
                  {/* Description - Visible on Desktop */}
                  <div className="hidden md:flex items-center gap-1.5">
                    <p className="text-[12px] font-medium text-[#64748B]">
                      Token usage across models on OpenRouter
                    </p>
                    <button 
                      className="inline-flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none"
                      aria-label="More information"
                    >
                      <Info className="h-4 w-4 text-[#64748B]" />
                    </button>
                  </div>
                </div>

                {/* Filter Dropdown Pill */}
                <button 
                  role="combobox" 
                  aria-expanded="false" 
                  aria-haspopup="listbox"
                  className="flex items-center justify-between whitespace-nowrap border border-[#E2E8F0] bg-white px-3 py-2 ring-offset-background transition-all placeholder:text-[#64748B] hover:bg-[#F1F5F9]/60 focus:outline-none focus:ring-1 focus:ring-[#0F172A] disabled:cursor-not-allowed disabled:opacity-50 relative h-9 rounded-full text-[#64748B] shadow-none hover:shadow-sm md:h-8 md:text-[12px] w-32 text-[14px] pl-4 pr-6 font-medium"
                >
                  <span className="line-clamp-1">This Week</span>
                  <ChevronDown className="absolute right-1.5 size-4 opacity-50" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
}
=======
}
=======
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
=======
}
>>>>>>> Stashed changes
