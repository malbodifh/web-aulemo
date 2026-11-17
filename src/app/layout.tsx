import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  descripcion,
  nombreSitio,
  tituloPorDefecto,
  urlSitio,
} from "@/lib/sitio";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(urlSitio),
  title: {
    default: tituloPorDefecto,
    template: `%s · ${nombreSitio}`,
  },
  description: descripcion,
  applicationName: nombreSitio,
  authors: [{ name: "Noren" }],
  creator: "Noren",
  publisher: "Noren",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: nombreSitio,
    title: tituloPorDefecto,
    description: descripcion,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: tituloPorDefecto,
    description: descripcion,
  },
  robots: { index: true, follow: true },
};

const scriptJs = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CR" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptJs }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
