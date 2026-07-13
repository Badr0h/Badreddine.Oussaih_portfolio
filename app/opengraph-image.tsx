import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Badreddine Oussaih — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "#FAFAF8",
          color: "#1A1A1A",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#2563EB",
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          Full-Stack Developer | Spring Boot
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Badreddine Oussaih
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#64748B",
            marginTop: 24,
            maxWidth: 700,
          }}
        >
          Java · Spring Boot · Angular · Next.js
        </div>
      </div>
    ),
    { ...size },
  );
}
