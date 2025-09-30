import "./../lib/styles/globals.css";

import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";
import { SEOFAQData } from "@/components/seo/faq-data";

import type { Metadata } from "next";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Batista - Backend Developer | Portfolio Profesional",
  description:
    "Felipe Batista - Backend Developer especializado en Spring Boot, .NET, Java, Python, Odoo, React y Node.js. +4 años de experiencia en desarrollo web, APIs REST, microservicios y bases de datos.",
  keywords: [
    "Felipe Batista",
    "felibatista",
    "Felipe Rosario",
    "Backend Developer",
    "Java Developer",
    "Spring Boot",
    ".NET Developer",
    "Python Developer",
    "Odoo Developer",
    "React Developer",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "Argentina Developer",
    "Full Stack Developer",
    "API REST",
    "Microservicios",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "felipe batista linkedin",
    "felipe batista portfolio",
    "felipe batista developer",
    "felipe batista programador",
  ],
  authors: [{ name: "Felipe Batista", url: "https://github.com/felibatista" }],
  creator: "Felipe Batista",
  publisher: "Felipe Batista",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://felibatista.lat",
    title: "Felipe Batista - Backend Developer | Portfolio Profesional",
    description:
      "Felipe Batista (felibatista) - Backend Developer con +4 años de experiencia. Especializado en Spring Boot, .NET, Java, Python, Odoo, React.",
    siteName: "Felipe Batista Portfolio",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: "Felipe Batista - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Batista - Backend Developer | Portfolio",
    description:
      "Felipe Batista (felibatista) - Backend Developer con +4 años de experiencia en Spring Boot, .NET, Java, Python, Odoo, React y más.",
    images: ["/me.png"],
    creator: "@felibatista",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu_codigo_de_verificacion_google", // Reemplaza con tu código real
  },
  alternates: {
    canonical: "https://felibatista.lat",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Felipe Batista",
    alternateName: ["felibatista", "Felipe Rosario"],
    jobTitle: "Backend Developer",
    description:
      "Backend Developer especializado en Spring Boot, .NET, Java, Python, Odoo, React y Node.js con +4 años de experiencia",
    url: "https://felibatista.lat",
    image: "https://felibatista.lat/me.png",
    sameAs: [
      "https://github.com/felibatista",
      "https://www.linkedin.com/in/felibatista/",
    ],
    knowsAbout: [
      "Spring Boot",
      ".NET",
      "Java",
      "Python",
      "Odoo",
      "React",
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Microservicios",
      "API REST",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
    },
    nationality: {
      "@type": "Country",
      name: "Argentina",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hellojavaa@gmail.com",
      contactType: "professional",
    },
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <SEOFAQData />
        <script
          src="https://api-production-fa8b.up.railway.app/script/index.js"
          data-token="XZdd2U"
          data-api="https://api-production-fa8b.up.railway.app"
          async
        />
        <link rel="canonical" href="https://felibatista.lat" />
        <meta name="author" content="Felipe Batista" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={cn(
          inter.className,
          "text-black bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        )}
      >
        {children}
      </body>
    </html>
  );
}
