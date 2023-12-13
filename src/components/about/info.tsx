import { ButtonLink } from "../link";

export function Info() {
  return (
    <div className="flex flex-col gap-4 md:border-r border-white border-opacity-70 md:py-8 md:pr-8 items-center md:items-start">
      <h3 className="font-semibold text-xl flex items-center mb-4">
        <span className="font-extrabold md:mr-2 text-4xl text-[#7d6b6b]">/</span>
        SOBRE MI
      </h3>
      <h4 className="font-bold text-[45px] lg:text-[50px] leading-[1.1]  md:text-start text-center">
        Creando mis aplicaciones desde los 13 años
      </h4>

      <p className="text-[22px] lg:text-[20px] text-center md:text-left">
      {`Comencé con Java y servidores en Minecraft. Desde entonces he estado
        aprendiendo y desarrollando mis habilidades. Mi orientación fue elegida
        por la curiosidad de saber como funcionaba todo por "debajo del capó"`}
      </p>

      <ButtonLink name="MÁS SOBRE MI" href="/about" className="text-xl" />
    </div>
  );
}
