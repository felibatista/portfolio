import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentaciones | Felipe Batista",
  description: "Información sobre mis proyectos y habilidades",
};

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        {children}
    </>
  );
}
