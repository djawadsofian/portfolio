import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/projectsSection/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import withLayout from "../hoc/WithLayout";

// eslint-disable-next-line react-refresh/only-export-components
const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection showLimit={3} />
      <SkillsSection />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withLayout(Home);