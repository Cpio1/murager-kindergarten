import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Cloud, Sparkle, Sun } from "./ui/Decor";
import { PhotoFrame } from "./ui/PhotoFrame";
import { Reveal } from "./ui/Reveal";

export function Hero() {
  return (
    <section id="hero" className="relative pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
      <Container className="max-w-[1300px]">
        <Reveal className="relative">
          <Sun className="-right-4 -top-6 h-10 w-10 opacity-70 sm:right-8 sm:top-0 sm:h-12 sm:w-12" />
          <Sparkle className="left-6 top-6 h-5 w-5 opacity-60 sm:left-10 sm:top-10" />

          <div className="grid overflow-hidden rounded-[32px] bg-surface shadow-[0_24px_60px_-30px_rgba(41,39,37,0.35)] sm:rounded-[40px] lg:min-h-[560px] lg:grid-cols-[1fr_1.6fr]">
            <div className="order-2 flex flex-col justify-center gap-5 px-6 py-10 sm:gap-6 sm:px-10 sm:py-12 lg:order-1 lg:px-12 lg:py-14">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-yellow-light px-4 py-1.5 text-sm font-medium text-ink/80">
                «Мұрагер» балабақшасы
              </span>
              <h1 className="font-heading text-[2.25rem] leading-[1.1] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
                Баланың бақытты балалық шағы осы жерден басталады
              </h1>
              <p className="max-w-sm text-base leading-relaxed text-ink-soft sm:text-lg">
                Балалардың дамуы, тәрбиесі мен қауіпсіздігіне арналған жайлы орта.
              </p>
              <div>
                <Button href="#about">Толығырақ</Button>
              </div>
            </div>

            <div className="relative order-1 min-h-[260px] sm:min-h-[340px] lg:order-2 lg:min-h-0">
              <PhotoFrame
                src="/images/hero.jpg"
                alt="Балабақшадағы балалар"
                accent="peach"
                priority
                sizes="(min-width: 1024px) 780px, 100vw"
                className="h-full w-full"
              />
              <Cloud className="left-6 top-6 h-9 w-14 opacity-80" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_14px_30px_-15px_rgba(41,39,37,0.35)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-orange" />
                <span className="text-sm font-semibold text-ink">150+ бақытты бала</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
