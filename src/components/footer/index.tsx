import { ChevronUpIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <div className="bg-[#18181b] pt-[2rem]">
      <footer className="max-w-[1300px] px-4 pb-8 mx-auto flex flex-col md:flex-row justify-between items-start">
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
