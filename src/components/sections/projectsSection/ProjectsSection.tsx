import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "./project.types";
import { useProjects } from "../../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import GlassCard from "../../common/GlassCard";
import ProjectDialog from "./projectDialog";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-4"
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and development expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onViewDetails={handleProjectSelect}
              />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
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
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <GlassCard className="p-4 text-center bg-black/30 backdrop-blur-sm border border-yellow-400/20">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
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
