import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF en priorité (plus léger), WebP sinon
    formats: ["image/avif", "image/webp"],
    // Les images du site ne dépassent pas ~1200 px réels (carte projet en pleine largeur
    // sur mobile 3x) : inutile de générer et lister des variantes 1920–3840 px
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
};

export default nextConfig;
