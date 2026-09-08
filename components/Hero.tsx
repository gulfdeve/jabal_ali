import Image from "next/image";
import Link from "next/link";
import aerial from "@/assets/images/aerial.webp";
import { Eyebrow } from "./Eyebrow";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      <Image
        src={aerial}
        alt="Aerial rendering of the Palm Jebel Ali masterplan in the Arabian Gulf"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

      <div className="relative mx-auto w-full max-w-[1800px] px-6 pb-24 md:px-10 md:pb-32">
        <Eyebrow light>Palm Jebel Ali &middot; Dubai</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] font-light text-white sm:text-6xl md:text-7xl lg:text-8xl">
          The future is Palm Jebel Ali
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          Palm Jebel Ali brings a new era of waterfront living. A vision that
          ignites the imagination. A place where luxury is woven into every
          detail. A home that captures what it means to truly live.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="#register"
            className="border border-white bg-white px-8 py-4 text-xs font-semibold tracking-[0.2em] text-foreground uppercase transition-colors hover:bg-white/90"
          >
            Register Now
          </Link>
          <Link
            href="#overview"
            className="text-xs font-semibold tracking-[0.2em] text-white uppercase underline underline-offset-8 hover:text-white/80"
          >
            Discover More
          </Link>
        </div>
      </div>

      <Link
        href="#overview"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-white/80 uppercase sm:flex"
      >
        Scroll to Explore
        <span className="h-10 w-px bg-white/50" />
      </Link>
    </section>
  );
}
