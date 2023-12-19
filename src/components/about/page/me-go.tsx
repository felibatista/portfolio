"use client";

import { motion } from "framer-motion";

export function MeGo() {
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
        AÑOS DESPUÉS
      </h3>
      <h4 className="font-bold text-[45px] lg:text-[50px] leading-[1.1]  md:text-start text-center">
        Siguiendo con el desarrollo web
      </h4>

      <p className="text-[22px] lg:text-[20px] text-center md:text-left">
        {`En el año 2020, comencé por las bases
        de HTML, CSS y JavaScript. Luego de eso, empecé a aprender React y Next.js,
        con los cuales hice mis primeros proyectos y páginas web.
        `}
      </p>
    </motion.div>
  );
}
