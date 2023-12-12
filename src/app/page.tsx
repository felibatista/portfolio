import { About } from "@/components/about";
import { Home } from "@/components/home";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <div className="relative">
      <div className=" min-h-screen max-w-[1300px] mx-auto px-4 pb-8">
        <Navbar />
        <Home />
      </div>

      <About />
    </div>
  );
}
