import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  
  const navItems = useMemo(() => [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" }
  ], []);

  const navigateToPage = useCallback((path: string) => {
    setShowMenu(false);
    navigate(path);
    window.scrollTo(0, 0);
  }, [navigate]);

  const toggleMenu = useCallback(() => setShowMenu(prev => !prev), []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/60 dark:bg-gray-900/60 shadow-2xl border-b border-yellow-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div 
            className="relative group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => navigateToPage("/")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative px-2 py-1 text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent sm:px-3 sm:py-2 sm:text-2xl lg:text-3xl">
              &lt;BDS/&gt;
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToPage(item.path)}
                className="relative px-4 py-2 mx-1 text-sm font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5 text-gray-300 hover:text-yellow-400 hover:bg-white/5"
              >
                <span className="cursor-pointer relative z-10">{item.name}</span>
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="rounded-full border border-yellow-400/30 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 p-2 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
              aria-label={showMenu ? "Close menu" : "Open menu"}
            >
              <div className={`transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`}>
                {showMenu ? (
                  <FiX className="w-5 h-5 text-yellow-400" />
                ) : (
                  <FiMenu className="w-5 h-5 text-yellow-400" />
                )}
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mx-2 mb-3 rounded-2xl border border-yellow-400/10 bg-gradient-to-br from-black/90 to-gray-900/90 shadow-2xl backdrop-blur-2xl sm:mx-4 sm:mb-4">
                <div className="space-y-1 p-3 sm:p-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => navigateToPage(item.path)}
                      className="group block w-full rounded-xl border border-transparent px-4 py-3 text-left text-sm font-medium text-gray-300 transition-all duration-300 hover:translate-x-1 hover:border-yellow-400/20 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-500/10 hover:text-yellow-400 sm:px-5 sm:text-base"
                    >
                      <span className="cursor-pointer flex items-center">
                        <span className="mr-3 h-2 w-2 rounded-full bg-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        {item.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
    </nav>
  );
};

export default Navigation;
