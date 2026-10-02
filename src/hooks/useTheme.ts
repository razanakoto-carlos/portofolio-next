import { useCallback, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

// Le thème initial est déjà posé sur <html> par le script de app/layout.tsx
const readTheme = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  // Coupe les transitions CSS le temps du changement pour un basculement uniforme
  root.classList.add("theme-switching");
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme; // sombre = comportement d'origine, sans attribut
  void window.getComputedStyle(document.body).color; // force le recalcul des styles
  setTimeout(() => root.classList.remove("theme-switching"), 1);

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // stockage indisponible (navigation privée…) : le thème vaut pour la session
  }
}

export default function useTheme() {
  // null côté serveur et pendant l'hydratation : le thème n'est connu que dans le navigateur
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null);

  const toggleTheme = useCallback(() => {
    const next: Theme = readTheme() === "light" ? "dark" : "light";
    const update = () => {
      applyTheme(next);
      flushSync(() => listeners.forEach((listener) => listener()));
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
