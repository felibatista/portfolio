"use client";

import { motion } from "framer-motion";

export function MeEarly() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 md:py-8 md:pr-8 items-center md:items-start"
    >
      <h3 className="font-semibold text-xl flex items-center mb-4">
        <span className="font-extrabold md:mr-2 text-4xl text-[#7d6b6b]">
          /
        </span>
        POCO TIEMPO LUEGO
      </h3>
      <h4 className="font-bold text-[45px] lg:text-[50px] leading-[1.1]  md:text-start text-center">
        Mis primeros pasos en .NET
      </h4>

      <p className="text-[22px] lg:text-[20px] text-center md:text-left">
        {`A mediados de 2018, empecé a aprender C# y .NET, intentando hacer aplicaciones de escritorio.
        También empecé a aprender SQL, para poder hacer bases de datos para mis aplicaciones. Mi primer proyecto
        de API RESTful fue un gestor de tareas.
        `}
      </p>
    </motion.div>
  );
}
