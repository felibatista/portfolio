"use client";

import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
      className="flex flex-col md:justify-end justify-center  text-center md:text-left md:my-0"
    >
      <h1 className="font-bold text-title leading-[1.1] pb-2">
        <span className="text-primary">FELIPE BATISTA </span>
      </h1>
      <span className=" text-xl font-semibold pb-2">
      @ Backend Developer
      </span>
      <p className="mt-1 text-description">
        Mi enfoque se centra en la implementación de lógica de servidor, gestión
        de bases de datos, sistemas de seguridad, optimización del rendimiento.
        Además de la escabilidad y el código limpio.
      </p>
    </motion.div>
  );
}
