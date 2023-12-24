import { ArrowRightIcon, ThickArrowRightIcon } from "@radix-ui/react-icons";
import Section from "../section";
import { DocumentsProjectCard } from "./project-card";
import { motion } from "framer-motion";

export function DocumentsProjectsSection() {
  return (
    <div id="projects" className="bg-[#18181b] flex items-center shrink-0 z-10 md:py-[7rem] py-[3rem]">
      <Section className="flex justify-start items-start w-full flex-col">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col w-full"
        >
          <h3 className="font-semibold text-lg flex items-center mb-4">
            <span className="font-extrabold mr-2 text-3xl text-[#7d6b6b]">
              /
            </span>
            PROYECTOS
          </h3>
          <h4 className="font-bold text-[35px] md:text-[45px] lg:text-[50px] leading-[1.1] lg:text-start text-center">
            Mis proyectos personales
          </h4>
        </motion.div>

        <DocumentsProjectCard
          title={"Conversor de monedas"}
          techs={"Angular, NextJS, TailwindCSS, SQLite, TypeScript, .NET, C#"}
          description={
            "Este proyecto fue realizado para una materia en la facultad, el cual consiste en un conversor de monedas. El mismo se conecta a una API externa para obtener los datos de las monedas y realizar las conversiones. Cuenta con un sistema de autenticación y registro de usuarios, para que puedan guardar sus conversiones. Además de eso, cuenta con un sistema de administración para manejar la aplicación."
          }
          path={"/currency-conversor"}
          structure={"Monolítica"}
          sourceCodeUrl={"https://github.com/felibatista/coins-conversor"}
          images={["/documents/conversor.png", "/documents/conversor-2.png"]}
          time={"1 semana"}
        ></DocumentsProjectCard>
      </Section>
    </div>
  );
}