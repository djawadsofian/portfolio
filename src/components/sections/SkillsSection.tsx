import { useMemo } from "react";
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
  const needsWhiteBg = skill.name === "GitHub" || skill.name === "Django";

  return (
    <div className="aspect-square w-28 flex-shrink-0 cursor-default sm:w-36 lg:w-40">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-yellow-400/20 bg-black/30 p-3 backdrop-blur-sm sm:p-4">
        <div
          className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14 ${
            needsWhiteBg ? "bg-white" : "bg-white/10"
          }`}
        >
          <img
            src={skill.img}
            alt={skill.name}
            className="h-8 w-8 object-contain sm:h-10 sm:w-10"
            loading="lazy"
          />
        </div>
        <h3 className="text-center text-xs font-semibold text-white sm:text-sm">
          {skill.name}
        </h3>
        <span className="mt-1 text-[11px] text-gray-400 sm:text-xs">{skill.category}</span>
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
  const orderedSkills = direction === "right" ? [...skills].reverse() : skills;

  return (
    <div className="rounded-2xl border border-yellow-400/20 bg-black/20 p-4 backdrop-blur-sm sm:p-6">
      <div className="relative overflow-hidden rounded-xl">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-black/60 to-transparent sm:w-20" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-black/60 to-transparent sm:w-20" />

        <div
          className={`flex w-max gap-4 py-2 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        >
          {[0, 1].map((groupIndex) => (
            <div key={groupIndex} className="flex gap-4">
              {orderedSkills.map((skill) => (
                <SkillCard key={`${groupIndex}-${skill.name}`} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { skills1, skills2 } = useMemo(() => {
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
      { name: "Django", category: "Backend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "DRF", category: "Backend", img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23a21f1f' rx='20'/%3E%3Ctext x='50' y='55' fill='white' font-family='Arial' font-size='30' font-weight='bold' text-anchor='middle' alignment-baseline='middle'%3EDRF%3C/text%3E%3C/svg%3E" },
      { name: "PostgreSQL", category: "Backend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
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
    <section
      id="skills"
      className="py-20 relative"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`mb-12 text-center transition-all duration-500 sm:mb-16 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div
            className={`mx-auto mb-5 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-700 ${
              inView ? "w-24" : "w-0"
            }`}
          />
          <p className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-8">
          <ScrollingRow skills={skills1} direction="left" />
          <ScrollingRow skills={skills2} direction="right" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marqueeLeft 26s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee-left {
            animation-duration: 18s;
          }
          .animate-marquee-right {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
