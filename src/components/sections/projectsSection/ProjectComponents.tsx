import React from "react";
import { FiExternalLink, FiGithub, FiStar, FiTool, FiCode, FiEye } from "react-icons/fi";
import type { Project, FilterCategory } from "./project.types";

// Status Badge Component
interface StatusBadgeProps {
  status: Project['status'];
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const badgeClasses = status === "Completed"
    ? "bg-green-500/20 text-green-300 border border-green-500/30"
    : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30";

  return (
    <div className="absolute top-4 left-4">
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${badgeClasses}`}
      >
        {status}
      </span>
    </div>
  );
};

// Featured Badge Component
export const FeaturedBadge: React.FC = () => (
  <div className="absolute top-4 right-4">
    <div
      className="p-2 bg-yellow-400/20 rounded-full backdrop-blur-sm border border-yellow-400/30"
    >
      <FiStar className="w-4 h-4 text-yellow-400" />
    </div>
  </div>
);

// Quick Actions Component
interface QuickActionsProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ project, onViewDetails }) => {
  const buttonClass = "p-2 bg-black/60 rounded-full backdrop-blur-sm border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20";

  return (
    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100">
      <button
        onClick={() => onViewDetails(project)}
        className={buttonClass}
      >
        <FiEye className="w-4 h-4" />
      </button>
      
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        <FiGithub className="w-4 h-4" />
      </a>
      
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          <FiExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
};

// Project Header Component
interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => (
  <div>
    <div className="text-sm text-yellow-400 font-medium mb-1 flex items-center space-x-1">
      <FiCode className="w-4 h-4" />
      <span>{project.category}</span>
    </div>
    <h3 className="text-xl font-bold text-white dark:text-gray-100 group-hover:text-yellow-400">
      {project.title}
    </h3>
  </div>
);

// Project Description Component
interface ProjectDescriptionProps {
  description: string;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ description }) => (
  <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
    {description}
  </p>
);

// Tech Stack Component
interface TechStackProps {
  tech: string[];
}

export const TechStack: React.FC<TechStackProps> = ({ tech }) => (
  <div className="flex flex-wrap gap-2">
    {tech.map((technology, index) => (
      <span
        key={index}
        className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-medium border border-yellow-400/20 "
      >
        {technology}
      </span>
    ))}
  </div>
);

// Key Features Component
interface KeyFeaturesProps {
  features: string[];
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => (
  <div className="pt-2">
    <div className="flex items-center space-x-1 text-gray-400 text-sm mb-2">
      <FiTool className="w-4 h-4" />
      <span>Key Features:</span>
    </div>
    <div className="flex flex-wrap gap-1">
      {features.slice(0, 3).map((feature, index) => (
        <span
          key={index}
          className="text-xs text-gray-400 bg-gray-700/30 px-2 py-1 rounded"
        >
          {feature}
        </span>
      ))}
      {features.length > 3 && (
        <span className="text-xs text-yellow-400">
          +{features.length - 3} more
        </span>
      )}
    </div>
  </div>
);

// Action Buttons Component
interface ActionButtonsProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ project, onViewDetails }) => (
  <div className="pt-4 flex items-center justify-between">
    <div className="flex space-x-3">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400"
      >
        <FiGithub className="w-4 h-4" />
        <span className="text-sm">Code</span>
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400"
        >
          <FiExternalLink className="w-4 h-4" />
          <span className="text-sm">Live</span>
        </a>
      )}
    </div>
    <button
      onClick={() => onViewDetails(project)}
      className="cursor-pointer text-sm text-yellow-400 hover:text-yellow-300 font-medium"
    >
      View Details →
    </button>
  </div>
);

// Filter Buttons Component - No Animations
interface FilterButtonsProps {
  categories: FilterCategory[];
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  inView: boolean;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ 
  categories, 
  activeFilter, 
  onFilterChange
}) => (
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onFilterChange(category)}
        className={`px-6 py-3 rounded-full font-medium backdrop-blur-sm border ${
          activeFilter === category
            ? "bg-yellow-400/20 text-yellow-400 border-yellow-400/40"
            : "bg-black/20 text-gray-400 border-gray-600/30 hover:bg-yellow-400/10 hover:text-yellow-400 hover:border-yellow-400/30"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);