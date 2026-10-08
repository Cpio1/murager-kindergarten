import { nutritionContent } from "@/data/nutrition";
import { Container } from "./ui/Container";
import { PhotoFrame } from "./ui/PhotoFrame";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Nutrition() {
  return (
    <section id="nutrition" className="relative bg-section py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Тамақтану" title={nutritionContent.title} />
            <div className="mt-6 space-y-4">
              {nutritionContent.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {p}
                </p>
              ))}
            </div>

          </div>

          <Reveal delay={100} className="relative grid grid-cols-2 gap-4">
            <PhotoFrame
              src={nutritionContent.images.primary}
              alt="Балалар мәзірі"
              accent="orange"
              className="col-span-2 shape-leaf aspect-[16/10] w-full shadow-[0_18px_40px_-22px_rgba(41,39,37,0.3)]"
            />
            <PhotoFrame
              src={nutritionContent.images.secondary}
              alt="Дәмхана тағамдары"
              accent="peach"
              className="shape-blob aspect-square w-full shadow-[0_18px_40px_-22px_rgba(41,39,37,0.3)]"
            />
            <div className="flex items-center justify-center shape-wave bg-yellow-light p-6 text-center">
              <p className="font-heading text-base leading-snug text-ink/80">
                Күніне
                <br />
                5 рет
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
