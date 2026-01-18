import React from 'react';
import Link from 'next/link';
import { ArrowRight, LayoutGrid, BarChart3 } from 'lucide-react';

const AnnouncementsAndLinks = () => {
  const announcements = [
    {
      title: "Introducing Radison V2: The Next Evolution of the AI Gateway",
      description: "Radison V2 brings massive performance improvements, automated token rotation, and 100% OpenAI compatibility to your AI workflows.",
      date: "01/18/2026",
    },
    {
      title: "Distillable Models and Synthetic Data Pipelines with NeMo Data Designer",
      description: "How to generate license-safe synthetic data workflows for model specialization",
      date: "12/23/2025",
    },
    {
      title: "Response Healing: Reduce JSON Defects by 80%+",
      description: "Today we're launching Response Healing, a new feature on Radison that automatically fixes malformed JSON responses from LLMs before they reach your application",
      date: "12/17/2025",
    },
  ];


  return (
    <section className="bg-background py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Explore & Rankings Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link
              href="/models"
              className="group flex flex-col justify-between p-6 h-[220px] bg-card border border-border rounded-xl transition-all duration-200 hover:border-primary hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <LayoutGrid className="size-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold text-foreground">Explore Models</h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Discover AI models across our collection, from all major labs and providers.
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors mt-auto">
                View models <ArrowRight className="size-4" />
              </div>
            </Link>

            <Link
              href="/rankings"
              className="group flex flex-col justify-between p-6 h-[220px] bg-card border border-border rounded-xl transition-all duration-200 hover:border-primary hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="size-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold text-foreground">Model & App Rankings</h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Explore token usage across models, labs, and public applications.
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors mt-auto">
                View rankings <ArrowRight className="size-4" />
              </div>
            </Link>
          </div>

          {/* Right Column: Recent Announcements */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Recent Announcements</h2>
              <Link href="/announcements" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
                View all <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {announcements.map((item, index) => (
                <Link
                  key={index}
                  href={`/announcements/${index}`}
                  className="flex flex-col gap-2 p-6 bg-card border border-border rounded-xl transition-all duration-200 hover:border-primary hover:shadow-sm"
                >
                  <h4 className="text-[17px] font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <span className="text-[13px] text-muted-foreground mt-1 tabular-nums">
                    {item.date}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnnouncementsAndLinks;
