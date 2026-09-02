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
          background: "linear-gradient(135deg, #0c0b0a 0%, #171410 60%, #24190c 100%)",
          color: "#f3eee4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "#a79e91", letterSpacing: 3 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#4ade80" }} />
          DESARROLLADOR FULL-STACK · ROSARIO, ARGENTINA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>Llevo software</div>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: -3, color: "#f2b233" }}>a producción.</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#d6cfc2", maxWidth: 900 }}>
            Matías Sione · Next.js · TypeScript · Python · Supabase · n8n · Flutter
          </div>
        </div>

        <div style={{ display: "flex", gap: 48, fontSize: 24, color: "#a79e91" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#f3eee4" }}>16</span>
            <span>proyectos construidos</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#f3eee4" }}>8</span>
            <span>productos en producción</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 44, fontWeight: 800, color: "#f3eee4" }}>msione-portfolio.vercel.app</span>
            <span>portfolio · github.com/Tariima</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
