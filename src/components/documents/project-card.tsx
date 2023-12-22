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
      className="flex flex-col mt-[3rem] bg-[#242428] p-6 rounded-xl"
    >
      <div className="flex flex-col text-[16px] lg:text-[18px]">
        <h4 className="font-bold text-[20px] md:text-[30px] leading-[1.1] lg:text-start text-center">
          {title}
        </h4>
        <span className="italic">{techs}</span>

        <p className="text-center lg:text-left mt-3">
          {`
            ${description}`}
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 mt-4 pb-4">
          <ul className="flex flex-col [&>li>a]:underline [&>li>a]:underline-offset-4 gap-1">
            <li className="hover:translate-x-2 transition-all">
              <a href={"/" + path}>
                Ver documentación completa
                <ArrowRightIcon className="w-8 h-6 inline-block ml-1" />
              </a>
            </li>

            <li className="hover:translate-x-2  transition-all">
              <a href={sourceCodeUrl} target="_blank">
                Ver código fuente
                <ArrowRightIcon className="w-8 h-6 inline-block ml-1" />
              </a>
            </li>

            {liveDemoUrl && (
              <li className="hover:scale-[1.01] transition-all">
                <a href={liveDemoUrl} target="_blank">
                  Ver Live Demo
                  <ArrowRightIcon className="w-8 h-6 inline-block ml-1" />
                </a>
              </li>
            )}
          </ul>

          <div className="font-semibold flex items-center gap-3 ">
            <img src="/documents/structure.svg" alt="" className="w-8 h-12 " />
            <p>
              Tipo de estructura:{" "}
              <span className="font-normal">{structure}</span>
            </p>
          </div>

          <div className="font-semibold flex items-center ">
            <img src="/documents/time.svg" alt="" className="w-12 h-12 " />
            <p>
              Tiempo de desarrollo: <span className="font-normal">{time}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 shadow-2xl">
        <div className="transition-colors ease-linear shadow-xl mt-6">
          <div className="w-full h-8 rounded-t-lg bg-gray-600 flex justify-start items-center space-x-1.5 px-4">
            <span className="w-3 h-3 border-2 border-transparent border-red-400 rounded-full bg-red-400 bg-transparent "></span>
            <span className="w-3 h-3 border-2 border-transparent border-yellow-400 rounded-full bg-yellow-400 bg-transparent"></span>
            <span className="w-3 h-3 border-2 border-transparent border-green-400 rounded-full bg-green-400 bg-transparent"></span>
          </div>
          <div className=" bg-gray-700 border-t-0 w-full h-[20rem] rounded-b-lg">
            <img
              src={images[0]}
              alt="Conversor"
              className="col-span-2 w-full h-full"
            />
          </div>
        </div>

        <div className="transition-colors ease-linear shadow-xl mt-6">
          <div className="w-full h-8 rounded-t-lg bg-gray-600 flex justify-start items-center space-x-1.5 px-4">
            <span className="w-3 h-3 border-2 border-transparent border-red-400 rounded-full bg-red-400 bg-transparent "></span>
            <span className="w-3 h-3 border-2 border-transparent border-yellow-400 rounded-full bg-yellow-400 bg-transparent"></span>
            <span className="w-3 h-3 border-2 border-transparent border-green-400 rounded-full bg-green-400 bg-transparent"></span>
          </div>
          <div className=" bg-gray-700 border-t-0 w-full h-[20rem] rounded-b-lg">
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
