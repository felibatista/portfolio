import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "flex flex-col gap-4 items-center md:items-start row-span-2 h-full group hover:scale-105 transform transition-all duration-300 cursor-pointer",
        hover !== name && hover !== "" ? "opacity-30" : "opacity-100"
      )}
      onMouseEnter={handleHover}
      onMouseLeave={() => setHover("")}
    >
      <div className="rounded-xl bg-[#242428] w-full flex flex-col h-full overflow-hidden">
        <div className="p-8">

        <div className="flex gap-4">
          {techs.map((tech) => (
            <div key={tech} className="px-4 py-2 bg-[#7d6b6b] rounded-lg w-fit">
              <h3 className="text-lg">{tech}</h3>
            </div>
          ))}
        </div>
        <h3 className="font-semibold text-[30px] lg:text-[35px] leading-[1.1] mt-[3rem]">
          {name}
        </h3>
        <p className=" text-[18px] mt-3">{description}</p>
        </div>

        <img
          src={link}
          alt={name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-110 transform transition-all duration-300"
        />
      </div>
    </div>
  );
}
