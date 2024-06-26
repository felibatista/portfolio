import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        "min-h-svh snap-start md:max-w-[88%] px-4 pb-8 mx-auto flex"
      )}
    >
      {children}
    </div>
  );
}
