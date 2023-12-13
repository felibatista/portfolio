import { cn } from "@/lib/utils";

export function ButtonLink({
  name,
  href,
  className,
}: {
  name: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        className,
        "underline mt-4 underline-offset-[6px] cursor-pointer opacity-80 hover:opacity-100 transition-all hover:translate-x-2 hover:scale-[1.02]"
      )}
    >
      {name}
    </a>
  );
}
