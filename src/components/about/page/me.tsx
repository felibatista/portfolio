import Section from "@/components/section";
import { MeInfo } from "./me-info";

export function AboutPageMe() {
  return (
    <div
      id="me"
      className="bg-[#18181b] md:h-[110vh] flex items-center shrink-0 z-10"
    >
      <Section>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-0 mt-10 md:mt-0 items-center">
          <MeInfo />
        </div>
      </Section>
    </div>
  );
}
