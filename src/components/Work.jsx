import React from "react";
import ProjectCard from "./ProjectCard";

import proj1 from "../assets/conge.jpg";
import proj2 from "../assets/instat2.jpg";
import proj3 from "../assets/meteo-1.jpg";
import proj4 from "../assets/moveCard.png";
import proj5 from "../assets/guess.jpg";
import proj6 from "../assets/expense.jpg";

const projects = [
    {
    title: "Nexboard",
    tag: "Projet personnel",
    date: "2026",
    description:
      "Application Kanban full-stack inspirée de Trello avec authentification JWT (cookies httpOnly). Gestion d’état avec Zustand et TanStack Query (optimistic updates). Drag & drop fluide avec dnd-kit. Architecture backend en couches (routes → controllers → middleware) avec Prisma et PostgreSQL.", 
    techs: [
      "React",
      "TypeScript",
      "TanStack Query",
      "dnd-kit",
      "Express",
      "Zustand",
    ],
    image: proj4,
    placeholder: "📋",
    link: "https://github.com/razanakoto-carlos/nexboard",
    liveLink: null,
  },
  {
    title: "Expense Tracker",
    tag: "Projet personnel",
    date: "2026",
    description:
      "Application fullstack de gestion de dépenses personnelles avec authentification JWT, dashboard mensuel et statistiques par catégorie. Entièrement conteneurisée avec Docker.",
    techs: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
    image: proj6,
    placeholder: "💸",
    link: "https://github.com/razanakoto-carlos/expense-tracker-app",
    liveLink: null,
  },
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
    <section
      id="projets"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <p className="font-mono text-emerald-400 light:text-emerald-700 text-xs tracking-widest mb-2">
        // ce que j'ai construit
      </p>
      <h2 className="text-2xl font-bold text-white border-b border-white/10 light:text-slate-900 light:border-slate-200 pb-4 mb-10">
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
