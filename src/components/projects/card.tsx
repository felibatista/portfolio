"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ProjectCard({
  name,
  description,
  image,
  link,
  techs,
  hover,
  setHover,
}: {
  name: string;
  description: string;
  techs: string[];
  image: string;
  link: string;
  hover: string;
  setHover: (value: string) => void;
}) {
  const handleHover = () => {
    setHover(name);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex flex-col gap-4 items-center md:items-start row-span-2 h-full group hover:scale-105 transform transition-all duration-300 cursor-pointer",
        hover !== name && hover !== "" ? "opacity-30" : "opacity-100"
      )}
    >
      <div
        className="rounded-xl bg-[#242428] w-full flex flex-col md:h-full overflow-hidden"
        onMouseEnter={handleHover}
        onMouseLeave={() => setHover("")}
      >
        <div className="p-[4vh]">
          <div className="gap-4 hidden md:flex">
            {techs.map((tech) => (
              <div key={tech} className="px-4 py-2 bg-primary rounded-lg w-fit">
                <h3 className="text-description-sm md:text-description-sm">
                  {tech}
                </h3>
              </div>
            ))}
          </div>
          <h3 className="font-semibold text-[4vh] leading-[1.1] md:mt-[3rem]">
            {name}
          </h3>
          <p className=" text-description-sm md:text-description mt-3">
            {description}
          </p>
          <div className="gap-2 md:hidden flex mt-4 flex-wrap">
            {techs.map((tech) => (
              <div key={tech} className="px-4 py-2 bg-primary rounded-lg w-fit">
                <h3 className="text-lg">{tech}</h3>
              </div>
            ))}
          </div>
        </div>

        <img
          src={link}
          alt={name}
          className="hidden relative bottom-[-10vh] md:flex w-full h-full object-cover rounded-xl group-hover:scale-[1.15] scale-110 transform transition-all duration-300"
        />
      </div>
    </motion.div>
  );
}
