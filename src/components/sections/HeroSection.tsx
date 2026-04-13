import React from "react";
import { motion, type Variants } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiInstagram, FiDownload } from "react-icons/fi";
import Typewriter from "../common/Typewriter";
import profile from "../../images/profile.png";
import { useNavigate } from "react-router-dom";

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 }
};

const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 }
};



const SOCIAL_LINKS = [
  { icon: FiGithub, href: "https://github.com/djawadsofian" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/boufelghed-djawad-soufyane-848a92190/" },
  { icon: FiInstagram, href: "https://www.instagram.com/djawad_sofian/" },
  { icon: FiMail, href: "mailto:ds.boufelghed@esi-sba.dz" }
];

const TYPEWRITER_STRINGS = [
  "FullStack Developer"
  
];

const SocialLink = React.memo(({ social, index }: { social: typeof SOCIAL_LINKS[0], index: number }) => (
  <motion.a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-black/60 border border-yellow-400/30 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/60 transition-all duration-300"
    whileHover={{ y: -3, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ delay: 1 + index * 0.1 }}
  >
    <social.icon className="w-6 h-6" />
  </motion.a>
));

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-transparent"
      initial="initial"
      animate="animate"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-yellow-500/5 to-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="text-center lg:text-left space-y-6 lg:space-y-8"
            variants={fadeInLeft}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-8 space-y-3 sm:mt-10 lg:mt-0 lg:space-y-4">
              <motion.h1
                className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  D
                </span>
                jawad
              </motion.h1>

              <motion.div
                className="text-lg font-light text-gray-200 sm:text-2xl lg:text-3xl xl:text-4xl"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                I'm a{" "}
                <span className="text-yellow-400 font-semibold">
                  <Typewriter strings={TYPEWRITER_STRINGS} speed={100} />
                </span>
              </motion.div>
            </div>

            <motion.p
              className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg lg:mx-0 lg:text-xl"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              I craft exceptional digital experiences through clean code,
              innovative solutions, and modern technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={()=>navigate("/contact")}
                className="cursor-pointer rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black shadow-xl shadow-yellow-400/20 transition-all duration-300 hover:bg-yellow-500 lg:px-8 lg:py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.button>
              
              <motion.a
                href="/cv.pdf"
                download="CV_Djawad_Boufelghed.pdf"
                className="cursor-pointer flex items-center justify-center space-x-2 rounded-full border-2 border-yellow-400 px-6 py-3 font-semibold text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black lg:px-8 lg:py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4 lg:space-x-6 pt-6 lg:pt-8"
              variants={fadeInUp}
              transition={{ delay: 1 }}
            >
              {SOCIAL_LINKS.map((social, index) => (
                <SocialLink key={index} social={social} index={index} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            variants={fadeInRight}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full opacity-20" />

              <div className="absolute inset-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black text-4xl sm:text-5xl lg:text-6xl font-bold shadow-2xl overflow-hidden">
                <div className="w-full h-full">
                  <img
                    src={profile}
                    alt="profile"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block lg:bottom-8">
        <FiArrowDown className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400/70" />
      </div>
    </motion.section>
  );
};

export default HeroSection;
