import ProjectsSection from "../components/sections/projectsSection/ProjectsSection";
import withLayout from "../hoc/WithLayout";

const Projects = () => {
  return (
    <div className="pt-20">
      <ProjectsSection isFullPage={true} />
    </div>
  );
};

export default withLayout(Projects);
