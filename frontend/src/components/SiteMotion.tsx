import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __ciaoLenis?: Lenis;
  }
}

export function SiteMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const lenis = window.__ciaoLenis ?? new Lenis({
      duration: isMobile ? 0.9 : 1.1,
      lerp: 0.08,
      smoothWheel: !isMobile,
      wheelMultiplier: isMobile ? 0.9 : 1,
      touchMultiplier: 1.2,
    });

    if (!window.__ciaoLenis) {
      window.__ciaoLenis = lenis;
    }

    const progress = document.getElementById("ciao-scroll-progress");
    const progressBar = progress ?? document.createElement("div");
    progressBar.id = "ciao-scroll-progress";
    progressBar.setAttribute("aria-hidden", "true");
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "2px";
    progressBar.style.width = "100%";
    progressBar.style.transformOrigin = "0 50%";
    progressBar.style.transform = "scaleX(0)";
    progressBar.style.background = "linear-gradient(90deg, rgba(186,145,94,0.9), rgba(116,79,50,0.9))";
    progressBar.style.zIndex = "9999";
    progressBar.style.pointerEvents = "none";
    if (!progress) document.body.appendChild(progressBar);

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
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.05,
            delay: Number(element.dataset.revealDelay ?? 0),
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
        const children = group.children;
        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
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
            duration: 1.3,
            ease: "power3.inOut",
            scrollTrigger: { trigger: element, start: "top 84%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: isMobile ? 5 : 12,
          scale: 1.08,
          ease: "none",
          scrollTrigger: { trigger: element, start: "top top", end: "bottom top", scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-delivery-image], [data-editorial-image], [data-about-visual]").forEach((element) => {
        const wrap = element.parentElement;
        if (!wrap) return;
        wrap.style.overflow = "hidden";

        gsap.fromTo(
          element,
          { scale: 1.08, clipPath: "inset(100% 0 0 0)" },
          {
            scale: 1,
            clipPath: "inset(0% 0 0% 0)",
            duration: 1.4,
            ease: "power3.inOut",
            scrollTrigger: { trigger: wrap, start: "top 82%", once: true },
          },
        );

        gsap.to(element, {
          yPercent: isMobile ? 1 : 3,
          ease: "none",
          scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-headline-line]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, yPercent: 110 },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-animate-label]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 90%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-story-divider], [data-cta-divider], [data-purpose-divider]").forEach((element) => {
        gsap.fromTo(
          element,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power3.out",
            transformOrigin: "left center",
            scrollTrigger: { trigger: element, start: "top 85%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-word-reveal]").forEach((element) => {
        const children = Array.from(element.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-cinematic-slideshow]").forEach((slideshow) => {
        const section = slideshow.closest("section") || slideshow.parentElement;
        if (!section) return;
        const slideImage = slideshow.querySelector<HTMLElement>("img[aria-hidden='false']");
        const copy = slideshow.querySelector<HTMLElement>("[data-slideshow-copy]");
        const indicators = slideshow.querySelectorAll<HTMLElement>("[data-slideshow-indicator]");

        if (slideImage) {
          gsap.to(slideImage, {
            scale: 1.12,
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (copy) {
          gsap.to(copy, {
            yPercent: -25,
            opacity: 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (indicators.length) {
          gsap.to(indicators, {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(progressBar, { scaleX: self.progress });
          },
        },
      });
    });

    const refresh = () => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      lenis.off("scroll", ScrollTrigger.update);
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (!window.__ciaoLenis) {
        lenis.destroy();
      }
      if (progressBar && progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }, [pathname]);

  return null;
}

