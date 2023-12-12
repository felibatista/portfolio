"use client";

import { NAVBAR_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ContainerItems() {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  return (
    <div
      className="hidden md:flex gap-4 relative mr-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex text-[20px]">
        {NAVBAR_ITEMS.map((item) => (
          <li
            key={item.name}
            className={cn(
              "px-3 transition-all duration-300",
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
