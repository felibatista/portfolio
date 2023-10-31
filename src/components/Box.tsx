import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import clsx from "clsx";

const CHILD_VARIANTS_SCALE = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.1 },
};

const CHILD_VARIANTS_LEFT = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -500 },
};

import { ReactNode } from "react";

type BoxProps = {
  color: string;
  full?: boolean;
  half?: boolean;
  transLeft?: boolean;
  transScale?: boolean;
  triggerOnce?: boolean;
  className?: string;
  children: ReactNode;
};

export const Box = ({
  color,
  full = false,
  half = false,
  transLeft = false,
  transScale = false,
  triggerOnce = false,
  className = "",
  children,
}: BoxProps) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: triggerOnce,
  });
  return (
    <div
      className={clsx("snap-child-center", className)}
      ref={ref}
      style={{
        marginTop: 2,
        marginBottom: 2,
        height: full ? "100vh" : half ? "50vh" : 120,
        width: "100%",
        backgroundColor: color,
        display: "flex",
      }}
    >
      <motion.div
        style={{
          backgroundColor: "white",
          zIndex: 40,
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={
          transLeft
            ? CHILD_VARIANTS_LEFT
            : transScale
            ? CHILD_VARIANTS_SCALE
            : CHILD_VARIANTS_SCALE
        }
      >
        {children}
      </motion.div>
    </div>
  );
};
