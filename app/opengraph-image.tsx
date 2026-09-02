import { ImageResponse } from "next/og";

export const alt = "Matías Sione — Desarrollador full-stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #070b18 0%, #0f1526 60%, #16213f 100%)",
          color: "#edf0fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "#93a0c2", letterSpacing: 3 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#4ade80" }} />
          DESARROLLADOR FULL-STACK · ROSARIO, ARGENTINA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>Llevo software</div>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: -3, color: "#7b96ff" }}>a producción.</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#c9d1ea", maxWidth: 900 }}>
            Matías Sione · Next.js · TypeScript · Python · Supabase · n8n · Flutter
          </div>
        </div>

        <div style={{ display: "flex", gap: 48, fontSize: 24, color: "#93a0c2" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#edf0fa" }}>13</span>
            <span>proyectos construidos</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#edf0fa" }}>8</span>
            <span>productos en producción</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#edf0fa" }}>msione-portfolio.vercel.app</span>
            <span>portfolio · github.com/Tariima</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
