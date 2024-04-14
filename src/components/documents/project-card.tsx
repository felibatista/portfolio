import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function DocumentsProjectCard({
  title,
  techs,
  description,
  structure,
  path,
  sourceCodeUrl,
  liveDemoUrl,
  images,
  time,
}: {
  title: string;
  techs: string;
  description: string;
  path: string;
  structure: string;
  sourceCodeUrl: string;
  liveDemoUrl?: string;
  images: string[];
  time: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col mt-[8vh] bg-[#242428] p-[3vh] rounded-xl"
    >
      <div className="flex flex-col text-description-sm md:text-description">
        <h4 className="font-bold text-[4vh] leading-[1.1] lg:text-start text-center">
          {title}
        </h4>
        <span className="italic text-center lg:text-start">{techs}</span>

        <p className="text-left mt-[2vh]">
          {`
            ${description}`}
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 mt-[3vh] pb-[3vh] gap-[2vh]">
          <ul className="flex flex-col [&>li>a]:underline [&>li>a]:underline-offset-4 gap-1">
            <li className="hover:translate-x-1 transition-all">
              <a href={"/" + path}>
                Ver documentación completa
                <ArrowRightIcon className="h-[4vh] w-[3vh] inline-block ml-1" />
              </a>
            </li>

            <li className="hover:translate-x-1  transition-all">
              <a href={sourceCodeUrl} target="_blank">
                Ver código fuente
                <ArrowRightIcon className="h-[4vh] w-[3vh] inline-block ml-1" />
              </a>
            </li>

            {liveDemoUrl && (
              <li className="hover:translate-x-1 transition-all">
                <a href={liveDemoUrl} target="_blank">
                  Ver Live Demo
                  <ArrowRightIcon className="h-[4vh] w-[3vh] inline-block ml-1" />
                </a>
              </li>
            )}
          </ul>

          <div className="font-semibold flex items-center gap-[1.5vh] ">
            <img
              src="/documents/structure.svg"
              alt=""
              className="h-[6vh] w-[4vh]"
            />
            <p>
              Tipo de estructura:{" "}
              <span className="font-normal">{structure}</span>
            </p>
          </div>

          <div className="font-semibold flex items-center ">
            <img
              src="/documents/time.svg"
              alt=""
              className="h-[6vh] w-[5.5vh]"
            />
            <p>
              Tiempo de desarrollo: <span className="font-normal">{time}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[4vh]">
        <div className="transition-colors ease-linear shadow-xl mt-6">
          <div className="w-full h-8 rounded-t-lg bg-gray-600 flex justify-start items-center space-x-1.5 px-4 ">
            <span className="w-3 h-3 border-2 border-transparent border-red-400 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 border-2 border-transparent border-yellow-400 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 border-2 border-transparent border-green-400 rounded-full bg-green-400"></span>
          </div>
          <div className=" bg-gray-700 border-t-0 w-full h-[40vh] rounded-b-lg">
            <img
              src={images[0]}
              alt="Conversor"
              className="col-span-2 w-full h-full"
            />
          </div>
        </div>

        <div className="transition-colors ease-linear mt-6">
          <div className="w-full h-8 rounded-t-lg bg-gray-600 flex justify-start items-center space-x-1.5 px-4">
            <span className="w-3 h-3 border-2 border-transparent border-red-400 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 border-2 border-transparent border-yellow-400 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 border-2 border-transparent border-green-400 rounded-full bg-green-400"></span>
          </div>
          <div className=" bg-gray-700 border-t-0 w-full h-[40vh] rounded-b-lg">
            <img
              src={images[1]}
              alt="Conversor"
              className="col-span-2 w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
