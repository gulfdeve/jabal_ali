"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#residences", label: "Districts" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        dark
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="#top"
          className={`font-serif text-lg tracking-[0.2em] uppercase ${
            dark ? "text-foreground" : "text-white"
          }`}
        >
          Jebel Ali Villas
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#register"
          className={`hidden shrink-0 border px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors sm:inline-block ${
            scrolled
              ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
              : "border-white/50 text-white hover:bg-white/10"
          }`}
        >
          Register Interest
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden ${
            dark ? "text-foreground" : "text-white"
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t border-border bg-background px-6 py-6 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-xs font-semibold tracking-[0.2em] text-foreground/70 uppercase hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#register"
            onClick={() => setOpen(false)}
            className="mt-3 border border-foreground bg-foreground px-6 py-3 text-center text-xs font-semibold tracking-[0.2em] text-background uppercase"
          >
            Register Interest
          </Link>
        </nav>
      )}
    </header>
  );
}
