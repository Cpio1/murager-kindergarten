import { infoFields } from "@/data/documents";
import { isPlaceholder } from "@/data/site";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function InfoBlock() {
  const fields = infoFields.filter((field) => !isPlaceholder(field.value));

  return (
    <section className="relative bg-section py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Мекеме туралы" title="Балабақша туралы ақпарат" />

        <Reveal className="mt-10 grid divide-y divide-ink/8 overflow-hidden rounded-[28px] bg-surface px-6 shadow-[0_14px_36px_-26px_rgba(41,39,37,0.28)] sm:grid-cols-2 sm:divide-y-0 sm:px-8">
          {fields.map((field, i) => (
            <div
              key={field.label}
              className={`flex items-center gap-4 py-5 sm:border-ink/8 sm:py-6 ${
                i % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-light text-ink/70">
                <InfoIcon label={field.label} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-ink-soft">
                  {field.label}
                </p>
                <p className="mt-1 text-base text-ink">{field.value}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

function InfoIcon({ label }: { label: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true } as const;

  if (label.includes("Телефон")) {
    return (
      <svg {...common}>
        <path
          d="M5 4h3.2l1.4 4.2-2 1.4a12 12 0 0 0 6.8 6.8l1.4-2 4.2 1.4V19a2 2 0 0 1-2 2c-8.28 0-15-6.72-15-15a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (label.includes("Мекенжай")) {
    return (
      <svg {...common}>
        <path
          d="M12 21.5s7-6.1 7-11.5a7 7 0 1 0-14 0c0 5.4 7 11.5 7 11.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (label.includes("уақыты")) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (label.includes("пошта")) {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 7 12 12.5 19.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (label.includes("Instagram")) {
    return (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.7" cy="7.3" r="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        d="M7 3.5H14L18.5 8V19.5C18.5 20.05 18.05 20.5 17.5 20.5H7C6.45 20.5 6 20.05 6 19.5V4.5C6 3.95 6.45 3.5 7 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 3.5V8H18.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
