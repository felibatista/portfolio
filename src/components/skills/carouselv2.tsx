import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SkillCard } from "./card";
import { SKILLS } from "@/lib/constants";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        
      }}
      className="w-full max-w-sm md:max-w-md lg:max-w-[50%] p-4 md:p-0 xl:max-w-[50%] mx-auto mt-[4vh]"
    >
      <CarouselContent>
        {SKILLS.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-[2vh]">
            <SkillCard
              key={index}
              title={item.name}
              image={item.icon}
              description={item.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-4" />
      <CarouselNext />
    </Carousel>
  );
}
