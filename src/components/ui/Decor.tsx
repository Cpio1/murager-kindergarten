export function Sun({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute animate-drift-slow text-yellow ${className}`}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="12" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 28 + Math.cos(angle) * 18;
        const y1 = 28 + Math.sin(angle) * 18;
        const x2 = 28 + Math.cos(angle) * 25;
        const y2 = 28 + Math.sin(angle) * 25;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute animate-drift text-white ${className}`}
      width="72"
      height="44"
      viewBox="0 0 72 44"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 34C10 34 4 28.6 4 22C4 15.4 10 10 18 10C19.4 10 20.8 10.2 22 10.6C24.6 5.4 30.2 2 36.5 2C44.8 2 51.8 8 53.2 16C61 16.8 67 22.8 67 30C67 34.6 63 38 58.5 38H18Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute animate-drift text-orange ${className}`}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 1C14.8 8.5 15.5 12.5 14 14C12.5 15.5 8.5 14.8 1 14C8.5 15.5 12.5 16.5 14 18C15.5 19.5 14.8 23.5 14 27C15.5 19.5 16.5 15.5 18 14C19.5 12.5 23.5 13.2 27 14C19.5 12.5 15.5 11.5 14 10C12.5 8.5 13.2 4.5 14 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Flower({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute animate-drift text-pink ${className}`}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i * 2 * Math.PI) / 5;
        const cx = 20 + Math.cos(angle) * 8;
        const cy = 20 + Math.sin(angle) * 8;
        return <circle key={i} cx={cx} cy={cy} r="7" fill="currentColor" />;
      })}
      <circle cx="20" cy="20" r="5" className="fill-yellow" />
    </svg>
  );
}

export function Dot({ className = "", color = "bg-orange" }: { className?: string; color?: string }) {
  return <span className={`pointer-events-none absolute block rounded-full ${color} ${className}`} />;
}
