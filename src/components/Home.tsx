import { Hero } from "./Hero";
import { useRef, forwardRef } from "react";
import Projects from "./Projects";
import React from "react";
import { Box } from "./Box";

export default function HomeGlobal() {
  return (
    <main>
      <Container>
        <Box full className="p-4 mx-4" color="#FFFFFF">
          <Hero></Hero>
        </Box>
        <Box full className="justify-center items-center" transLeft color="#FFFFFF">
          <Projects />
        </Box>
      </Container>
    </main>
  );
}

const SnapParent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <div ref={ref} {...props} className="snap-parent-y-mandatory">
    {children}
  </div>
));

SnapParent.displayName = "SnapParent";

const Container = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <SnapParent
        ref={ref}
        style={{
          position: "absolute",
        }}
      >
        {children}
      </SnapParent>
    </div>
  );
};
