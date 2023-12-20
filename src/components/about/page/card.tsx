import { motion } from "framer-motion";
import { InfoCard } from "./info-card";
import { cn } from "@/lib/utils";

export function CardSection({
  type,
  title,
  description,
  left,
  image,
  children,
}: {
  type: string;
  title: string;
  description: string;
  left: boolean;
  image: string;
  children?: React.ReactNode;
}) {
  if (left) {
    return (
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-0 mt-10 lg:mt-0 items-center relative">
        <InfoCard
          type={type}
          title={title}
          description={description}
          left={true}
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl shadow-xl"
          src={image}
          alt={type}
        />
        {children}
      </div>
    );
  }

  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:gap-16 gap-0 mt-10 lg:mt-0 items-center relative">
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-xl shadow-xl"
        src={image}
        alt={type}
      />
      <InfoCard
        type={type}
        title={title}
        description={description}
        left={true}
      />
      {children}
    </div>
  );
}
