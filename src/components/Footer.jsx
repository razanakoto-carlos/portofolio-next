import React from "react";
import { FaLinkedin, FaGitSquare, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center gap-4 sm:gap-5 text-slate-500 text-xl sm:text-2xl mb-5">
        <a
          href="https://www.linkedin.com/in/carlos-razanakoto-9013b2342"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/razanakoto-carlos"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGitSquare />
        </a>
        <a
          href="https://www.facebook.com/carlos.dev.24"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-400 transition-colors duration-200"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
      <p className="font-mono text-slate-600 text-xs">
        Conçu & développé par{" "}
        <span className="text-emerald-400/70">Carlos Razanakoto</span>
        {" "}· 2026
      </p>
      <p className="font-mono text-slate-700 text-[11px] mt-1">
        React · Tailwind CSS
      </p>
    </footer>
  );
}