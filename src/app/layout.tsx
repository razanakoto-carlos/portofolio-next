import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

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
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Root layout: the font applies to every page (rule targets the Pages Router) */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
