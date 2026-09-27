import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Slide = { src: string; alt: string };

export function HeroSlideshow({
  slides,
  interval = 5000,
  eyebrow,
  title,
  subtitle,
}: {
  slides: Slide[];
  interval?: number;
  eyebrow?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  if (slides.length === 0) return null;

  return (
    <>
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={i === active ? slide.alt : ""}
          aria-hidden={i !== active}
          width={1920}
          height={1088}
          loading={i === active ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-ink/15" aria-hidden="true" />
      {(eyebrow || title || subtitle) && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-cream"
          style={{ textShadow: "0 10px 40px rgba(0,0,0,0.8)" }}
        >
          <div className="max-w-[48rem]">
            {eyebrow && (
              <p className="text-[11px] uppercase tracking-[0.3em] text-cream/75">{eyebrow}</p>
            )}
            {title && (
              <h1 className="mt-4 font-serif text-4xl font-semibold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mx-auto mt-5 max-w-[54ch] text-sm leading-relaxed text-cream/80">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      <div className="absolute bottom-4 right-6 lg:right-10 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-cream" : "w-3 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>
    </>
  );
}
