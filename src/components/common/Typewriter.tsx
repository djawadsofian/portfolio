import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  strings?: string[];
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  strings = [], 
  speed = 100 
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    if (!currentString) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentString.length) {
            setCurrentText(currentString.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, speed]);

  return (
    <span className="inline-block">
      {currentText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="ml-1 text-primary"
      >
        |
      </motion.span>
    </span>
  );
};

export default Typewriter;