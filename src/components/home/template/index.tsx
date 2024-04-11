import Section from "@/components/section";

import { motion } from "framer-motion";
import { HomeHero } from "../hero";
import { HomeRightSide } from "../side";
import { NavbarTemplate } from "@/components/navbar/template";

export function HomeTemplate() {
  return (
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
          className="absolute hidden md:block bottom-[-4rem] mx-auto left-[50%] translate-x-[-50%] h-full z-[1] opacity-70"
        />
      </motion.div>
      <NavbarTemplate />

      <div className="grid md:grid-cols-2 grid-cols-1 flex-1 md:gap-16 gap-8 md:mt-0 z-[3] mb-[2rem]">
        <HomeHero />
        <HomeRightSide />
      </div>
    </Section>
  );
}
