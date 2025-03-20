import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "normalize.css";
import "@/app/globals.scss";

export const metadata: Metadata = {
  title: "Clima Agora - Previsão do Tempo em Tempo Real",
  description:
    "Consulte a previsão do tempo em tempo real para qualquer cidade. Descubra temperatura, umidade, vento e muito mais com nosso app de clima rápido e intuitivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
