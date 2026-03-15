import React from "react";
import aboutImg from "../assets/about4.jpg";

function About() {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id="a-propos">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-100 h-full">
            <img
              src={aboutImg}
              className="object-cover rounded-xl h-75 filter grayscale-10 brightness-50"
              alt="aboutImg"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                À propos <span>de moi</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Étudiant en fin de M1 Informatique, je me spécialise dans le
                développement web fullstack avec JavaScript/TypeScript, React,
                Node.js et PHP/Laravel. J'aime construire des projets concrets —
                des interfaces réactives jusqu'aux APIs robustes. Curieux et
                autonome, je cherche à transformer chaque projet en opportunité
                d'apprentissage
              </p>
            </div>
          </div>
          <div className="flex mt-10 items-center gap-7">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                3 <span className="primary-text">+</span>
              </h3>
              <p>
                <span className="md:text:base text-xs">Projets réalisés</span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                1 <span className="primary-text">+</span>
              </h3>
              <p>
                <span className="md:text:base text-xs">
                  Projet de soutenance
                </span>
              </p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                100 <span className="primary-text">+</span>
              </h3>
              <p>
                <span className="md:text:base text-xs">Motivé et Curieux</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
