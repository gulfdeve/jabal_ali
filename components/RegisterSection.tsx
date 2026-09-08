import Image from "next/image";
import paletteTropical from "@/assets/images/palette-tropical.webp";
import { Eyebrow } from "./Eyebrow";
import { RegisterForm } from "./RegisterForm";

export function RegisterSection() {
  return (
    <section id="register" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Private Enquiry</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
            Register your interest
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Share a few details and a private advisor will send the current
            availability, floorplans and payment structures.
          </p>
          <p className="mt-6 text-xs font-semibold tracking-[0.2em] uppercase">
            Starting from AED 25 Million
          </p>

          <div className="relative mt-10 aspect-4/5 w-full max-w-md">
            <Image
              src={paletteTropical}
              alt="Detail of a stone villa facade on Palm Jebel Ali"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}
