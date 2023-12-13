import { ButtonLink } from "../link";

export function ProjectsTitle() {
  return (
    <div className="flex flex-col gap-4 md:py-8 md:pr-8 items-center md:items-start h-fit row-span-1">
      <h3 className="font-semibold text-xl flex items-center mb-4">
        <span className="font-extrabold md:mr-2 text-4xl text-[#7d6b6b]">/</span>
        PROYECTOS
      </h3>
      <h4 className="font-bold text-[45px] lg:text-[50px] leading-[1.1]  md:text-start text-center">
         Mi trabajo personal más reciente
      </h4>

      <p className="text-[22px] lg:text-[20px] text-center md:text-left">
      {`Tengo experiencia en proyectos de todo tipo, a pequeña y gran escala. Siempre
        estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.`}
      </p>

      <ButtonLink name="VER TODOS LOS PROYECTOS" href="/about" className="text-xl" />
    </div>
  );
}
