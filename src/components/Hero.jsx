import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profilepic from "../assets/hero.png";
// import profilepic from "../assets/profile7.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div id="accueil">
      <div
        className="my-7 max-w-300 h-auto mx-auto flex flex-col-reverse 
      sm:flex-row justify-center align-center"
      >
        {/* ── Colonne texte (inchangée) ── */}
        <div className="flex-col my-auto mx-auto md:mx-0 mt-8">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
            Bonjour, je suis Carlos
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={["Frontend Dev", 1000, "Backend Dev", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-3xl sm:text-2xl text-xl font-bold text-gray-500">
              Développeur FullStack JS
              <br />Des solutions concrètes, un projet à la fois.
            </p>
          </div>
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
            <a
              href="https://www.linkedin.com/in/carlos-razanakoto-9013b2342"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/razanakoto-carlos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.facebook.com/carlos.dev.24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
          </div>
          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-r from-[#44BCFF] via-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="/CV_CARLOS_FULLSTACK_JS.pdf"
              title="Download CV"
              download
              role="button"
              className="w-47.5 h-15 relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="ml-10 sm:ml-16 my-auto flex items-center justify-center">
          <div className=" relative w-75 h-75 sm:w-105 sm:h-105">
            <div className="absolute inset-0 rounded-full bg-gray-700/30"></div>

            <div
              className=" absolute -inset-2.5 rounded-full"
              style={{
                background:
                  "conic-gradient(from 120deg, transparent 0deg 80deg, #7C3AED 80deg 270deg, #6366F1 270deg 340deg, transparent 340deg 360deg)",
                padding: "4px",
                borderRadius: "50%",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 5px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 5px))",
              }}
            ></div>

            {/* ── Photo de profil dans le cercle ── */}
            <img
              className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-cover object-top rounded-full"
              src={profilepic}
              alt="Photo de profil Carlos"
            />
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                Frontend
              </span>
            </div>

            <div className="absolute -right-5 bottom-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                Backend
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
