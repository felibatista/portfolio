"use client"

import { Footer } from "@/components/footer";
import { AboutPageHero } from "../page/hero";
import { AboutPageMe } from "../page/me";

export function AboutPageTemplate() {
    return (
      <main>
        <AboutPageHero />
        <AboutPageMe />
        <Footer />
      </main>
    );
  }