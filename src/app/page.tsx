"use client";

import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

import { HomeTemplate } from "@/components/home/template";
import { ContactTemplate } from "@/components/contact/template";
import { AboutSectionTemplate } from "@/components/about/template/section";
import { ProjectsTemplate } from "@/components/projects/template";
import { SkillsTemplate } from "@/components/skills/template";

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <Toaster />

      <HomeTemplate />
      <AboutSectionTemplate />
      <SkillsTemplate />
      <ProjectsTemplate />
      <ContactTemplate />

      <Footer />
    </div>
  );
}
