import Image from "next/image";
import aerial from "@/assets/images/aerial.webp";
import { Eyebrow } from "./Eyebrow";

const DISTANCES = [
  { time: "24 MIN", place: "Al Maktoum International Airport" },
  { time: "24 MIN", place: "Expo City Dubai" },
  { time: "19 MIN", place: "Ibn Battuta Mall" },
  { time: "27 MIN", place: "Palm Jumeirah" },
  { time: "25 MIN", place: "Dubai Marina" },
  { time: "30 MIN", place: "Burj Al Arab / Jumeirah" },
];

export function Location() {
  return (
    <section id="location" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Location</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
            Connected to everything
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Positioned along Dubai&rsquo;s south-western coastline, minutes
            from the city&rsquo;s next generation of infrastructure.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10">
            {DISTANCES.map((d) => (
              <div key={d.place}>
                <p className="font-serif text-3xl font-light">{d.time}</p>
                <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                  {d.place}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square w-full lg:aspect-auto">
          <Image
            src={aerial}
            alt="Aerial view of Palm Jebel Ali, Dubai"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
