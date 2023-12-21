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
      <h3 className="font-semibold text-lg flex items-center mb-4">
        <span className="font-extrabold mr-2 text-3xl text-[#7d6b6b]">/</span>
        SOBRE MI
      </h3>
      <h4 className="font-bold text-[35px] md:text-[45px] lg:text-[50px] leading-[1.1]  md:text-start text-center">
        Creando mis aplicaciones desde los 13 años
      </h4>

      <p className="text-[22px] lg:text-[20px] text-center md:text-left">
        {`Comencé con Java y servidores en Minecraft. Desde entonces he estado
        aprendiendo y desarrollando mis habilidades. Mi orientación fue elegida
        por la curiosidad de saber como funcionaba todo por "debajo del capó"`}
      </p>

      <ButtonLink name="MÁS SOBRE MI" href="/about" className="text-xl" />
    </motion.div>
  );
}
