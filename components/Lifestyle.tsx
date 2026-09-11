import Image from "next/image";
import nightLife from "@/assets/images/night-life.webp";
import { Eyebrow } from "./Eyebrow";

export function Lifestyle() {
  return (
    <section id="lifestyle" className="relative flex min-h-[80vh] items-center overflow-hidden py-24">
      <Image
        src={nightLife}
        alt="Private beach at sunset with palms and calm water on Palm Jebel Ali"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
        <Eyebrow light>The Lifestyle</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
          Lifestyle
        </h2>
        <p className="mt-3 font-serif text-xl leading-tight font-light text-white/85 italic md:text-2xl">
          Days measured by the tide
        </p>
        <p className="mt-6 leading-relaxed text-white/85 md:text-lg">
          Mornings on the sand, afternoons on the water, evenings along the
          promenade. Life here is designed to move slowly, with the sea
          always in view.
        </p>
      </div>
    </section>
  );
}
