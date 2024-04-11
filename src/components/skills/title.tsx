"use client";

import { motion } from "framer-motion";

export function SkillsTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 items-center lg:items-center mx-2"
    >
      <h3 className="font-semibold text-description flex items-center mb-4">
        <span className="font-extrabold md:mr-2 text-[4vh] text-secondary">
          /
        </span>
        HABILIDADES
      </h3>
      <h4 className="font-bold text-title leading-[1.1] text-center ">
        Mis herramientas en el desarrollo
      </h4>
    </motion.div>
  );
}
