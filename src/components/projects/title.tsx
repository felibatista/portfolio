"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "../link";

export function ProjectsTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 md:py-8 md:pr-8 items-center md:items-start h-fit row-span-1"
    >
      <h3 className="font-semibold text-lg flex items-center mb-4">
        <span className="font-extrabold mr-2 text-3xl text-[#7d6b6b]">/</span>
        PROYECTOS
      </h3>
      <h4 className="font-bold text-[35px] md:text-[45px] lg:text-[50px] leading-[1.1] lg:text-start text-center">
        Mi trabajo personal más reciente
      </h4>

      <p className="text-[18px] lg:text-[20px] text-center lg:text-left">
        {`Tengo experiencia en proyectos de todo tipo, a pequeña y gran escala. Siempre
        estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.`}
      </p>

      <ButtonLink
        name="VER TODOS LOS PROYECTOS"
        href="/about"
        className="text-xl"
      />
    </motion.div>
  );
}
