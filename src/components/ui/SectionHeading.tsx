import { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-orange/12 px-4 py-1.5 text-sm font-medium text-orange">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-[1.875rem] font-bold leading-[1.15] text-ink sm:text-[2.25rem] lg:text-[2.625rem]">
        {title}
      </h2>
      {children && (
        <div className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {children}
        </div>
      )}
    </Reveal>
  );
}
