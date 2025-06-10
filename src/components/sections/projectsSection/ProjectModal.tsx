// import React, { useState, useEffect } from "react";
// import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import type { Project } from "./project.types";

// interface ProjectModalProps {
//   project: Project | null;
//   onClose: () => void;
// }

// // Enhanced Image Carousel Component - No Animations
// interface ImageCarouselProps {
//   images: string[];
//   title: string;
// }

// const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Reset index when images change
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [images]);

//   const nextImage = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goToImage = (index: number) => {
//     setCurrentIndex(index);
//   };

//   if (images.length === 0) return null;

//   return (
//     <div className="relative group mb-6">
//       {/* Main Image */}
//       <div className="relative overflow-hidden rounded-lg">
//         <img
//           src={images[currentIndex]}
//           alt={`${title} - Image ${currentIndex + 1}`}
//           className="w-full h-80 md:h-96 object-center"
//         />
        
//         {/* Navigation Arrows */}
//         {images.length > 1 && (
//           <>
//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 rounded-full backdrop-blur-sm border border-yellow-400/30 text-yellow-400 opacity-0 group-hover:opacity-100 hover:bg-yellow-400/20 z-10"
//             >
//               <FiChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/80 rounded-full backdrop-blur-sm border border-yellow-400/30 text-yellow-400 opacity-0 group-hover:opacity-100 hover:bg-yellow-400/20 z-10"
//             >
//               <FiChevronRight className="w-6 h-6" />
//             </button>
//           </>
//         )}

//         {/* Image Counter */}
//         {images.length > 1 && (
//           <div className="absolute top-4 right-4 px-3 py-2 bg-black/80 rounded-full backdrop-blur-sm text-yellow-400 text-sm font-medium">
//             {currentIndex + 1} / {images.length}
//           </div>
//         )}
//       </div>

//       {/* Thumbnail Navigation */}
//       {images.length > 1 && (
//         <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
//           {images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => goToImage(index)}
//               className={`flex-shrink-0 w-20 h-16 rounded-lg border-2 overflow-hidden ${
//                 index === currentIndex
//                   ? "border-yellow-400"
//                   : "border-gray-600/50 hover:border-yellow-400/50"
//               }`}
//             >
//               <img
//                 src={image}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-full h-full object-cover object-center"
//               />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Modal Header Component
// interface ModalHeaderProps {
//   project: Project;
//   onClose: () => void;
// }

// const ModalHeader: React.FC<ModalHeaderProps> = ({ project, onClose }) => (
//   <div className="flex items-start justify-between mb-6">
//     <div>
//       <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
//       <p className="text-yellow-400 text-lg">{project.category}</p>
//     </div>
//     <button
//       onClick={onClose}
//       className="text-gray-400 hover:text-white p-2 hover:bg-gray-700/30 rounded-lg text-xl"
//     >
//       ✕
//     </button>
//   </div>
// );

// // Modal Action Buttons Component
// interface ModalActionButtonsProps {
//   project: Project;
// }

// const ModalActionButtons: React.FC<ModalActionButtonsProps> = ({ project }) => (
//   <div className="flex flex-wrap gap-4 pt-6">
//     <a
//       href={project.github}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex items-center space-x-2 bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400/30 border border-yellow-400/30"
//     >
//       <FiGithub className="w-5 h-5" />
//       <span className="font-medium">View Code</span>
//     </a>
//     {project.live && (
//       <a
//         href={project.live}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center space-x-2 bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 font-medium"
//       >
//         <FiExternalLink className="w-5 h-5" />
//         <span>Live Demo</span>
//       </a>
//     )}
//   </div>
// );

// // Modal Features Section Component
// interface ModalFeaturesSectionProps {
//   features: string[];
// }

// const ModalFeaturesSection: React.FC<ModalFeaturesSectionProps> = ({ features }) => (
//   <div className="mb-6">
//     <h4 className="text-white font-semibold mb-4 text-lg">Key Features:</h4>
//     <ul className="text-gray-300 space-y-3">
//       {features.map((feature, index) => (
//         <li key={index} className="flex items-start space-x-3">
//           <span className="text-yellow-400 mt-1 text-lg">•</span>
//           <span className="leading-relaxed">{feature}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // Modal Tech Section Component
// interface ModalTechSectionProps {
//   tech: string[];
// }

// const ModalTechSection: React.FC<ModalTechSectionProps> = ({ tech }) => (
//   <div className="mb-6">
//     <h4 className="text-white font-semibold mb-4 text-lg">Technologies Used:</h4>
//     <div className="flex flex-wrap gap-3">
//       {tech.map((technology, index) => (
//         <span
//           key={index}
//           className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm border border-yellow-400/20 hover:bg-yellow-400/30 font-medium"
//         >
//           {technology}
//         </span>
//       ))}
//     </div>
//   </div>
// );

// // Modal Content Component
// interface ModalContentProps {
//   project: Project;
// }

// const ModalContent: React.FC<ModalContentProps> = ({ project }) => {
//   // Ensure images is always an array
//   const images = Array.isArray(project.image) ? project.image : [project.image];

//   return (
//     <div>
//       <ImageCarousel images={images} title={project.title} />
      
//       <p className="text-gray-300 mb-8 leading-relaxed text-lg">{project.description}</p>
      
//       <div className="space-y-6">
//         <ModalTechSection tech={project.tech} />
//         <ModalFeaturesSection features={project.features} />
//         <ModalActionButtons project={project} />
//       </div>
//     </div>
//   );
// };

// // Main Project Modal Component - No Animations
// const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
//   // Close modal on escape key
//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };

//     if (project) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [project, onClose]);

//   if (!project) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <div
//         className="bg-black/90 border border-yellow-400/30 rounded-2xl p-6 md:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <ModalHeader project={project} onClose={onClose} />
//         <ModalContent project={project} />
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;