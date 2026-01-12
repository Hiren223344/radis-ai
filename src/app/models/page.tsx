import Navigation from "@/components/sections/navigation";
import SidebarFilters from "@/components/sections/sidebar-filters";
import ModelsHeader from "@/components/sections/models-header";
import ModelList from "@/components/sections/model-list";
import Footer from "@/components/sections/footer";

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      <Navigation />
      <div className="mx-auto w-full transition-all duration-150 px-6 max-w-screen-4xl flex gap-10">
        <SidebarFilters />
        <main id="skip" className="flex-1 flex flex-col min-w-0">
          <ModelsHeader />
          <ModelList />
        </main>
      </div>
      <Footer />
    </div>
  );
}
