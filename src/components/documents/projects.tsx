import { ArrowRightIcon, ThickArrowRightIcon } from "@radix-ui/react-icons";
import Section from "../section";
import { DocumentsProjectCard } from "./project-card";
import { motion } from "framer-motion";

export function DocumentsProjectsSection() {
  return (
    <div
      id="projects"
      className="bg-background-primary flex items-center shrink-0 z-10 md:py-[7rem] py-[3rem] overflow-hidden"
    >
      <Section className="flex md:justify-start justify-center items-center w-full flex-col md:items-start">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col w-full"
        >
          <h3 className="font-semibold text-description-sm md:text-description flex items-center mb-4 justify-center md:justify-start">
            <span className="font-extrabold md:mr-2 text-[4vh] text-secondary">
              /
            </span>
            PROYECTOS
          </h3>
          <h4 className="font-bold text-title-sm md:text-title leading-[1.1] lg:text-start text-center">
            Mis proyectos personales
          </h4>
        </motion.div>

        <DocumentsProjectCard
          title={"Conversor de monedas"}
          techs={"Angular, DaisyUI, TailwindCSS, SQLite, TypeScript, .NET, C#"}
          description={
            "Este proyecto fue realizado para una materia en la facultad, el cual consiste en un conversor de monedas. El mismo se conecta a una API externa para obtener los datos de las monedas y realizar las conversiones. Cuenta con un sistema de autenticación y registro de usuarios, para que puedan guardar sus conversiones. Además de eso, cuenta con un sistema de administración para manejar la aplicación."
          }
          path={"/currency-conversor"}
          structure={"Monolítica"}
          sourceCodeUrl={"https://github.com/felibatista/coins-conversor"}
          images={["/documents/conversor.png", "/documents/conversor-2.png"]}
          time={"1 semana"}
        ></DocumentsProjectCard>

        <DocumentsProjectCard
          title={"URL Shortener"}
          techs={"React, NextJS, TailwindCSS, SQLite, TypeScript, .NET, C#"}
          description={
            "Esta aplicación permite acortar URLs, para que sean más fáciles de compartir. Cuenta con un sistema de autenticación y registro de usuarios, para que puedan guardar sus URLs acortadas. Cada URL tendrá una o más categorías asignadas, para que puedan ser filtradas en el panel de usuario, donde también habrá información sobre ellas."
          }
          path={"/url-shortener"}
          structure={"Monolítica"}
          sourceCodeUrl={"https://github.com/felibatista/url-shortener"}
          images={["/documents/links-1.png", "/documents/links-3.png"]}
          time={"5 días"}
        ></DocumentsProjectCard>
      </Section>
    </div>
  );
}
