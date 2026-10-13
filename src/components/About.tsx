import { aboutContent } from "@/data/about";
import { Container } from "./ui/Container";
import { Flower, Leaf, Dots } from "./ui/Decor";
import { PhotoFrame } from "./ui/PhotoFrame";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-10 sm:py-12 lg:py-13">
      <Flower className="right-4 top-8 h-8 w-8 text-pink opacity-30 sm:right-10" rotate={-10} />
      <Leaf className="bottom-6 right-[42%] h-7 w-7 text-lavender opacity-30" rotate={15} mobile={false} />
      <Dots className="left-3 top-4 h-3 w-9 text-yellow opacity-35" mobile={false} />

      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] lg:gap-12">
          <Reveal>
            <PhotoFrame
              src={aboutContent.image}
              alt="Мұрагер балабақшасындағы балалар"
              accent="lavender"
              objectPosition="center 70%"
              sizes="(min-width: 768px) 45vw, 100vw"
              className="shape-organic aspect-[4/3] w-full shadow-[0_20px_46px_-24px_rgba(41,39,37,0.3)] md:aspect-[5/6] lg:aspect-[4/3]"
            />
          </Reveal>

          <div>
            <SectionHeading title={aboutContent.title} />
            <Reveal delay={80}>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">{aboutContent.text}</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {aboutContent.tags.map((tag, i) => (
                  <li
                    key={tag.label}
                    className={`${i % 2 ? "shape-leaf-alt" : "shape-leaf"} inline-flex items-center gap-2.5 bg-surface px-5 py-3 text-[15px] font-semibold sm:px-[18px] sm:py-2.5 sm:text-[14px] text-ink shadow-[0_10px_28px_-20px_rgba(41,39,37,0.3)]`}
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${tag.accent}`} />
                    {tag.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
