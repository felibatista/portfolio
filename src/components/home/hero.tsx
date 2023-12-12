export function Hero() {
  return (
    <div className="flex flex-col max-w-2xl md:h-[70vh] md:justify-end">
      <h1 className="font-bold text-[35px] md:text-[45px] lg:text-[50px] leading-[1.1] pb-4 border-b-[10px] border-white">
        Mi nombre es <span className="text-[#b19797]">Felipe</span>,
        <br />
        Desarollador Backend
      </h1>
      <p className="mt-4 text-[15px] md:text-[18px] lg:text-[20px] text-center md:text-left">
        Mi enfoque se centra en la implementación de lógica de servidor, gestión
        de bases de datos y optimización del rendimiento. Siempre estoy buscando
        soluciones innovadoras para mejorar la eficacia y escalabilidad de las
        aplicaciones
      </p>
    </div>
  );
}
