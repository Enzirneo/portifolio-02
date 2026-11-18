import { ImageResponse } from "next/og";

export const alt = "Enzo Bispo — Full Stack Developer";
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
          padding: "80px",
          background: "linear-gradient(135deg, #0f231c 0%, #1c3b30 55%, #2f6b57 100%)",
          color: "#f1eadb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, opacity: 0.7, textTransform: "uppercase" }}>
          Portfolio
        </div>
        <div style={{ fontSize: 110, fontWeight: 700, marginTop: 24, lineHeight: 1 }}>
          Enzo Bispo
        </div>
        <div style={{ fontSize: 46, fontWeight: 600, marginTop: 28, color: "#9fc3ac" }}>
          Full Stack Developer · Software Architecture · UI/UX
        </div>
        <div style={{ fontSize: 30, marginTop: "auto", opacity: 0.75 }}>
          portifolio-enzo-bispo.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
