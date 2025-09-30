import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Documentaciones | Felipe Batista",
  description: "Información sobre mis proyectos y habilidades",
};

export default function DocumentsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
        {children}
    </>
  );
}
