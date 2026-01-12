import React from 'react';
import { ArrowRight, LayoutGrid, BarChart3 } from 'lucide-react';

const AnnouncementsList = () => {
  const announcements = [
    {
      title: "Distillable Models and Synthetic Data Pipelines with NeMo Data Designer",
      summary: "How to generate license-safe synthetic data workflows for model specialization",
      date: "12/23/2025"
    },
    {
      title: "Response Healing: Reduce JSON Defects by 80%+",
      summary: "Today we're launching Response Healing, a new feature on OpenRouter that automatically fixes malformed JSON responses from LLMs before they reach your application",
      date: "12/17/2025"
    },
    {
      title: "The 2025 State of AI Report",
      summary: "Introducing the 2025 State of AI report, in partnership with a16z. The largest empirical look yet at how developers and organizations use language models in the real world.",
      date: "12/3/2025"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar Exploration Navigation */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {/* Explore Models Card */}
          <a href="/models" className="group h-full">
            <div className="bg-white border rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-200 hover:border-primary hover:shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#0F172A] font-semibold text-lg">
                  <LayoutGrid className="size-5 text-muted-foreground" />
                  <h3>Explore Models</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Discover AI models across our collection, from all major labs and providers.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-1.5 text-sm font-medium text-slate-500 group-hover:text-primary transition-colors">
                View models <ArrowRight className="size-4" />
              </div>
            </div>
          </a>

          {/* Model & App Rankings Card */}
          <a href="/rankings" className="group h-full">
            <div className="bg-white border rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-200 hover:border-primary hover:shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#0F172A] font-semibold text-lg">
                  <BarChart3 className="size-5 text-muted-foreground" />
                  <h3>Model & App Rankings</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Explore token usage across models, labs, and public applications.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-1.5 text-sm font-medium text-slate-500 group-hover:text-primary transition-colors">
                View rankings <ArrowRight className="size-4" />
              </div>
            </div>
          </a>
        </div>

        {/* Recent Announcements List */}
        <div className="w-full lg:w-2/3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#0F172A]">Recent Announcements</h2>
            <a href="/announcements" className="text-sm text-slate-500 hover:text-primary flex items-center gap-1 transition-colors">
              View all <ArrowRight className="size-3.5" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {announcements.map((post, index) => (
              <a 
                key={index} 
                href="#" 
                className="block group"
              >
                <div className="bg-white border rounded-xl p-6 transition-all duration-200 hover:border-primary hover:shadow-md">
                  <h3 className="text-[17px] font-semibold text-[#0F172A] mb-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                  <span className="text-sm font-medium text-slate-400">
                    {post.date}
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

export default AnnouncementsList;