"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "../../ui/link";

export function AboutSectionMe() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 md:border-r border-white border-opacity-70 md:py-8 md:pr-8 items-center md:items-start"
    >
      <h3 className="font-semibold text-description flex items-center mb-4">
        <span className="font-extrabold md:mr-2 text-[4vh] text-secondary">
          /
        </span>
        SOBRE MI
      </h3>
      <h4 className="font-bold text-title leading-[1.1]  md:text-start text-center">
        Creando mis aplicaciones desde los 13 años
      </h4>

      <p className="text-description text-center md:text-left">
        {`Comencé con Java y servidores en Minecraft. Desde entonces he estado
        aprendiendo y desarrollando mis habilidades. Mi orientación fue elegida
        por la curiosidad de saber como funcionaba todo por "debajo del capó"`}
      </p>

      <ButtonLink name="MÁS SOBRE MI" href="/about" />
    </motion.div>
  );
}
