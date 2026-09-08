import Image from "next/image";
import yachtClub from "@/assets/images/yacht-club.webp";
import { Eyebrow } from "./Eyebrow";

const POINTS = [
  {
    number: "01",
    title: "Perfectly Positioned",
    description:
      "Palm Jebel Ali sits between Port Jebel Ali and the Jebel Ali Marine Sanctuary, well connected to the rest of Dubai via Sheikh Zayed Road (E11).",
  },
  {
    number: "02",
    title: "A City-Scale Destination",
    description:
      "10.5 million sqm of development across seven island districts, with 80+ resorts and hotels planned alongside residential neighbourhoods.",
  },
  {
    number: "03",
    title: "Finite Waterfront",
    description:
      "Beachfront land in Dubai remains limited. Villas along the fronds are released in controlled, phased launches.",
  },
  {
    number: "04",
    title: "Excellence in Design",
    description:
      "Nakheel has brought together leading designers so each villa lining the fronds carries a truly unique style and character.",
  },
];

const RECAP = [
  { value: "10.5M", label: "Sqm of Development" },
  { value: "80+", label: "Resorts & Hotels" },
  { value: "240,000", label: "Future Residents" },
];

export function Investment() {
  return (
    <section id="investment" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Investment</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
            A finite shoreline
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Palm Jebel Ali sits at the centre of Dubai&rsquo;s next growth
            cycle — a limited waterfront address released in controlled
            phases.
          </p>
          <div className="relative mt-10 aspect-4/5 w-full">
            <Image
              src={yachtClub}
              alt="Signature Yacht Club at Palm Jebel Ali"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            {POINTS.map((point) => (
              <div
                key={point.number}
                className="grid grid-cols-[3rem_1fr] gap-6 border-b border-border py-8 first:pt-0 md:grid-cols-[3rem_1fr_1fr] md:gap-10"
              >
                <span className="text-sm text-muted-foreground">
                  {point.number}
                </span>
                <h3 className="font-serif text-2xl leading-tight font-light md:text-3xl">
                  {point.title}
                </h3>
                <p className="col-span-2 mt-4 leading-relaxed text-muted-foreground md:col-span-1 md:mt-0">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6">
            {RECAP.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl font-light md:text-4xl">
                  {stat.value}
                </dd>
                <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
