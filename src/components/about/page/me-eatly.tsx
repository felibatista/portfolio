"use client";

import { motion } from "framer-motion";

export function MeEarly() {
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
        POCO TIEMPO LUEGO
      </h3>
      <h4 className="font-bold text-[45px] lg:text-[50px] leading-[1.1] lg:text-start text-center">
        Mis primeros pasos en .NET y Spring Boot
      </h4>

      <p className="text-[22px] lg:text-[20px] text-center lg:text-left">
        {`A mediados de 2018, empecé a aprender C# y .NET, intentando hacer aplicaciones de escritorio.
        También empecé a aprender SQL, para poder hacer bases de datos para mis aplicaciones. Mi primer proyecto
        de API RESTful fue un gestor de tareas. Mas tarde mi próximo "gran paso" sería un sistema de gestión de empleados y clientes con Spring Boot.
        `}
      </p>
    </motion.div>
  );
}
