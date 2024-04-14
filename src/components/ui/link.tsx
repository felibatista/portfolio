"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function ButtonLink({
  name,
  href,
  className,
}: {
  name: string;
  href: string;
  className?: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <AnimatePresence>
      <a
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={cn(
          className,
          "underline text-description-sm md:text-description mt-[1vh] underline-offset-[6px] inline-flex cursor-pointer opacity-80 hover:opacity-100 transition-all hover:translate-x-2 hover:scale-[1.02]"
        )}
      >
        {name}
        {hover && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRightIcon className="w-[3vh] h-[3vh] inline-block ml-1" />
          </motion.div>
        )}
      </a>
    </AnimatePresence>
  );
}
