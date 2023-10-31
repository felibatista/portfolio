import { useEffect, useState } from "react";
import Card from "./Card";
import { ScrollArea } from "./ui/ScrollArea";
import Image from "next/image";
export default function Projects() {
  const [clicked, setClicked] = useState<string>();

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <div className="flex justify-center flex-col">
      <div className="flex flex-col items-center leading-[1.2]">
        <h2 className="animate-color-change-4x px-4 py-2 rounded-xl text-white w-fit text-5xl font-bold ">
          Projects
        </h2>
        <p className="mt-4 text-xl">
          Here are some of my projects that I have been working on.
        </p>
      </div>

      <div className="flex gap-8 items-center mt-8">
        <div className="w-[800px] h-[70vh] m-8 bg-slate-600">

        </div>
        <ScrollArea className="h-[600px]">
          <div className="p-8 flex gap-4 flex-col">
            <Card
              title={"Currency Conversor"}
              description={
                "The Currency Conversion Project is a user-friendly software solution designed to provide real-time currency exchange rates and support conversions between multiple currencies. With a mobile-friendly interface, historical rate data, and multi-language support, users can easily convert currencies, access their conversion history, and receive alerts based on predefined rates. The project aims to empower users with the tools they need for informed financial decisions in a global economy while ensuring data security and customer support."
              }
              techs={[
                {
                  id: 1,
                  title: "React",
                },
                {
                  id: 2,
                  title: "Next.js",
                },
              ]}
              clicked={clicked!}
              setClicked={setClicked}
            ></Card>

            <Card
              title={"Currency Conversor 2"}
              description={
                "The Currency Conversion Project is a user-friendly software solution designed to provide real-time currency exchange rates and support conversions between multiple currencies. With a mobile-friendly interface, historical rate data, and multi-language support, users can easily convert currencies, access their conversion history, and receive alerts based on predefined rates. The project aims to empower users with the tools they need for informed financial decisions in a global economy while ensuring data security and customer support."
              }
              techs={[
                {
                  id: 1,
                  title: "React",
                },
                {
                  id: 2,
                  title: "Next.js",
                },
              ]}
              clicked={clicked!}
              setClicked={setClicked}
            ></Card>

            <Card
              title={"Currency Conversor 4"}
              description={
                "The Currency Conversion Project is a user-friendly software solution designed to provide real-time currency exchange rates and support conversions between multiple currencies. With a mobile-friendly interface, historical rate data, and multi-language support, users can easily convert currencies, access their conversion history, and receive alerts based on predefined rates. The project aims to empower users with the tools they need for informed financial decisions in a global economy while ensuring data security and customer support."
              }
              techs={[
                {
                  id: 1,
                  title: "React",
                },
                {
                  id: 2,
                  title: "Next.js",
                },
              ]}
              clicked={clicked!}
              setClicked={setClicked}
            ></Card>

            <Card
              title={"Currency Conversor 3"}
              description={
                "The Currency Conversion Project is a user-friendly software solution designed to provide real-time currency exchange rates and support conversions between multiple currencies. With a mobile-friendly interface, historical rate data, and multi-language support, users can easily convert currencies, access their conversion history, and receive alerts based on predefined rates. The project aims to empower users with the tools they need for informed financial decisions in a global economy while ensuring data security and customer support."
              }
              techs={[
                {
                  id: 1,
                  title: "React",
                },
                {
                  id: 2,
                  title: "Next.js",
                },
              ]}
              clicked={clicked!}
              setClicked={setClicked}
            ></Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
