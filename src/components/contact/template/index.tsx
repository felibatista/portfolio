import Section from "../../section";

import { ContactForm } from "../form";
import { ContactTitle } from "../title";

export function ContactTemplate() {
  return (
    <div className="flex items-center shrink-0 z-10 overflow-hidden bg-background-primary">
      <Section>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-0 mt-10 md:mt-0 items-center">
          <ContactTitle />
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
