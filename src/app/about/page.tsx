import { AboutPageTemplate } from "@/components/about/template/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mi | Felipe Batista",
  description: "Información sobre mis proyectos y habilidades",
};

export default function Page() {
  return (
      <AboutPageTemplate />
  );
}
