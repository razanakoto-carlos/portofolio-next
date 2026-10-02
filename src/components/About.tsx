import React from "react";
import aboutImg from "../assets/abstract.jpg";

export default function About() {
  const stats = [
    { num: "5+",  label: "Projets réalisés"    },
    { num: "1+",  label: "Projet soutenance"   },
    { num: "∞",   label: "Curiosité"           },
  ];

  return (
    <section
      id="a-propos"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Label de section */}
      <p className="font-mono text-emerald-400 light:text-emerald-700 text-xs tracking-widest mb-2">
        {"// qui suis-je"}
      </p>
      <h2 className="text-2xl font-bold text-white border-b border-white/10 light:text-slate-900 light:border-slate-200 pb-4 mb-12">
        À propos de moi
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div>
          <p className="text-slate-400 light:text-slate-600 leading-loose mb-4">
            Étudiant en M2 Informatique, je me spécialise dans le
            développement web fullstack avec JavaScript/TypeScript, React,
            Node.js et PHP/Laravel.
          </p>
          <p className="text-slate-400 light:text-slate-600 leading-loose mb-4">
            J'aime construire des projets concrets — des interfaces réactives
            jusqu'aux APIs robustes. Curieux et autonome, je cherche à
            transformer chaque projet en opportunité d'apprentissage.
          </p>
          <p className="text-slate-500 leading-loose font-mono text-sm">
            📍 Antananarivo, Madagascar
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
            {stats.map(({ num, label }) => (
              <div
                key={label}
                className="bg-white/3 border border-white/10 rounded-xl px-5 py-4 text-center hover:border-emerald-400/30 light:bg-white light:border-slate-200 light:shadow-sm light:hover:border-emerald-500/40 transition-colors duration-300"
              >
                <p className="text-2xl font-bold text-white light:text-slate-900">
                  {num.includes("+") ? (
                    <>
                      {num.replace("+", "")}
                      <span className="text-emerald-400 light:text-emerald-600">+</span>
                    </>
                  ) : (
                    <span className="text-emerald-400 light:text-emerald-600">{num}</span>
                  )}
                </p>
                <p className="text-xs text-slate-500 mt-1 whitespace-nowrap">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full aspect-square bg-white/3 border border-white/10 light:bg-white light:border-slate-200 light:shadow-sm rounded-2xl overflow-hidden flex items-center justify-center">
          <img
            src={aboutImg.src}
            alt="Carlos Razanakoto"
            className="w-full h-full object-cover object-top grayscale-25 brightness-75 light:brightness-95"
          />
        </div>
      </div>
    </section>
  );
}