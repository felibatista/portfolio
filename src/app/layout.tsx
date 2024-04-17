import "./../lib/styles/globals.css";

import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";

import type { Metadata } from "next";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Felipe Batista",
  description: "Información sobre mis proyectos y habilidades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          defer
          data-domain="felibatista.live"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </head>
      <body
        className={cn(inter.className, "bg-background-secondary text-black")}
      >
        {children}
      </body>
    </html>
  );
}
