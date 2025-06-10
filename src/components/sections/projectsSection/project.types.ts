// types/project.types.ts
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
image: string[];
  tech: string[];
  features: string[];
  github: string;
  live?: string;
  status: "Completed" | "In Progress";
  featured?: boolean;
}

export type FilterCategory = "All" | "Full Stack Application" | "Frontend Application";