import React from "react";
import { SiReact, SiNodedotjs, SiPostgresql, SiGit } from "react-icons/si";
import { FaServer, FaDatabase, FaTools } from "react-icons/fa";

const stack = [
  {
    icon: <SiReact className="text-cyan-400" size={28} />,
    name: "Frontend",
    techs: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: <FaServer className="text-emerald-400" size={26} />,
    name: "Backend",
    techs: ["Node.js", "Express", "Prisma", "PHP", "Laravel"],
  },
  {
    icon: <FaDatabase className="text-indigo-400" size={26} />,
    name: "Base de données",
    techs: ["MongoDB","PostgreSQL", "MySQL", "SQLite"],
  },
  {
    icon: <FaTools className="text-amber-400" size={24} />,
    name: "Outils & Pratiques",
    techs: ["Git", "Docker", "REST API", "JWT", "OAuth2", "Figma"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Label de section */}
      <p className="font-mono text-emerald-400 text-xs tracking-widest mb-2">
        // outils & technologies
      </p>
      <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-12">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stack.map(({ icon, name, techs }) => (
          <div
            key={name}
            className="
              group bg-white/[0.03] border border-white/[0.08] rounded-xl p-5
              hover:border-emerald-400/30 hover:-translate-y-1
              transition-all duration-300
            "
          >
            <span className="text-2xl mb-3 block">{icon}</span>
            <p className="font-semibold text-white text-sm mb-3">{name}</p>
            <div className="flex flex-wrap gap-1.5">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}