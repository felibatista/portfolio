"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "../ui/use-toast";

export function HomeFollowItems() {
  const [isHover, setIsHover] = useState(false);
  const [data, setData] = useState<string>("");
  const [link, setLink] = useState<string>("");

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  function handleToast(link: string) {
    toast({
      className: "bg-background-primary text-black border-0",
      title: "¡Datos copiados al portapapeles correctamente!",
      description: "Contenido: " + link,
    });

    navigator.clipboard.writeText(link);
  }

  return (
    <div className="flex flex-col gap-2">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h2 className="font-bold text-title-sm md:text-title-sm text-primary">
          CONTACTO
        </h2>
        <ul className="flex text-[20px] mt-4">
          {SOCIAL_LINKS.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ translateY: "-5px", transition: { duration: 0.1 } }}
              onClick={() => setData(item.name)}
              className={cn(
                "px-[1.5vh] transition-all duration-300",
                isHover ? "opacity-30 hover:opacity-100 cursor-pointer" : ""
              )}
            >
              {!item.copy ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[4vh]"
                >
                  <img src={item.icon} alt={item.name} className="h-[4vh]" />
                </a>
              ) : (
                <img
                  onClick={() => handleToast(item.link)}
                  src={item.icon}
                  alt={item.name}
                  className="h-[4vh]"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
