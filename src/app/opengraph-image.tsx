import { ImageResponse } from "next/og";

// Image de partage (Open Graph / X), générée au build aux couleurs du site
export const alt = "Razanakoto Carlos — Développeur FullStack JS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(52, 211, 153, 0.16), transparent 45%), radial-gradient(circle at 5% 100%, rgba(99, 102, 241, 0.14), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, color: "#34d399", fontSize: 30, marginBottom: 28 }}>
          <div style={{ width: 56, height: 2, background: "rgba(52, 211, 153, 0.6)" }} />
          Bonjour, je suis
        </div>
        <div style={{ display: "flex", color: "#ffffff", fontSize: 96, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
          Razanakoto Carlos<span style={{ color: "#34d399" }}>.</span>
        </div>
        <div style={{ display: "flex", color: "#cbd5e1", fontSize: 44, marginTop: 28 }}>
          Développeur <span style={{ color: "#34d399", marginLeft: 14 }}>FullStack JS</span>
        </div>
        <div style={{ display: "flex", color: "#64748b", fontSize: 28, marginTop: 56 }}>
          React · Node.js · TypeScript · Laravel — Antananarivo, Madagascar
        </div>
      </div>
    ),
    size,
  );
}
