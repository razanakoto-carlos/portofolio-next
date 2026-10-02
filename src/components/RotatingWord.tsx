"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, m, useReducedMotion } from "framer-motion";

const words = ["FullStack JS", "Frontend Dev", "Backend Dev"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  // Rotation du titre animé (désactivée si l'utilisateur réduit les animations)
  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={words[index]}
          className="text-emerald-400 light:text-emerald-700"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {words[index]}
        </m.span>
      </AnimatePresence>
    </MotionConfig>
  );
}
