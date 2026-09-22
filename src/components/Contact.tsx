import { siteConfig } from "@/data/site";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const contactRows = [
  { label: "Телефон", value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
  { label: "Мекенжай", value: siteConfig.address },
  { label: "Instagram", value: siteConfig.instagram, href: siteConfig.instagramHref },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Жұмыс уақыты", value: siteConfig.workingHours },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Байланыс" title="Бізбен байланысыңыз" />

        <Reveal className="mt-10 grid overflow-hidden rounded-[32px] bg-surface shadow-[0_20px_48px_-28px_rgba(41,39,37,0.3)] lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-1 p-8 sm:p-10 lg:p-12">
            {contactRows.map((row) =>
              row.href ? (
                <a
                  key={row.label}
                  href={row.href}
                  className="flex items-center justify-between gap-4 border-b border-ink/8 py-4 transition-colors last:border-b-0 hover:text-orange"
                >
                  <span className="text-sm font-medium text-ink-soft">{row.label}</span>
                  <span className="text-right text-base font-semibold text-ink">{row.value}</span>
                </a>
              ) : (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-b border-ink/8 py-4 last:border-b-0"
                >
                  <span className="text-sm font-medium text-ink-soft">{row.label}</span>
                  <span className="text-right text-base font-semibold text-ink">{row.value}</span>
                </div>
              )
            )}

            <a
              href={siteConfig.instagramHref}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-yellow/90"
            >
              Instagram-ға өту
            </a>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center bg-yellow-light/60 lg:min-h-0">
            <div className="flex flex-col items-center gap-3 text-center">
              <MapPinIcon />
              <p className="max-w-[220px] text-sm text-ink-soft">
                Карта мекенжай қосылғаннан кейін осында көрсетіледі
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-orange/70" aria-hidden="true">
      <path
        d="M12 21.5C12 21.5 19 15.4 19 10C19 6.13 15.87 3 12 3C8.13 3 5 6.13 5 10C5 15.4 12 21.5 12 21.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
