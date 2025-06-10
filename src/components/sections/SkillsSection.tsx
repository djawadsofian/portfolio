import { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import skill logos
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import ts from "../../images/ts.png";
import react from "../../images/react.png";
import firebase from "../../images/firebase.png";
import tailwind from "../../images/tailwind.png";
import redux from "../../images/redux.png";
import git from "../../images/git.png";
import github from "../../images/github.png";
import sql from "../../images/sql.png";
import mysql from "../../images/mysql.png";
import docker from "../../images/docker.png";
import kotlin from "../../images/kotlin.jpg";
import jetpackCompose from "../../images/JetpackCompose.png";

const SkillCard = ({
  skill,
}: {
  skill: { name: string; category: string; img: string };
}) => {
  const needsWhiteBg = skill.name === "GitHub"; // Only GitHub needs white bg

  return (
    <div className="w-28 sm:w-40 aspect-square cursor-default">
      <div className="relative w-full h-full bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-2xl overflow-hidden p-4 flex flex-col items-center justify-center">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
            needsWhiteBg ? "bg-white" : "bg-white/10"
          }`}
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="w-10 h-10 object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="text-sm font-semibold text-white text-center">
          {skill.name}
        </h3>
        <span className="text-xs text-gray-400 mt-1">{skill.category}</span>
      </div>
    </div>
  );
};

const ScrollingRow = ({
  skills,
  direction,
}: {
  skills: Array<{ name: string; category: string; img: string }>;
  direction: "left" | "right";
}) => {
  // Double the array for seamless looping
  const scrollingSkills = [...skills, ...skills];

  return (
    <div className="p-6 bg-black/20 backdrop-blur-sm border border-yellow-400/20 rounded-2xl">
      <div className="relative h-52 overflow-hidden rounded-xl">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div
          className="flex gap-4 absolute top-1/2 -translate-y-1/2"
          style={{
            [direction === "left" ? "left" : "right"]: 0,
            animation: `${
              direction === "left" ? "scrollLeft" : "scrollRight"
            } 30s linear infinite`,
            animationDelay: direction === "right" ? "-15s" : "0s",
            width: `${scrollingSkills.length * 11}rem`,
          }}
        >
          {scrollingSkills.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { skills1, skills2, categorySummary } = useMemo(() => {
    const skills1 = [
      { name: "HTML", category: "Frontend", img: html },
      { name: "CSS", category: "Frontend", img: css },
      { name: "JavaScript", category: "Frontend", img: js },
      { name: "React", category: "Frontend", img: react },
      { name: "TypeScript", category: "Frontend", img: ts },
      { name: "Tailwind CSS", category: "Frontend", img: tailwind },
      { name: "Redux Toolkit", category: "Frontend", img: redux },
    ];

    const skills2 = [
      { name: "Firebase", category: "Backend", img: firebase },
      { name: "SQL", category: "Backend", img: sql },
      { name: "MySQL", category: "Backend", img: mysql },
      { name: "Docker", category: "DevOps", img: docker },
      { name: "Jetpack Compose", category: "Mobile", img: jetpackCompose },
      { name: "Kotlin", category: "Mobile", img: kotlin },
      { name: "Git", category: "Tools", img: git },
      { name: "GitHub", category: "Tools", img: github },
    ];

    const allSkills = [...skills1, ...skills2];
    const categoryCounts = allSkills.reduce((acc, skill) => {
      acc[skill.category] = (acc[skill.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      skills1,
      skills2,
      categorySummary: [
        { category: "Frontend", count: categoryCounts.Frontend || 0 },
        { category: "Backend", count: categoryCounts.Backend || 0 },
        { category: "Tools", count: categoryCounts.Tools || 0 },
        {
          category: "Mobile",
          count: (categoryCounts.Mobile || 0) + (categoryCounts.DevOps || 0),
        },
      ],
    };
  }, []);

  return (
    <motion.section
      id="skills"
      className="py-20 relative"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: "6rem" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Scrolling rows */}
        <div className="space-y-8">
          <ScrollingRow skills={skills1} direction="left" />
          <ScrollingRow skills={skills2} direction="right" />
        </div>

        {/* Category summary */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {categorySummary.map((item) => (
            <div
              key={item.category}
              className="p-4 text-center bg-black/25 backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
            >
              <div className="text-2xl font-bold text-yellow-400 mb-1">
                {item.count}+
              </div>
              <div className="text-gray-300 text-sm">{item.category}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
      `}</style>
    </motion.section>
  );
};

export default SkillsSection;
