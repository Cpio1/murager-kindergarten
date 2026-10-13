import { siteConfig } from "@/data/site";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Cloud, Heart, Sparkle, Star, Sun } from "./ui/Decor";
import { PhotoFrame } from "./ui/PhotoFrame";
import { Reveal } from "./ui/Reveal";

export function Hero() {
  return (
    <section id="hero" className="relative pb-10 pt-[84px] sm:pb-14 sm:pt-24">
      <Sun className="right-3 top-[72px] h-10 w-10 text-yellow opacity-35 sm:right-6 sm:top-20 sm:h-12 sm:w-12" rotate={10} />
      <Star className="left-2 top-[46%] h-5 w-5 text-orange opacity-25" rotate={-10} mobile={false} />
      <Heart className="bottom-3 right-[12%] h-5 w-5 text-pink opacity-30" rotate={8} mobile={false} />
      <Sparkle className="bottom-2 left-[38%] h-6 w-6 text-lavender opacity-35" rotate={15} />

      <Container className="max-w-[1280px]">
        <Reveal className="relative">
          <div className="shape-leaf shape-lg grid overflow-hidden bg-surface shadow-[0_24px_60px_-30px_rgba(41,39,37,0.35)] lg:min-h-[500px] lg:grid-cols-[1fr_1.5fr]">
            <div className="order-2 flex flex-col justify-center gap-4 px-6 py-8 sm:gap-5 sm:px-10 sm:py-10 lg:order-1 lg:px-12">
              <h1 className="font-heading text-[2.25rem] font-bold leading-[1.1] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
                «{siteConfig.name}»
                <span className="mt-1 block text-[1.5rem] font-semibold leading-tight text-ink/80 sm:text-[1.85rem] lg:text-[2.1rem]">
                  {siteConfig.tagline}
                </span>
              </h1>
              <p className="max-w-sm text-base leading-relaxed text-ink-soft sm:text-lg">
                Балалардың бақытты балалық шағы үшін жайлы орта.
              </p>
              <div className="pt-1">
                <Button href="#about">Біз туралы</Button>
              </div>
            </div>

            <div className="relative order-1 min-h-[240px] sm:min-h-[340px] lg:order-2 lg:min-h-0">
              <PhotoFrame
                src="/images/image18.jpeg"
                alt="Мұрагер балабақшасы"
                accent="peach"
                priority
                sizes="(min-width: 1024px) 760px, 100vw"
                className="shape-hero-photo h-full w-full"
              />
              <Cloud className="left-5 top-5 h-7 w-12 text-white opacity-35" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
