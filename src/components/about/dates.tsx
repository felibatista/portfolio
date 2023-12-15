"use client";
import { motion } from "framer-motion";

export function Date() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 font-bold text-[25px] leading-[1.1] mt-[5rem] md:mt-0 ">
        <div className="flex items-center gap-2 font-bold justify-center md:justify-start">
          <h3 className="text-[4rem]">+4</h3>
          <p>años de experiencia</p>
        </div>

        <div className="flex items-center gap-2 font-bold justify-center md:justify-start">
          <h3 className="text-[4rem]">+10</h3>
          <p>proyectos terminados</p>
        </div>
      </div>

      <p className="mt-6 text-[22px] lg:text-[20px] text-center md:text-left">
        He trabajado en proyectos de todo tipo, a pequeña y gran escala. Siempre
        estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.
      </p>
    </motion.div>
  );
}
