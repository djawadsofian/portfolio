import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";


const Navigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  
  const navItems = useMemo(() => ["About", "Skills", "Projects", "Experience", "Testimonials", "Contact"], []);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    setScrolled(scrollY > 50);
    
    // Optimized active section detection
    const sections = navItems.map(item => item.toLowerCase());
    const scrollPosition = scrollY + 150;
    
    let newActiveSection = "";
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + scrollY;
        const offsetHeight = rect.height;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          newActiveSection = section;
          break;
        }
      }
    }
    
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [navItems, activeSection]);

  // Throttled scroll event
  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    handleScroll();
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setShowMenu(false);
      
      setTimeout(() => {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
        
        setActiveSection(sectionId);
      }, 100);
    }
  }, []);

  const toggleMenu = useCallback(() => setShowMenu(prev => !prev), []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/60 dark:bg-gray-900/60 shadow-2xl border-b border-yellow-400/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo - Simple hover effect only */}
          <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent px-4 py-2">
              &lt;BDS/&gt;
            </div>
          </div>

          {/* Desktop Menu - Removed individual item animations */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-4 py-2 mx-1 text-sm font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive
                      ? "text-black bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-500/25"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-white/5"
                  }`}
                >
                  <span className=" cursor-pointer relative z-10">{item}</span>
                 
                </button>
              );
            })}
          </div>

          {/* Mobile Controls - Simplified animation */}
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

        {/* Mobile Menu - Essential animation only */}
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
                  {navItems.map((item) => {
                    const isActive = activeSection === item.toLowerCase();
                    return (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={` block w-full text-left py-4 px-6 rounded-xl font-medium transition-all duration-300 group touch-manipulation hover:translate-x-1 ${
                          isActive
                            ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-500/25"
                            : "text-gray-300 hover:text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-500/10 border border-transparent hover:border-yellow-400/20"
                        }`}
                      >
                        <span className="cursor-pointer flex items-center">
                          <span className="cursor-pointer w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Simplified border animation */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent opacity-0 animate-fade-in" />
      )}
      
      <style jsx={true}>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;