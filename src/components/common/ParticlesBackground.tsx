import React from "react";
import { motion } from "framer-motion";

interface ParticlesBackgroundProps {
  color?: "primary" | "white";
  count?: number;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ 
  color = "primary", 
  count = 30 
}) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  const bgColor = color === "primary" 
    ? "bg-primary/20" 
    : "bg-white/20";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${bgColor}`}
          initial={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -20, 0, -10, 0],
            x: [0, 5, -5, 10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;