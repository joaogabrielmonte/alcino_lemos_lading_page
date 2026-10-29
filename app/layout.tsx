import type { Metadata } from "next";
import { Manrope, Marcellus } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const headingFont = Marcellus({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alcino Lemos Advocacia",
  description:
    "Atuação jurídica com estratégia, precisão técnica e atendimento personalizado para pessoas físicas e empresas.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
