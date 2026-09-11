import Image, { type StaticImageData } from "next/image";
import signatureYachtClub from "@/assets/images/signature-yacht-club.jpeg";
import luxuryLifestyleMall from "@/assets/images/luxury-lifestyle-mall.jpeg";
import beachClubs from "@/assets/images/beach-clubs.jpeg";
import sunsetBeachPromenade from "@/assets/images/sunset-beach-promenade.jpeg";
import leisurePark from "@/assets/images/leisure-park.jpeg";
import sportsWellnessClub from "@/assets/images/sports-wellness-club.jpeg";
import signatureWellnessResort from "@/assets/images/signature-wellness-resort.jpeg";
import celebrationVillage from "@/assets/images/celebration-village.jpeg";
import { Eyebrow } from "./Eyebrow";

const AMENITIES: { image: StaticImageData; name: string }[] = [
  { image: signatureYachtClub, name: "Signature Yacht Club" },
  { image: luxuryLifestyleMall, name: "Luxury Lifestyle Mall" },
  { image: beachClubs, name: "Beach Clubs" },
  { image: sunsetBeachPromenade, name: "Sunset Beach Promenade" },
  { image: leisurePark, name: "Leisure Park" },
  { image: sportsWellnessClub, name: "Sports & Wellness Club" },
  { image: signatureWellnessResort, name: "Signature Wellness Resort" },
  { image: celebrationVillage, name: "Celebration Village" },
];

export function Amenities() {
  return (
    <section id="amenities" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <Eyebrow>Amenities</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight font-light md:text-5xl">
            Elevated Amenities
          </h2>
          <p className="mt-3 max-w-xl font-serif text-xl leading-tight font-light text-muted-foreground italic md:text-2xl">
            Everything within reach
          </p>
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
