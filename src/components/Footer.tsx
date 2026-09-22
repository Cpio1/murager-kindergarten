import { navigation, siteConfig } from "@/data/site";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="relative bg-ink pb-8 pt-16 text-cream sm:pt-20">
      <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div>
          <span className="font-heading text-xl text-cream">{siteConfig.name}</span>
          <p className="mt-2 max-w-[220px] text-sm text-cream/60">{siteConfig.fullName}</p>
        </div>

        <nav className="flex flex-col gap-2.5">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cream/70 transition-colors hover:text-yellow"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 text-sm text-cream/70">
          <a href={`tel:${siteConfig.phoneHref}`} className="transition-colors hover:text-yellow">
            {siteConfig.phone}
          </a>
          <span>{siteConfig.address}</span>
          <a href={siteConfig.instagramHref} className="transition-colors hover:text-yellow">
            Instagram
          </a>
        </div>
      </Container>

      <Container className="mt-14 border-t border-cream/10 pt-6">
        <p className="text-xs text-cream/45">
          © 2026 {siteConfig.name}. Барлық құқықтар қорғалған.
        </p>
      </Container>
    </footer>
  );
}
