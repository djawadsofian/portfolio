import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hover = false }) => {
  return (
    <motion.div
      className={`
        backdrop-blur-xl bg-white/10 dark:bg-black/20 
        border border-white/20 dark:border-white/10 
        rounded-2xl shadow-2xl overflow-hidden
        ${className}
      `}
      whileHover={
        hover
          ? {
              y: -2,
              boxShadow: "0 8px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }
          : {}
      }
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;