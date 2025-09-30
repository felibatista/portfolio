"use client";

import Section from "@/components/section";

import { NavbarTemplate } from "@/components/navbar/template";
import { motion } from "framer-motion";
import { DocumentsHero } from "../hero";
import { DocumentsProjectsSection } from "../projects";

export function DocumentsTemplate() {
  return (
    <main>
      <Section className="w-full relative flex-col overflow-hidden">
        <NavbarTemplate />
        <DocumentsHero />

        <div className="hidden lg:block absolute w-full h-full overflow-hidden">
          <motion.img
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.4 },
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute hidden md:block z-[1] h-[55vh] bottom-[-22vh] right-[30vh]"
            src="/documents/connection.svg"
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
            className="absolute hidden md:block mx-auto z-[10] h-[50vh] bottom-[-20vh] left-[-4vh] right-0"
            src="/documents/api.svg"
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
            className="absolute hidden md:block  mx-auto z-[1] h-[55vh]  bottom-[-30vh] left-[27vh]"
            src="/documents/text.svg"
            alt=""
          />
        </div>
      </Section>

      <DocumentsProjectsSection />
    </main>
  );
}
