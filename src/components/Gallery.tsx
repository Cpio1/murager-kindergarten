"use client";

import { useEffect, useState } from "react";
import { galleryImages } from "@/data/gallery";
import { Container } from "./ui/Container";
import { Cloud, Flower, Pencil, Sparkle, Star, Triangle } from "./ui/Decor";
import { PhotoFrame } from "./ui/PhotoFrame";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const SPAN_CLASS: Record<string, string> = {
  large: "col-span-2 row-span-2",
  wide: "col-span-2",
  tall: "row-span-2",
  small: "",
};

// 3 repeating tile shapes; the large photo uses shape-organic
const GALLERY_SHAPES = ["shape-leaf", "shape-wave", "shape-leaf-alt"];

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
    <section id="gallery" className="relative overflow-x-clip py-10 sm:py-12 lg:py-13">
      <Cloud className="right-4 top-8 h-7 w-12 text-peach opacity-35 sm:right-12" rotate={-6} />
      <Sparkle className="left-2 top-[45%] h-6 w-6 text-orange opacity-25" rotate={10} mobile={false} />
      <Flower className="bottom-4 right-[30%] h-6 w-6 text-lavender opacity-30" rotate={15} mobile={false} />
      <Pencil className="left-[calc(50%-618px)] top-[30%] h-4 w-10 text-yellow opacity-50" rotate={-35} show="xl" />
      <Star className="right-[calc(50%-608px)] top-[62%] h-5 w-5 text-pink opacity-35" rotate={12} show="xl" />
      <Triangle className="bottom-[18%] left-[calc(50%-606px)] h-5 w-5 text-orange opacity-25" show="xl" />

      <Container>
        <div className="relative">
          <SectionHeading title="Балабақша өмірінен" />
          <Pencil className="bottom-2 right-[16%] h-4 w-10 text-orange opacity-40" rotate={-12} show="sm" />
          <Star className="bottom-6 right-[9%] h-4 w-4 text-yellow opacity-50" rotate={10} show="sm" />
        </div>

        <div className="mt-7 sm:mt-6 grid grid-flow-dense auto-rows-[calc(50vw-28px)] grid-cols-2 sm:auto-rows-[175px] lg:auto-rows-[225px] gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src} delay={(i % 4) * 70} className={SPAN_CLASS[image.span]}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`group block h-full w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-orange ${image.span === "large" ? "shape-organic" : GALLERY_SHAPES[i % GALLERY_SHAPES.length]}`}
              >
                <PhotoFrame
                  src={image.src}
                  alt={image.alt}
                  accent={(["yellow", "peach", "orange", "lavender"] as const)[i % 4]}
                  sizes={image.span === "large" || image.span === "wide" ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"}
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
  const ratio = image.orientation === "landscape" ? 4 / 3 : 3 / 4;

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
        className="relative overflow-hidden shape-leaf shape-lg"
        style={{
          aspectRatio: ratio,
          width: `min(calc(100vw - 2rem), calc(85vh * ${ratio}), 960px)`,
        }}
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
