import { Eyebrow } from "./Eyebrow";

const UPDATES = [
  {
    title: "Latest Release",
    detail: "44 beachfront villas released on Frond F, August 2026.",
  },
  {
    title: "Availability",
    detail:
      "Limited units remaining across the Beach and Coral Collections.",
  },
  {
    title: "Villa Sizes",
    detail:
      "Beach Collection 7,500–8,500 sq ft. Coral Collection 11,500–12,500 sq ft.",
  },
  {
    title: "Handover",
    detail: "Phased handover beginning late 2026 through 2027.",
  },
  {
    title: "Payment Plans",
    detail:
      "Confirm the latest booking and instalment structure with a private advisor.",
  },
  {
    title: "Construction Status",
    detail: "Construction updates to follow as the release progresses.",
  },
];

export function LatestUpdates() {
  return (
    <section id="latest-updates" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <Eyebrow>Palm Jebel Ali</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight font-light md:text-5xl">
        Latest Updates
      </h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
        Nakheel announced a limited release of 44 beachfront villas on Frond
        F in August 2026. The release includes Beach and Coral Collection
        villas, with five-, six- and seven-bedroom residences. Nakheel stated
        that phased handover of the first villas is scheduled to begin in
        late 2026 and continue through 2027.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {UPDATES.map((u) => (
          <div key={u.title}>
            <h3 className="font-serif text-xl font-light md:text-2xl">
              {u.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {u.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
