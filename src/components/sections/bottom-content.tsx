'use client';

import React from 'react';
import { ArrowRight, LayoutGrid, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomContent = () => {
  const announcements = [
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
    {
      title: "The 2025 State of AI Report",
      description: "Introducing the 2025 State of AI report, in partnership with a16z. The largest empirical look yet at how developers and organizations use language models in the real world.",
      date: "12/3/2025",
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 bg-background text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        {/* Left Column: Explorer Cards */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/models" 
            className="group block p-8 rounded-[0.75rem] border border-border bg-card transition-all duration-200 hover:border-[#5F6FFF] hover:shadow-lg"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div>
                <div className="mb-4 text-muted-foreground group-hover:text-[#5F6FFF] transition-colors">
                  <LayoutGrid className="size-6" />
                </div>
                <h3 className="text-[1.125rem] font-semibold leading-relaxed mb-2 flex items-center gap-2">
                  Explore Models
                </h3>
                <p className="text-[0.875rem] leading-relaxed text-[#64748B]">
                  Discover AI models across our collection, from all major labs and providers.
                </p>
              </div>
              <div className="flex items-center text-[0.875rem] font-medium text-muted-foreground group-hover:text-[#5F6FFF] transition-colors">
                View models <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/rankings" 
            className="group block p-8 rounded-[0.75rem] border border-border bg-card transition-all duration-200 hover:border-[#5F6FFF] hover:shadow-lg"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div>
                <div className="mb-4 text-muted-foreground group-hover:text-[#5F6FFF] transition-colors">
                  <BarChart3 className="size-6" />
                </div>
                <h3 className="text-[1.125rem] font-semibold leading-relaxed mb-2 flex items-center gap-2">
                  Model & App Rankings
                </h3>
                <p className="text-[0.875rem] leading-relaxed text-[#64748B]">
                  Explore token usage across models, labs, and public applications.
                </p>
              </div>
              <div className="flex items-center text-[0.875rem] font-medium text-muted-foreground group-hover:text-[#5F6FFF] transition-colors">
                View rankings <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>
        </div>

        {/* Right Column: Announcements */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[1.125rem] font-semibold">Recent Announcements</h2>
            <motion.a 
              whileHover={{ x: 2 }}
              href="/status" 
              className="text-[0.875rem] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
            >
              View all <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          <div className="flex flex-col gap-4">
            {announcements.map((item, idx) => (
              <motion.a 
                key={idx}
                whileHover={{ scale: 1.01, borderLeftWidth: '4px', borderLeftColor: '#5F6FFF' }}
                href={`/status`} 
                className="group p-6 md:p-8 rounded-[0.75rem] border border-border bg-card transition-all duration-200 hover:shadow-md"
              >
                <h4 className="text-[1rem] font-semibold mb-2 group-hover:text-[#5F6FFF] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-[0.875rem] text-[#64748B] line-clamp-2 md:line-clamp-none mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-[0.75rem] font-tabular text-muted-foreground uppercase tracking-wider">
                  {item.date}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomContent;
