"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "../ui/link";

export function ContactTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 md:py-8 md:pr-8 items-center md:items-start"
    >
      <h3 className="font-semibold text-lg flex items-center mb-4">
        <span className="font-extrabold mr-2 text-3xl text-[#7d6b6b]">/</span>
        CONTACTO
      </h3>
      <h4 className="font-bold text-[35px] md:text-[45px] lg:text-[50px] leading-[1.1]  md:text-start text-center">
        ¿Estás interesado en trabajar conmigo?
      </h4>

      <p className="text-[22px] lg:text-[20px] text-center md:text-left">
        {`Siempre estoy buscando nuevos proyectos y oportunidades. Si tienes una
        propuesta, no dudes en contactarme.`}
      </p>
    </motion.div>
  );
}
