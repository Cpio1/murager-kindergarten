import { documents } from "@/data/documents";
import { Container } from "./ui/Container";
import { Book, Leaf, Star } from "./ui/Decor";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const buttonClass =
  "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-yellow px-6 py-2.5 text-sm font-semibold sm:px-5 sm:py-2 sm:text-[13px] text-ink transition-all";

export function Documents() {
  return (
    <section id="documents" className="relative isolate overflow-x-clip bg-section py-10 sm:py-12 lg:py-13">
      <Star className="right-6 top-8 h-5 w-5 text-orange opacity-25 sm:right-[18%]" rotate={-12} />
      <Leaf className="bottom-6 right-10 h-7 w-7 text-yellow opacity-35" rotate={8} mobile={false} />
      <Book className="right-[30%] top-[45%] h-6 w-8 text-lavender opacity-30" rotate={-8} show="lg" />

      <Container>
        <SectionHeading title="Құжаттар" />

        <div className="mt-7 grid gap-4 sm:mt-6 sm:max-w-lg">
          {documents.map((doc) => (
            <Reveal
              key={doc.title}
              className={`shape-leaf relative flex flex-wrap items-center gap-4 bg-surface px-5 py-5 shadow-[0_16px_40px_-26px_rgba(41,39,37,0.3)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-26px_rgba(41,39,37,0.38)] sm:px-6 sm:py-4 ${doc.href ? "cursor-pointer focus-within:-translate-y-0.5" : ""}`}
            >
              <span className="relative flex h-12 w-12 shrink-0 sm:h-11 sm:w-11 items-center justify-center rounded-[16px_22px_16px_22px] bg-yellow-light text-ink">
                <DocumentIcon />
                <MiniPencil />
              </span>
              <h3 className="flex-1 font-heading text-lg font-semibold sm:text-[17px] text-ink">{doc.title}</h3>
              {doc.href ? (
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonClass} hover:bg-yellow/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink after:absolute after:inset-0 after:content-['']`}
                >
                  Құжаттарды қарау <span aria-hidden="true">→</span>
                </a>
              ) : (
                <span aria-disabled="true" className={`${buttonClass} cursor-default opacity-60`}>
                  Құжаттарды қарау <span aria-hidden="true">→</span>
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DocumentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function MiniPencil() {
  return (
    <svg
      viewBox="0 0 40 16"
      aria-hidden="true"
      className="absolute -right-2.5 -top-1.5 h-[9px] w-[22px] -rotate-45 opacity-80"
    >
      <path d="M8 3H29L37 8L29 13H8V3Z" fill="var(--color-orange)" />
      <path d="M3 3H8V13H3C2.4 13 2 12.6 2 12V4C2 3.4 2.4 3 3 3Z" fill="var(--color-pink)" />
      <path d="M33.5 6L37 8L33.5 10V6Z" fill="var(--color-ink)" />
    </svg>
  );
}
