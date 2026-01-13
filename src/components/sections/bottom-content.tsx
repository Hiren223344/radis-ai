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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              whileTap={{ scale: 0.98 }}
              href="/models" 
              className="group block p-8 rounded-[2rem] liquid-glass border border-white/40 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="flex flex-col h-full justify-between gap-4">
                <div>
                  <div className="mb-4 text-muted-foreground group-hover:text-primary transition-colors">
                    <LayoutGrid className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-2">
                    Explore Models
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-muted-foreground">
                    Discover AI models across our collection, from all major labs and providers.
                  </p>
                </div>
                <div className="flex items-center text-sm font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                  View models <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>

            <motion.a 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              whileTap={{ scale: 0.98 }}
              href="/rankings" 
              className="group block p-8 rounded-[2rem] liquid-glass border border-white/40 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="flex flex-col h-full justify-between gap-4">
                <div>
                  <div className="mb-4 text-muted-foreground group-hover:text-primary transition-colors">
                    <BarChart3 className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-2">
                    Model & App Rankings
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-muted-foreground">
                    Explore token usage across models, labs, and public applications.
                  </p>
                </div>
                <div className="flex items-center text-sm font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                  View rankings <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* Right Column: Announcements */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Recent Announcements</h2>
              <motion.a 
                whileHover={{ x: 2 }}
                href="/status" 
                className="text-sm font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                View all <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>

            <div className="flex flex-col gap-6">
              {announcements.map((item, idx) => (
                <motion.a 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.01, x: 10 }}
                  href={`/status`} 
                  className="group p-8 rounded-[2rem] liquid-glass border border-white/40 transition-all duration-500 hover:shadow-xl"
                >
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-base font-medium text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
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
