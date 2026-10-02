"use client";

import React from "react";
import { AnimatePresence, MotionConfig, motion as Motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  // Avant l'hydratation le thème est inconnu : libellé neutre, icône pilotée par data-theme (CSS)
  const label =
    theme === null ? "Changer de thème" : isLight ? "Activer le mode sombre" : "Activer le mode clair";

  return (
    <MotionConfig reducedMotion="user">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={label}
        title={label}
        className={`relative inline-flex items-center justify-center w-11 h-11 md:w-10 md:h-10 rounded-md overflow-hidden text-slate-400 hover:text-white hover:bg-white/5 light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-900/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 light:focus-visible:ring-emerald-600 ${className}`}
      >
        {/* Icône = thème cible : soleil en sombre, lune en clair */}
        {theme === null ? (
          <span aria-hidden="true" className="flex">
            <FiSun size={19} className="light:hidden" />
            <FiMoon size={19} className="hidden light:block" />
          </span>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <Motion.span
              key={theme}
              aria-hidden="true"
              className="flex"
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {isLight ? <FiMoon size={19} /> : <FiSun size={19} />}
            </Motion.span>
          </AnimatePresence>
        )}
      </button>
    </MotionConfig>
  );
}
