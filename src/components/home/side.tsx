import { Follow } from "./follow";

export function Side() {
  return (
    <div className="flex flex-col gap-6 md:justify-end">
      <div className="flex flex-col gap-2 pb-6 border-b border-white border-opacity-30">
        <h2 className="font-semibold text-xl">SOBRE MI </h2>
        <p>
          Me encanta enfrentar desafíos técnicos y encontrar soluciones
          innovadoras para optimizar el funcionamiento de las aplicaciones.
        </p>

        <a className="underline mt-4 underline-offset-[6px] cursor-pointer opacity-80 hover:opacity-100">
          LEER MÁS
        </a>
      </div>

      <div className="flex flex-col gap-2 pb-6 border-b border-white border-opacity-30">
        <h2 className="font-semibold text-xl">PROYECTOS</h2>
        <p>
            Estos son algunos de los proyectos en los que he trabajado. Si desea
            ver más y sus procesos, puede consultar mi perfil de Github.
        </p>

        <a className="underline mt-4 underline-offset-[6px] cursor-pointer opacity-80 hover:opacity-100">
          VER TODO
        </a>
      </div>

      <Follow />
    </div>
  );
}
