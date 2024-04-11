"use client";

import { NavbarTemplate } from "@/components/navbar/template";
import Section from "@/components/section";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function AboutPageHero() {
  return (
    <Section className="w-full relative flex-col overflow-hidden">
      <NavbarTemplate />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        className="flex flex-col items-center justify-center w-full z-[11] flex-1 md:pb-[6rem]"
      >
        <h3 className="font-semibold text-description flex items-center mb-4">
          <span className="font-extrabold md:mr-2 text-[4vh] text-secondary">
            /
          </span>
          SOBRE MI
        </h3>
        <h1 className="font-bold text-title leading-[1.1] pb-2 text-center">
          Mi vida en <span className="text-primary">detalle</span>
        </h1>
        <p className="mt-4 text-description text-center flex h-fit">
          Me llamo Felipe Batista, tengo 19 años y soy de Argentina. Soy una
          persona que le gusta mucho la tecnología y la programación.
          Actualmente estoy estudiando en la universidad la carrera de
          Tecnicatura en Programación.
        </p>
        <button
          onClick={() => {
            const element = document.querySelector("#me");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className="rounded-xl mt-[3rem] border-white border px-1 py-2 cursor-pointer hover:scale-105 transition-all opacity-70"
        >
          <ChevronDownIcon className="h-[3vh] w-[3vh] animate-bounce" />
        </button>
      </motion.div>

      <div className="hidden lg:block absolute w-full h-full">
        <motion.img
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.4 },
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute hidden md:block z-[1] h-[55vh] bottom-[-26vh] right-[15vh]"
          src="/about/arg-flag.svg"
          alt=""
        />

        <motion.img
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute hidden md:block mx-auto z-[10]  h-[55vh]  bottom-[-26vh] left-0 right-0"
          src="/about/coding.svg"
          alt=""
        />

        <motion.img
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 },
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute hidden md:block  mx-auto z-[1]  h-[55vh] bottom-[-35vh] left-[14vh]"
          src="/about/pc.svg"
          alt=""
        />
      </div>
    </Section>
  );
}
