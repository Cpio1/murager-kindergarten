import { groups } from "@/data/groups";
import { Container } from "./ui/Container";
import { PhotoFrame } from "./ui/PhotoFrame";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const BADGE_BG: Record<string, string> = {
  yellow: "bg-yellow",
  pink: "bg-pink",
  orange: "bg-orange text-white",
  lavender: "bg-lavender",
};

export function Groups() {
  return (
    <section id="groups" className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Топтар" title="Біздің топтар" />

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {groups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 90}
              className="w-[78%] shrink-0 snap-start sm:w-auto"
            >
              <div className="group h-full overflow-hidden rounded-[28px] bg-surface shadow-[0_16px_36px_-24px_rgba(41,39,37,0.3)] transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative aspect-[4/5] w-full">
                  <PhotoFrame
                    src={group.image}
                    alt={`${group.title} — ${group.age}`}
                    accent={group.accent}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 78vw"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-ink ${BADGE_BG[group.accent]}`}
                  >
                    {group.age}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-ink">{group.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
