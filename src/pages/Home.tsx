import { motion } from "framer-motion";
import Navigation from "../components/common/Navigation";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/projectsSection/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-500 overflow-hidden">
      {/* Simplified global background layer - Only floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-yellow-500/5 to-gray-900/80"></div>

        {/* Only floating elements - 12 total */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 4 === 0
                ? "w-1 h-10 bg-gradient-to-b from-yellow-400/25 to-transparent"
                : i % 4 === 1
                ? "w-3 h-3 bg-yellow-400/20 rounded-full"
                : i % 4 === 2
                ? "w-2 h-8 bg-gradient-to-t from-yellow-500/20 to-transparent transform rotate-45"
                : "w-4 h-1 bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-40, 40, -40],
              x: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
      </div>

      {/* Content with proper z-index layering */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;