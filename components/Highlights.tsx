const HIGHLIGHTS = [
  { value: "16", label: "Fronds" },
  { value: "90+", label: "Km Beachfront" },
  { value: "5 – 7", label: "Bedroom Villas" },
  { value: "7,500 – 12,500+", label: "Sq Ft Villa Sizes" },
  { value: "AED 25M+", label: "Villa Starting Price" },
];

export function Highlights() {
  return (
    <section aria-label="Highlights" className="mx-auto max-w-[1800px] px-6 py-12 md:px-10">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-border pb-12 sm:grid-cols-3 lg:grid-cols-5">
        {HIGHLIGHTS.map((h) => (
          <div key={h.label}>
            <dt className="sr-only">{h.label}</dt>
            <dd className="font-serif text-3xl font-light md:text-4xl">{h.value}</dd>
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {h.label}
            </p>
          </div>
        ))}
      </dl>
    </section>
  );
}
