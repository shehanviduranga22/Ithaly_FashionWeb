import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import detailLapel from "@/assets/detail-lapel.jpg";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";

gsap.registerPlugin(ScrollTrigger);
import deliverySlide1 from "@/assets/delivery_slideshow (1).png";
import deliverySlide2 from "@/assets/delivery_slideshow (2).png";
import deliverySlide3 from "@/assets/delivery_slideshow (3).png";
import { generalWhatsappLink } from "@/lib/site";

const deliverySlides: Slide[] = [
  { src: deliverySlide1, alt: "Tailored camel jacket prepared in soft atelier light" },
  { src: deliverySlide2, alt: "Pleated wool trousers folded on a marble plinth" },
  { src: deliverySlide3, alt: "Tailoring atelier where each order is prepared by hand" },
];

const title = "Delivery Information — CIAO D MILANO, UAE";
const description =
  "UAE delivery information for CIAO D MILANO: 2–4 working days from Dubai, complimentary shipping above AED 1,000, cash or transfer on confirmation.";

const journeyStages = [
  {
    number: "01",
    title: "ORDER RECEIVED",
    text: "Your order is confirmed personally.",
  },
  {
    number: "02",
    title: "ATELIER PREPARATION",
    text: "Wrapped, checked and prepared.",
  },
  {
    number: "03",
    title: "PRIVATE DISPATCH",
    text: "Tracked delivery across the Emirates.",
  },
  {
    number: "04",
    title: "AT YOUR DOOR",
    text: "Delivered within the expected window.",
  },
];

const deliveryDetails = [
  {
    number: "01",
    title: "ACROSS THE EMIRATES",
    detail: "Dubai · Abu Dhabi · Sharjah · Ajman · Ras Al Khaimah · Fujairah · Umm Al Quwain",
    value: "UAE",
  },
  {
    number: "02",
    title: "TIMING",
    detail: "2—4 working days for Dubai and Sharjah. 3—5 working days for northern Emirates.",
    value: "2—5 DAYS",
  },
  {
    number: "03",
    title: "CHARGES",
    detail: "AED 30 within the UAE. Complimentary above AED 1,000.",
    value: "AED 30",
  },
  {
    number: "04",
    title: "ORDERING",
    detail: "Orders are confirmed over WhatsApp. We share size, colour and delivery details.",
    value: "WHATSAPP",
  },
  {
    number: "05",
    title: "EXCHANGES",
    detail: "Unworn pieces may be exchanged for a different size within 7 days.",
    value: "7 DAYS",
  },
  {
    number: "06",
    title: "INTERNATIONAL",
    detail: "International delivery is planned for a future season.",
    value: "SOON",
  },
];

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/delivery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/delivery" }],
  }),
  component: Delivery,
});

function Delivery() {
  const [openDetail, setOpenDetail] = useState<number | null>(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-page-load-rise]",
        { autoAlpha: 0, y: 46 },
        { autoAlpha: 1, y: 0, duration: 1.1, ease: "power3.out", stagger: 0.08, delay: 0.12 },
      );

      gsap.utils.toArray<HTMLElement>("[data-delivery-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 44 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 82%", once: true },
          },
        );
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="text-ink">
      <SiteHeader />

      <main className="bg-paper">
        <section
          className="relative h-[42vh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-ink/10"
          aria-label="Atelier to door"
        >
          <HeroSlideshow
            slides={deliverySlides}
            interval={5500}
            eyebrow="No. 05 — Delivery"
            title="CONSIDERED, FROM ATELIER TO DOOR."
            subtitle="Everything is packed by hand in Dubai and sent with a tracked courier."
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        </section>

        <div className="delivery-page-shell">
          <section className="delivery-intro" data-delivery-reveal data-page-load-rise>
            <div className="delivery-intro-copy">
              <p className="delivery-label">DELIVERY / PRIVATE SERVICE</p>
              <h2 className="delivery-intro-heading">
                <span>From our atelier,</span>
                <span className="delivery-intro-italic">to your door.</span>
              </h2>
              <p className="delivery-intro-text">
                Every order leaves the atelier wrapped, tracked, and personally considered.
              </p>
            </div>

            <div className="delivery-intro-facts">
              <div className="delivery-infographic-block delivery-infographic-block-left">
                <span className="delivery-stat-number">2—4</span>
                <span className="delivery-stat-label">WORKING DAYS</span>
              </div>
              <div className="delivery-infographic-block delivery-infographic-block-right">
                <span className="delivery-stat-number">AED 30</span>
                <span className="delivery-stat-label">UAE FLAT RATE</span>
              </div>
            </div>
          </section>

          <section className="delivery-journey" data-delivery-reveal>
            <p className="delivery-label">01 / THE JOURNEY</p>

            <div className="delivery-journey-line" aria-hidden="true" />

            <div className="delivery-journey-grid">
              {journeyStages.map((stage) => (
                <div className="delivery-stage" key={stage.number}>
                  <span className="delivery-stage-number">{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="delivery-statement" data-delivery-reveal>
            <p className="delivery-label delivery-statement-label">THE CIAO D MILANO STANDARD</p>
            <h3>
              Delivery is not the final step.
              <span>It is part of the experience.</span>
            </h3>
            <p>WRAPPED · TRACKED · PERSONALLY CONSIDERED</p>
          </section>

          <section className="delivery-details" data-delivery-reveal>
            <div className="delivery-details-header">
              <p className="delivery-label">02 / THE FINE PRINT</p>
              <h3>
                DELIVERY <span>DETAILS</span>
              </h3>
            </div>

            <div className="delivery-detail-list">
              {deliveryDetails.map((detail, index) => {
                const isOpen = openDetail === index;

                return (
                  <div className={`delivery-detail-row ${isOpen ? "is-open" : ""}`} key={detail.number}>
                    <button
                      type="button"
                      className="delivery-detail-toggle"
                      onClick={() => setOpenDetail(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="delivery-detail-number">{detail.number}</span>
                      <span className="delivery-detail-title">{detail.title}</span>
                      <span className="delivery-detail-value">{detail.value}</span>
                    </button>

                    <div className={`delivery-detail-panel ${isOpen ? "is-open" : ""}`}>
                      <p>{detail.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="delivery-packaging" data-delivery-reveal>
            <div className="delivery-packaging-image-wrap">
              <img src={detailLapel} alt="Hand-wrapped luxury garment detail with premium tailoring craftsmanship" />
              <div className="delivery-packaging-caption">
                <span>PACKED BY HAND</span>
                <span>CIAO D MILANO / DUBAI</span>
              </div>
            </div>
            <p className="delivery-packaging-copy">
              EVERY PIECE LEAVES
              <span>WITH INTENTION.</span>
            </p>
          </section>

          <section className="delivery-private-assistance" data-delivery-reveal>
            <div className="delivery-private-copy">
              <p className="delivery-label delivery-label-light">03 / PRIVATE CONCIERGE</p>
              <h3>
                Need something
                <span>more personal?</span>
              </h3>
              <p>
                “For sizing, delivery arrangements or a private request, speak directly with our atelier.”
              </p>
            </div>

            <div className="delivery-private-actions">
              <div className="delivery-private-cta">
                <span>WHATSAPP CONCIERGE</span>
                <span>Available for private assistance</span>
              </div>

              <a href={generalWhatsappLink} target="_blank" rel="noreferrer noopener">
                <span>CONTACT THE ATELIER</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <section className="delivery-signature" data-delivery-reveal>
            <p className="delivery-signature-line">FROM OUR HANDS</p>
            <p className="delivery-signature-line delivery-signature-line-italic">TO YOURS.</p>
            <div className="delivery-signature-divider" aria-hidden="true" />
            <p className="delivery-signature-meta">CIAO D MILANO</p>
            <p className="delivery-signature-sub">MILANESE TAILORING · DUBAI</p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
