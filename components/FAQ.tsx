import { Eyebrow } from "./Eyebrow";

const FAQS = [
  {
    question: "Where is Palm Jebel Ali located?",
    answer:
      "Palm Jebel Ali is located off the coast of Jebel Ali in Dubai, UAE.",
  },
  {
    question: "Who is developing Palm Jebel Ali?",
    answer:
      "Palm Jebel Ali is being developed by Nakheel, part of Dubai Holding Real Estate. The development forms part of Dubai's long-term expansion of its southern coastal growth corridor.",
  },
  {
    question: "What villas are available?",
    answer:
      "The current villa collections include Beach Collection, Coral Collection villas, and Signature Villas with different layouts, sizes and levels of exclusivity.",
  },
  {
    question: "How many bedrooms do the villas have?",
    answer:
      "Villa options currently include 5, 6 and 7 bedroom residences, depending on the collection.",
  },
  {
    question: "What is the starting price?",
    answer:
      "Prices vary by villa collection, location, size and release. Current pricing and availability should be confirmed for each release.",
  },
  {
    question: "What is the payment plan?",
    answer:
      "Payment plans vary by villa collection and release. Buyers can confirm the latest booking requirements, instalment schedule and payment structure for their selected villa.",
  },
  {
    question: "Are Palm Jebel Ali villa floor plans available?",
    answer:
      "Yes. Floor plans vary by villa collection, bedroom configuration and plot. Detailed floor plans can be provided for the available villas, subject to the current release.",
  },
  {
    question: "Is Palm Jebel Ali a good investment?",
    answer:
      "Palm Jebel Ali offers a limited collection of luxury beachfront residences within a major new waterfront destination in Dubai. Its location, beachfront setting and villa-led development make it an attractive option for premium property buyers and investors.",
  },
  {
    question: "Can foreigners buy property in Palm Jebel Ali?",
    answer:
      "Yes. International buyers can purchase property in Dubai's designated freehold areas, subject to applicable UAE property regulations.",
  },
  {
    question: "Are Palm Jebel Ali villas freehold?",
    answer:
      "Yes, Palm Jebel Ali offers freehold property for eligible buyers, including international purchasers.",
  },
  {
    question: "When is the handover date?",
    answer:
      "The villas are being delivered in phases, with the first villas scheduled for handover from late 2026 through 2027.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <Eyebrow>FAQ</Eyebrow>
      <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight font-light md:text-5xl">
        Key Questions
      </h2>

      <div className="mt-16 divide-y divide-border border-t border-border">
        {FAQS.map((f) => (
          <details key={f.question} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <h3 className="font-serif text-xl font-light md:text-2xl">
                {f.question}
              </h3>
              <span className="shrink-0 text-2xl font-light text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              {f.answer}
            </p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </section>
  );
}
