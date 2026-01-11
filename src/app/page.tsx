import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import Features from "@/components/sections/features";
import FeaturedModels from "@/components/sections/featured-models";
import FeaturedAgents from "@/components/sections/featured-agents";
import OnboardingSteps from "@/components/sections/onboarding-steps";
import BottomGrid from "@/components/sections/bottom-grid";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main id="skip">
        <HeroSection />
        <Features />
        <FeaturedModels />
        <FeaturedAgents />
        <OnboardingSteps />
        <BottomGrid />
      </main>
      <Footer />
    </div>
  );
}
