"use client";

import Navigation from "@/components/sections/navigation";
import SidebarFilters from "@/components/sections/sidebar-filters";
import ModelsHeader from "@/components/sections/models-header";
import ModelList from "@/components/sections/model-list";
import Footer from "@/components/sections/footer";
import { Suspense, useState } from "react";

export default function ModelsPage() {
  const [search, setSearch] = useState("");
  const [modelCount, setModelCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      <Navigation />
      <div className="mx-auto w-full transition-all duration-150 px-6 max-w-screen-4xl flex gap-10">
        <SidebarFilters />
        <main id="skip" className="flex-1 flex flex-col min-w-0">
          <ModelsHeader search={search} setSearch={setSearch} modelCount={modelCount} />
          <Suspense fallback={<div className="p-20 text-center text-muted-foreground">Loading models...</div>}>
            <ModelList search={search} onModelCountChange={setModelCount} />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}
