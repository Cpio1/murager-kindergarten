import { ReactNode } from "react";

// Фондағы кішкентай декоративті фигуралар (18–60px, opacity 0.15–0.4).
// className — орны, өлшемі, түсі және opacity;
// mobile={false} — мобильді нұсқада жасырылады; show — қай экраннан бастап көрінетіні;
// motion — өте баяу анимация түрі.
type Motion = "drift" | "float" | "sway" | "spin" | "none";
type Show = "all" | "sm" | "lg" | "xl";
type DecorProps = { className?: string; rotate?: number; mobile?: boolean; show?: Show; motion?: Motion };

const SHOW_CLASS: Record<Show, string> = {
  all: "block",
  sm: "hidden sm:block",
  lg: "hidden lg:block",
  xl: "hidden xl:block",
};

const MOTION_CLASS: Record<Motion, string> = {
  drift: "animate-drift-slow",
  float: "animate-float",
  sway: "animate-sway",
  spin: "animate-spin-slow",
  none: "",
};

function Doodle({
  className = "",
  rotate = 0,
  mobile = true,
  show,
  motion = "drift",
  viewBox,
  children,
}: DecorProps & { viewBox: string; children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${SHOW_CLASS[show ?? (mobile ? "all" : "sm")]} ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      <svg viewBox={viewBox} fill="none" className={`h-full w-full ${MOTION_CLASS[motion]}`}>
        {children}
      </svg>
    </span>
  );
}

export function Sun(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 56 56" motion="spin" {...props}>
      <circle cx="28" cy="28" r="11" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={28 + Math.cos(a) * 17}
            y1={28 + Math.sin(a) * 17}
            x2={28 + Math.cos(a) * 24}
            y2={28 + Math.sin(a) * 24}
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        );
      })}
    </Doodle>
  );
}

export function Cloud(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 72 44" motion="float" {...props}>
      <path
        d="M18 38C10 38 4 32.6 4 26C4 19.4 10 14 18 14C19.4 14 20.8 14.2 22 14.6C24.6 9.4 30.2 6 36.5 6C44.8 6 51.8 12 53.2 20C61 20.8 67 26.8 67 32C67 35.6 63 38 58.5 38H18Z"
        fill="currentColor"
      />
    </Doodle>
  );
}

export function Star(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 28 28" {...props}>
      <path
        d="M14 2L17 10.5L26 11L19 16.8L21.5 25.5L14 20.5L6.5 25.5L9 16.8L2 11L11 10.5L14 2Z"
        fill="currentColor"
        strokeLinejoin="round"
      />
    </Doodle>
  );
}

export function Sparkle(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 28 28" {...props}>
      <path
        d="M14 1C14.8 8.5 15.5 12.5 14 14C12.5 15.5 8.5 14.8 1 14C8.5 15.5 12.5 16.5 14 18C15.5 19.5 14.8 23.5 14 27C15.5 19.5 16.5 15.5 18 14C19.5 12.5 23.5 13.2 27 14C19.5 12.5 15.5 11.5 14 10C12.5 8.5 13.2 4.5 14 1Z"
        fill="currentColor"
      />
    </Doodle>
  );
}

export function Flower(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 40 40" motion="spin" {...props}>
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i * 2 * Math.PI) / 5;
        return <circle key={i} cx={20 + Math.cos(a) * 8} cy={20 + Math.sin(a) * 8} r="7" fill="currentColor" />;
      })}
      <circle cx="20" cy="20" r="4.5" fill="var(--color-cream)" />
    </Doodle>
  );
}

export function Heart(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 32 28" motion="float" {...props}>
      <path
        d="M16 26C16 26 3 18.5 3 9.8C3 5.5 6.2 2.5 10 2.5C12.6 2.5 14.8 4 16 6C17.2 4 19.4 2.5 22 2.5C25.8 2.5 29 5.5 29 9.8C29 18.5 16 26 16 26Z"
        fill="currentColor"
      />
    </Doodle>
  );
}

export function Leaf(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 32 32" motion="sway" {...props}>
      <path d="M5 27C5 14 13 5 27 5C27 19 18 27 5 27Z" fill="currentColor" />
      <path d="M6 26C12 20 17 15 22 10" stroke="var(--color-cream)" strokeWidth="1.6" strokeLinecap="round" />
    </Doodle>
  );
}

export function Rainbow(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 48 28" motion="sway" {...props}>
      <path d="M4 26C4 15 13 6 24 6C35 6 44 15 44 26" stroke="var(--color-orange)" strokeWidth="4" strokeLinecap="round" />
      <path d="M11 26C11 18.8 16.8 13 24 13C31.2 13 37 18.8 37 26" stroke="var(--color-yellow)" strokeWidth="4" strokeLinecap="round" />
      <path d="M18 26C18 22.7 20.7 20 24 20C27.3 20 30 22.7 30 26" stroke="var(--color-pink)" strokeWidth="4" strokeLinecap="round" />
    </Doodle>
  );
}

export function Dots(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 40 16" motion="float" {...props}>
      <circle cx="6" cy="8" r="4" fill="currentColor" />
      <circle cx="20" cy="8" r="4" fill="currentColor" />
      <circle cx="34" cy="8" r="4" fill="currentColor" />
    </Doodle>
  );
}

export function Dot(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 10 10" motion="float" {...props}>
      <circle cx="5" cy="5" r="5" fill="currentColor" />
    </Doodle>
  );
}

export function Moon(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 32 32" motion="sway" {...props}>
      <path d="M20 3.5C12.5 4.6 7 11 7 18.5C7 24 11.5 28.5 17 28.5C22.3 28.5 26.8 25.2 28.5 20.5C27 21.3 25.3 21.7 23.5 21.7C17.7 21.7 13 17 13 11.2C13 8.2 14.3 5.4 16.5 3.6C17.6 3.5 18.8 3.4 20 3.5Z" fill="currentColor" />
    </Doodle>
  );
}

export function Pencil(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 40 16" motion="sway" {...props}>
      <path d="M8 3H29L37 8L29 13H8V3Z" fill="currentColor" />
      <path d="M3 3H8V13H3C2.4 13 2 12.6 2 12V4C2 3.4 2.4 3 3 3Z" fill="var(--color-pink)" />
      <path d="M29 3L37 8L29 13" stroke="var(--color-cream)" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M33.5 6L37 8L33.5 10V6Z" fill="var(--color-ink)" />
    </Doodle>
  );
}

export function Balloon(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 28 48" motion="float" {...props}>
      <ellipse cx="14" cy="13" rx="11" ry="12.5" fill="currentColor" />
      <path d="M12 25.3H16L14 28L12 25.3Z" fill="currentColor" />
      <path d="M14 28C11 32 17 35.5 13.5 40C12 42 13 44 14 46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Doodle>
  );
}

export function Block(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 32 32" motion="sway" {...props}>
      <path d="M5 11L11 5H28L22 11H5Z" fill="currentColor" opacity="0.55" />
      <path d="M22 11L28 5V22L22 28V11Z" fill="currentColor" opacity="0.8" />
      <rect x="5" y="11" width="17" height="17" rx="2.5" fill="currentColor" />
    </Doodle>
  );
}

export function Squiggle(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 64 20" motion="none" {...props}>
      <path
        d="M3 12C8 3 13 3 16 10C19 17 25 17 28 10C31 3 37 3 40 10C43 17 49 17 52 10C54.5 5 58 4 61 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Doodle>
  );
}

export function Plane(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 32 32" motion="float" {...props}>
      <path d="M3 14.5L29 4L21.5 28L15.5 18.5L3 14.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M15.5 18.5L29 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </Doodle>
  );
}

export function Ring(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 24 24" motion="float" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="3.5" />
    </Doodle>
  );
}

export function Triangle(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 28 26" motion="spin" {...props}>
      <path d="M14 4L25 22H3L14 4Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </Doodle>
  );
}

export function Book(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 36 28" motion="sway" {...props}>
      <path d="M18 7C14 4 8.5 3.5 3 4.5V23C8.5 22 14 22.5 18 25.5C22 22.5 27.5 22 33 23V4.5C27.5 3.5 22 4 18 7Z" fill="currentColor" />
      <path d="M18 7V25.5" stroke="var(--color-cream)" strokeWidth="1.6" strokeLinecap="round" />
    </Doodle>
  );
}

// Блоктардың артындағы өте ашық органикалық фон пішіндері.
const BLOB_PATHS = [
  "M43.5,-58.6C55.2,-49.3,62.5,-34.6,66.4,-19C70.3,-3.4,70.8,13.1,64.6,26.6C58.4,40.1,45.5,50.6,31.2,57.6C16.9,64.6,1.2,68.1,-15.4,66.5C-32,64.9,-49.5,58.2,-59.9,45.6C-70.3,33,-73.6,14.5,-71.1,-2.6C-68.6,-19.7,-60.3,-35.4,-48.1,-44.9C-35.9,-54.4,-19.8,-57.7,-3.4,-53.1C13,-48.5,31.8,-67.9,43.5,-58.6Z",
  "M38.9,-50.8C50.3,-43.6,59.3,-32.1,63.8,-18.6C68.3,-5.1,68.3,10.4,62.1,22.9C55.9,35.4,43.5,44.9,30.2,52.4C16.9,59.9,2.7,65.4,-12.5,64.6C-27.7,63.8,-43.9,56.7,-53.7,44.5C-63.5,32.3,-66.9,15.1,-65.1,-0.9C-63.3,-16.9,-56.3,-31.7,-45.5,-39.2C-34.7,-46.7,-20.1,-46.9,-5.9,-42C8.3,-37.1,27.5,-58,38.9,-50.8Z",
];

export function Blob({ className = "", variant = 0 }: { className?: string; variant?: 0 | 1 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="-80 -80 160 160"
      className={`pointer-events-none absolute -z-10 select-none ${className}`}
    >
      <path d={BLOB_PATHS[variant]} fill="currentColor" />
    </svg>
  );
}
