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
        <h3 className="font-semibold text-description-sm md:text-description flex items-center mb-4">
          <span className="font-extrabold md:mr-2 text-[4vh] text-secondary">
            /
          </span>
          SOBRE MI
        </h3>
        <div className="relative">
          <h1 className="font-bold text-title-sm md:text-title leading-[1.1] pb-2 text-center z-[0]">
            Mi vida en detalle
          </h1>

          <img
            src="/underlines/cyan.png"
            alt="Felipe Batista desarrollador"
            className="absolute bottom-0 left-[50%] translate-x-[-50%] md:translate-x-0 md:left-[23vh] h-[3vh] w-[70vh] md:hidden md:w-[35vh] opacity-30 md:opacity-50 z-[10]"
          />
        </div>
        <p className="mt-4 text-description-sm md:text-description text-center flex h-fit max-w-[800px]">
          Me llamo Felipe Batista, tengo 21 años y soy de
          Argentina. Soy Backend Developer con más de 4 años de experiencia
          especializado en Spring Boot, .NET y Java. Apasionado por la
          tecnología y la programación desde los 13 años. Actualmente estoy trabajando como desarrollador
          freelance y en relación de dependencia.
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
