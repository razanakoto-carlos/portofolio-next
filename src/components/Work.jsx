import React from "react";
import ProjectCard from "./ProjectCard";

import proj1 from "../assets/conge.jpg";
import proj2 from "../assets/instat2.jpg";
import proj3 from "../assets/meteo-1.jpg";
import proj4 from "../assets/worktest.jpg";
import proj5 from "../assets/guess.png";

const projects = [
  {
    title: "Wordle",
    tag: "Projet personnel",
    date: "2026",
    description:
      "Jeu de devinettes de mots inspiré de Wordle. Grille 6×5 avec retour coloré (vert, jaune, gris). Détection victoire/défaite avec bannière de résultat. Design responsive mobile, tablette et desktop.",
    techs: ["React", "Tailwind CSS"],
    image: proj5,
    placeholder: "🟩",
    link: "https://github.com/razanakoto-carlos/wordle-clone",
    liveLink: null,
  },
  {
    title: "Mini Trello",
    tag: "Projet personnel",
    date: "2026",
    description:
      "Drag-and-drop entre colonnes (Todo / In Progress / Done). Backend structuré en couches : routes → controllers → services. Schéma Prisma avec relations Board → Column → Card.",
    techs: ["React", "Node.js", "Prisma", "PostgreSQL"],
    image: proj4,
    placeholder: "📋",
    link: "https://github.com/razanakoto-carlos/mini-trello",
    liveLink: null,
  },
  {
    title: "Weather App – Météo",
    tag: "Application web",
    date: "2025",
    description:
      "Consommation de l'API OpenWeather avec fetch() natif. Interface responsive avec affichage météo en temps réel. Prévisions 5 jours avec icônes dynamiques.",
    techs: ["TypeScript", "HTML5", "CSS3", "OpenWeather API"],
    image: proj3,
    placeholder: "🌤️",
    link: "https://github.com/razanakoto-carlos/weather-app-typescript",
    liveLink: null,
  },
  {
    title: "Gestion de Projets – INSTAT",
    tag: "Stage – INSTAT Madagascar",
    date: "Déc 2024 – Mars 2025",
    description:
      "Application de gestion de projets avec validation progressive, gestion des rôles et génération de rapports. Réalisée en stage à l'INSTAT Madagascar.",
    techs: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    image: proj2,
    placeholder: "📊",
    link: "https://github.com/razanakoto-carlos/gestionProjet",
    liveLink: null,
  },
  {
    title: "Gestion de Congé",
    tag: "Projet académique",
    date: "2024",
    description:
      "Application web pour la gestion des demandes et validations de congés. Architecture MVC en PHP vanilla avec Bootstrap. Workflow complet : demande → validation → notification.",
    techs: ["PHP", "Bootstrap", "MVC", "MySQL"],
    image: proj1,
    placeholder: "🏖️",
    link: "https://github.com/razanakoto-carlos/G_Conge_MVC_PHP",
    liveLink: null,
  },
];

export default function Work() {
  return (
    <section id="projets" className="max-w-5xl mx-auto px-8 py-20">
      <p className="font-mono text-emerald-400 text-xs tracking-widest mb-2">
        // ce que j'ai construit
      </p>
      <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-10">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}