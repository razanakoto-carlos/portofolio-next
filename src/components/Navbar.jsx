import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const links = [
  { label: "Accueil",    href: "#accueil"    },
  { label: "À propos",   href: "#a-propos"   },
  { label: "Stack",      href: "#stack"      },
  { label: "Projets",    href: "#projets"    },
  { label: "Expérience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [nav, setNav]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setNav(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex justify-between items-center px-10 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => handleClick(e, "#accueil")}
          className="font-mono text-emerald-400 text-lg font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          R.Carlos
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="font-mono text-slate-400 text-sm px-4 py-2 rounded-md hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-3/5 bg-slate-900 border-r border-white/5 transform transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 pt-20">
          <a
            href="#accueil"
            onClick={(e) => handleClick(e, "#accueil")}
            className="font-mono text-emerald-400 text-xl font-medium mb-8 block"
          >
            R.Carlos
          </a>
          <ul className="flex flex-col gap-2">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className="block font-mono text-slate-300 text-lg py-2 px-3 rounded-md hover:text-emerald-400 hover:bg-white/5 transition-all duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay mobile */}
      {nav && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setNav(false)}
        />
      )}
    </>
  );
}