import { AboutPageTemplate } from "@/components/about/template/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sobre mi - Felipe Batista | Backend Developer con +4 años de experiencia",
  description:
    "Conoce más sobre Felipe Batista (felibatista), Backend Developer argentino especializado en Spring Boot, .NET, Java, Python, Odoo y React. Mi trayectoria desde los 13 años programando hasta convertirme en desarrollador profesional con +4 años de experiencia.",
  keywords: [
    "Felipe Batista sobre mi",
    "felibatista biografia",
    "Felipe Rosario desarrollador",
    "Backend Developer Argentina",
    "programador desde los 13 años",
    "Java Minecraft plugins",
    "Spring Boot developer",
    ".NET developer",
    "Python developer",
    "Odoo developer",
    "experiencia programación",
    "desarrollador full stack",
    "felipe batista cv",
    "felipe batista curriculum",
  ],
  openGraph: {
    title: "Sobre mi - Felipe Batista | Backend Developer",
    description:
      "Conoce la historia de Felipe Batista (felibatista), desde sus inicios programando en Minecraft hasta convertirse en Backend Developer profesional especializado en Python y Odoo.",
    url: "https://felibatista.lat/about",
    images: [
      {
        url: "/about/me.jpg",
        width: 1200,
        height: 630,
        alt: "Felipe Batista - Mi historia como desarrollador",
      },
    ],
  },
  alternates: {
    canonical: "https://felibatista.lat/about",
  },
};

export default function Page() {
  return <AboutPageTemplate />;
}
