"use client";

import Section from "@/components/section";

import { About } from "@/components/about";
import { Home } from "@/components/home";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { motion } from "framer-motion";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Page() {
  return (
    <div className="relative">
      <Toaster />
      <Section className="flex-col relative overflow-hidden snap-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute hidden md:block bottom-0 left-0 right-0 top-0 z-[1]"
        >
          <img
            src="me.png"
            alt=""
            className="absolute hidden md:block bottom-[-4rem] mx-auto left-[50%] translate-x-[-50%] h-[1000px] z-[1] opacity-20"
          />
        </motion.div>
        <Navbar />
        <div className="flex justify-center flex-1">
          <Home />
        </div>
      </Section>

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}
