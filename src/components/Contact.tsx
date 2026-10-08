import { siteConfig } from "@/data/site";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Байланыс" title="Бізбен байланысыңыз" />

        <Reveal className="mt-10 shape-leaf-alt shape-lg grid overflow-hidden bg-surface shadow-[0_20px_48px_-28px_rgba(41,39,37,0.3)] lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-1 p-8 sm:p-10 lg:p-12">
            <ContactRow label="Мекенжай">{siteConfig.address}</ContactRow>
            <ContactRow label="Телефон">
              {siteConfig.phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="block transition-colors hover:text-orange">
                  {phone.label}
                </a>
              ))}
            </ContactRow>
            <ContactRow label="Жұмыс уақыты">{siteConfig.workingHours}</ContactRow>

            <a
              href={siteConfig.phones[0].href}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-yellow/90"
            >
              Қоңырау шалу
            </a>
          </div>

          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[240px] items-center justify-center bg-yellow-light/60 lg:min-h-0"
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <MapPinIcon />
              <p className="max-w-[240px] text-base font-semibold text-ink">{siteConfig.address}</p>
              <span className="text-sm text-ink-soft transition-colors group-hover:text-orange">
                Картадан қарау →
              </span>
            </div>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-ink/8 py-4 last-of-type:border-b-0">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      <div className="text-right text-base font-semibold text-ink">{children}</div>
    </div>
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
