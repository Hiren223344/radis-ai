'use client';

import { motion } from "framer-motion";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import FeaturesGrid from "@/components/sections/features-grid";
import FeaturedModels from "@/components/sections/featured-models";
import OnboardingSteps from "@/components/sections/onboarding-steps";
import BottomContent from "@/components/sections/bottom-content";
import Footer from "@/components/sections/footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1] as any
    }
  }),
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRedirect = (path: string) => {
    setIsRedirecting(true);
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  return (
    <AnimatePresence mode="wait">
      {!isRedirecting && (
        <motion.div
          key="home-content"
          initial="hidden"
          animate="visible"
          exit="exit"
          className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary relative overflow-x-hidden"
        >
          <div className="bg-mesh" aria-hidden="true" />
          <Navigation onRedirect={handleRedirect} />
          <main id="skip" className="pt-24">
            <motion.div
              custom={0}
              variants={sectionVariants}
            >
              <HeroSection onRedirect={handleRedirect} />
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <FeaturesGrid />
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <FeaturedModels />
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <OnboardingSteps />
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
            >
              <BottomContent />
            </motion.div>
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
