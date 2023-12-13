import { Hero } from "./hero";
import { Side } from "./side";

export function Home() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 md:mt-0 z-[3] mb-[2rem]">
      <Hero />
      <Side />
    </div>
  );
}
