"use client";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import { NAVBAR_ITEMS } from "@/lib/constants";
import { useEffect } from "react";
import { NavbarMenuToggle } from "./menu-toggle";

export function NavbarMenuTrigger() {
  const [open, toggleOpen] = useCycle(false, true);

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
        className="ml-6 right-0 absolute top-1 bottom-0 z-20 flex items-center"
      >
        <NavbarMenuToggle toggle={() => toggleOpen()} />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            exit={{
              scale: 0,
              transition: { duration: 0.2 },
              borderRadius: "100%",
            }}
            initial={{ opacity: 0, scale: 0.2, borderRadius: "100%" }}
            animate={{ opacity: 1, scale: 1, borderRadius: "0%" }}
            className="w-screen h-screen fixed left-0 top-0 z-10 bg-background-primary"
          >
            <motion.ul
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0.1 },
              }}
              className="flex flex-col justify-center items-center h-full font-semibold text-[6vh]"
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
