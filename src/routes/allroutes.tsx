import Home from "../pages/Home";

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

];