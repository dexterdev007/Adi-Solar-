import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F2417",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          AdiSolar
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#F59E0B",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Solar Installation Across India
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#FFFFFF99",
            textAlign: "center",
          }}
        >
          Free Site Visit · Certified Technicians · Subsidy Assistance
        </div>
      </div>
    )
  );
}
