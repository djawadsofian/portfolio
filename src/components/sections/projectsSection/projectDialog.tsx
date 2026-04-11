import React, { useEffect } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import type { Project } from "./project.types";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { DialogHeader } from "../../ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  project,
  open,
  onOpenChange,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  if (!project) return null;

  const images = Array.isArray(project.image) ? project.image : [project.image];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto rounded-lg border border-yellow-400/30 bg-black/95 p-4 text-white sm:p-6 md:p-8 max-h-[95vh] sm:max-h-[90vh]">
        <DialogHeader className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <DialogTitle className="mb-1 pr-8 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                {project.title}
              </DialogTitle>
              <p className="text-base text-yellow-400 sm:text-lg">
                {project.category}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-0 top-0 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-700/30 hover:text-white sm:relative sm:top-auto sm:right-auto"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>

        <div className="mt-4 space-y-4 sm:space-y-6">
          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative overflow-hidden rounded-lg bg-black/40 border border-yellow-400/10 flex items-center justify-center h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="left-2 h-8 w-8 border-yellow-400/30 bg-black/80 text-yellow-400 hover:bg-yellow-400/20 sm:left-4 sm:h-10 sm:w-10" />
                  <CarouselNext className="right-2 h-8 w-8 border-yellow-400/30 bg-black/80 text-yellow-400 hover:bg-yellow-400/20 sm:right-4 sm:h-10 sm:w-10" />
                </>
              )}
            </Carousel>
          </div>

          {/* Project Description */}
          <div>
            <p className="text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
              {project.description}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="mb-3 text-base font-semibold text-white sm:text-lg">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((technology, index) => (
                <span
                  key={index}
                  className="rounded-full border border-yellow-400/20 bg-yellow-400/20 px-2 py-1 text-xs font-medium text-yellow-400 hover:bg-yellow-400/30 sm:px-3 sm:py-1.5 sm:text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="mb-3 text-base font-semibold text-white sm:text-lg">
              Key Features:
            </h4>
            <ul className="space-y-2 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="mt-1 text-sm text-yellow-400 sm:text-base">
                    •
                  </span>
                  <span className="text-sm leading-relaxed sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 sm:flex-row">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center space-x-2 rounded-lg border border-yellow-400/30 bg-yellow-400/20 px-4 py-2.5 font-medium text-yellow-400 hover:bg-yellow-400/30 sm:w-auto"
              >
                <FiGithub className="h-4 w-4" />
                <span>View Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center space-x-2 rounded-lg bg-yellow-400 px-4 py-2.5 font-medium text-black hover:bg-yellow-500 sm:w-auto"
              >
                <FiExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
