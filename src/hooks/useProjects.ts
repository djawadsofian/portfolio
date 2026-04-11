import { useMemo } from "react";
import type {
  FilterCategory,
  Project,
} from "../components/sections/projectsSection/project.types";

import bib0 from "../images/la bib/1.PNG";
import bib1 from "../images/la bib/2.PNG";
import bib2 from "../images/la bib/3.PNG";
import bib3 from "../images/la bib/4.PNG";
import bib4 from "../images/la bib/5.PNG";
import bib5 from "../images/la bib/6.PNG";
import bib6 from "../images/la bib/7.PNG";
import bib7 from "../images/la bib/8.PNG";
import bib8 from "../images/la bib/9.PNG";
import bib9 from "../images/la bib/10.PNG";

import pfe1 from "../images/pfe/1.jpg";
import pfe2 from "../images/pfe/2.png";
import pfe3 from "../images/pfe/3.png";
import pfe4 from "../images/pfe/4.png";
import pfe5 from "../images/pfe/5.png";
import pfe6 from "../images/pfe/6.png";


import elevator1 from "../images/elvator/1a.png";
import elevator2 from "../images/elvator/2a.png";
import elevator3 from "../images/elvator/3a.png";
import elevator4 from "../images/elvator/4a.png";
import elevator5 from "../images/elvator/5a.png";

// Formly
import formly1 from "../images/formly/1.png";
import formly2 from "../images/formly/2.png";
import formly3 from "../images/formly/3.png";
import formly4 from "../images/formly/4.png";
import formly5 from "../images/formly/5.png";
import formly6 from "../images/formly/6.png";
import formly7 from "../images/formly/7.png";

// Glasses
import glasses1 from "../images/glasses/1.png";
import glasses2 from "../images/glasses/2.png";
import glasses3 from "../images/glasses/3.png";
import glasses4 from "../images/glasses/4.png";
import glasses5 from "../images/glasses/5.png";

// Food
import food1 from "../images/food/1.png";
import food2 from "../images/food/2.png";
import food3 from "../images/food/3.png";
import food4 from "../images/food/4.png";

// Lotok
import lotok1 from "../images/lotok/1.png";
import lotok2 from "../images/lotok/2.png";
import lotok3 from "../images/lotok/3.png";
import lotok4 from "../images/lotok/4.png";
import lotok5 from "../images/lotok/LOTOK_Screenshot.png";

// Photographer
import photo1 from "../images/photographer/1.png";
import photo2 from "../images/photographer/2.png";
import photo3 from "../images/photographer/3.png";
import photo4 from "../images/photographer/4.png";




export const useProjects = () => {
  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        title: "Lift & Cable Installation Company Management Platform",
        category: "Full Stack Application",
        description:
          "Full enterprise management system developed for a company to manage projects, inventory, invoices, and maintenance operations.",
        image: [elevator1, elevator2, elevator3, elevator4, elevator5],
        tech: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Django",
          "Django REST Framework",
          "SSE",
          "PostgreSQL",
          "Docker",
        ],
        features: [
          "Full project lifecycle: client registration → project creation → verification → assignment → maintenance",
          "Advanced inventory management with stock tracking and profit calculations",
          "Invoice system with multi-line products and financial tracking",
          "Interactive calendar for scheduling and planning",
          "Secure authentication with JWT + role-based access (admin / assistant)",
          "Statistics dashboard with project and profit analytics",
        ],
        github: "",
        live: "http://5.135.241.51/",
        status: "Completed",
        featured: true,
      },
      {
        id: 2,
        title: "The Official State Library Website Of Tissemsilt",
        category: "Full Stack Application",
        description:
          "The project involved  developing a responsive, multilingual website for a library, featuring approximately 20 pages with diverse functionalities. The website serves as a comprehensive platform for users to explore library services, reserve rooms, browse books, read articles, and interact with the library community.",
        image: [bib0, bib1, bib2, bib3, bib4, bib5, bib6, bib7, bib8, bib9],
        tech: [
          "React",
          "Typescript",
          "TailwindCSS",
          "Tanstack",
          "Rudux",
          "django ",
          "PostgreSQL",
          "other ...",
        ],
        features: [
          "dynamic testimonial sections",
          " book rating systems",
          " comment sections",
          "administrative dashboard for content management.",
        ],
        github: "",
        live: "https://bplptissemsilt.dz/",
        status: "Completed",
        featured: true,
      },
      {
        id: 3,
        title: "Academic Project Management Platform – ProjectTrack",
        category: "Full Stack Application",
        description:
          "ProjectTrack is a web-based academic project management platform developed as part of our 3rd-year multidisciplinary module at ESI. It streamlines the handling of student projects (PFE and interdisciplinary projects) by unifying students, professors, companies, and administrators under one platform.",
        image: [pfe1, pfe2, pfe3, pfe4, pfe5, pfe6],
        tech: [
          "React",
          "TailwindCSS",
          "TypeScript",
          "Tanstack",
          "Redux ",
          "websockets ",
          "django",
          "others ...",
        ],
        features: [
          "project submission, supervision, and evaluation tracking",
          "level-specific project organization",
          "role-based dashboards",
          "predefined accounts",
          "real-time notification system",
        ],
        github: "https://github.com/Yacine-Djaaraoui/PFE",
        status: "Completed",
        featured: true,
      },
      {
        id: 8,
        title: "Formly - Training Platform",
        category: "Frontend Application",
        description:
          "A sleek promotional website designed to showcase the services of Formly, an online training platform. The site provides clarity on Formly's course offerings, pricing models, and addresses common questions to help potential students understand the platform's benefits.",
        image: [formly1, formly2, formly3, formly4, formly5, formly6, formly7],
        tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "React Hook Form"],
        features: [
          "Interactive platform feature highlights",
          "Comprehensive course pricing breakdown",
          "Integrated Q&A section for potential students",
          "Responsive, high-conversion landing page design",
          "Strategic CTA placements for platform enrollment",
        ],
        github: "",
        status: "Completed",
        featured: true,
      },
      {
        id: 7,
        title: "Eline Glasses - Premium Eyewear E-commerce",
        category: "Full Stack Application",
        description:
          "A high-end, responsive e-commerce platform for a luxury eyewear brand. Features a sleek, minimalist design with a focus on product storytelling and a seamless shopping experience.",
        image: [glasses1, glasses2, glasses3, glasses4, glasses5],
        tech: ["React", "Next.js", "TailwindCSS", "django", "PostgreSQL", "DRF"],
        features: [
          "Dynamic product catalog",
          "3D product viewer integration",
          "Secure checkout process",
          "Mobile-first responsive design",
        ],
        github: "",
        status: "Completed",
        featured: true,
      },
      {
        id: 6,
        title: "FoodExplorer - Food and Restaurant Discovery Platform",
        category: "Frontend Application",
        description:
          "FoodExplorer is a dedicated platform for culinary enthusiasts to explore, review, and share their favorite foods and restaurants. It serves as a personal guide for discovering hidden gems and documenting dining experiences in a social environment.",
        image: [food1, food2, food3, food4],
        tech: ["React", "TypeScript", "TailwindCSS", "Firebase"],
        features: [
          "Personalized restaurant discovery and search",
          "User-driven food reviews and photo sharing",
          "Interactive community-based restaurant recommendations",
          "Seamless social media integration for dining stories",
          "Dynamic list management for favorite dining spots",
        ],
        github: "https://github.com/djawadsofian/Food-Explorer",
        status: "Completed",
        featured: true,
      },
     {
        id: 1,
        title: "LOTOK Car Rental Platform",
        category: "Full Stack Application",
        description:
          "LOTOK is a modern car rental service app designed to simplify the process of booking cars for rent. Built with a responsive and user-friendly UI, it integrates secure sign-in options, data persistence, and real-time data retrieval for seamless user experience.",
        image: [lotok1,lotok2,lotok3,lotok4,lotok5],
        tech: ["Kotlin", "Jetpack Compose", "django"],
        features: [
          "User-Friendly UI",
          "Google & Facebook Sign-In",
          "Data Persistence",
          "API Integration",
        ],
        github: "https://github.com/zaarirmoh/Lotok",
        live: "",
        status: "Completed",
        featured: true,
      },
      {
        id: 4,
        title: "LensFocus - Professional Photography Portfolio",
        category: "Frontend Application",
        description:
          "A stunning portfolio for visual artists to showcase their work. LensFocus emphasizes high-resolution imagery and smooth transitions to create an immersive gallery experience.",
        image: [photo1, photo2, photo3, photo4],
        tech: ["React", "Framer Motion", "TailwindCSS", "Intersection Observer"],
        features: [
          "High-resolution image galleries",
          "Smooth scroll animations",
          "Adaptive masonry layouts",
          "Contact and booking system",
        ],
        github: "https://github.com/djawadsofian/Photographer-Portfolio",
        status: "Completed",
        featured: true,
      },
   
    ],
    []
  );

  const categories: FilterCategory[] = useMemo(
    () => ["All", "Full Stack Application", "Frontend Application"],
    []
  );

  const getFilteredProjects = (filter: FilterCategory): Project[] => {
    return filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);
  };

  return { projects, categories, getFilteredProjects };
};
