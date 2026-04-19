import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Label de section */}
      <p className="font-mono text-emerald-400 text-xs tracking-widest mb-2">
        // travaillons ensemble
      </p>
      <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-4 mb-12">
        Contact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Carte info */}
        <div className="bg-white/3 border border-white/10 rounded-2xl p-8 flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Connectons-nous
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Disponible pour des missions freelance, des stages ou des
              opportunités en CDI. N'hésitez pas à me contacter — je réponds
              sous 24h.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:razanakotocarlos24@gmail.com"
              className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors duration-200 group"
            >
              <AiOutlineMail className="text-2xl text-emerald-400 shrink-0" />
              <span className="text-sm font-mono group-hover:underline">
                razanakotocarlos24@gmail.com
              </span>
            </a>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/carlos-razanakoto-9013b2342"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-slate-500 hover:text-emerald-400 transition-colors duration-200"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/razanakoto-carlos"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-slate-500 hover:text-emerald-400 transition-colors duration-200"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white/3 border border-white/10 rounded-2xl p-8">
          <form
            action="https://getform.io/f/bnlxddxb"
            method="POST"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              required
              className="
                w-full bg-white/4 border border-white/10 rounded-lg
                px-4 py-3 text-white text-sm placeholder-slate-500
                focus:outline-none focus:border-emerald-400/60
                transition-colors duration-200
              "
            />
            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail"
              required
              className="
                w-full bg-white/4 border border-white/10 rounded-lg
                px-4 py-3 text-white text-sm placeholder-slate-500
                focus:outline-none focus:border-emerald-400/60
                transition-colors duration-200
              "
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Votre message"
              required
              className="
                w-full bg-white/4 border border-white/10 rounded-lg
                px-4 py-3 text-white text-sm placeholder-slate-500
                focus:outline-none focus:border-emerald-400/60
                transition-colors duration-200 resize-none
              "
            />
            <button
              type="submit"
              className="
                w-full bg-emerald-400 hover:bg-emerald-300
                text-slate-900 font-bold text-sm sm:text-base py-3 rounded-lg
                transition-colors duration-200 mt-1
              "
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
