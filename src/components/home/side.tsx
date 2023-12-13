import { ButtonLink } from "../link";
import { Follow } from "./follow";

export function Side() {
  return (
    <div className="flex flex-col gap-6 md:justify-end md:w-[70%] mt-[4rem] ml-auto">
      <div className="flex flex-col gap-2 pb-6 border-b border-white border-opacity-30">
        <h2 className="font-semibold text-xl">SOBRE MI </h2>
        <p className="text-[22px] md:text-base">
          Me encanta enfrentar desafíos técnicos y encontrar soluciones
          innovadoras para optimizar el funcionamiento de las aplicaciones.
        </p>

        <ButtonLink name="LEER MÁS" href="/about" className="mt-4" />
      </div>

      <div className="flex flex-col gap-2 pb-6 border-b border-white border-opacity-30">
        <h2 className="font-semibold text-xl">PROYECTOS</h2>
        <p className="text-[22px] md:text-base">
          Estos son algunos de los proyectos en los que he trabajado. Si desea
          ver más y sus procesos, puede consultar mi perfil de Github.
        </p>

        <ButtonLink name="VER TODO" href="/about" className="mt-4" />
      </div>

      <Follow />
    </div>
  );
}
