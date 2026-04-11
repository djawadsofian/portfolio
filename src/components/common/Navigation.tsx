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
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div 
            className="relative group cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigateToPage("/")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent px-4 py-2">
              &lt;BDS/&gt;
            </div>
          </div>

          {/* Desktop Menu */}
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

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
            >
              <div className={`transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`}>
                {showMenu ? (
                  <FiX className="w-6 h-6 text-yellow-400" />
                ) : (
                  <FiMenu className="w-6 h-6 text-yellow-400" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="backdrop-blur-2xl bg-gradient-to-br from-black/90 to-gray-900/90 border border-yellow-400/10 rounded-2xl mx-4 mb-4 shadow-2xl">
                <div className="p-6 space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => navigateToPage(item.path)}
                      className="block w-full text-left py-4 px-6 rounded-xl font-medium transition-all duration-300 group touch-manipulation hover:translate-x-1 text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-500/10 border border-transparent hover:border-yellow-400/20"
                    >
                      <span className="cursor-pointer flex items-center">
                        <span className="cursor-pointer w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
    </nav>
  );
};

export default Navigation;