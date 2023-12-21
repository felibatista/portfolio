"use client";

import Section from "../section";

import { motion } from "framer-motion";
import { Carousel } from "./carousel";

export function Skills() {
  return (
    <div className="md:h-screen snap-center shrink-0 max-w-[1300px] mx-auto min-h-screen flex justify-center items-center">
      <div className="mt-10 justify-center">
        <div className="flex md:gap-16 gap-8 mt-10 md:mt-0 items-center justify-center lg:justify-start overflow-hidden">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 items-center lg:items-start"
            >
              <h3 className="font-semibold text-lg flex items-center mb-4">
                <span className="font-extrabold mr-2 text-3xl text-[#7d6b6b]">
                  /
                </span>
                HABILIDADES
              </h3>
              <h4 className="font-bold text-[35px] md:text-[45px] lg:text-[50px] leading-[1.1] md:text-start text-center ">
                Mis herramientas en el desarrollo
              </h4>
            </motion.div>

            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
