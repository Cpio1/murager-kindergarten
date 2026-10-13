import { siteConfig } from "@/data/site";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Blob, Cloud, Dot, Heart, Sparkle, Squiggle, Star, Sun } from "./ui/Decor";
import { PhotoFrame } from "./ui/PhotoFrame";
import { Reveal } from "./ui/Reveal";

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-x-clip pb-10 pt-[84px] sm:pb-11 sm:pt-[88px]">
      <Sun className="right-3 top-[72px] h-10 w-10 text-yellow opacity-35 sm:right-6 sm:top-20 sm:h-12 sm:w-12" rotate={10} />
      <Star className="left-2 top-[46%] h-5 w-5 text-orange opacity-25" rotate={-10} mobile={false} />
      <Heart className="bottom-3 right-[12%] h-5 w-5 text-pink opacity-30" rotate={8} mobile={false} />
      <Sparkle className="bottom-2 left-[38%] h-6 w-6 text-lavender opacity-35" rotate={15} />
      <Squiggle className="bottom-3 left-[6%] h-4 w-14 text-orange opacity-30" rotate={-6} show="lg" />
      <Dot className="right-[34%] top-[92px] h-2.5 w-2.5 text-pink opacity-40" show="lg" />
      <Dot className="bottom-5 right-[30%] h-2 w-2 text-orange opacity-35" mobile={false} />

      <Container className="max-w-[1180px]">
        <Reveal className="relative">
          <Blob className="-bottom-10 -left-14 h-52 w-52 text-yellow-light opacity-50 sm:h-60 sm:w-60" />
          <Blob variant={1} className="-right-16 -top-8 hidden h-72 w-72 text-peach opacity-[0.12] lg:block" />
          <div className="shape-leaf shape-lg grid overflow-hidden bg-surface shadow-[0_24px_60px_-30px_rgba(41,39,37,0.35)] lg:min-h-[430px] lg:grid-cols-[1fr_1.5fr]">
            <div className="order-2 flex flex-col justify-center gap-4 px-6 py-8 sm:gap-4 sm:px-9 sm:py-9 lg:order-1 lg:px-11">
              <h1 className="font-heading text-[2.25rem] font-bold leading-[1.1] text-ink sm:text-[2.4rem] lg:text-[2.8rem]">
                «{siteConfig.name}»
                <HeadingStar />
                <span className="mt-1 block text-[1.5rem] font-semibold leading-tight text-ink/80 sm:text-[1.6rem] lg:text-[1.8rem]">
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

            <div className="relative order-1 min-h-[240px] sm:min-h-[290px] lg:order-2 lg:min-h-0">
              <PhotoFrame
                src="/images/image18.jpeg"
                alt="Мұрагер балабақшасы"
                accent="peach"
                priority
                sizes="(min-width: 1024px) 680px, 100vw"
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

function HeadingStar() {
  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden="true"
      className="ml-2 inline-block h-5 w-5 -translate-y-4 animate-sway text-orange opacity-70 sm:h-6 sm:w-6"
    >
      <path d="M14 2L17 10.5L26 11L19 16.8L21.5 25.5L14 20.5L6.5 25.5L9 16.8L2 11L11 10.5L14 2Z" fill="currentColor" />
    </svg>
  );
}
