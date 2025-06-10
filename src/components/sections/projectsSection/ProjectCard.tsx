import React from "react";
import { FiExternalLink, FiGithub, FiStar, FiCode, FiEye } from "react-icons/fi";
import type { Project } from "./project.types";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const images = Array.isArray(project.image) ? project.image : [project.image];

  return (
    <div className="group">
      <div className="overflow-hidden md:h-[60vh] bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-xl hover:border-yellow-400/40 transition-colors duration-300">
        {/* Project Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-300"
                : "bg-yellow-500/20 text-yellow-300"
            }`}>
              {project.status}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 p-1.5 bg-yellow-400/20 rounded-full">
              <FiStar className="w-3 h-3 text-yellow-400" />
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onViewDetails(project)}
              className="p-2 bg-black/60 rounded-full border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20"
            >
              <FiEye className="w-4 h-4" />
            </button>
            
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/60 rounded-full border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 rounded-full border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20"
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
            <h3 className="text-lg font-bold text-white">
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
                className="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-medium"
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
                  <FiExternalLink className="w-3 h-3" />
                  <span>Live</span>
                </a>
              )}
            </div>
            <button
              onClick={() => onViewDetails(project)}
              className="text-sm text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;