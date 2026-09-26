import { siteConfig } from "@/data/site";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="relative bg-ink pb-8 pt-16 text-cream sm:pt-20">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <span className="font-heading text-xl text-cream">{siteConfig.fullName}</span>
        <a href={siteConfig.instagramHref} className="text-sm text-cream/70 transition-colors hover:text-yellow">
          Instagram
        </a>
      </Container>

      <Container className="mt-10 border-t border-cream/10 pt-6">
        <p className="text-xs text-cream/45">© 2026 {siteConfig.name}</p>
      </Container>
    </footer>
  );
}
