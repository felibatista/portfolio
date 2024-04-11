import { cn } from "@/lib/utils";
import { ChevronUpIcon } from "@radix-ui/react-icons";

export function Footer({ contrast }: { contrast?: boolean }) {
  return (
    <div
      className={cn("bg-background-primary md:pt-[2rem] pt-[1rem]", {
        "bg-background-secondary": contrast === true || contrast === undefined,
      })}
    >
      <footer className="max-w-[80%] text-description-sm px-4 pb-8 mx-auto text-center flex flex-col-reverse md:flex-row justify-between gap-[1rem] md:gap-0 items-center">
        <p>Copyright © Felipe Batista | Powered by Github Pages</p>

        <button
          className="flex items-center gap-[1vh] hover:scale-105 transition-all"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Volver arriba
          <span className="p-[0.5vh] border rounded-xl border-gray-300 border-opacity-50 group">
            <ChevronUpIcon className="h-[4vh] w-[4vh]" />
          </span>
        </button>
      </footer>
    </div>
  );
}
