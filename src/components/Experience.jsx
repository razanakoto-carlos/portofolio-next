import React from "react";
import { getExperiences } from "../data/data";

const experiences = getExperiences();

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Label de section */}
      <p className="font-mono text-emerald-400 text-xs tracking-widest mb-2">
        // parcours
      </p>
      <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-12">
        Expérience & Formation
      </h2>

      {/* Timeline */}
      <div className="relative ml-2 sm:ml-3 border-l-2 border-slate-800 pl-6 sm:pl-10 flex flex-col gap-8 sm:gap-10">
        {experiences.map(({ title, company, dates, bullets, current }) => (
          <div key={title} className="relative">
            {/* Dot */}
            <div
              className={`
                absolute -left-[26px] sm:-left-[45px] top-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2
                ${current
                  ? "bg-emerald-400 border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                  : "bg-slate-800 border-emerald-400/50"
                }
              `}
            />

            {/* Badge "actuel" */}
            {current && (
              <span className="inline-block font-mono text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded mb-2">
                Actuel
              </span>
            )}

            <h3 className="text-white font-semibold text-base leading-snug">
              {title}{" "}
              <span className="text-emerald-400">@ {company}</span>
            </h3>

            <p className="font-mono text-slate-500 text-xs mt-1.5 mb-3">
              {dates}
            </p>

            <ul className="list-none flex flex-col gap-2">
              {bullets.map((b) => (
                <li key={b} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                  <span className="text-emerald-400 mt-1 shrink-0">▹</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}