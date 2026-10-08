"use client";

import { useEffect, useState } from "react";
import { galleryImages } from "@/data/gallery";
import { Container } from "./ui/Container";
import { PhotoFrame } from "./ui/PhotoFrame";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const SPAN_CLASS: Record<string, string> = {
  large: "col-span-2 row-span-2 aspect-square sm:aspect-auto",
  wide: "col-span-2 aspect-[16/9]",
  tall: "row-span-2 aspect-[3/4]",
  small: "aspect-square",
};

const GALLERY_SHAPES = ["shape-organic", "shape-blob", "shape-wave", "shape-leaf", "shape-leaf-alt", "shape-wave", "shape-blob", "shape-leaf"];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Галерея" title="Балабақша өмірінен" />

        <div className="mt-12 grid auto-rows-[minmax(120px,auto)] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src} delay={(i % 4) * 70} className={SPAN_CLASS[image.span]}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`group block h-full w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-orange ${GALLERY_SHAPES[i % GALLERY_SHAPES.length]}`}
              >
                <PhotoFrame
                  src={image.src}
                  alt={image.alt}
                  accent={(["yellow", "peach", "orange", "lavender"] as const)[i % 4]}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {activeIndex !== null && (
        <Lightbox
          image={galleryImages[activeIndex]}
          onClose={() => setActiveIndex(null)}
          onNext={() => setActiveIndex((activeIndex + 1) % galleryImages.length)}
          onPrev={() => setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length)}
        />
      )}
    </section>
  );
}

function Lightbox({
  image,
  onClose,
  onNext,
  onPrev,
}: {
  image: (typeof galleryImages)[number];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Жабу"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        ✕
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Алдыңғы сурет"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
      >
        ‹
      </button>

      <div
        className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden shape-leaf shape-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <PhotoFrame src={image.src} alt={image.alt} accent="peach" className="h-full w-full" sizes="90vw" />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Келесі сурет"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
      >
        ›
      </button>
    </div>
  );
}
