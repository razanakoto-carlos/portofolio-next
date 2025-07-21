import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Fonction pour gérer le scroll smooth + fermer menu mobile
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false); // ferme le menu mobile après clic
  };

  // Les liens avec leur cible
  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#a-propos" },
    { label: "Projets", href: "#projets" },
    { label: "Expérience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  // Classe Tailwind commune pour hover / cursor / animation
  const linkClass =
    "cursor-pointer transition-transform duration-300 ease-in-out hover:text-white hover:scale-110 p-5";

  const mobileLinkClass =
    "cursor-pointer transition-transform duration-300 ease-in-out hover:text-white hover:scale-110 p-2 text-2xl";

  return (
    <div className="z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 className="text-3xl font-bold primary-color ml-4 cursor-pointer" onClick={e => handleClick(e, "#accueil")}>R.Carlos</h1>

      {/* Menu desktop */}
      <ul className="hidden md:flex">
        {links.map(({ label, href }) => (
          <li
            key={href}
            className={linkClass}
            onClick={e => handleClick(e, href)}
          >
            {label}
          </li>
        ))}
      </ul>

      {/* Menu mobile icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu />}
      </div>

      {/* Menu mobile drawer */}
      <div
        className={
          nav
            ? "text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-600"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4 cursor-pointer" onClick={e => handleClick(e, "#accueil")}>R.Carlos</h1>
        <ul className="p-8">
          {links.map(({ label, href }) => (
            <li
              key={href}
              className={mobileLinkClass}
              onClick={e => handleClick(e, href)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
