import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import villaBvB from "@/assets/images/villa-bv-b.webp";
import villaSvA from "@/assets/images/villa-sv-a.webp";
import villaSvE from "@/assets/images/villa-sv-e.webp";
import { Eyebrow } from "./Eyebrow";

const COLLECTIONS: {
  image: StaticImageData;
  alt: string;
  name: string;
  tagline: string;
  description: string;
  bedrooms: string;
  size: string;
}[] = [
  {
    image: villaBvB,
    alt: "The Beach Collection — Luxury villas with up to six ensuite bedrooms",
    name: "The Beach Collection",
    tagline: "Luxury villas with up to six ensuite bedrooms",
    description:
      "Sophisticated style and perfect poise. Discover the blissful beach collection, designed to maximise views of the sea and to provide a feeling of indoor-outdoor harmony.",
    bedrooms: "5 – 6 Bedrooms",
    size: "7,300 – 8,300 sq ft",
  },
  {
    image: villaSvA,
    alt: "The Coral Collection — Luxury villas with seven ensuite bedrooms",
    name: "The Coral Collection",
    tagline: "Luxury villas with seven ensuite bedrooms",
    description:
      "Striking elegance meets daring design. Discover the sensational coral collection, designed with an emphasis on resort-style living to savour the spectacular seaside setting.",
    bedrooms: "7 Bedrooms",
    size: "11,000+ sq ft",
  },
  {
    image: villaSvE,
    alt: "Signature Villas — Limited beachfront signature homes",
    name: "Signature Villas",
    tagline: "Limited beachfront signature homes",
    description:
      "A limited selection of architect-led signature homes positioned along the most private stretches of the fronds, with the grandest of living spaces and direct beach access.",
    bedrooms: "7+ Bedrooms",
    size: "On request",
  },
];

export function Residences() {
  return (
    <section id="residences" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <Eyebrow>Residences</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight font-light md:text-5xl">
        Designed for a life by the sea
      </h2>

      <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
        {COLLECTIONS.map((c, i) => (
          <div
            key={c.name}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div
              className={`relative aspect-4/5 w-full ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-serif text-3xl font-light md:text-4xl">
                {c.name}
              </h3>
              <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {c.tagline}
              </p>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                {c.description}
              </p>

              <div className="mt-8 grid max-w-md grid-cols-2 gap-6 border-t border-border pt-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Bedrooms
                  </p>
                  <p className="mt-2 text-lg">{c.bedrooms}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Approx. Size
                  </p>
                  <p className="mt-2 text-lg">{c.size}</p>
                </div>
              </div>

              <Link
                href="#register"
                className="mt-8 inline-block border border-foreground px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
