import Link from "next/link";
import type { Metadata } from "next";
import { documents } from "@/data/documents";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Құжаттар — «Мұрагер» бөбекжай балабақшасы",
};

export default function DocumentsPage() {
  return (
    <main className="flex flex-1 items-center py-28">
      <Container className="max-w-2xl text-center">
        <span className="mb-4 inline-block rounded-full bg-yellow-light px-4 py-1.5 text-sm font-medium text-ink/80">
          Құжаттар
        </span>
        <h1 className="font-heading text-3xl text-ink sm:text-4xl">
          {documents[0]?.title ?? "Аттестаттау құжаттары"}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          Бұл бетке балабақшаның аккредиттеу және аттестаттау құжаттары жақын арада қосылады.
        </p>
        <Link
          href="/#documents"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink/90"
        >
          Басты бетке оралу
        </Link>
      </Container>
    </main>
  );
}
