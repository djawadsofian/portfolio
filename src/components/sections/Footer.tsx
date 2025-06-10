import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiHeart, FiArrowUp, FiCode, FiCoffee, FiExternalLink } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to open Gmail compose with pre-filled recipient
  const openGmailCompose = () => {
    const emailAddress = "ds.boufelghed@esi-sba.dz";
    const subject = "Contact from Portfolio Website";
    const body = "Hello Djawad,\n\nI visited your portfolio website and would like to get in touch.\n\nBest regards,";
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/djawadsofian",
      label: "GitHub",
      color: "hover:text-gray-300",
      hoverBg: "hover:bg-gray-800/50",
      onClick: null,
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/boufelghed-djawad-soufyane-848a92190/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      hoverBg: "hover:bg-blue-500/10",
      onClick: null,
    },
    {
      icon: FiInstagram,
      href: "https://www.instagram.com/djawad_sofian/",
      label: "Instagram",
      color: "hover:text-pink-400",
      hoverBg: "hover:bg-pink-500/10",
      onClick: null,
    },
    {
      icon: FiMail,
      href: null,
      label: "Email",
      color: "hover:text-yellow-400",
      hoverBg: "hover:bg-yellow-500/10",
      onClick: openGmailCompose,
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="relative bg-black/40 border-t border-yellow-400/20 overflow-hidden" ref={ref}>
      {/* Simplified background - only one subtle gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-radial from-yellow-400/10 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="group">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    Djawad
                  </span>
                  <span className="text-white dark:text-gray-100 ml-2">
                    Boufelghed
                  </span>
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-lg mb-6 max-w-sm">
                 FrontEnd Developer passionate about creating innovative web solutions and beautiful user experiences.
                </p>
                
                {/* Animated tagline */}
                <motion.div
                  className="flex items-center space-x-2 text-yellow-400 text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <FiCode className="w-4 h-4" />
                  <span>Building the future, one line at a time</span>
                  <motion.div
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FiCoffee className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold text-white dark:text-gray-100 mb-6">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.path}
                    className="block text-gray-400 dark:text-gray-500 hover:text-yellow-400 transition-colors duration-300 group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="relative">
                      {link.name}
                      <div className="absolute -bottom-1 left-0 h-px bg-yellow-400 w-0 group-hover:w-full transition-all duration-300" />
                    </span>
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social links and contact */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-semibold text-white dark:text-gray-100 mb-6">
                Let's Connect
              </h4>
              <p className="text-gray-400 dark:text-gray-500 mb-6">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              
              {/* Social icons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {socialLinks.map((social, index) => {
                  const Component = social.onClick ? 'button' : 'a';
                  const commonProps = {
                    key: index,
                    className: `group relative p-3 rounded-xl bg-black/30 dark:bg-white/5 border border-yellow-400/20 text-gray-400 ${social.color} ${social.hoverBg} hover:border-yellow-400/40 transition-all duration-300`,
                    onClick: social.onClick || undefined,
                    ...(social.href && !social.onClick ? {
                      href: social.href,
                      target: "_blank",
                      rel: "noopener noreferrer"
                    } : {})
                  };

                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <Component
                        {...commonProps}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                          {social.label}
                          {social.onClick && <FiExternalLink className="w-3 h-3 ml-1 inline" />}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45 -mt-1"></div>
                        </div>
                      </Component>
                    </motion.div>
                  );
                })}
              </div>

              {/* Contact email highlight */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/20 dark:bg-white/5 border border-yellow-400/20 rounded-xl p-4 group-hover:border-yellow-400/40 transition-all duration-300">
                  <p className="text-gray-400 dark:text-gray-500 text-sm mb-2">Ready to work together?</p>
                  <button
                    onClick={openGmailCompose}
                    className="cursor-pointer text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300 break-all flex items-center space-x-2"
                  >
                    <span>ds.boufelghed@esi-sba.dz</span>
                    <FiExternalLink className="w-4 h-4 flex-shrink-0" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-yellow-400/20 py-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-600">
              <span>© {new Date().getFullYear()} Made with</span>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiHeart className="w-4 h-4 text-red-400" />
              </motion.div>
              <span>by Djawad Boufelghed</span>
            </div>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              className="cursor-pointer group flex items-center space-x-2 px-4 py-2 bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 hover:border-yellow-400/50 rounded-full text-yellow-400 hover:text-yellow-300 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Back to top</span>
              <FiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;