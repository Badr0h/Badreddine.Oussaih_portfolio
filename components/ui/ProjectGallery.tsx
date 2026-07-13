"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
};

export function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-bg-muted">
        <Image
          src={images[active]!}
          alt={`${alt} — ${active + 1}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 720px"
          priority={active === 0}
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                active === i
                  ? "border-accent"
                  : "border-border opacity-70 hover:opacity-100"
              }`}
              aria-label={`Image ${i + 1}`}
              aria-pressed={active === i}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
