const experiences = [
  {
    title: "Participant – Orange Summer Challenge 2026",
    company: "Orange Digital Center",
    dates: "Juillet 2026 – Présent",
    bullets: [
      "Programme d'innovation de 4 mois (6 juillet – novembre 2026).",
      "Conception et développement d'une solution numérique en équipe.",
    ],
    current: true,
  },
  {
    title: "Étudiant M2 Informatique",
    company: "IS-INFO, Ampasamadinika",
    dates: "2023 – Présent",
    bullets: [
      "Spécialisation développement web fullstack JavaScript/TypeScript.",
      "Projets académiques : Mini Trello, Gestion de Congé, Weather App.",
      "Maîtrise de React, Node.js, Laravel, Prisma et des architectures MVC.",
    ],
    current: true,
  },
  {
    title: "Stagiaire Développeur Web",
    company: "INSTAT Madagascar",
    dates: "Décembre 2024 – Mars 2025",
    bullets: [
      "Développement d'une application de gestion de projets en Laravel + Tailwind CSS.",
      "Implémentation de la gestion des rôles, validation progressive et génération de rapports.",
      "Collaboration avec l'équipe technique de l'Institut National de la Statistique.",
    ],
    current: false,
  },
  {
    title: "Développeur Fullstack JS",
    company: "Projets personnels",
    dates: "2023 – Présent",
    bullets: [
      "Conception et déploiement de projets end-to-end (frontend React + backend Node.js/Prisma).",
      "Maîtrise des flux d'authentification : JWT, OAuth2, routes protégées.",
      "Intégration d'APIs REST et temps réel (WebSockets, Socket.io, OpenWeather).",
    ],
    current: false,
  },
];


export function getExperiences() {
  return experiences;
}