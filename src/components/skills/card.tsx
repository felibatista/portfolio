import { cn } from "@/lib/utils";

export function SkillCard({
  title,
  image,
  description,
  className,
}: {
  title: string;
  image: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        "bg-[#18181b] md:rounded-xl p-8 flex flex-col text-left h-[400px] md:flex-shrink-0 snap-center items-center md:items-start relative w-[20rem] lg:w-[18rem]"
      )}
    >
      <img src={image} alt={title} className="w-[6rem] h-[6rem] mt-[5rem]" />

      <h3 className="text-3xl font-bold uppercase mt-6">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
