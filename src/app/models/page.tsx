"use client";

import Navigation from "@/components/sections/navigation";
import SidebarFilters from "@/components/sections/sidebar-filters";
import ModelsHeader from "@/components/sections/models-header";
import ModelList from "@/components/sections/model-list";
import Footer from "@/components/sections/footer";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1] as any
    }
  })
};

export default function ModelsPage() {
  const [search, setSearch] = useState("");
  const [modelCount, setModelCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Navigation search={search} setSearch={setSearch} />
      </motion.div>

      <div className="mx-auto w-full transition-all duration-150 px-6 max-w-screen-4xl flex gap-10">
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <SidebarFilters />
        </motion.div>

        <main id="skip" className="flex-1 flex flex-col min-w-0">
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <ModelsHeader search={search} setSearch={setSearch} modelCount={modelCount} />
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <Suspense fallback={<div className="p-20 text-center text-muted-foreground">Loading models...</div>}>
              <ModelList search={search} onModelCountChange={setModelCount} />
            </Suspense>
          </motion.div>
        </main>
      </div>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
