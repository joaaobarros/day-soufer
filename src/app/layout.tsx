import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Day Soufer — dança como travessia",
  description:
    "Artista da dança e das encruzas, capoeirista, candomblecista, artesã e criadora do TSURU Ateliê. Fortaleza, Ceará.",
  keywords: [
    "Day Soufer",
    "Dayana Ferreira de Souza",
    "dança",
    "capoeira",
    "Fortaleza",
    "TSURU Ateliê",
    "Capoeirança",
    "pedagogia",
    "coreógrafa",
  ],
  authors: [{ name: "Dayana Ferreira de Souza" }],
  openGraph: {
    title: "Day Soufer — dança como travessia",
    description:
      "Artista da dança e das encruzas, capoeirista, candomblecista, artesã e criadora do TSURU Ateliê.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
