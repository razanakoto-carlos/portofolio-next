"use client";

import type { ComponentPropsWithoutRef } from "react";

// Lien d'ancre interne : défilement fluide vers la section, sans modifier l'URL
export default function ScrollLink({ href, ...props }: ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }}
      {...props}
    />
  );
}
