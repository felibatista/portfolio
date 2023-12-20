"use client"

import Section from "../section";

import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "./card";
import { ProjectsTitle } from "./title";
import { useState } from "react";

export function Projects() {
  const [hover, setHover] = useState("");

  return (
    <div className="bg-[#18181b] flex items-center snap-start z-10 pb-[3rem] md:pb-[10rem] overflow-hidden">
      <Section className="mt-[10rem]">
        <div className="grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 md:gap-16 gap-0 md:mt-0 space-y-12">
          <ProjectsTitle />
          {PROJECTS.map((project,index) => (
            <ProjectCard key={index} {...project} hover={hover} setHover={setHover} />
          ))}
        </div>
      </Section>
    </div>
  );
}
