import { ChevronUpIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <div className="bg-[#18181b] md:pt-[2rem] pt-[1rem]">
      <footer className="max-w-[1300px] px-4 pb-8 mx-auto flex flex-col-reverse md:flex-row justify-between items-start gap-[1rem] md:gap-0">
        <p>Copyright © Felipe Batista | Powered by Github Pages</p>

        <button className="flex items-center gap-2 hover:scale-105 transition-all"
        onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          Volver arriba
          <span className="p-1 border rounded-xl border-gray-300 border-opacity-50 group">
            <ChevronUpIcon className="w-6 h-6" />
          </span>
        </button>
      </footer>
    </div>
  );
}
