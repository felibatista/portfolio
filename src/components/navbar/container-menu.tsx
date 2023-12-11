import { motion } from "framer-motion";

export function ContainerMenu() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-screen h-screen fixed left-0 top-0 z-10 bg-black"
    ></motion.div>
  );
}
