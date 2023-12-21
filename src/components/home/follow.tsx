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
      className: "bg-[#18181b] text-white border-0",
      title: "¡Datos copiados al portapapeles correctamente!",
      description: "Contenido: " + link,
    });

    navigator.clipboard.writeText(link);
  }

  return (
    <div className="flex flex-col gap-2">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h2 className="font-bold text-xl">CONTACTO</h2>
        <ul className="flex gap-2 text-[20px] mt-4">
          {SOCIAL_LINKS.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ translateY: "-5px", transition: { duration: 0.1 } }}
              onClick={() => setData(item.name)}
              className={cn(
                "px-3 transition-all duration-300",
                isHover ? "opacity-30 hover:opacity-100 cursor-pointer" : ""
              )}
            >
              {!item.copy ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10"
                >
                  <img src={item.icon} alt={item.name} className="w-10 h-10" />
                </a>
              ) : (
                <img onClick={() => handleToast(item.link)} src={item.icon} alt={item.name} className="w-10 h-10" />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
