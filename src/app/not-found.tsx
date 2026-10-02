import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

// 404 aux couleurs du site, avec un lien de retour vers l'accueil
export default function NotFound() {
  return (
    <main className="bg-slate-900 min-h-screen text-slate-400 light:bg-slate-50 light:text-slate-600 antialiased flex items-center">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="font-mono text-emerald-400 light:text-emerald-700 text-xs tracking-widest mb-2">
          {"// erreur 404"}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white light:text-slate-900 tracking-tight mb-5">
          Page introuvable<span className="text-emerald-400 light:text-emerald-500">.</span>
        </h1>
        <p className="text-slate-400 light:text-slate-600 leading-relaxed max-w-xl mb-10">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-12 px-6 rounded-md bg-emerald-400 text-slate-900 font-mono text-sm font-semibold hover:bg-emerald-300 light:bg-emerald-500 light:hover:bg-emerald-400 transition-colors duration-200"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
