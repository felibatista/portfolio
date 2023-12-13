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
        "min-h-screen snap-start max-w-[1300px] px-4 pb-8 mx-auto flex"
      )}
    >
      {children}
    </div>
  );
}
