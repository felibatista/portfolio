"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="flex">
      <div className="absolute left-0 top-0 w-[20%] p-8 h-full border-r border-opacity-30 border-white ">
        <div className="flex gap-1 items-center">
          <ArrowLeftIcon className="w-5 h-5" />
          <a className="hover:underline underline-offset-4 cursor-pointer">
            Volver al inicio
          </a>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>URL</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex-col relative overflow-hidden snap-center"></div>
    </div>
  );
}
