import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

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
      <body className={cn(inter.className, "bg-[#242428] text-white overflow-auto")}>
        {children}
      </body>
    </html>
  );
}
