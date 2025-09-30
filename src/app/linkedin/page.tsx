import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Felipe Batista LinkedIn - Backend Developer Portfolio",
  description:
    "Perfil profesional de Felipe Batista en LinkedIn. Backend Developer con +4 años de experiencia en Spring Boot, .NET, Java, Python, Odoo y React. Conecta conmigo en LinkedIn como felibatista.",
  keywords: [
    "felipe batista linkedin",
    "felibatista linkedin",
    "felipe batista perfil linkedin",
    "felipe rosario linkedin",
    "backend developer linkedin",
    "spring boot developer linkedin",
    "java developer argentina linkedin",
    "python developer linkedin",
    "odoo developer linkedin",
  ],
  openGraph: {
    title: "Felipe Batista LinkedIn - Backend Developer",
    description:
      "Conéctate conmigo en LinkedIn. Backend Developer especializado en Spring Boot, .NET, Java, Python, Odoo con +4 años de experiencia.",
    url: "https://felibatista.lat/linkedin",
  },
  alternates: {
    canonical: "https://felibatista.lat/linkedin",
  },
};

export default function LinkedInPage() {
  // Redirect to LinkedIn profile after showing SEO content
  redirect("https://www.linkedin.com/in/felibatista/");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Felipe Batista - LinkedIn</h1>
        <p className="text-lg mb-8">
          ¡Hola! Soy Felipe Batista (felibatista), Backend Developer con más de
          4 años de experiencia. Te estoy redirigiendo a mi perfil de LinkedIn
          donde puedes ver mi experiencia profesional completa.
        </p>
        <div className="space-y-4">
          <p>
            <strong>Especialidades:</strong> Spring Boot, .NET, Java, Python,
            Odoo, React, Node.js
          </p>
          <p>
            <strong>Experiencia:</strong> +4 años en desarrollo backend
          </p>
          <p>
            <strong>Ubicación:</strong> Argentina
          </p>
        </div>
        <p className="mt-8 text-sm text-gray-600">
          Si no eres redirigido automáticamente,
          <a
            href="https://www.linkedin.com/in/felibatista/"
            className="text-blue-600 underline ml-1"
          >
            haz clic aquí para ir a LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}
