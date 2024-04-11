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
        "bg-background-primary md:rounded-xl p-[5vh] flex flex-col justify-center text-left h-[55vh] md:flex-shrink-0 snap-center items-center md:items-start relative w-auto"
      )}
    >
      <img src={image} alt={title} className="h-[15vh]" />

      <h3 className="text-title-sm font-bold uppercase mt-6">{title}</h3>
      <p className="text-gray-400 text-description-sm">{description}</p>
    </div>
  );
}
