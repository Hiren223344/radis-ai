import Navigation from "@/components/sections/navigation";
import AnnouncementBanners from "@/components/sections/announcement-banners";
import StatusHero from "@/components/sections/status-hero";
import SystemOverviewCard from "@/components/sections/system-overview-card";
import ServiceStatusList from "@/components/sections/service-status-list";
import Footer from "@/components/sections/footer";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <AnnouncementBanners />
      <Navigation />
      <main className="pb-20">
        <StatusHero />
        <div className="container px-4">
          <SystemOverviewCard />
          <ServiceStatusList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
