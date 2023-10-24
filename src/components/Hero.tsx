export const Hero = () => {
  return (
    <div className="flex items-center  h-screen w-full">
      <div className="flex flex-col gap-6 text-left max-w-[600px]">
        <h1 className="text-[45px] font-bold leading-[1.2]">
          Full-Stack Software<br></br>{" "}
          <span className="animate-color-change-4x px-4 rounded-xl text-white ">Developer</span>
        </h1>
        <p className="text-[20px]">
          Resolving design problems, building smart user interfaces and useful
          interactions, developing rich web applications and seamless web
          experiences.
        </p>
      </div>
    </div>
  );
};
