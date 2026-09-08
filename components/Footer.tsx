import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#residences", label: "Districts" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#register", label: "Register Interest" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1800px] px-6 py-16 md:px-10">
      <div className="grid gap-12 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-xl tracking-[0.15em] uppercase">
            Jebel Ali Villas
          </p>
          <p className="mt-2 text-xs tracking-[0.1em] text-muted-foreground uppercase">
            Starting from AED 25 Million
          </p>
          <p className="mt-6 max-w-xs leading-relaxed text-muted-foreground">
            Private advisory for waterfront acquisitions in Dubai. Palm Jebel
            Ali representation by appointment.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Explore
          </p>
          <nav aria-label="Footer" className="mt-4 flex flex-col gap-3">
            {EXPLORE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Enquiries
          </p>
          <Link
            href="#register"
            className="mt-4 inline-block text-sm text-foreground/80 hover:text-foreground"
          >
            Register Interest
          </Link>
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-8 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Jebel Ali Villas. All rights
        reserved.
      </div>
    </footer>
  );
}
