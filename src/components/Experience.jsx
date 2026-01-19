import React from "react";

function Experience() {
  return (
    <div className="py-10 bg-[#232325]" id="experience">
      <h2 className="mb-8 text-3xl text-white text-center">
        Mon <span>Expérience</span>
      </h2>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>Projet (Gestion de Congée)</p>
        <p className="text-gray-300">2024</p>
        <p className="text-gray-400">
          Conception et Développement d’une application web pour la gestion des
          demandes et validations de congés en PHP et Bootstrap.
        </p>
      </div>

      <div className="h-[50px] w-[2px] bg-slate-500 relative my-1 mx-auto"></div>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>Stage – INSTAT Madagascar</p>
        <p className="text-gray-300">(Décembre 2024 - Mars 2025)</p>
        <p className="text-gray-400">
          Réalisation d'une application de gestion de projets en Laravel et
          Tailwind CSS, incluant validation progressive, gestion des rôles et
          génération de rapports.
        </p>
      </div>

      <div className="h-[50px] w-[2px] bg-slate-500 relative my-1 mx-auto"></div>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>Projet (Plateforme d'Outils IA Multifonctions)</p>
        <p className="text-gray-300">2025</p>
        <p className="text-gray-400">
          Conception et développement d'une application web intégrant six outils
          d'intelligence artificielle pour le traitement de données multimédias
          et textuelles avec une interface utilisateur moderne.
        </p>
      </div>

      <div className="h-[50px] w-[2px] bg-slate-500 relative my-1 mx-auto"></div>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>Projet (OCR CIN )</p>
        <p className="text-gray-300">2025</p>
        <p className="text-gray-400">
          Développement d’une application d’identification basée sur l’OCR en
          Python et React, permettant l’extraction automatique des informations
          d’une carte d’identité nationale (CIN), ainsi que la recherche par
          reconnaissance faciale.
        </p>
      </div>

      <div className="h-[50px] w-[2px] bg-slate-500 relative my-1 mx-auto"></div>
      {/* <div className='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto'>
        <p>Second Company</p>
        <p className='text-gray-400'>(2020 - Present)</p>
        <p className='text-gray-400'>Description of your experience in this company</p>
    </div> */}
    </div>
  );
}

export default Experience;
