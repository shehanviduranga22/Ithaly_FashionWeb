import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SiteMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    lenis.on("scroll", ScrollTrigger.update);
    const context = gsap.context(() => {
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            delay: Number(element.dataset.revealDelay ?? 0),
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
        const children = group.children;
        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 84%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-image]").forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: "inset(12% 0 12% 0)", scale: 1.04 },
          {
            clipPath: "inset(0% 0 0% 0)",
            scale: 1,
            duration: 1.35,
            ease: "power3.inOut",
            scrollTrigger: { trigger: element, start: "top 84%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: 14,
          scale: 1.08,
          ease: "none",
          scrollTrigger: { trigger: element, start: "top top", end: "bottom top", scrub: true },
        });
      });

    });

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", ScrollTrigger.update);
      context.revert();
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
