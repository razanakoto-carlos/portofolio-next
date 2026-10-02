import React from "react";

// Profil affiché comme un fichier de code (carte de droite)
const profile: [key: string, value: string | string[]][] = [
  ["role",      "Développeur FullStack JS"],
  ["location",  "Antananarivo, Madagascar"],
  ["education", "M2 Informatique"],
  ["stack",     ["React", "TypeScript", "Node.js", "Laravel"]],
  ["currently", "Orange Summer Challenge 2026"],
  ["openTo",    ["freelance", "stage", "CDI"]],
];

const Punct = ({ children }: { children: React.ReactNode }) => (
  <span className="text-slate-500">{children}</span>
);

const Str = ({ value }: { value: string }) => (
  <span className="text-emerald-400 light:text-emerald-700">"{value}"</span>
);

// Tableau sur une ligne s'il est court, sinon un élément par ligne (lisible sur mobile)
function ArrayValue({ items }: { items: string[] }) {
  if (items.length <= 3) {
    return (
      <>
        <Punct>[</Punct>
        {items.map((item, i) => (
          <React.Fragment key={item}>
            <Str value={item} />
            {i < items.length - 1 && <Punct>, </Punct>}
          </React.Fragment>
        ))}
        <Punct>]</Punct>
      </>
    );
  }
  return (
    <>
      <Punct>[</Punct>
      {"\n"}
      {items.map((item) => (
        <React.Fragment key={item}>
          {"    "}
          <Str value={item} />
          <Punct>,</Punct>
          {"\n"}
        </React.Fragment>
      ))}
      {"  "}
      <Punct>]</Punct>
    </>
  );
}

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
        {/* Carte « fichier de code » : le profil en bref */}
        <div className="w-full bg-white/3 border border-white/10 light:bg-white light:border-slate-200 light:shadow-sm rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 light:border-slate-200">
            <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-white/10 light:bg-slate-200" />
            <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-white/10 light:bg-slate-200" />
            <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-white/10 light:bg-slate-200" />
            <span className="ml-2 font-mono text-xs text-slate-500">about.ts</span>
          </div>

          {/* Version lisible pour les lecteurs d'écran ; le code est visuel */}
          <p className="sr-only">
            Carlos Razanakoto, développeur FullStack JS à Antananarivo, Madagascar. Étudiant en
            M2 Informatique. Stack : React, TypeScript, Node.js, Laravel. Actuellement à
            l'Orange Summer Challenge 2026. Ouvert aux missions freelance, stages et CDI.
          </p>
          <pre
            aria-hidden="true"
            className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 light:text-slate-700 whitespace-pre-wrap break-words"
          >
            <code>
              <span className="text-indigo-400 light:text-indigo-600">const</span>{" "}
              <span className="text-white light:text-slate-900">carlos</span> <Punct>=</Punct> <Punct>{"{"}</Punct>
              {"\n"}
              {profile.map(([key, value]) => (
                <React.Fragment key={key}>
                  {"  "}
                  <span className="text-cyan-400 light:text-cyan-700">{key}</span>
                  <Punct>: </Punct>
                  {Array.isArray(value) ? <ArrayValue items={value} /> : <Str value={value} />}
                  <Punct>,</Punct>
                  {"\n"}
                </React.Fragment>
              ))}
              <Punct>{"};"}</Punct>
              {"\n\n"}
              <span className="text-indigo-400 light:text-indigo-600">export default</span>{" "}
              <span className="text-white light:text-slate-900">carlos</span>
              <Punct>;</Punct>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}