"use client";

import { motion } from "framer-motion";
import { NavbarContainerItems } from "../container-items";
import { NavbarMenuTrigger } from "../menu-trigger";

export function NavbarTemplate() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }}
      viewport={{ once: true }}
      className="flex justify-end py-[3vh] my-[1.5vh] items-center relative z-20"
    >
      <NavbarContainerItems />
      <NavbarMenuTrigger />
    </motion.nav>
  );
}
