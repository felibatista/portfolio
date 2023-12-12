"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Follow() {
  const [isHover, setIsHover] = useState(false);
  const [data, setData] = useState<string>("");

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
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
              <img src={item.icon} alt={item.name} className="w-10 h-10" />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
