import type { Metadata } from "next";
import "./globals.css";

// Importación de la fuente Exo desde Google Fonts
import { Exo } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/providers/providers";

const exo = Exo({ subsets: ["latin"], weight: ["400", "700"] }); // Especifica los pesos que desees

export const metadata: Metadata = {
  title: "Forbidden Finds",
  description:
    "Discover rare artifacts, gear, and weaponry from the Forbidden West. Our marketplace offers relics of the Old Ones, machine parts, and handcrafted items for hunters and seekers. Explore the untamed wilds through a collection curated for those who dare to journey beyond the known lands. Equip yourself for any encounter, from the mysteries of ancient technology to the challenges of the wild.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Aplicar la fuente Exo en el cuerpo */}
      <body
        className={`${exo.className} size-full bg-[url(/background.webp)] bg-cover bg-center text-stone-100 flex-col`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
