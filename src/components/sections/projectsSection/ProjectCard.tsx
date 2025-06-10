import React from "react";
import GlassCard from "../../common/GlassCard";
import type { Project } from "./project.types";
import { FiExternalLink, FiGithub, FiStar, FiCode, FiEye } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const images = Array.isArray(project.image) ? project.image : [project.image];

  return (
    <div className="group">
      <GlassCard 
        className="overflow-hidden md:h-[60vh] bg-black/30 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/40"
        hover
      >
        {/* Project Image */}
        <div className="relative overflow-hidden h-48 group">
          <img
            src={images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
            }`}>
              {project.status}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <div className="p-1.5 bg-yellow-400/20 rounded-full backdrop-blur-sm border border-yellow-400/30">
                <FiStar className="w-3 h-3 text-yellow-400" />
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onViewDetails(project)}
              className="p-2 bg-black/60 rounded-full backdrop-blur-sm border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20"
            >
              <FiEye className="cursor-pointer w-4 h-4" />
            </button>
            
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/60 rounded-full backdrop-blur-sm border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 rounded-full backdrop-blur-sm border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        
        </div>

        {/* Project Content */}
        <div className="p-4 space-y-3">
          {/* Header */}
          <div>
            <div className="text-sm text-yellow-400 font-medium mb-1 flex items-center space-x-1">
              <FiCode className="w-3 h-3" />
              <span>{project.category}</span>
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-yellow-400">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((technology, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-medium border border-yellow-400/20"
              >
                {technology}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs text-yellow-400 px-2 py-1">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-between">
            <div className="flex space-x-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400 text-sm"
              >
                <FiGithub className="w-3 h-3" />
                <span>Code</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400 text-sm"
                >
                  <FiExternalLink className="cursor-pointer w-3 h-3" />
                  <span>Live</span>
                </a>
              )}
            </div>
            <button
              onClick={() => onViewDetails(project)}
              className="cursor-pointer text-sm text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Details →
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default ProjectCard;