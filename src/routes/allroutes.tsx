
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import About from "../pages/About";
import Contact from "../pages/Contact"
import Projects from "../pages/Projects";


interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

export const portfolioRoutes: RouteConfig[] = [
  { 
    path: "/", 
    element: <Home />
  },

  { 
    path: "/contact", 
    element: <Contact />
  },
  { 
    path: "/projects", 
    element: <Projects />
  },

  { 
    path: "/experience", 
    element: <Experience />
  },

  { 
    path: "/about", 
    element: <About/>
  },

];