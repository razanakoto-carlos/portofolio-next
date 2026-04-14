import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import profilePic from "../assets/hero.png"; // ← ton image

const words = ["FullStack JS", "Frontend Dev", "Backend Dev"];

export default function Hero() {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Animation d'entrée au montage
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Rotation du titre animé
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="max-w-5xl mx-auto px-8 pt-20 pb-16 flex flex-col-reverse sm:flex-row items-center justify-between gap-12"
    >
      {/* ── Colonne texte ── */}
      <div
        className="flex-1 transition-all duration-700 ease-out"
        style={{
          opacity:   mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <p className="font-mono text-emerald-400 text-sm mb-3 tracking-wide">
          Bonjour, je suis
        </p>

        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-3">
          Razanakoto<br />Carlos.
        </h1>

        <p className="font-mono text-2xl sm:text-3xl text-slate-400 mb-5">
          Développeur{" "}
          <span
            className="text-emerald-400 transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {words[index]}
          </span>
        </p>

        <p className="text-slate-400 text-base leading-relaxed max-w-lg mb-8">
          Je construis des expériences web robustes et accessibles — des
          interfaces réactives jusqu'aux APIs bien structurées. Des solutions
          concrètes, un projet à la fois.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href="/CV_CARLOS_FULLSTACK_JS.pdf"
            download
            className="font-mono text-sm text-emerald-400 border border-emerald-400 px-6 py-3 rounded-md hover:bg-emerald-400/10 transition-colors duration-200"
          >
            Télécharger CV
          </a>
          <a
            href="#projets"
            onClick={(e) => scrollTo(e, "#projets")}
            className="font-mono text-sm text-slate-400 border border-white/10 px-6 py-3 rounded-md hover:border-slate-400 hover:text-white transition-all duration-200"
          >
            Voir mes projets
          </a>
        </div>

        <div className="flex gap-5 text-slate-500">
          <a
            href="https://www.linkedin.com/in/carlos-razanakoto-9013b2342"
            target="_blank" rel="noopener noreferrer"
            className="text-2xl hover:text-emerald-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/razanakoto-carlos"
            target="_blank" rel="noopener noreferrer"
            className="text-2xl hover:text-emerald-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.facebook.com/carlos.dev.24"
            target="_blank" rel="noopener noreferrer"
            className="text-2xl hover:text-emerald-400 transition-colors duration-200"
            aria-label="Facebook"
          >
            <AiFillFacebook />
          </a>
        </div>
      </div>

      {/* ── Colonne photo ── */}
      <div
        className="flex-shrink-0 transition-all duration-700 ease-out"
        style={{
          opacity:        mounted ? 1 : 0,
          transform:      mounted ? "translateY(0)" : "translateY(24px)",
          transitionDelay: "150ms",
        }}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80">

          {/* Anneau rotatif émeraude */}
          <div
            className="absolute -inset-3 rounded-full animate-spin"
            style={{
              animationDuration: "10s",
              background:
                "conic-gradient(from 0deg, transparent 0deg 200deg, #34d399 200deg 270deg, transparent 270deg 360deg)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
              mask:
                "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
            }}
          />

          {/* Lueur douce derrière */}
          <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-2xl scale-110 pointer-events-none" />

          {/* Cercle photo */}
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-slate-800/40 p-3">
            <img
              src={profilePic}
              alt="Carlos Razanakoto"
              className="
                w-full h-full
                object-cover object-top
                scale-110
                transition-transform duration-500 ease-out
                hover:scale-105
              "
            />
            {/* Fondu bas pour s'intégrer au fond slate-900 */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
          </div>

          {/* Badge Frontend */}
          <div className="absolute top-4 -left-5 bg-slate-900/95 border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white text-xs font-medium font-mono">Frontend</span>
          </div>

          {/* Badge Backend */}
          <div className="absolute bottom-6 -right-5 bg-slate-900/95 border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg backdrop-blur-sm">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-white text-xs font-medium font-mono">Backend</span>
          </div>

        </div>
      </div>
    </section>
  );
}