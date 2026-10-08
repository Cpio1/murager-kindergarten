import Link from "next/link";
import { documents } from "@/data/documents";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Documents() {
  const doc = documents[0];

  return (
    <section id="documents" className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Ресми ақпарат" title="Құжаттар" />

        <Reveal className="mt-10 shape-leaf max-w-xl bg-surface p-8 shadow-[0_16px_40px_-26px_rgba(41,39,37,0.3)] sm:p-10">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-light text-ink">
            <DocumentIcon />
          </span>
          <h3 className="mt-6 font-heading text-xl text-ink">{doc.title}</h3>
          <Link
            href={doc.href}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-orange"
          >
            Қарау
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

function DocumentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3.5H14L18.5 8V19.5C18.5 20.05 18.05 20.5 17.5 20.5H7C6.45 20.5 6 20.05 6 19.5V4.5C6 3.95 6.45 3.5 7 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 3.5V8H18.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 13H15M9 16.5H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
