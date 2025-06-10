import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "./project.types";
import { useProjects } from "../../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import GlassCard from "../../common/GlassCard";
import ProjectDialog from "./projectDialog";
import { href } from "react-router-dom";

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { projects } = useProjects();

  const handleProjectSelect = (project: Project): void => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const stats = [
    { label: "Total Projects", value: "+10" },
    { label: "Completed", value: "+10" },
    { label: "In Progress", value: "+2" },
    { label: "Featured", value: "+5" },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-4 w-24" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and development expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleProjectSelect}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mb-12">
          <a
            href="https://github.com/djawadsofian?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:from-yellow-400 hover:to-yellow-500 hover:text-black backdrop-blur-sm transition-all"
          >
            <span className="flex items-center space-x-2">
              <span>View More Projects</span>
              <FiExternalLink className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <GlassCard
              key={index}
              className="p-4 text-center bg-black/30 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/40 group"
              hover
            >
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-300 group-hover:text-gray-200 text-sm">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
};

export default ProjectsSection;
