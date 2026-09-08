"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";
import aerial from "@/assets/images/aerial.webp";
import paletteSapphire from "@/assets/images/palette-sapphire.webp";
import paletteAcquamarina from "@/assets/images/palette-acquamarina.webp";
import paletteTropical from "@/assets/images/palette-tropical.webp";
import yachtClub from "@/assets/images/yacht-club.webp";
import paletteAurora from "@/assets/images/palette-aurora.webp";
import palettePorcelain from "@/assets/images/palette-porcelain.webp";
import villaBvG from "@/assets/images/villa-bv-g.webp";
import nightLife from "@/assets/images/night-life.webp";
import villaSvB from "@/assets/images/villa-sv-b.webp";
import { Eyebrow } from "./Eyebrow";

const PHOTOS: { image: StaticImageData; alt: string }[] = [
  { image: aerial, alt: "Aerial rendering of the Palm Jebel Ali masterplan" },
  { image: paletteSapphire, alt: "Sapphire villa design palette exterior" },
  {
    image: paletteAcquamarina,
    alt: "Acquamarina villa design palette exterior",
  },
  { image: paletteTropical, alt: "Tropical Mist villa design palette" },
  {
    image: yachtClub,
    alt: "Signature Yacht Club exterior at Palm Jebel Ali",
  },
  { image: paletteAurora, alt: "Red Aurora villa design palette" },
  { image: palettePorcelain, alt: "Porcelain Roses villa design palette" },
  { image: villaBvG, alt: "Beach villa rendering, beach-side elevation" },
  { image: nightLife, alt: "Night life on the Palm Jebel Ali waterfront" },
  { image: villaSvB, alt: "Coral collection villa, beach-side elevation" },
];

export function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<(typeof PHOTOS)[number] | null>(null);

  const open = (photo: (typeof PHOTOS)[number]) => {
    setActive(photo);
    dialogRef.current?.showModal();
  };

  return (
    <section id="gallery" className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-light md:text-5xl">
            The island in detail
          </h2>
        </div>
        <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          {PHOTOS.length} Selected Views
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PHOTOS.map((photo) => (
          <button
            key={photo.alt}
            type="button"
            onClick={() => open(photo)}
            className="group relative aspect-4/3 overflow-hidden text-left"
            aria-label={`Open image: ${photo.alt}`}
          >
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        onClose={() => setActive(null)}
        className="m-auto max-h-[90vh] max-w-[90vw] overflow-hidden border-0 bg-transparent p-0 backdrop:bg-black/85"
      >
        {active && (
          <div className="relative">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center bg-black/50 text-lg text-white"
            >
              &times;
            </button>
            <Image
              src={active.image}
              alt={active.alt}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        )}
      </dialog>
    </section>
  );
}
