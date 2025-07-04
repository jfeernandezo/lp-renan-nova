import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Aposentadoria PCD - Guia Prático da Aposentadoria da Pessoa com Deficiência",
  description: "Aprenda sozinho, de forma prática, como conquistar sua aposentadoria da pessoa com deficiência (PCD). Criado por ex-servidor do INSS.",
  keywords: "Aposentadoria PCD, Aposentadoria com deficiência, Se aposentar sem advogado, INSS, Como se aposentar com PCD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
        <body className={`${poppins.variable} font-poppins antialiased`}>{children}</body>
    </html>
  );
}