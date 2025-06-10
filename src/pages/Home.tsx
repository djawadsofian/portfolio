import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/projectsSection/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import withLayout from "../hoc/WithLayout";

// eslint-disable-next-line react-refresh/only-export-components
const Home = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withLayout(Home);