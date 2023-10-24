import Head from "next/head";
import { Hero } from "./Hero";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HomeGlobal() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <main>
      <motion.section
        style={{ opacity }}
        ref={targetRef}
        className="relative h-screen flex justify-center items-center py-16  bg-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x)_var(--y),_var(--color-secondary)_0%,_transparent_50%)] before:opacity-20"
      >
        <div className="relative z-10 w-full overflow-x-clip px-12">
          <Hero></Hero>
        </div>
      </motion.section>
    </main>
  );
}
