"use client";

import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

import { HomeTemplate } from "@/components/home/template";
import { ContactTemplate } from "@/components/contact/template";
import { AboutSectionTemplate } from "@/components/about/template/section";
import { ProjectsTemplate } from "@/components/projects/template";
import { SkillsTemplate } from "@/components/skills/template";
import ExperienceTemplate from "@/components/experience/template";
import Head from "next/head";

export default function Page() {
  const professionalData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Felipe Batista - Backend Developer Portfolio",
    description:
      "Portfolio profesional de Felipe Batista (felibatista), Backend Developer especializado en Spring Boot, .NET, Java y React",
    url: "https://felibatista.vercel.app",
    mainEntity: {
      "@type": "Person",
      name: "Felipe Batista",
      alternateName: ["felibatista", "Felipe Rosario"],
      jobTitle: "Backend Developer",
      hasOccupation: {
        "@type": "Occupation",
        name: "Backend Developer",
        occupationLocation: {
          "@type": "Country",
          name: "Argentina",
        },
        skills:
          "Spring Boot, .NET, Java, React, Node.js, MySQL, PostgreSQL, AWS, Azure, Docker, Kubernetes",
      },
      yearsOfExperience: "4+",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Tecnicatura en Programación",
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalData),
          }}
        />
      </Head>

      <Toaster />

      <HomeTemplate />
      <AboutSectionTemplate />
      <SkillsTemplate />
      <ExperienceTemplate />
      {/*<ProjectsTemplate />*/}
      <ContactTemplate />

      <Footer contrast={false} />
    </div>
  );
}
