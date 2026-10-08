import { facts } from "@/data/facts";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const ACCENT_BG = ["bg-yellow-light", "bg-pink/40", "bg-lavender/40", "bg-orange/12", "bg-yellow-light"];

export function InfoBlock() {
  return (
    <section id="info" className="relative pb-4">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {facts.map((fact, i) => (
            <Reveal
              key={fact.label}
              delay={i * 70}
              className={`${i % 2 ? "shape-leaf-alt" : "shape-leaf"} bg-surface p-5 shadow-[0_10px_28px_-20px_rgba(41,39,37,0.25)] sm:p-6 ${
                i === facts.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className={`mb-3 inline-block h-2.5 w-2.5 rounded-full ${ACCENT_BG[i]}`} />
              <p className="font-heading text-xl leading-tight text-ink sm:text-2xl">{fact.value}</p>
              <p className="mt-1.5 text-sm text-ink-soft">{fact.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
