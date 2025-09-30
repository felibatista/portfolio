"use client";

export function SEOFAQData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Quién es Felipe Batista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Felipe Batista (felibatista) es un Backend Developer argentino con más de 4 años de experiencia especializado en Spring Boot, .NET, Java, Python, Odoo, React y Node.js. También conocido como Felipe Rosario en algunos contextos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la experiencia de Felipe Batista como desarrollador?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Felipe Batista tiene más de 4 años de experiencia como Backend Developer. Ha trabajado con tecnologías como Spring Boot, .NET, Java, Python, Odoo, React, Node.js, MySQL, PostgreSQL, AWS, Azure, Docker y Kubernetes. También tiene experiencia en microservicios, APIs REST y desarrollo de sistemas ERP.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde puedo encontrar a Felipe Batista en LinkedIn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes encontrar a Felipe Batista en LinkedIn con el usuario 'felibatista' en la URL: https://www.linkedin.com/in/felibatista/",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tecnologías domina Felipe Batista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Felipe Batista se especializa en Spring Boot, .NET, Java, Python, Odoo, React, Node.js, MySQL, PostgreSQL. También tiene experiencia en cloud computing con AWS y Azure, contenedores Docker, Kubernetes, desarrollo de microservicios y sistemas ERP.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
  );
}
