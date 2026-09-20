import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #537A20, #3d5c17)",
          color: "#EAF2D3",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          Pure Pistachio
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 16,
            opacity: 0.85,
            textAlign: "center",
          }}
        >
          Pistachios, supplied at every scale
        </div>
      </div>
    ),
    { ...size },
  );
}
