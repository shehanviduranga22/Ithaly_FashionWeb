import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";
import detailLapel from "@/assets/detail-lapel.jpg";
import maisonSlide1 from "@/assets/maison_slideshow (1).png";
import maisonSlide2 from "@/assets/maison_slideshow (2).png";
import maisonSlide3 from "@/assets/maison_slideshow (3).png";

gsap.registerPlugin(ScrollTrigger);

const maisonSlides: Slide[] = [
  {
    src: maisonSlide1,
    alt: "Interior of a tailoring atelier with a cutting table and bolts of fabric",
  },
  { src: maisonSlide2, alt: "Close detail of refined tailoring and lapel construction" },
  { src: maisonSlide3, alt: "Man in a camel jacket inside an Italian marble arcade" },
];

const title = "About CIAO D MILANO — Italian-Inspired Tailoring in Dubai";
const description =
  "The story behind CIAO D MILANO: an Italian-inspired menswear maison based in Dubai, built on quiet tailoring, natural fibres and small, considered runs.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const storyRef = useRef<HTMLElement>(null);
  const craftRef = useRef<HTMLElement>(null);
  const purposeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-about-label]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-about-headline]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 82%", once: true },
          },
        );
      });

      gsap.fromTo(
        "[data-story-divider]",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.05,
          ease: "power3.out",
          transformOrigin: "left center",
          scrollTrigger: { trigger: storyRef.current, start: "top 78%", once: true },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-story-col]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 82%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-craft-item]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: craftRef.current, start: "top 82%", once: true },
          },
        );
      });

      gsap.fromTo(
        "[data-mission-vision]",
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: purposeRef.current, start: "top 80%", once: true },
        },
      );

      gsap.fromTo(
        "[data-cta-divider]",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
          transformOrigin: "left center",
          scrollTrigger: { trigger: "[data-cta-row]", start: "top 85%", once: true },
        },
      );
    });

    return () => context.revert();
  }, []);

  return (
    <div className="text-ink">
      <SiteHeader />

      <main>
        <section
          className="relative h-[42vh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-ink/10"
          aria-label="Inside the maison"
        >
          <HeroSlideshow
            slides={maisonSlides}
            interval={5000}
            eyebrow="No. 01 — The Maison"
            title="An atelier, not a factory."
            subtitle="CIAO D MILANO began with a simple idea: that Italian dressing travels well."
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        </section>

        <section className="about-maison-intro" aria-label="Maison introduction">
          <p className="about-micro-label" data-about-label>
            CIAO D MILANO / THE MAISON
          </p>
          <h2 className="about-maison-title" data-about-headline>
            <span>Italian tailoring,</span>
            <span className="about-maison-title-italic">a different horizon.</span>
          </h2>
          <p className="about-maison-copy" data-about-headline>
            Founded in Dubai and drawn from the discipline of Milanese tailoring, the label makes
            fewer, better pieces for a climate and a life that Italy never designed for.
          </p>
          <div className="about-maison-meta" data-about-label>
            <span>MILANO</span>
            <span className="about-maison-line" aria-hidden="true" />
            <span>DUBAI</span>
          </div>
        </section>

        <section ref={storyRef} className="about-story-section" aria-label="The story">
          <div className="about-story-header" data-about-label>
            <span>02 / THE STORY</span>
            <span>A QUIETER APPROACH</span>
          </div>
          <div className="about-story-divider" data-story-divider />

          <div className="about-story-grid">
            <div className="about-story-col about-story-left" data-story-col>
              <h3 className="about-story-heading">
                <span>It began with</span>
                <span>a single roll</span>
                <span className="about-story-heading-italic">of Biellese wool.</span>
              </h3>
              <div className="about-story-short-rule" aria-hidden="true" />
            </div>

            <div className="about-story-col about-story-center" data-story-col>
              <span className="about-story-number">01</span>
              <p>
                The first collection was cut from a single roll of Biellese wool and offered to forty
                people. It sold quietly, by word of mouth, in the way good clothes usually do. That run
                set the pattern we still follow: natural fibres, honest construction, and a catalogue of
                numbered plates rather than a wall of endless product.
              </p>
            </div>

            <div className="about-story-col about-story-right" data-story-col>
              <span className="about-story-number">02</span>
              <p>
                Every garment is developed against the Gulf — half-linings instead of full, washed
                linens, open weaves, colours drawn from plaster and sand. Italian in proportion,
                Emirati in practicality.
              </p>
            </div>
          </div>
        </section>

        <section ref={craftRef} className="about-craft-strip" aria-label="Craft principles">
          <div className="about-craft-inner">
            <div className="about-craft-item" data-craft-item>
              <span className="about-craft-index">01</span>
              <h4>NATURAL FIBRES</h4>
              <p>Selected for climate and touch.</p>
            </div>
            <div className="about-craft-item" data-craft-item>
              <span className="about-craft-index">02</span>
              <h4>HAND FINISHED</h4>
              <p>Attention in every detail.</p>
            </div>
            <div className="about-craft-item" data-craft-item>
              <span className="about-craft-index">03</span>
              <h4>QUIET PROPORTIONS</h4>
              <p>Designed without excess.</p>
            </div>
          </div>
        </section>

        <section ref={purposeRef} className="about-purpose-section" aria-label="Mission and Vision">
          <div className="about-purpose-header" data-about-label>
            <span>03 / MISSION &amp; VISION</span>
          </div>
          <div className="about-purpose-divider" data-story-divider />
          <div className="about-purpose-backdrop">03</div>

          <div className="about-purpose-visual" aria-label="Tailoring detail photograph">
            <img
              src={detailLapel}
              alt="Close detail of tailoring and lapel craftsmanship"
              loading="lazy"
              className="about-purpose-visual-image"
            />
          </div>

          <div className="about-purpose-grid">
            <div className="about-purpose-column" data-mission-vision>
              <span className="about-purpose-number">01</span>
              <h3>OUR MISSION</h3>
              <div className="about-purpose-rule" aria-hidden="true" />
              <p>
                To make quiet, enduring clothes — Italian in spirit, made for real wear — and to
                sell them personally, one conversation at a time.
              </p>
            </div>

            <div className="about-purpose-column about-purpose-column-right" data-mission-vision>
              <span className="about-purpose-number">02</span>
              <h3>OUR VISION</h3>
              <div className="about-purpose-rule" aria-hidden="true" />
              <p>
                To become the Gulf&apos;s reference point for restrained Italian-style dressing, and to
                carry the CIAO D MILANO catalogue beyond the UAE in the seasons ahead.
              </p>
            </div>
          </div>
        </section>

        <section className="about-signature" aria-label="Brand signature">
          <p className="about-signature-line" data-about-headline>
            MILAN IN DISCIPLINE.
            <span className="about-signature-italic">DUBAI IN CONTEXT.</span>
          </p>
          <p className="about-signature-sub" data-about-label>
            CIAO D MILANO in character.
          </p>
          <div className="about-signature-mark" data-about-label>
            <span aria-hidden="true">──────</span>
            <span>EST. MMXXVI</span>
            <span aria-hidden="true">──────</span>
          </div>
        </section>

        <section className="about-collection" aria-label="Collection CTA">
          <div className="about-collection-divider" data-cta-divider />
          <Link to="/collection" className="about-collection-row" data-cta-row>
            <span className="about-collection-number">04</span>
            <span className="about-collection-main">
              <span>EXPLORE THE COLLECTION</span>
              <small>NUMBERED PIECES / CURRENT COLLECTION</small>
            </span>
            <span className="about-collection-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
