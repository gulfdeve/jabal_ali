import Image from "next/image";
import villaBvA from "@/assets/images/villa-bv-a.webp";
import { Eyebrow } from "./Eyebrow";

const PARAGRAPHS = [
  "Palm Jebel Ali introduces a new vision for waterfront living in Dubai — an expansive island destination where contemporary architecture, natural landscapes and the Arabian Gulf come together.",
  "Sixteen fronds, seven connected islands and more than ninety kilometres of coastline form a masterplan conceived around water, light and slow, considered living.",
  "From the moment you arrive, the rhythm changes. Wide avenues lined with palm trees open onto private beaches, while pocket parks and waterfront promenades invite residents to live between the city and the sea.",
  "Every residence has been composed to frame uninterrupted views of the Gulf, with generous terraces, double-height spaces and materials chosen to reflect the colours of sand, sea and sky.",
];

const STATS = [
  { value: "10.5M", label: "Sqm of Development" },
  { value: "80+", label: "Resorts & Hotels" },
  { value: "240,000", label: "Residents" },
  { value: "7", label: "Island Districts" },
];

export function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Palm Jebel Ali</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
            A new chapter of island living
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground">
            {PARAGRAPHS.map((p) => (
              <p key={p} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="relative aspect-4/5 w-full lg:aspect-auto">
          <Image
            src={villaBvA}
            alt="Contemporary beachfront villa with an infinity pool facing the Arabian Gulf"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-12 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-serif text-4xl font-light md:text-5xl">
              {stat.value}
            </dd>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </dl>
    </section>
  );
}
