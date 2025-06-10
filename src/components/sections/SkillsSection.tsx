import React, { useEffect, useMemo, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GlassCard from "../common/GlassCard";

// Skill Images
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

// Types
interface Skill {
  name: string;
  category: string;
  img: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

interface CategorySummary {
  category: string;
  count: number;
}

// Light SkillCard with only essential motion
const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const needsWhiteBg = useMemo(
    () => ["Nextjs", "GitHub", "Express", "Nodejs"].includes(skill.name),
    [skill.name]
  );

  return (
    <motion.div
      ref={ref}
      className="w-28 sm:w-40 aspect-square cursor-default relative"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.03, duration: 0.4 }}
    >
      <div className="relative w-full h-full bg-black/30 dark:bg-gray-800/30 backdrop-blur-xl border border-yellow-400/20 rounded-2xl overflow-hidden p-4 flex flex-col items-center justify-center transition">
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
            needsWhiteBg ? "bg-white" : "bg-white/10"
          }`}
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="w-10 h-10 object-contain"
          />
        </div>
        <h3 className="text-sm font-semibold text-white text-center">
          {skill.name}
        </h3>
        <span className="text-xs text-gray-400 mt-1">{skill.category}</span>
      </div>
    </motion.div>
  );
};

// Keeps the scrolling row (unchanged)
const ScrollingRow: React.FC<{
  skills: Skill[];
  direction: "left" | "right";
  duration: number;
}> = ({ skills, direction, duration }) => {
  const controls = useAnimation();
  const duplicatedSkills = [...skills, ...skills, ...skills];

  const animateScroll = useCallback(async () => {
    while (true) {
      await controls.start({
        x: direction === "left" ? "-100%" : "100%",
        transition: { duration, ease: "linear" },
      });
      controls.set({ x: "0%" });
    }
  }, [controls, direction, duration]);

  useEffect(() => {
    animateScroll();
    return () => controls.stop();
  }, [animateScroll, controls]);

  return (
    <GlassCard className="p-6 bg-black/20 dark:bg-gray-800/20 backdrop-blur-xl border border-yellow-400/20">
      <div className="relative h-52 overflow-hidden rounded-xl">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-4 absolute top-1/2 -translate-y-1/2"
          animate={controls}
          style={{ [direction === "left" ? "left" : "right"]: 0 }}
        >
          {duplicatedSkills.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </GlassCard>
  );
};

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { skills1, skills2, categorySummary } = useMemo(() => {
    const skills1: Skill[] = [
      { name: "HTML", category: "Frontend", img: html },
      { name: "CSS", category: "Frontend", img: css },
      { name: "JavaScript", category: "Frontend", img: js },
      { name: "React", category: "Frontend", img: react },
      { name: "TypeScript", category: "Frontend", img: ts },
      { name: "Tailwind CSS", category: "Frontend", img: tailwind },
      { name: "Redux Toolkit", category: "Frontend", img: redux },
      { name: "Git", category: "Tools", img: git },
      { name: "GitHub", category: "Tools", img: github },
    ];

    const skills2: Skill[] = [
      { name: "Firebase", category: "Backend", img: firebase },
      { name: "SQL", category: "Backend", img: sql },
      { name: "MySQL", category: "Backend", img: mysql },
      { name: "Docker", category: "DevOps", img: docker },
      { name: "Jetpack Compose", category: "Mobile", img: jetpackCompose },
      { name: "Kotlin", category: "Mobile", img: kotlin },
    ];

    const allSkills = [...skills1, ...skills2];
    const categoryCounts = allSkills.reduce((acc, s) => {
      acc[s.category] = (acc[s.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const categorySummary: CategorySummary[] = [
      { category: "Frontend", count: categoryCounts.Frontend || 0 },
      { category: "Backend", count: categoryCounts.Backend || 0 },
      { category: "Tools", count: categoryCounts.Tools || 0 },
      {
        category: "Mobile",
        count: (categoryCounts.Mobile || 0) + (categoryCounts.DevOps || 0),
      },
    ];

    return { skills1, skills2, categorySummary };
  }, []);

  return (
    <motion.section id="skills" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-100 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Scrolling Rows */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ScrollingRow skills={skills1} direction="left" duration={60} />
          <ScrollingRow skills={skills2} direction="right" duration={65} />
        </motion.div>

        {/* Category Summary */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {categorySummary.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <GlassCard className="p-4 text-center bg-black/25 dark:bg-gray-800/25 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/40 transition">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  {item.count}+
                </div>
                <div className="text-gray-300 dark:text-gray-400 text-sm">
                  {item.category}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
