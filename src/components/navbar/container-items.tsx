"use client";

import { NAVBAR_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function NavbarContainerItems() {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  return (
    <div
      className="hidden md:flex gap-[2vh] relative mr-[3%]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex text-[2.5vh]">
        {NAVBAR_ITEMS.map((item) => (
          <li
            key={item.name}
            className={cn(
              "px-[1.7vh] transition-all duration-300",
              isHover ? "opacity-30 hover:opacity-100" : ""
            )}
          >
            <a href={item.path}>
                {item.name}   
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
