import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const backgroundGradient = "linear-gradient(135deg, #0E0E0E 0%, #162132 35%, #0E0E0E 100%)";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "Inter, 'Segoe UI', sans-serif",
          background: backgroundGradient,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "80px 96px",
          color: "#F7F7F5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 32,
              letterSpacing: 12,
              textTransform: "uppercase",
              color: "rgba(74, 178, 247, 0.75)",
            }}
          >
            tmrw
          </span>
          <span
            style={{
              fontSize: 24,
              color: "rgba(247, 247, 245, 0.55)",
            }}
          >
            Practical AI for real work
          </span>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
            marginTop: 48,
          }}
        >
          <div
            style={{
              maxWidth: 520,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                fontSize: 88,
                lineHeight: "96px",
                margin: 0,
                fontWeight: 600,
              }}
            >
              Production AI systems, delivered end-to-end.
            </h1>
            <p
              style={{
                marginTop: 32,
                fontSize: 28,
                lineHeight: "42px",
                color: "rgba(247, 247, 245, 0.7)",
              }}
            >
              Strategy, agent development, integration, and ongoing AgentOps support.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              width: 320,
              height: 320,
              borderRadius: "32px",
              background: "rgba(74, 178, 247, 0.14)",
              border: "1px solid rgba(74, 178, 247, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                border: "2px solid rgba(235, 169, 74, 0.6)",
                position: "relative",
                display: "flex",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 40,
                  left: 36,
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(74, 178, 247, 0.9)",
                  boxShadow: "0 0 45px rgba(74, 178, 247, 0.55)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 32,
                  right: 28,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "rgba(235, 169, 74, 0.9)",
                  boxShadow: "0 0 45px rgba(235, 169, 74, 0.55)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 120,
                  right: 60,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "rgba(247, 247, 245, 0.9)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 88,
                  left: 72,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(247, 247, 245, 0.75)",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
            color: "rgba(247, 247, 245, 0.55)",
            fontSize: 24,
          }}
        >
          <span>tmrw.it</span>
          <span>Next.js + ChatGPT + tmrw</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
