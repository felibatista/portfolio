"use client";

import { motion } from "framer-motion";

const ExperienceTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 lg:py-8 lg:pr-8 items-center lg:items-start h-fit row-span-1 w-full"
    >
      <h3 className="font-semibold text-description-sm md:text-description flex items-center mb-4">
        <span className="font-extrabold md:mr-2 text-[4vh] text-secondary">
          /
        </span>
        EXPERIENCIA
      </h3>
      <h4 className="font-bold text-title-sm md:text-title leading-[1.1] lg:text-start text-center">
       ¿Donde se puede ver mi trabajo profesional? Aquí te lo muestro
      </h4>
    </motion.div>
  );
};

export default ExperienceTitle;
