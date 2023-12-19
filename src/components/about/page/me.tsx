"use client";

import Section from "@/components/section";

import { MeInfo } from "./me-info";
import { MeGo } from "./me-go";
import { motion } from "framer-motion";
import { MeEarly } from "./me-eatly";

export function AboutPageMe() {
  return (
    <div
      id="me"
      className="bg-[#18181b] flex items-center shrink-0 z-10 py-[4rem]"
    >
      <Section>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 space-y-[4rem] gap-0 mt-10 md:mt-0 items-center">
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
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl shadow-xl"
            src="/about/mine.jpg"
            alt="Minecraft"
          />
          <MeEarly />

          <MeGo />
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl shadow-xl"
            src="/about/mine.jpg"
            alt="Minecraft"
          />
        </div>
      </Section>
    </div>
  );
}
