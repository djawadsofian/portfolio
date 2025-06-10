import React, { useMemo, useCallback } from "react";
import { motion, useTransform, useScroll, type Variants } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";
import Typewriter from "../common/Typewriter";
import ParticlesBackground from "../common/ParticlesBackground";
import profile from "../../images/profile.png";

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

const AVATAR_SCALE_ANIMATION = {
  animate: {
    scale: [1, 1.03, 1]
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const SOCIAL_LINKS = [
  { icon: FiGithub, href: "https://github.com/djawadsofian" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/boufelghed-djawad-soufyane-848a92190/" },
  { icon: FiInstagram, href: "https://www.instagram.com/djawad_sofian/" },
  { icon: FiMail, href: "mailto:ds.boufelghed@esi-sba.dz" }
];

const TYPEWRITER_STRINGS = [
  "FrontEnd Developer",
  "React Specialist",
  "n Aspiring FullStack",
  "Mobile Developer",
  "Problem Solver"
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

const OrbitingDot = React.memo(({ index, total }: { index: number, total: number }) => {
  const position = useMemo(() => ({
    left: `${50 + 60 * Math.cos((index * Math.PI * 2) / total)}%`,
    top: `${50 + 60 * Math.sin((index * Math.PI * 2) / total)}%`
  }), [index, total]);

  return (
    <motion.div
      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
      style={position}
      animate={{
        scale: [0.5, 1, 0.5],
        opacity: [0.3, 1, 0.3]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: index * 0.2
      }}
    />
  );
});

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleScrollToContact = useCallback(() => {
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const orbitingDots = useMemo(
    () => Array.from({ length: 6 }, (_, i) => <OrbitingDot key={i} index={i} total={6} />),
    []
  );

  return (
    <motion.section
      className="min-h-screen h-screen flex items-center justify-center relative overflow-hidden bg-transparent"
      style={{ y, opacity }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-yellow-500/5 to-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
      </div>

      <ParticlesBackground color="white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left content */}
          <motion.div
            className="text-center lg:text-left space-y-6 lg:space-y-8"
            variants={fadeInLeft}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3 lg:space-y-4 mt-10">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
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
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-200 font-light"
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
              className="text-lg lg:text-xl text-gray-300 max-w-2xl"
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
                onClick={handleScrollToContact}
                className="cursor-pointer border-2 border-yellow-400 text-yellow-400 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.button>
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

          {/* Right content - Avatar */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full opacity-20" />

              <div className="absolute inset-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black text-4xl sm:text-5xl lg:text-6xl font-bold shadow-2xl overflow-hidden">
                <motion.div
                  {...AVATAR_SCALE_ANIMATION}
                  className="w-full h-full"
                >
                  <img
                    src={profile}
                    alt="profile"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </motion.div>
              </div>

              {orbitingDots}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400/70" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;