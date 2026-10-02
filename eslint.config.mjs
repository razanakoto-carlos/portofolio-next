import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(["dist/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      // Plain <img> kept on purpose: identical rendering to the original Vite app
      "@next/next/no-img-element": "off",
      // French copy uses plain apostrophes; escaping them would not change the output
      "react/no-unescaped-entities": "off",
    },
  },
]);
