import Section from "../section";
import { Carousel } from "./carousel";

export function Skills() {
  return (
    <div className="h-screen snap-center shrink-0">
      <Section className="mt-10">
        <div className="flex md:gap-16 gap-8 mt-10 md:mt-0 items-center">
          <div className="flex flex-col">

            <div className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="font-semibold text-xl flex items-center mb-4">
                <span className="font-extrabold mr-2 text-4xl text-[#7d6b6b]">
                  /
                </span>
                HABILIDADES
              </h3>
              <h4 className="font-bold text-[45px] lg:text-[50px] leading-[1.1] md:text-start text-center ">
                Mis herramientas en el desarrollo
              </h4>
            </div>

            <Carousel />
          </div>

        </div>
      </Section>
    </div>
  );
}
