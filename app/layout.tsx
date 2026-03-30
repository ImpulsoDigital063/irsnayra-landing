import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Método Dra. Irsnayra Mildred – Transformação Completa",
  description:
    "Corpo, rosto e cabelo tratados com tecnologia e injetáveis de alta performance. Farmacêutica clínica especializada em estética avançada. Atendimento domiciliar em Imperatriz-MA.",
  keywords: [
    "estética avançada",
    "injetáveis",
    "soroterapia",
    "harmonização glútea",
    "Imperatriz MA",
    "farmacêutica clínica",
    "beleza",
  ],
  openGraph: {
    title: "Método Dra. Irsnayra Mildred – Transformação Completa",
    description:
      "Corpo, rosto e cabelo tratados com tecnologia e injetáveis de alta performance.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#faf9f7] text-[#2c2420]">
        {children}
      </body>
    </html>
  );
}
