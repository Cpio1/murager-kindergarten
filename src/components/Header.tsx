"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-cream/95 shadow-[0_6px_24px_-16px_rgba(41,39,37,0.35)]" : "bg-cream/70"
        } backdrop-blur-md`}
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-3.5 lg:px-10">
          <Link href="#hero" className="flex flex-col leading-none">
            <span className="font-heading text-[1.75rem] font-semibold tracking-tight text-ink sm:text-[2rem]">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-[11px] font-medium tracking-wide text-ink-soft">
              {siteConfig.tagline}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-ink/75 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-yellow px-6 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-yellow/90 lg:inline-flex"
          >
            Байланысу
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Мәзірді ашу"
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full bg-ink/5 lg:hidden"
          >
            <span
              className={`h-[2px] w-5 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-ink transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-cream px-6 pb-10 pt-28 transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-4 text-lg font-medium text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow px-6 py-3.5 text-sm font-semibold text-ink"
        >
          Байланысу
        </a>
        <div className="mt-auto flex flex-col gap-1 pt-8 text-sm text-ink-soft">
          <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
          <span>{siteConfig.address}</span>
          <span>{siteConfig.workingHours}</span>
        </div>
      </div>
    </header>
  );
}
