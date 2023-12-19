"use client";

import { motion } from "framer-motion";

export function MeInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 items-center lg:items-start pb-[2rem] lg:pb-0"
    >
      <h3 className="font-semibold text-xl flex items-center mb-4">
        <span className="font-extrabold lg:mr-2 text-4xl text-[#7d6b6b]">
          /
        </span>
        INICIOS
      </h3>
      <h4 className="font-bold text-[45px] lg:text-[50px] leading-[1.1]  lg:text-start text-center">
        Empezando con Java en Minecraft
      </h4>

      <p className="text-[22px] lg:text-[20px] text-center lg:text-left">
        {`Mi primer contacto con la programación fue en el año 2017, 
        años despues de empezar a jugar Minecraft. En ese momento, 
        me interesó mucho la programación de plugins para servidores de Minecraft, 
        por lo que empecé a aprender Java. Lo que me llevó a encontrar mi pasión por la programación.
        
        `}
      </p>
    </motion.div>
  );
}
