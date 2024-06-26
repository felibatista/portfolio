"use client";

import { motion } from "framer-motion";

export function InfoCard({
  type,
  title,
  description,
  left,
}: {
  type: string;
  title: string;
  description: string;
  left: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: left ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 items-center lg:items-start pb-[2rem] lg:pb-0"
    >
      <h3 className="font-semibold text-description-sm md:text-description flex items-center mb-4">
        <span className="font-extrabold md:mr-2 text-[4vh] text-secondary">
          /
        </span>
        {type}
      </h3>
      <h4 className="font-bold text-title-sm md:text-title leading-[1.1] lg:text-start text-center">
        {title}
      </h4>

      <p className="text-description-sm md:text-description text-center lg:text-left">
        {`${description}`}
      </p>
    </motion.div>
  );
}
