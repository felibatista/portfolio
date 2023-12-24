"use client";

import { SkillsCarousel } from "../carousel";
import { CarouselSize } from "../carouselv2";
import { SkillsTitle } from "../title";

export function SkillsTemplate() {
  return (
    <div className="md:h-screen snap-center shrink-0 max-w-[1300px] mx-auto min-h-screen flex justify-center items-center flex-col">
      <div className="mt-10 justify-center">
        <div className="flex md:gap-16 gap-8 mt-10 md:mt-0 items-center justify-center lg:justify-start overflow-hidden">
          <div className="flex flex-col">
            <SkillsTitle />
            <CarouselSize />
          </div>
        </div>
      </div>
    </div>
  );
}
