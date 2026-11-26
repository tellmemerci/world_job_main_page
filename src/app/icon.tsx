import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 55%, #22D3EE 100%)",
          color: "white",
          fontSize: 16,
          fontWeight: 800,
        }}
      >
        W
      </div>
    ),
    size,
  );
}
