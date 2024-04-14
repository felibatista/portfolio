"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "../ui/link";

const JobCard = ({
  name,
  description,
  icon,
  technologiesBadges,
  url,
}: {
  name: string;
  description: string;
  icon: string;
  technologiesBadges: string[];
  url: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      viewport={{ once: true }}
      className="flex flex-col h-full justify-between"
    >
      <div className="flex gap-2 items-center md:justify-normal justify-center mt-[4vh] md:mt-0">
        <img src={icon} alt={name} className="w-[5vh] h-[5vh]" />
        <h3 className="text-title-sm">{name}</h3>
      </div>
      <p className=" text-description-sm md:text-description italic mt-[1vh] text-center md:text-start">
        {description}
      </p>
      <div className="flex gap-[1vh] flex-wrap mt-[2vh] justify-center md:justify-start">
        {technologiesBadges.map((badge, index) => (
          <img key={index} src={badge} alt={"Badge " + index} />
        ))}
      </div>
      <div className=" flex justify-center md:justify-start mt-[2vh]">
        <ButtonLink
          href={url}
          target="_blank"
          name="Visitar página"
          className="mt-[2vh]"
        />
      </div>
    </motion.div>
  );
};

export default JobCard;
