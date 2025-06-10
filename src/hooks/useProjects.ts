import { useMemo } from "react";
import type {
  FilterCategory,
  Project,
} from "../components/sections/projectsSection/project.types";
import Lotok from "../images/lotok/LOTOK_Screenshot.png";
import lotok2 from "../images/lotok/2.png";
import lotok3 from "../images/lotok/2.jpg";

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



export const useProjects = () => {
  const projects: Project[] = useMemo(
    () => [
      {
        id: 3,
        title: "Academic Project Management Platform – ProjectTrack",
        category: "Full Stack Application",
        description:
          "ProjectTrack is a web-based academic project management platform developed as part of our 3rd-year multidisciplinary module at ESI. It streamlines the handling of student projects (PFE and interdisciplinary projects) by unifying students, professors, companies, and administrators under one platform.",
        image: [pfe1,pfe2,pfe3,pfe4,pfe5,pfe6],
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
        github: "https://github.com/yourusername/task-manager",
        status: "Completed",
        featured: true,
      },
      {
        id: 2,
        title: "The Official State Library Website Of Tissemsilt",
        category: "Full Stack Application",
        description:
          "The project involved  developing a responsive, multilingual website for a library, featuring approximately 20 pages with diverse functionalities. The website serves as a comprehensive platform for users to explore library services, reserve rooms, browse books, read articles, and interact with the library community.",
        image: [bib0,bib1,bib2,bib3,bib4,bib5,bib6,bib7,bib8,bib9],
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
        github: "https://github.com/Yacine-Djaaraoui/bib-tissemssilt",
        live: "",
        status: "Completed",
        featured: true,
      },
      {
        id: 1,
        title: "LOTOK Car Rental Platform",
        category: "Full Stack Application",
        description:
          "LOTOK is a modern car rental service app designed to simplify the process of booking cars for rent. Built with a responsive and user-friendly UI, it integrates secure sign-in options, data persistence, and real-time data retrieval for seamless user experience.",
        image: [Lotok,lotok2,lotok3],
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
