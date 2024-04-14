"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "../ui/link";
import { HomeFollowItems } from "./follow";

export function HomeRightSide() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
      className="flex flex-col gap-[2vh] md:justify-end md:w-[70%] mt-[2vh] ml-auto w-full items-center text-center md:text-start md:items-start md:pb-0 pb-[4vh] "
    >
      <div className="flex-col gap-[1vh] pb-[2vh] border-b border-white border-opacity-30 hidden md:flex">
        <h2 className="font-semibold text-title-sm md:text-title-sm text-primary">
          SOBRE MI{" "}
        </h2>
        <p className="text-description-sm md:text-description-sm">
          Me encanta enfrentar desafíos técnicos y encontrar soluciones
          innovadoras para optimizar el funcionamiento de las aplicaciones.
        </p>

        <ButtonLink name="LEER MÁS" href="/about" className="mt-4" />
      </div>

      <div className="flex-col gap-2 pb-6 border-b border-white border-opacity-30 hidden md:flex">
        <h2 className="font-semibold text-title-sm md:text-title-sm text-primary">
          PROYECTOS
        </h2>
        <p className="text-description-sm md:text-description-sm">
          Estos son algunos de los proyectos en los que he trabajado. Si desea
          ver más y sus procesos, puede consultar mi perfil de Github.
        </p>

        <ButtonLink name="VER TODO" href="/about" className="mt-4" />
      </div>

      <HomeFollowItems />
    </motion.div>
  );
}
