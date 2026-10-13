import { facts } from "@/data/facts";
import { Container } from "./ui/Container";
import { ReactNode } from "react";
import { Blob, Block, Heart, Rainbow, Star } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const ACCENT_BG = ["bg-yellow/45", "bg-pink/40", "bg-lavender/50", "bg-orange/30", "bg-peach/50"];

export function InfoBlock() {
  return (
    <section id="info" className="relative isolate overflow-x-clip bg-section py-10 sm:py-12 lg:py-13">
      <Rainbow className="right-5 top-6 h-7 w-12 opacity-30 sm:right-12 sm:top-10" rotate={-8} />
      <Star className="bottom-5 left-[8%] h-5 w-5 text-yellow opacity-35" rotate={12} mobile={false} />
      <Heart className="left-[46%] top-8 h-[18px] w-[18px] text-orange opacity-25" rotate={-10} mobile={false} />
      <Block className="bottom-4 right-[22%] h-6 w-6 text-lavender opacity-30" rotate={-10} show="lg" />
      <Blob className="-right-24 -top-16 hidden h-80 w-80 text-surface opacity-40 sm:block" />
      <Blob variant={1} className="-bottom-20 -left-20 h-56 w-56 text-yellow-light opacity-45" />

      <Container>
        <SectionHeading title="Ақпарат" />

        <div className="mt-7 sm:mt-6 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {facts.map((fact, i) => (
            <Reveal
              key={fact.label}
              delay={i * 70}
              className={`${i % 2 ? "shape-leaf-alt" : "shape-leaf"} bg-surface px-5 py-5 shadow-[0_10px_28px_-20px_rgba(41,39,37,0.25)] hover:-translate-y-1 hover:shadow-[0_18px_36px_-22px_rgba(41,39,37,0.35)] sm:py-4 ${
                i === facts.length - 1 ? "min-[360px]:col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-[14px_20px_14px_20px] text-ink/75 ${ACCENT_BG[i]}`}
              >
                {FACT_ICONS[i]}
              </span>
              <p className="font-heading text-xl font-bold leading-tight text-ink sm:text-[1.3rem]">{fact.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{fact.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FactIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// facts ретімен: жұмыс уақыты, топтар, жас, тіл, тамақтану
const FACT_ICONS = [
  <FactIcon key="clock">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12L15 14" />
  </FactIcon>,
  <FactIcon key="blocks">
    <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.8" />
    <rect x="13" y="13" width="7.5" height="7.5" rx="1.8" />
    <rect x="8.25" y="3.5" width="7.5" height="7.5" rx="1.8" />
  </FactIcon>,
  <FactIcon key="star">
    <path d="M12 3.5L14.4 8.6L20 9.3L15.9 13.1L17 18.6L12 15.9L7 18.6L8.1 13.1L4 9.3L9.6 8.6L12 3.5Z" />
  </FactIcon>,
  <FactIcon key="speech">
    <path d="M3.5 6.5C3.5 5.4 4.4 4.5 5.5 4.5H13C14.1 4.5 15 5.4 15 6.5V10.5C15 11.6 14.1 12.5 13 12.5H8L5 15V12.5C4.2 12.4 3.5 11.6 3.5 10.5V6.5Z" />
    <path d="M17.5 9H18.5C19.6 9 20.5 9.9 20.5 11V15C20.5 16.1 19.8 16.9 19 17V19.5L16 17H11.5C10.4 17 9.5 16.1 9.5 15V15" />
  </FactIcon>,
  <FactIcon key="apple">
    <path d="M12 8C10.5 6.8 8.6 6.6 7 7.4C4.6 8.6 4 11.8 5 14.8C6 17.8 8.2 20.5 10.2 20.5C11 20.5 11.4 20 12 20C12.6 20 13 20.5 13.8 20.5C15.8 20.5 18 17.8 19 14.8C20 11.8 19.4 8.6 17 7.4C15.4 6.6 13.5 6.8 12 8Z" />
    <path d="M12 8C12 6 12.8 4.5 14.5 3.5" />
  </FactIcon>,
];
