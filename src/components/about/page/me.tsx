"use client";

import Section from "@/components/section";

import { MeInfo } from "./me-info";
import { MeGo } from "./me-go";
import { motion } from "framer-motion";
import { MeEarly } from "./me-eatly";
import { MeActual } from "./me-actual";

export function AboutPageMe() {
  return (
    <div
      id="me"
      className="bg-[#18181b] flex items-center shrink-0 z-10 md:py-[7rem] py-[3rem]"
    >
      <Section>
        <div className="flex flex-col lg:gap-[14rem] gap-[5rem]">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-0 mt-10 lg:mt-0 items-center relative">
            <MeInfo />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl shadow-xl"
              src="/about/mine.jpg"
              alt="Minecraft"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/about/arrow.svg"
              alt=""
              className="opacity-70 absolute hidden lg:block w-[200px] h-[200px] rotate-[160deg] right-[45%] bottom-[-14rem]"
            />
          </div>

          <div className="grid lg:hidden grid-cols-1 gap-0 mt-10 items-center relative">
            <MeEarly />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl shadow-xl w-full"
              src="/about/spring.png"
              alt="Spring"
            />
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-0 mt-10 lg:mt-0 items-center relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl shadow-xl w-full"
              src="/about/spring.png"
              alt="Spring"
            />
            <MeEarly />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/about/arrow.svg"
              alt=""
              className="opacity-70 hidden lg:block absolute w-[200px] h-[200px] rotate-[80deg] right-[45%] bottom-[-13rem]"
            />
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-0 mt-10 lg:mt-0 items-center relative">
            <MeGo />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl shadow-xl h-full"
              src="/about/react.png"
              alt="React"
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/about/arrow.svg"
              alt=""
              className="opacity-70 hidden lg:block absolute w-[200px] h-[200px] rotate-[160deg] right-[45%] bottom-[-13rem]"
            />
          </div>

          <div className="grid lg:hidden lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-0 mt-10 lg:mt-0 items-center relative">
            <MeActual />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl shadow-xl"
              src="/about/actual.png"
              alt="Actualidad"
            />
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-0 mt-10 lg:mt-0 items-center relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl shadow-xl"
              src="/about/actual.png"
              alt="Actualidad"
            />
            <MeActual />
          </div>
        </div>
      </Section>
    </div>
  );
}
