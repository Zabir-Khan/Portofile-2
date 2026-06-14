import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const alt = `${SITE.name} — ${SITE.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Generates /opengraph-image — used for social share previews (Open Graph + Twitter).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1a1a0a 0%, #0f1108 35%, #0a0a12 100%)",
          position: "relative",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <div style={{ width: "56px", height: "2px", background: "#C9A96E" }} />
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C9A96E",
              fontFamily: "Georgia, serif",
            }}
          >
            {SITE.title}
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "120px",
            fontWeight: 900,
            lineHeight: 1,
            fontFamily: "Georgia, serif",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ color: "#F0EDE8" }}>ZABIR</span>
          <span style={{ color: "#C9A96E" }}>KHAN</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "28px",
            color: "#aaaaaa",
            maxWidth: "780px",
            lineHeight: 1.5,
            fontFamily: "Georgia, serif",
          }}
        >
          {SITE.tagline}
        </div>

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,169,110,0.18) 0%, rgba(201,169,110,0) 70%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
