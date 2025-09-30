"use client";

import { ChevronDownIcon, DownloadIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function HomeHero() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "cv.pdf";
    link.download = "CV - Felipe Batista - Backend Developer.pdf";
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
      className="flex flex-col md:justify-end justify-center  text-center md:text-left md:my-0"
    >
      <h1 className="font-bold text-title-sm md:text-title leading-[1.1] pb-2">
        <span className="text-primary">FELIPE BATISTA</span>
        <span className="sr-only"> - felibatista - Felipe Rosario</span>
      </h1>
      <div className="relative">
        <span className=" text-description-sm md:text-description font-semibold pb-2">
          @ Backend Developer | Spring Boot, .NET, Python & Odoo Specialist
        </span>

        <img
          src="/underlines/violet.png"
          alt="Felipe Batista Backend Developer"
          className="absolute bottom-[-11.5vh] left-[50%] translate-x-[-50%] md:translate-x-0 w-[30vh] md:left-0 h-[30vh] opacity-20"
        />
      </div>

      <p className="mt-1 text-description-xs md:text-description-sm">
        Tengo experiencia en la administración y despliegue de servidores de AWS
        y Azure, así como en contenedores Docker, Kubernetes y microservicios.
        Participe en proyectos que integraron GPT-4 y otros modelos para
        servicios de IA. Uno de mis puntos fuertes es mi experiencia en bases de
        datos, donde he trabajado con un gran flujo de datos y consultas
        sofisticadas.
      </p>

      <button
        onClick={downloadCV}
        style={{
          boxShadow: "-3px 1px 20px 11px rgba(29,47,111,0.20)",
        }}
        className="bg-background-secondary inline-flex mt-4 items-center md:mx-0 px-4 mx-auto text-black rounded-xl py-2 w-fit hover:scale-105 transition-all border border-black border-opacity-20"
      >
        Descargar CV <DownloadIcon className="h-[2.5vh] w-[2.5vh] ml-2" />
      </button>
    </motion.div>
  );
}
