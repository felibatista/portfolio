import Section from "../section";
import { Date } from "./dates";
import { Info } from "./info";

export function About() {
  return (
    <div className=" bg-[#18181b] md:h-[110vh] flex items-center snap-center shrink-0 z-10">
      <Section>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-0 mt-10 md:mt-0 items-center">
          <Info />
          <Date />
        </div>
      </Section>
    </div>
  );
}
