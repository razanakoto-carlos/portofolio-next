import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import MotionProvider from "../components/MotionProvider";
import "./globals.css";

// Police auto-hébergée et préchargée (plus de requête bloquante vers Google Fonts)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio",
};

// Applique le thème sauvegardé avant le premier rendu (évite un flash sombre)
const themeScript = `try {
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.dataset.theme = "light";
  }
} catch {}`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // data-theme est posé par le script avant l'hydratation
    <html lang="fr" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
