"use client";

import { motion } from "framer-motion";

export function AboutSectionExperience() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 font-bold text-title-sm  leading-[1.1] mt-[5rem] md:mt-0">
        <div className="flex items-center gap-[1vh] font-bold justify-center md:justify-start md:flex-row flex-col">
          <h3 className="text-[8vh]">+4</h3>
          <p>años de experiencia</p>
        </div>

        <div className="flex items-center gap-2 font-bold justify-center md:justify-start w-fit mx-auto md:flex-row flex-col">
          <h3 className="text-[8vh]">+10</h3>
          <p>proyectos</p>
        </div>
      </div>

      <p className="mt-6 text-description-sm md:text-description text-center">
        He participado en una variedad de proyectos, tanto pequeños como a gran
        escala, lo que me ha brindado una amplia experiencia en diferentes
        entornos y tecnologías. Siempre estoy motivado por aprender y adoptar
        nuevas tecnologías para mejorar mis habilidades y enfrentar desafíos
        cada vez más complejos en el desarrollo de software.
      </p>
    </motion.div>
  );
}
