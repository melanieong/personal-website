"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  detail: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ProjectGarden({ projects }: { projects: Project[] }) {
  const gardenRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      const garden = gardenRef.current;
      if (!garden) return;

      const bounds = garden.getBoundingClientRect();
      const scrollableDistance = garden.offsetHeight - window.innerHeight;
      const progress = scrollableDistance > 0 ? -bounds.top / scrollableDistance : 0;

      setScrollProgress(clamp(progress, 0, 1));
    };

    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateProgress);
    };

    const handleResize = () => {
      updateViewport();
      scheduleUpdate();
    };

    updateProgress();
    updateViewport();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, [projects.length]);

  const plotSize = Math.min(viewport.width * 0.78, viewport.height * 0.56, 460);
  const trackPosition = scrollProgress * (projects.length + 1);
  const activeIndex = clamp(
    Math.round(trackPosition) - 1,
    0,
    projects.length - 1,
  );

  return (
    <section
      aria-label="Selected projects"
      className={`garden-gallery${viewport.width ? "" : " is-static"}`}
      id="projects"
      ref={gardenRef}
      style={{ height: `${projects.length + 2}00svh` }}
    >
      <div className="garden-scene">
        <div className="garden-heading">
          <div>
            <p className="garden-kicker">03 — FROM SEED TO STAND</p>
            <h2>Ideas, grown together.</h2>
            <p className="garden-subtitle">A few things I&apos;ve been tending.</p>
          </div>
          <p className="garden-count">
            <span>0{activeIndex + 1}</span> / 0{projects.length}
          </p>
        </div>

        <div className="garden-horizon" aria-hidden="true">
          <span className="garden-horizon-label">MELANIE&apos;S MARKET GARDEN</span>
          <span className="garden-horizon-line" />
          <span className="garden-horizon-label">FRESH IDEAS · GOOD PEOPLE</span>
        </div>

        {projects.map((project, index) => {
          const offset = plotSize * (index + 0.5 - trackPosition);
          const plotLeft = viewport.width / 2 + offset - plotSize / 2;
          const visibleWidth = clamp(
            Math.min(plotLeft + plotSize, viewport.width) - Math.max(plotLeft, 0),
            0,
            plotSize,
          );
          const opacity = plotSize > 0 ? clamp(visibleWidth / (plotSize * 0.18), 0, 1) : 0;
          const isVisible = visibleWidth > 4;
          const isSprouted = offset < -plotSize * 0.18;
          const isRevealed = offset <= 0 && isVisible;
          const isWatering = offset > plotSize * 0.18 && offset < plotSize * 0.9;

          return (
            <article
              className={`garden-plot garden-plot-${index + 1}${isSprouted ? " is-sprouted" : ""}${isRevealed ? " is-revealed" : ""}${isWatering ? " is-watering" : ""}`}
              key={project.number}
              style={{
                width: `${plotSize}px`,
                height: `${plotSize}px`,
                opacity,
                transform: `translate3d(calc(-50% + ${offset}px), -50%, 0)`,
              }}
            >
              <div className="garden-bed">
                <div className="bed-soil" aria-hidden="true">
                  <span className="soil-row soil-row-one" />
                  <span className="soil-row soil-row-two" />
                  <span className="soil-row soil-row-three" />
                  <div className="water-drops">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="market-ticket">
                  <div className="carrot-top" aria-hidden="true">
                    <span className="carrot-leaf carrot-leaf-one" />
                    <span className="carrot-leaf carrot-leaf-two" />
                    <span className="carrot-leaf carrot-leaf-three" />
                    <span className="carrot-leaf carrot-leaf-four" />
                    <span className="carrot-leaf carrot-leaf-five" />
                  </div>
                  <p className="ticket-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="ticket-description">{project.description}</p>
                  <div className="ticket-footer">
                    <span>{project.detail}</span>
                    <span className="ticket-stamp">PLOT 0{index + 1}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        <div className="garden-groundline" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}