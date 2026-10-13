import { ReactNode } from "react";

// Фондағы кішкентай декоративті фигуралар (18–50px, opacity 0.15–0.35).
// className — орны, өлшемі, түсі және opacity; mobile={false} — мобильді нұсқада жасырылады.
type DecorProps = { className?: string; rotate?: number; mobile?: boolean };

function Doodle({
  className = "",
  rotate = 0,
  mobile = true,
  viewBox,
  children,
}: DecorProps & { viewBox: string; children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${mobile ? "block" : "hidden sm:block"} ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      <svg viewBox={viewBox} fill="none" className="h-full w-full animate-drift-slow">
        {children}
      </svg>
    </span>
  );
}

export function Sun(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 56 56" {...props}>
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
    <Doodle viewBox="0 0 72 44" {...props}>
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
    <Doodle viewBox="0 0 40 40" {...props}>
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
    <Doodle viewBox="0 0 32 28" {...props}>
      <path
        d="M16 26C16 26 3 18.5 3 9.8C3 5.5 6.2 2.5 10 2.5C12.6 2.5 14.8 4 16 6C17.2 4 19.4 2.5 22 2.5C25.8 2.5 29 5.5 29 9.8C29 18.5 16 26 16 26Z"
        fill="currentColor"
      />
    </Doodle>
  );
}

export function Leaf(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 32 32" {...props}>
      <path d="M5 27C5 14 13 5 27 5C27 19 18 27 5 27Z" fill="currentColor" />
      <path d="M6 26C12 20 17 15 22 10" stroke="var(--color-cream)" strokeWidth="1.6" strokeLinecap="round" />
    </Doodle>
  );
}

export function Rainbow(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 48 28" {...props}>
      <path d="M4 26C4 15 13 6 24 6C35 6 44 15 44 26" stroke="var(--color-orange)" strokeWidth="4" strokeLinecap="round" />
      <path d="M11 26C11 18.8 16.8 13 24 13C31.2 13 37 18.8 37 26" stroke="var(--color-yellow)" strokeWidth="4" strokeLinecap="round" />
      <path d="M18 26C18 22.7 20.7 20 24 20C27.3 20 30 22.7 30 26" stroke="var(--color-pink)" strokeWidth="4" strokeLinecap="round" />
    </Doodle>
  );
}

export function Dots(props: DecorProps) {
  return (
    <Doodle viewBox="0 0 40 16" {...props}>
      <circle cx="6" cy="8" r="4" fill="currentColor" />
      <circle cx="20" cy="8" r="4" fill="currentColor" />
      <circle cx="34" cy="8" r="4" fill="currentColor" />
    </Doodle>
  );
}
