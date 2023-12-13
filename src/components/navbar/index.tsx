"use client";

import { motion } from "framer-motion";
import { ContainerItems } from "./container-items";
import { MenuTrigger } from "./menu-trigger";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }}
      viewport={{ once: true }}
      className="flex justify-end py-4 my-8 items-center relative z-10"
    >
      <ContainerItems />
      <MenuTrigger />
    </motion.nav>
  );
}
