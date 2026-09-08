import Image from "next/image";
import Link from "next/link";
import aerial from "@/assets/images/aerial.webp";
import { Eyebrow } from "./Eyebrow";

export function ClosingCta() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <Image
        src={aerial}
        alt="Aerial dusk view of Palm Jebel Ali fronds and the Dubai coastline"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
        <Eyebrow light>Limited Release</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
          Secure your place on the island
        </h2>
        <p className="mt-6 leading-relaxed text-white/85 md:text-lg">
          Availability is released in phases and moves quickly. Speak with a
          private advisor today.
        </p>
        <Link
          href="#register"
          className="mt-10 inline-block border border-white/60 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-white/10"
        >
          Register Your Interest
        </Link>
      </div>
    </section>
  );
}
