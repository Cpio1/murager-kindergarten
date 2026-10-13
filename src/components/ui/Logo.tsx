// «Мұрагер» эмблемасы: жұмсақ органикалық пішін ішінде «М» әрпі, жанында кішкентай жұлдызша мен нүкте.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M24 6.5C34.5 6 42.5 12.8 43 23.5C43.5 34.5 35.8 42.5 24.5 43C13.2 43.5 5 35.8 5 25C5 14.2 13 7 24 6.5Z"
        fill="var(--color-yellow)"
      />
      <path
        d="M15.5 32.5V18.5L24 27.5L32.5 18.5V32.5"
        stroke="var(--color-ink)"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 1.5C41.6 5 42.6 6 46 6.7C42.6 7.4 41.6 8.4 41 12C40.4 8.4 39.4 7.4 36 6.7C39.4 6 40.4 5 41 1.5Z"
        fill="var(--color-orange)"
      />
      <circle cx="6" cy="9" r="2.2" fill="var(--color-pink)" />
      <circle cx="42.5" cy="40" r="1.8" fill="var(--color-lavender)" />
    </svg>
  );
}
