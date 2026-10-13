import { ReactNode } from "react";
import { siteConfig } from "@/data/site";
import { Container } from "./ui/Container";
import { Cloud, Heart, Sun } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const { lat, lng } = siteConfig.map;
const mapEmbedSrc = `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${lat},${lng}!6i17!3m1!1skk!5m1!1skk`;

export function Contact() {
  return (
    <section id="contact" className="relative py-10 sm:py-12 lg:py-13">
      <Sun className="right-5 top-8 h-9 w-9 text-yellow opacity-35 sm:right-12" rotate={8} />
      <Heart className="left-3 top-[40%] h-5 w-5 text-pink opacity-30" rotate={-10} mobile={false} />
      <Cloud className="bottom-3 left-[30%] h-6 w-10 text-lavender opacity-30" mobile={false} />

      <Container>
        <SectionHeading title="Бізбен байланысыңыз" />

        <div className="mt-7 grid gap-5 sm:mt-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          <Reveal className="shape-leaf-alt flex flex-col justify-center bg-surface px-6 py-3 shadow-[0_20px_48px_-28px_rgba(41,39,37,0.3)] sm:px-7 sm:py-3">
            <ContactRow label="Мекенжай">{siteConfig.address}</ContactRow>
            <ContactRow label="Телефондар">
              {siteConfig.phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="block transition-colors hover:text-orange">
                  {phone.label}
                </a>
              ))}
            </ContactRow>
            <ContactRow label="Жұмыс уақыты">{siteConfig.workingHours}</ContactRow>
            <ContactRow label="Instagram">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-orange"
              >
                <InstagramIcon />
                Instagram
              </a>
            </ContactRow>
          </Reveal>

          <Reveal
            delay={100}
            className="shape-organic relative h-[320px] w-full overflow-hidden bg-yellow-light/60 shadow-[0_20px_48px_-28px_rgba(41,39,37,0.3)] sm:h-[330px] lg:h-auto lg:min-h-[350px]"
          >
            <iframe
              src={mapEmbedSrc}
              title={`Карта: ${siteConfig.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-ink/8 py-4 last:border-b-0 sm:py-3.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      <div className="text-base font-semibold text-ink sm:text-right">{children}</div>
    </div>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}
