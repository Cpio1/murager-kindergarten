import { aboutContent } from "@/data/about";
import { Container } from "./ui/Container";
import { Sparkle } from "./ui/Decor";
import { PhotoFrame } from "./ui/PhotoFrame";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const ACCENT_DOT: Record<string, string> = {
  yellow: "bg-yellow",
  pink: "bg-pink",
};

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-1">
            <Sparkle className="-right-3 -top-3 h-6 w-6 opacity-60" />
            <PhotoFrame
              src={aboutContent.image}
              alt="Балабақша ұжымы мен балалар"
              accent="lavender"
              className="aspect-[4/5] w-full rounded-[28px] shadow-[0_20px_46px_-24px_rgba(41,39,37,0.3)] sm:aspect-[16/12] lg:aspect-[4/5]"
            />
          </Reveal>

          <div className="order-2">
            <SectionHeading title={aboutContent.title} eyebrow="Танысыңыз" />

            <div className="mt-6 space-y-4">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {aboutContent.cards.map((card, i) => (
                <Reveal
                  key={card.title}
                  delay={i * 100}
                  className="rounded-[22px] bg-surface p-6 shadow-[0_10px_28px_-20px_rgba(41,39,37,0.25)]"
                >
                  <span className={`mb-4 inline-block h-2.5 w-2.5 rounded-full ${ACCENT_DOT[card.accent]}`} />
                  <h3 className="font-heading text-lg text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
