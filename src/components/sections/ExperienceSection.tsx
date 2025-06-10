import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCalendar, FiMapPin, FiBookOpen, FiBriefcase } from "react-icons/fi";

// Import your logos
import esiLogo from "../../images/Logo-Complet-ESI-SBA-200mm-x-200mm_couleur-1024x1024.png";
import ovaLogo from "../../images/ovaLogo.jpeg";

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    location?: string;
    type: 'education' | 'experience';
    points: string[];
  };
  index: number;
  inView: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, inView }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <motion.div
      className={`relative flex items-center w-full mb-12 ${
        isLeft ? 'md:justify-start justify-start' : 'md:justify-end justify-start'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline line connector - Hidden on mobile, shown on desktop */}
      <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 md:w-16 h-px bg-gradient-to-r hidden md:block ${
        isLeft 
          ? 'right-0 from-yellow-400/50 to-transparent' 
          : 'left-0 from-transparent to-yellow-400/50'
      }`} />
      
      {/* Mobile timeline connector - Only shown on mobile */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-8 h-px bg-gradient-to-r from-transparent to-yellow-400/50 block md:hidden" />
      
      {/* Experience Card */}
      <div
        className={`relative w-full max-w-md group ${
          isLeft ? 'md:mr-8 ml-8' : 'md:ml-8 ml-8'
        }`}
      >        
        <div className="relative bg-black/30 dark:bg-gray-800/30 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 hover:border-yellow-400/40 transition-colors duration-300">
          {/* Type badge */}
          <div
            className={`absolute -top-3 ${isLeft ? 'md:left-6 left-6' : 'md:right-6 left-6'} px-3 py-1 rounded-full text-xs font-semibold ${
              experience.type === 'education' 
                ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' 
                : 'bg-green-500/20 text-green-400 border border-green-400/30'
            } backdrop-blur-sm`}
          >
            {experience.type === 'education' ? (
              <span className="flex items-center gap-1">
                <FiBookOpen className="w-3 h-3" />
                Education
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <FiBriefcase className="w-3 h-3" />
                Experience
              </span>
            )}
          </div>

          {/* Header with icon and company */}
          <div className="flex items-start space-x-4 mb-4">
            <div className="relative flex-shrink-0">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-yellow-400/30 hover:border-yellow-400/50 transition-colors duration-300"
                style={{ backgroundColor: experience.iconBg }}
              >
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-1 hover:text-yellow-400 transition-colors duration-300">
                {experience.title}
              </h3>
              <p className="text-yellow-400 font-semibold text-base mb-2">
                {experience.company_name}
              </p>
              
              {/* Date and location */}
              <div className="flex flex-col space-y-1 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <FiCalendar className="w-4 h-4 text-yellow-400" />
                  <span>{experience.date}</span>
                </div>
                {experience.location && (
                  <div className="flex items-center space-x-2">
                    <FiMapPin className="w-4 h-4 text-yellow-400" />
                    <span>{experience.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Experience points */}
          <motion.ul 
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.2 }}
          >
            {experience.points.map((point, pointIndex) => (
              <li
                key={pointIndex}
                className="flex items-start space-x-2 text-gray-300 dark:text-gray-400 text-sm"
              >
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Master's in Computer Science",
      company_name: "ESI SBA",
      icon: esiLogo,
      iconBg: "#ffffff",
      date: "2022 - Present",
      location: "Sidi Bel Abbès, Algeria",
      type: 'education' as const,
      points: [
        "Enhancing Software engineering skills at ESI SBA",
        "Built multiple full-stack projects using modern web and mobile technologies",
         "Collaborated with peers on team-based projects to solve real-world problems",
         "Currently focused on backend development and system architecture",
      ],
    },
    {
      title: "Front End Web Developer",
      company_name: "OVA DIGITAL",
      icon: ovaLogo,
      iconBg: "#071b43",
      date: "December 2024 - May 2025",
      location: "Remote",
      type: 'experience' as const,
      points: [
        "Developed Tissemsilt's official library website",
        "Implemented multilingual support and room reservation",
        "Built admin dashboard for content management",
        "Collaborated with design team to deliver pixel-perfect UI",
      ],
    },
    {
      title: "Bachelor's in Computer Science",
      company_name: "ESI SBA",
      icon: esiLogo,
      iconBg: "#ffffff",
      date: "2020 - 2023",
      location: "Sidi Bel Abbès, Algeria",
      type: 'education' as const,
      points: [
        "Focus on Web Technologies and Databases",
        "Completed multiple academic projects",
        "Developed strong foundation in computer science fundamentals",
        "Gained solid foundations in algorithms, data structures, and system design",
      ],
    },
  ];

  return (
    <motion.section 
      id="experience" 
      className="py-20 relative"
      ref={ref}
    >
      {/* Section-specific subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-100 mb-4">
            Education &{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            My academic background and professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line - Positioned differently for mobile */}
          <motion.div
            className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-yellow-400/50 via-yellow-400/30 to-yellow-400/50"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Timeline dot indicators - Positioned differently for mobile */}
          {experiences.map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black/30 z-10"
              style={{ top: `${(index + 1) * 200 + 100}px` }}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
            />
          ))}

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {[
            { number: "1", label: "Degrees" },
            { number: "1+", label: "Work Experience" },
            { number: "10+", label: "Projects" },
            { number: "3+", label: "Years Learning" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            >
              <div className="p-6 text-center bg-black/30 dark:bg-gray-800/30 backdrop-blur-sm border border-yellow-400/20 rounded-2xl hover:border-yellow-400/40 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-xl mb-3">
                  <FiBookOpen className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-300 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;