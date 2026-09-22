"use client";

import Image from "next/image";
import { useState } from "react";

const GRADIENTS: Record<string, string> = {
  yellow: "from-yellow-light via-cream to-peach/60",
  peach: "from-peach/70 via-cream to-yellow-light",
  orange: "from-orange/40 via-cream to-yellow-light",
  pink: "from-pink/40 via-cream to-yellow-light",
  lavender: "from-lavender/40 via-cream to-peach/40",
};

export function PhotoFrame({
  src,
  alt,
  className = "",
  accent = "yellow",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  fill = true,
}: {
  src: string;
  alt: string;
  className?: string;
  accent?: keyof typeof GRADIENTS;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const fileName = src.split("/").pop();

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${GRADIENTS[accent]} ${className}`}
      >
        <ImagePlaceholderIcon />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-ink/50 backdrop-blur-sm">
          {fileName}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      className="text-ink/25"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 17L9 12.5C9.7 11.85 10.7 11.85 11.4 12.5L15 15.7M15.5 13.5L17 12.2C17.7 11.6 18.6 11.6 19.3 12.2L21 13.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
