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

            <Reveal className="mt-8 flex flex-wrap gap-3">
              {nutritionContent.schedule.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-full bg-surface px-5 py-3 shadow-[0_8px_20px_-16px_rgba(41,39,37,0.3)]"
                >
                  <span className="h-2 w-2 rounded-full bg-orange" />
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="text-xs text-ink-soft">{item.time}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={100} className="relative grid grid-cols-2 gap-4">
            <PhotoFrame
              src={nutritionContent.images.primary}
              alt="Балалар мәзірі"
              accent="orange"
              className="col-span-2 aspect-[16/10] w-full rounded-[26px] shadow-[0_18px_40px_-22px_rgba(41,39,37,0.3)]"
            />
            <PhotoFrame
              src={nutritionContent.images.secondary}
              alt="Дәмхана тағамдары"
              accent="peach"
              className="aspect-square w-full rounded-[26px] shadow-[0_18px_40px_-22px_rgba(41,39,37,0.3)]"
            />
            <div className="flex items-center justify-center rounded-[26px] bg-yellow-light p-6 text-center">
              <p className="font-heading text-base leading-snug text-ink/80">
                Күн сайын
                <br />
                жаңа мәзір
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
