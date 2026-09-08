import Image, { type StaticImageData } from "next/image";
import yachtClub from "@/assets/images/yacht-club.webp";
import villaSvF from "@/assets/images/villa-sv-f.webp";
import villaBvC from "@/assets/images/villa-bv-c.webp";
import villaBvL from "@/assets/images/villa-bv-l.webp";
import villaBvI from "@/assets/images/villa-bv-i.webp";
import villaSvG from "@/assets/images/villa-sv-g.webp";
import nightLife from "@/assets/images/night-life.webp";
import villaBvP from "@/assets/images/villa-bv-p.webp";
import { Eyebrow } from "./Eyebrow";

const AMENITIES: { image: StaticImageData; name: string }[] = [
  { image: yachtClub, name: "Signature Yacht Club" },
  { image: villaSvF, name: "Luxury Lifestyle Mall" },
  { image: villaBvC, name: "Beach Clubs" },
  { image: villaBvL, name: "Sunset Beach Promenade" },
  { image: villaBvI, name: "Leisure Park" },
  { image: villaSvG, name: "Sports & Wellness Club" },
  { image: nightLife, name: "Signature Wellness Resort" },
  { image: villaBvP, name: "Celebration Village" },
];

export function Amenities() {
  return (
    <section id="amenities" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <Eyebrow>Amenities</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight font-light md:text-5xl">
            Everything within reach
          </h2>
        </div>
        <p className="max-w-sm leading-relaxed text-muted-foreground">
          A destination designed around leisure, wellness, hospitality,
          entertainment and waterfront living.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {AMENITIES.map((a) => (
          <div key={a.name} className="group relative aspect-3/4 overflow-hidden">
            <Image
              src={a.image}
              alt={a.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
            <h3 className="absolute bottom-6 left-6 max-w-[80%] font-serif text-xl leading-snug text-white md:text-2xl">
              {a.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
