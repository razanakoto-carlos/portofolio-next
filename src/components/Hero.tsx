import type { CSSProperties } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FiArrowDown, FiArrowRight, FiDownload } from "react-icons/fi";
import RotatingWord from "./RotatingWord";
import ScrollLink from "./ScrollLink";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carlos-razanakoto-9013b2342", icon: <AiFillLinkedin aria-hidden="true" /> },
  { label: "GitHub",   href: "https://github.com/razanakoto-carlos",                    icon: <AiFillGithub aria-hidden="true" />   },
  { label: "Facebook", href: "https://www.facebook.com/carlos.dev.24",                  icon: <AiFillFacebook aria-hidden="true" /> },
];

// Apparition en cascade en CSS (classe .hero-fade-up, globals.css) : délai selon le rang
const fadeUp = (i: number) => ({ "--i": i }) as CSSProperties;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 light:focus-visible:ring-emerald-600 light:focus-visible:ring-offset-slate-50";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden -mt-16"
    >
      {/* ── Décor : grille de points + halos (remonte sous la navbar transparente) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          maskImage: "linear-gradient(to bottom, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(var(--hero-dot, rgb(255 255 255 / 0.07)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 70% 60% at 30% 40%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 40%, black, transparent)",
          }}
        />
        <div className="absolute -top-32 right-[-15%] h-104 w-104 rounded-full bg-emerald-400/10 light:bg-emerald-300/20 blur-3xl sm:h-136 sm:w-136" />
        <div className="absolute bottom-0 left-[-10%] h-88 w-88 rounded-full bg-indigo-500/10 light:bg-indigo-300/25 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[min(100svh,52rem)] flex items-center pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="w-full max-w-3xl">
          <p style={fadeUp(0)} className="hero-fade-up flex items-center gap-3 font-mono text-emerald-400 light:text-emerald-700 text-sm tracking-wide mb-5">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-400/60 light:bg-emerald-600/60" />
            Bonjour, je suis
          </p>

          <h1 style={fadeUp(1)} className="hero-fade-up text-5xl sm:text-6xl lg:text-7xl font-bold text-white light:text-slate-900 tracking-tight leading-[1.05] text-balance mb-5">
            Razanakoto Carlos<span className="text-emerald-400 light:text-emerald-500">.</span>
          </h1>

          <p style={fadeUp(2)} className="hero-fade-up font-mono text-lg sm:text-2xl text-slate-300 light:text-slate-700 mb-6">
            <span className="sr-only">Développeur FullStack JS, Frontend et Backend</span>
            <span aria-hidden="true" className="inline-flex items-baseline gap-2">
              Développeur
              <span className="relative inline-flex overflow-hidden min-w-[12ch]">
                <RotatingWord />
              </span>
              <span className="text-emerald-400/70 light:text-emerald-600/70 animate-pulse motion-reduce:animate-none">_</span>
            </span>
          </p>

          <p style={fadeUp(3)} className="hero-fade-up text-slate-400 light:text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            Je construis des expériences web robustes et accessibles — des
            interfaces réactives jusqu'aux APIs bien structurées. Des solutions
            concrètes, un projet à la fois.
          </p>

          <div style={fadeUp(4)} className="hero-fade-up flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <a
              href="/CV_CARLOS_FULLSTACK_JS.pdf"
              download
              className={`group inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-md bg-emerald-400 text-slate-900 font-mono text-sm font-semibold shadow-lg shadow-emerald-400/10 hover:bg-emerald-300 light:bg-emerald-500 light:shadow-emerald-600/20 light:hover:bg-emerald-400 transition-colors duration-200 ${focusRing}`}
            >
              <FiDownload aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5" />
              Télécharger CV
            </a>
            <ScrollLink
              href="#projets"
              className={`group inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-md border border-white/15 text-slate-200 font-mono text-sm hover:border-emerald-400/50 hover:text-white hover:bg-white/5 light:border-slate-300 light:text-slate-700 light:hover:border-emerald-600/50 light:hover:text-slate-900 light:hover:bg-white transition-colors duration-200 ${focusRing}`}
            >
              Voir mes projets
              <FiArrowRight aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
            </ScrollLink>
          </div>

          <div style={fadeUp(5)} className="hero-fade-up flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-8 bg-white/15 light:bg-slate-300" />
            <ul className="flex items-center gap-1 -ml-2">
              {socials.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-md text-2xl text-slate-400 hover:text-emerald-400 hover:bg-white/5 light:text-slate-500 light:hover:text-emerald-700 light:hover:bg-slate-900/5 transition-colors duration-200 ${focusRing}`}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Indicateur de défilement ── */}
      <ScrollLink
        href="#a-propos"
        aria-label="Aller à la section À propos"
        className={`hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 rounded-md p-2 font-mono text-[11px] tracking-widest text-slate-500 hover:text-emerald-400 light:hover:text-emerald-700 transition-colors duration-200 hero-scroll-hint ${focusRing}`}
      >
        défiler
        <span aria-hidden="true" className="hero-bounce">
          <FiArrowDown />
        </span>
      </ScrollLink>
    </section>
  );
}
