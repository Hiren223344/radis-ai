import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import FeaturesGrid from "@/components/sections/features-grid";
import FeaturedModels from "@/components/sections/featured-models";
import OnboardingSteps from "@/components/sections/onboarding-steps";
import BottomContent from "@/components/sections/bottom-content";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary overflow-x-hidden">
      <div className="bg-mesh" aria-hidden="true" />
      <Navigation />
        <main id="skip">
          <HeroSection />
          <FeaturesGrid />
          <FeaturedModels />
        <OnboardingSteps />
        <BottomContent />
      </main>
      <Footer />
    </div>
  );
}
