"use client";

import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
      className="flex flex-col max-w-2xl md:justify-end text-center justify-center md:text-left my-[2rem] md:my-0"
    >
      <h1 className="font-bold  text-[35px] md:text-[45px] lg:text-[50px] leading-[1.1] pb-4 border-b-[10px] border-white">
        Soy <span className="text-[#b19797]">Felipe Batista</span>,
        <br />
        Desarollador <span className="text-[#b19797]">Back-End</span>
      </h1>
      <p className="mt-4 text-[18px] lg:text-[20px]">
        Mi enfoque se centra en la implementación de lógica de servidor, gestión
        de bases de datos, sistemas de seguridad, optimización del rendimiento.
        Además de la escabilidad y el código limpio.
      </p>
    </motion.div>
  );
}
