import React from 'react';
import { ArrowRight, LayoutGrid, BarChart2 } from 'lucide-react';

const BottomGrid = () => {
  const announcements = [
    {
      title: "Distillable Models and Synthetic Data Pipelines with NeMo Data Designer",
      description: "How to generate license-safe synthetic data workflows for model specialization",
      date: "12/23/2025"
    },
    {
      title: "Response Healing: Reduce JSON Defects by 80%+",
      description: "Today we're launching Response Healing, a new feature on OpenRouter that automatically fixes malformed JSON responses from LLMs before they reach your application",
      date: "12/17/2025"
    },
    {
      title: "The 2025 State of AI Report",
      description: "Introducing the 2025 State of AI report, in partnership with a16z. The largest empirical look yet at how developers and organizations use language models in the real world.",
      date: "12/3/2025"
    }
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-20 tabular-nums">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column: Explorer & Rankings */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <a 
            href="/models" 
            className="group block bg-white border border-slate-200 rounded-[12px] p-6 transition-all duration-200 hover:border-primary hover:shadow-lg hover:shadow-slate-100"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <LayoutGrid className="size-5 text-slate-500" />
                  <h3 className="text-[18px] font-semibold text-foreground leading-[1.5]">Explore Models</h3>
                </div>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-8">
                  Discover AI models across our collection, from all major labs and providers.
                </p>
              </div>
              <div className="flex items-center text-[14px] font-medium text-slate-400 group-hover:text-primary transition-colors">
                View models <ArrowRight className="ml-1.5 size-4" />
              </div>
            </div>
          </a>

          <a 
            href="/rankings" 
            className="group block bg-white border border-slate-200 rounded-[12px] p-6 transition-all duration-200 hover:border-primary hover:shadow-lg hover:shadow-slate-100"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BarChart2 className="size-5 text-slate-500" />
                  <h3 className="text-[18px] font-semibold text-foreground leading-[1.5]">Model & App Rankings</h3>
                </div>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-8">
                  Explore token usage across models, labs, and public applications.
                </p>
              </div>
              <div className="flex items-center text-[14px] font-medium text-slate-400 group-hover:text-primary transition-colors">
                View rankings <ArrowRight className="ml-1.5 size-4" />
              </div>
            </div>
          </a>
        </div>

        {/* Right Column: Recent Announcements */}
        <div className="md:col-span-7">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] font-semibold text-slate-700">Recent Announcements</h2>
            <a href="/blog" className="text-[12px] font-medium text-slate-400 hover:text-primary transition-colors flex items-center">
              View all <ArrowRight className="ml-1 size-3" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {announcements.map((announcement, index) => (
              <a 
                key={index}
                href={`/blog/${index}`}
                className="group block bg-white border border-slate-200 rounded-[12px] p-6 transition-all duration-150 hover:shadow-sm hover:border-slate-300"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-[16px] font-semibold text-slate-700 leading-snug group-hover:text-primary transition-colors">
                    {announcement.title}
                  </h4>
                  <p className="text-[14px] text-slate-500 line-clamp-2 leading-relaxed">
                    {announcement.description}
                  </p>
                  <span className="text-[12px] font-medium text-slate-400 mt-2">
                    {announcement.date}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomGrid;