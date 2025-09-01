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
      <body
        className={cn(inter.className, "text-black bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]")}
      >
        {children}
      </body>
    </html>
  );
}
