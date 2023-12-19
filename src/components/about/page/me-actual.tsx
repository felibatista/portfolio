"use client";

import { motion } from "framer-motion";

export function MeActual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 items-center lg:items-start pb-[2rem] lg:pb-0"
    >
      <h3 className="font-semibold text-xl flex items-center mb-4">
        <span className="font-extrabold lg:mr-2 text-4xl text-[#7d6b6b]">
          /
        </span>
        ACTUALIDAD
      </h3>
      <h4 className="font-bold text-[45px] lg:text-[50px] leading-[1.1] lg:text-start text-center">
        Mejorando mis habilidades
      </h4>

      <p className="text-[22px] lg:text-[20px] text-center lg:text-left">
        {`Actualmente, me decidí por el mundo back-end, siento que es el lugar donde más disfruto programar. 
        Voy en progreso con proyectos personales, y también estoy aprendiendo nuevas tecnologías,
        tales como Django y Laravel, que son frameworks que me llaman mucho la atención. 
        `}
      </p>
    </motion.div>
  );
}
