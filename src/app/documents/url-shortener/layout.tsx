import { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Shortener - Proyecto de Felipe Batista | Backend Developer",
  description:
    "URL Shortener desarrollado por Felipe Batista (felibatista) como ejemplo de desarrollo backend. Proyecto que demuestra habilidades en desarrollo web y APIs.",
  keywords: [
    "felipe batista url shortener",
    "felibatista proyecto",
    "url shortener project",
    "backend project example",
    "felipe batista github project",
  ],
  openGraph: {
    title: "URL Shortener - Proyecto de Felipe Batista",
    description:
      "Proyecto URL Shortener desarrollado por Felipe Batista como ejemplo de sus habilidades en desarrollo backend.",
    url: "https://felibatista.lat/documents/url-shortener",
  },
  alternates: {
    canonical: "https://felibatista.lat/documents/url-shortener",
  },
};

export default function URLShortenerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
