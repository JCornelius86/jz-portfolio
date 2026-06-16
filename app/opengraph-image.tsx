import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JC Zabel: Senior designer, design leader, always building";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#FAF6EC";
const INK = "#221E16";
const INK_SOFT = "#3A352B";
const MUTED = "#7A7159";
const ACCENT = "#A8823F";
const RULE = "#E8E0CC";

async function loadFont(weight: 400 | 600) {
  const url = `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,${weight}&display=swap`;
  const css = await (
    await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    })
  ).text();
  const match = css.match(/src: url\((https:[^)]+)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error("Fraunces font URL not found");
  const fontData = await (await fetch(match[1])).arrayBuffer();
  return fontData;
}

export default async function OgImage() {
  const [serifRegular, serifBold] = await Promise.all([
    loadFont(400),
    loadFont(600),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BG,
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: "Fraunces",
          position: "relative",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 18,
            color: MUTED,
            letterSpacing: 2,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span style={{ width: 28, height: 2, background: ACCENT }} />
          Portfolio
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: "auto",
            fontSize: 110,
            lineHeight: 0.96,
            letterSpacing: -3.5,
            color: INK,
            fontWeight: 400,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <span>Senior&nbsp;</span>
            <span style={{ color: ACCENT }}>designer</span>
            <span>,</span>
          </div>
          <div style={{ display: "flex" }}>design leader,</div>
          <div style={{ display: "flex" }}>
            <span>always&nbsp;</span>
            <span style={{ color: ACCENT }}>building</span>
            <span style={{ color: ACCENT }}>_</span>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: `1px solid ${RULE}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontFamily: "monospace",
            fontSize: 22,
            color: INK_SOFT,
          }}
        >
          <span style={{ fontFamily: "Fraunces", fontSize: 28, color: INK, fontWeight: 600 }}>
            JC Zabel
          </span>
          <span style={{ color: MUTED, letterSpacing: 1.5, textTransform: "uppercase", fontSize: 18 }}>
            jczabel.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: serifRegular, weight: 400, style: "normal" },
        { name: "Fraunces", data: serifBold, weight: 600, style: "normal" },
      ],
    }
  );
}
