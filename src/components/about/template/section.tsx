import Section from "@/components/section";

import { AboutSectionMe } from "../section/me";
import { AboutSectionExperience } from "../section/experience";

export function AboutSectionTemplate() {
  return (
    <div className="bg-background-primary bg-back md:h-[110vh] flex items-center shrink-0 z-20">
      <Section>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-0 mt-10 md:mt-0 items-center">
          <AboutSectionMe />
          <AboutSectionExperience />
        </div>
      </Section>
    </div>
  );
}
