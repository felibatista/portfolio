import Section from "@/components/section";
import { AboutPageHero } from "./hero";
import { Navbar } from "@/components/navbar";
import { AboutPageMe } from "./me";

export function AboutPage() {
  return (
    <div>
      <AboutPageHero />
      <AboutPageMe />
    </div>
  );
}
