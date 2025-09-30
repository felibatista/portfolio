import { DocumentsTemplate } from "@/components/documents/template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos y Documentación - Felipe Batista | Backend Developer",
  description:
    "Explora los proyectos y documentación técnica de Felipe Batista (felibatista). Ejemplos de desarrollo backend con Spring Boot, .NET, Java, Python, Odoo y más tecnologías.",
  keywords: [
    "felipe batista proyectos",
    "felibatista portfolio",
    "felipe batista github",
    "backend projects",
    "spring boot examples",
    "java projects",
    ".net projects",
    "python projects",
    "odoo projects",
  ],
  openGraph: {
    title: "Proyectos - Felipe Batista Backend Developer",
    description:
      "Descubre los proyectos y documentación técnica de Felipe Batista, especialista en desarrollo backend con Python y Odoo.",
    url: "https://felibatista.lat/documents",
  },
  alternates: {
    canonical: "https://felibatista.lat/documents",
  },
};

export default function DocumentsPage() {
  return <DocumentsTemplate />;
}
