"use client";

import Section from "@/components/section";

import { Navbar } from "@/components/navbar";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function AboutPageHero() {
  return (
    <Section className="w-full relative flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        className="flex flex-col items-center justify-center w-full z-10 flex-1"
      >
        <h3 className="font-semibold text-xl flex items-center mb-4">
          <span className="font-extrabold md:mr-2 text-4xl text-[#7d6b6b]">
            /
          </span>
          SOBRE MI
        </h3>
        <h1 className="font-bold text-[45px] lg:text-[50px] leading-[1.1] pb-2">
          Mi vida en <span className="text-[#b19797]">detalle</span>
        </h1>
        <p className="mt-4 text-[22px] lg:text-[20px] text-center flex h-fit">
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
          className="rounded-xl mt-[4rem] border-white border px-1 py-2 cursor-pointer hover:scale-105 transition-all opacity-70"
        >
          <ChevronDownIcon className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </Section>
  );
}
