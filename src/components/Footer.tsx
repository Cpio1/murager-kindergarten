import { siteConfig } from "@/data/site";
import { InstagramIcon } from "./Contact";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="relative bg-ink py-8 text-cream sm:py-10">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-cream">{siteConfig.fullName}</p>
          <p className="mt-1 text-sm text-cream/65">{siteConfig.address}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-cream/75 sm:items-end">
          {siteConfig.phones.map((phone) => (
            <a key={phone.href} href={phone.href} className="transition-colors hover:text-yellow">
              {phone.label}
            </a>
          ))}
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-yellow"
          >
            <InstagramIcon />
            Instagram
          </a>
        </div>
      </Container>

      <Container className="mt-6 border-t border-cream/10 pt-5">
        <p className="text-xs text-cream/45">© 2026 «{siteConfig.name}»</p>
      </Container>
    </footer>
  );
}
