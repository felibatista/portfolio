import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function DocumentsHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      className="flex flex-col items-center justify-center w-full z-[11] flex-1 md:pb-[6rem]"
    >
      <h3 className="font-semibold text-xl flex items-center mb-4">
        <span className="font-extrabold md:mr-2 text-4xl text-[#7d6b6b]">
          /
        </span>
        DOCUMENTACIONES
      </h3>
      <h1 className="font-bold text-[45px] lg:text-[50px] leading-[1.1] pb-2 text-center">
        APIs y explicaciones
      </h1>
      <p className="mt-4 text-[22px] lg:text-[20px] text-center flex h-fit">
        Aqui encontrarás la documentacion de las API open-source que he creado y
        las explicaciones de las mismas. Cada una de ellas tiene sus propios
        ejemplos y métodos para que puedas usarlas en tus proyectos.
      </p>
      <button
        onClick={() => {
          const element = document.querySelector("#projects");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
        className="rounded-xl mt-[3rem] border-white border px-1 py-2 cursor-pointer hover:scale-105 transition-all opacity-70"
      >
        <ChevronDownIcon className="w-6 h-6 animate-bounce" />
      </button>
    </motion.div>
  );
}
