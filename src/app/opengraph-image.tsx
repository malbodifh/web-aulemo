import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { Logo } from "@/components/marca/logo";

export const alt = "Aulemo · Plataforma para colegios de Costa Rica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const rutaFuente = (peso: number) =>
  join(
    process.cwd(),
    "node_modules/@fontsource/plus-jakarta-sans/files",
    `plus-jakarta-sans-latin-${peso}-normal.woff`,
  );

const fuenteNegrita = await readFile(rutaFuente(700));
const fuenteSemi = await readFile(rutaFuente(600));

export default function ImagenSocial() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          alignItems: "center",
          paddingLeft: "7%",
          backgroundColor: "#171A23",
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        <svg
          viewBox="0 0 600 500"
          width="600"
          height="500"
          style={{ position: "absolute", right: 0, bottom: 0 }}
        >
          <g fill="none" strokeWidth="22">
            <path d="M150 520V300a190 190 0 0 1 380 0v220" stroke="rgba(255,255,255,0.08)" />
            <path d="M215 520V300a125 125 0 0 1 250 0v220" stroke="rgba(255,255,255,0.16)" />
          </g>
          <path
            d="M280 520V300a60 60 0 0 1 120 0v220h-28V300a32 32 0 0 0-64 0v220z"
            fill="rgba(255,255,255,0.22)"
          />
          <circle cx="340" cy="412" r="14" fill="#5266EB" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Logo tamano={112} tono="blanco" />
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 30,
              fontWeight: 600,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Plataforma para colegios de Costa Rica · Un producto de Noren
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: fuenteNegrita, style: "normal", weight: 700 },
        { name: "Plus Jakarta Sans", data: fuenteSemi, style: "normal", weight: 600 },
      ],
    },
  );
}
