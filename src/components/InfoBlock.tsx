import { facts } from "@/data/facts";
import { Container } from "./ui/Container";
import { Heart, Rainbow, Star } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const ACCENT_BG = ["bg-yellow", "bg-pink", "bg-lavender", "bg-orange", "bg-peach"];

export function InfoBlock() {
  return (
    <section id="info" className="relative bg-section py-10 sm:py-12 lg:py-13">
      <Rainbow className="right-5 top-6 h-7 w-12 opacity-30 sm:right-12 sm:top-10" rotate={-8} />
      <Star className="bottom-5 left-[8%] h-5 w-5 text-yellow opacity-35" rotate={12} mobile={false} />
      <Heart className="left-[46%] top-8 h-[18px] w-[18px] text-orange opacity-25" rotate={-10} mobile={false} />

      <Container>
        <SectionHeading title="Ақпарат" />

        <div className="mt-7 sm:mt-6 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {facts.map((fact, i) => (
            <Reveal
              key={fact.label}
              delay={i * 70}
              className={`${i % 2 ? "shape-leaf-alt" : "shape-leaf"} bg-surface px-5 py-5 shadow-[0_10px_28px_-20px_rgba(41,39,37,0.25)] sm:py-4 ${
                i === facts.length - 1 ? "min-[360px]:col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className={`mb-3 inline-block h-2.5 w-2.5 rounded-full ${ACCENT_BG[i]}`} />
              <p className="font-heading text-xl font-bold leading-tight text-ink sm:text-[1.3rem]">{fact.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{fact.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
