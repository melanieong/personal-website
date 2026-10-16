"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};

    const setup = () => {
      dispose();
      if (media.matches) return;

      const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -86 },
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      document.documentElement.classList.add("motion-enabled");
      let frame = 0;
      const tick = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);

      const animations = new Set<Animation>();
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          const image = element.classList.contains("about-image");
          const animation = element.animate(
            image
              ? [{ clipPath: "inset(0 8% 0 8%)" }, { clipPath: "inset(0 0% 0 0%)" }]
              : [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: image ? 1200 : 800, easing: "cubic-bezier(.25, 1, .5, 1)", delay: element.matches("p, .intro-text, .interest-notes, .about-copy") ? 100 : 0 },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          observer.unobserve(element);
        }
      }, { threshold: 0.12 });

      document.querySelectorAll(".section-marker, .intro-grid > *, .experience-heading > *, .experience-empty, .education-details, .interests-layout > *, .contact-layout > *, .about-grid > *, .about-image").forEach((element) => observer.observe(element));

      const hero = document.querySelector<HTMLElement>(".hero");
      const update = () => {
        if (!hero || window.innerWidth < 992) return;
        const progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / hero.offsetHeight));
        hero.style.setProperty("--hero-drift", `${progress * 70}px`);
      };
      lenis.on("scroll", update);
      window.addEventListener("resize", update);
      update();

      dispose = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        animations.forEach((animation) => animation.cancel());
        window.removeEventListener("resize", update);
        lenis.destroy();
        document.documentElement.classList.remove("motion-enabled");
        hero?.style.removeProperty("--hero-drift");
      };
    };

    setup();
    media.addEventListener("change", setup);
    return () => {
      dispose();
      media.removeEventListener("change", setup);
    };
  }, [pathname]);

  return null;
}
