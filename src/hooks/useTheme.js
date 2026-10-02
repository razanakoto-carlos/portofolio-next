import { useCallback, useState } from "react";
import { flushSync } from "react-dom";

const STORAGE_KEY = "theme";

// Le thème initial est déjà posé sur <html> par le script de index.html
const readTheme = () =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

function applyTheme(theme) {
  const root = document.documentElement;

  // Coupe les transitions CSS le temps du changement pour un basculement uniforme
  root.classList.add("theme-switching");
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme; // sombre = comportement d'origine, sans attribut
  window.getComputedStyle(document.body).color; // force le recalcul des styles
  setTimeout(() => root.classList.remove("theme-switching"), 1);

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // stockage indisponible (navigation privée…) : le thème vaut pour la session
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  const toggleTheme = useCallback(() => {
    const next = readTheme() === "light" ? "dark" : "light";
    const update = () => {
      applyTheme(next);
      flushSync(() => setTheme(next));
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(update); // fondu enchaîné entre les deux thèmes
    } else {
      update();
    }
  }, []);

  return { theme, toggleTheme };
}
