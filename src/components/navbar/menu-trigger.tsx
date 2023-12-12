"use client";

import {
  Cross1Icon,
  HamburgerMenuIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MenuToggle } from "./menu-toggle";
import { NAVBAR_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export function MenuTrigger() {
  const [open, toggleOpen] = useCycle(false, true);

  //remove overflow hidden from body when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div>
      <motion.div
        animate={open ? "open" : "closed"}
        className="ml-6 hover:scale-105 right-0 absolute top-1 bottom-0 z-20 flex items-center"
      >
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: { duration: 0.2 },
              borderRadius: "100%",
            }}
            initial={{ opacity: 0, scale: 0.2, borderRadius: "100%" }}
            animate={{ opacity: 1, scale: 1, borderRadius: "0%" }}
            className="w-screen h-screen fixed left-0 top-0 z-10 bg-[#221d1d]"
          >
            <motion.ul
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0.1 },
              }}
              className="flex flex-col justify-center items-center h-full font-semibold text-[40px] md:text-[50px] lg:text-[60px]"
            >
              {NAVBAR_ITEMS.map((item) => (
                <li key={item.name}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
