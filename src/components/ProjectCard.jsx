import React, { useState } from "react";

const MAX_TAGS = 3;

const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const visibleTags = expanded
  ? project.techs
  : project.techs.slice(0, MAX_TAGS);
  const extraCount = project.techs.length - MAX_TAGS;

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-300">
      {/* Image */}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group block w-full h-40 overflow-hidden bg-white/[0.02] flex-shrink-0"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl opacity-20">
            {project.placeholder}
          </div>
        )}
      </a>

      {/* Body */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="font-mono text-emerald-400 text-[10px] tracking-widest">
          {project.tag}
        </p>
        <h3 className="text-white font-semibold text-sm leading-snug">
          {project.title}
        </h3>
        <p className="text-slate-500 text-[11px] font-mono">{project.date}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {visibleTags.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
          {extraCount > 0 && !expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="font-mono text-[10px] text-slate-500 bg-white/5 px-2 py-0.5 rounded hover:text-white"
            >
              +{extraCount} more
            </button>
          )}
        </div>

        {/* Description */}
        <p
          className={`text-slate-400 text-xs leading-relaxed ${expanded ? "" : "line-clamp-2"}`}
        >
          {project.description}
        </p>
      </div>

      {/* Actions */}
      <div className="px-4 pb-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-mono py-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
          >
            <GitHubIcon />
            Code
          </a>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-mono py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 transition-colors"
            >
              <ExternalLinkIcon />
              Live Link
            </a>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-xs text-slate-500 py-2 rounded-lg border border-white/[0.06] hover:text-slate-300 hover:border-white/10 transition-colors"
        >
          {expanded ? "Show Less" : "View More Details"}
        </button>
      </div>
    </div>
  );
}
