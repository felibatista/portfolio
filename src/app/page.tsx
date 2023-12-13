import { About } from "@/components/about";
import { Home } from "@/components/home";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/navbar";
import Section from "@/components/section";
import { Skills } from "@/components/skills";

export default function Page() {
  return (
    <div className="relative snap-mandatory snap-y">
      <Section className="flex-col relative overflow-hidden">
        <img src="me.png" alt="" className="absolute hidden md:block bottom-[-4rem] mx-auto left-[50%] translate-x-[-50%] h-[1000px] z-[1] opacity-20" />
        <Navbar />
        <div className="flex justify-center flex-1">

        <Home />
        </div>
      </Section>

      <About />

      <Skills />
    </div>
  );
}
