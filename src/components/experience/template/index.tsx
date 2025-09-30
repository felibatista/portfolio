import Section from "@/components/section";
import ExperienceTitle from "../title";
import { ButtonLink } from "@/components/ui/link";
import JobCard from "../job-card";

const ExperienceTemplate = () => {
  return (
    <div
      id="experience"
      className="bg-background-primary snap-start z-10 overflow-hidden"
    >
      <Section className="flex flex-col items-center justify-center md:mt-0 my-[8vh]">
        <ExperienceTitle />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vh]">
          <JobCard
            name="Clockech"
            description="Con este software, puedes seguir fácilmente el rendimiento de tu
                sitio web, desde el tráfico y las conversiones hasta el
                comportamiento del usuario, todo presentado de manera clara y
                concisa en un panel interactivo. Además, se enfoca en la
                privacidad y la protección de datos, garantizando que tus análisis
                se realicen de manera segura y sin comprometer la privacidad de
                tus usuarios."
            icon="/experience/clockech.png"
            technologiesBadges={[
              "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
              "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
              "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
              "https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white",
              "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
              "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
              "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
              "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white",
              "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
              "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
            ]}
            url="https://clockech.com/"
          />

          <JobCard
            name="Acentus"
            description="Consultora de software especializada en ofrecer soluciones personalizadas y trabajos de calidad, con un enfoque en la gestión 1 a 1. Nos destacamos por nuestra atención personalizada, asegurando que cada proyecto reciba la atención y el cuidado necesarios. Contamos con un equipo altamente capacitado y orientado a la excelencia, y nos esforzamos por ofrecerte trabajos de calidad que impulsen tu éxito en el mercado actual."
            icon="/experience/acentus.png"
            technologiesBadges={[
              "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
              "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
              "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
              "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
              "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
              "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
              "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white",
              "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
              "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
              "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
              "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
            ]}
            url="https://acentus.com.ar/"
          />
        </div>
      </Section>
    </div>
  );
};

export default ExperienceTemplate;
