import { Badge } from "./ui/Badge";
import { Dispatch, SetStateAction } from "react";

export interface CardTechs {
  id: number;
  title: string;
}

export interface CardProps {
  title: string;
  description: string;
  techs: CardTechs[];
  clicked: string;
  setClicked: Dispatch<SetStateAction<string | undefined>>;
}

export default function Card({
  title,
  description,
  techs,
  clicked,
  setClicked,
}: CardProps) {
  return (
    <div
      onClick={() => {
        setClicked(title);
      }}
      className="border p-4 h-fit w-[500px] rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:z-[1]"
    >
      <h1 className="text-xl font-bold text-[--color-heading]">{title}</h1>
      <p className="text-sm mt-2">{description}</p>

      <ul className="mt-4 flex">
        {techs.map((tech) => {
          return (
            <li key={tech.id}>
              <Badge
                variant="secondary"
                className="mr-2.5 hover:bg-gray-200/80"
              >
                <span>{tech.title}</span>
              </Badge>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
