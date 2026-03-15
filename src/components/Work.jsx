import React from "react";

import proj1 from "../assets/conge2.jpg";
import proj2 from "../assets/instat2.jpg";
import proj3 from "../assets/meteo-pc.jpg";
import proj4 from "../assets/mini-trello.jpg";

const projects = [
  {
    title: "Mini Trello",
    date: "2025",
    description:
      "Drag-and-drop entre colonnes (Todo / In Progress / Done). Backend structuré en couches : routes → controllers → services. Schéma Prisma : relations Board → Column → Card + migrations. Gestion multi-board avec rôles (owner / member) et routes protégées.",
    image: proj4,
    alt: "mini trello",
    link: "https://github.com/razanakoto-carlos/mini-trello",
  },
  {
    title: "Weather App – Météo",
    date: "2025",
    description:
      "Consommation de l'API OpenWeather avec fetch() natif. Interface HTML/CSS responsive avec affichage météo en temps réel. Gestion asynchrone via async/await et gestion des erreurs. Prévisions 5 jours avec icônes dynamiques. Stack : TypeScript · HTML5 · CSS3 · OpenWeather API.",
    image: proj3,
    alt: "weather app",
    link: "https://github.com/razanakoto-carlos/weather-app-typescript",
  },
  {
    title: "Stage – INSTAT Madagascar",
    date: "Décembre 2024 - Mars 2025",
    description:
      "Réalisation d'une application de gestion de projets en Laravel et Tailwind CSS, incluant validation progressive, gestion des rôles et génération de rapports.",
    image: proj2,
    alt: "gestion de projet",
    link: "https://github.com/razanakoto-carlos/gestionProjet",
  },
    {
    title: "Projet – Gestion de Congé",
    date: "2024",
    description:
      "Conception et développement d'une application web pour la gestion des demandes et validations de congés en PHP et Bootstrap.",
    image: proj1,
    alt: "gestion de conge",
    link: "https://github.com/razanakoto-carlos/G_Conge_MVC_PHP",
  },
];

function Work() {
  return (
    <div className="py-6 max-w-300 mx-auto" id="projets">
      <div className="mx-auto px-4 md:px-8">
        {/* En-tête de section — inchangé */}
        <div className="mb-8 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              Mes <span>Projets</span>
            </h2>
            <p className="text-gray-500">Voici mes projets les plus récents</p>
          </div>
        </div>

        {/* Liste des projets avec alternance image/texte */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => {
            // index pair  → image à gauche, texte à droite
            // index impair → texte à gauche, image à droite
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "" : "md:flex-row-reverse" // inverse l'ordre sur desktop
                }`}
              >
                {/* IMAGE */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full md:w-1/2 h-64 overflow-hidden rounded-2xl shadow-lg flex-shrink-0"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>

                {/* TEXTE */}
                <div className="w-full md:w-1/2 text-white">
                  <p className="text-lg font-semibold">{project.title}</p>
                  <p className="text-gray-300 text-sm mt-1">{project.date}</p>
                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-sm text-blue-400 hover:underline"
                  >
                    Voir sur GitHub →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
