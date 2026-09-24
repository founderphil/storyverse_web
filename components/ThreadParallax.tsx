"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

type Direction = "ltr" | "rtl";

const PATH_LENGTH = 1000; // used for stroke-dasharray / stroke-dashoffset

function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height + vh;
      const visible = vh - rect.top;
      const p = Math.min(1, Math.max(0, visible / total));
      setProgress(p);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { ref, progress };
}

type ProjectEntry = {
  slug: string;
  project: Project;
};

const HOMEPAGE_PROJECT_SLUGS = ["aether", "fairyland", "emily_was_here"] as const;

function ThreadBand({
  entry,
  direction,
}: {
  entry: ProjectEntry;
  direction: Direction;
}) {
  const { project, slug } = entry;
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = ref.current;
    const content = contentRef.current;
    if (!section || !content) return;
    // Double the natural content height without adding uncovered space between projects.
    const updateHeight = () => section.style.setProperty("--work-content-height", `${content.getBoundingClientRect().height}px`);
    const observer = new ResizeObserver(updateHeight);
    observer.observe(content);
    updateHeight();
    return () => observer.disconnect();
  }, [ref]);

  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState(PATH_LENGTH);

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    if (!Number.isNaN(length) && length > 0) {
      setPathLength(length);
    }
  }, []);

  // Reveal the thread along its length as you scroll.
  // Speed up drawing: complete by ~40% of the section scroll
  const normalizedProgress = Math.min(1, Math.max(0, progress / 0.5));
  const dashOffset = pathLength * (1 - normalizedProgress);
  const isRtl = direction === "rtl";

  const backgroundSrc = project.threadBackground;
  const hasBackground = !!backgroundSrc;

  let bgOpacity = 0;
  let bgTranslateY = 0;

  if (hasBackground) {
    const fadeInStart = 0.1;
    const fadeInEnd = 0.4;
    const fadeOutStart = 0.6;
    const fadeOutEnd = 0.9;

    if (progress <= fadeInStart || progress >= fadeOutEnd) {
      bgOpacity = 0;
    } else if (progress < fadeInEnd) {
      bgOpacity = (progress - fadeInStart) / (fadeInEnd - fadeInStart);
    } else if (progress < fadeOutStart) {
      bgOpacity = 1;
    } else {
      bgOpacity = 1 - (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    }

    bgOpacity = Math.max(0, Math.min(1, bgOpacity));
    bgOpacity *= 0.5; // cap at 0.3 so it never gets too dark
    bgTranslateY = (progress - 0.5) * -40; // subtle parallax
  }

  return (
    <section className="thread-section" data-story-project={slug} ref={ref}>
      <div className="thread-sticky">
        {hasBackground && (
          <div
            className="thread-bg"
            style={{
              opacity: bgOpacity,
              transform: `translateY(${bgTranslateY}px)`,
            }}
          >
            {project.threadBackgroundViewBox ? (
              <svg
                viewBox={project.threadBackgroundViewBox}
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                role="img"
                aria-label={`${project.title} background`}
              >
                <image href={backgroundSrc!} width="2710" height="2280" />
              </svg>
            ) : (
              <Image
                src={backgroundSrc!}
                alt={`${project.title} background`}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        )}

        <div className="thread-band-inner" ref={contentRef}>
          <div className="thread-band-copy">
            <h2>{project.title}</h2>
            {project.subtitle && (
              <p className="thread-band-subtitle">{project.subtitle}</p>
            )}
            <p className="thread-band-overview">{project.overview}</p>
          </div>

          <div className="thread-band-row" data-story-thread="cross">
            <div className="thread-line-wrapper">
              <svg
                className={`thread-svg ${isRtl ? "thread-svg-rtl" : ""}`}
                viewBox="0 0 200 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter
                    id={`threadShadow-${slug}`}
                    x="-20%"
                    y="-50%"
                    width="140%"
                    height="200%"
                  >
                    <feDropShadow
                      dx={0}
                      dy={4}
                      stdDeviation={3}
                      floodColor="#000000"
                      floodOpacity={0.35}
                    />
                  </filter>
                </defs>
                <path
                  className="thread-path"
                  d="M 0 52 Q 20 40 40 55 T 80 48 T 120 60 T 160 45 T 200 50"
                  ref={pathRef}
                  strokeDasharray={pathLength}
                  strokeDashoffset={dashOffset}
                  filter={`url(#threadShadow-${slug})`}
                />
              </svg>
            </div>

            <div className="thread-mini-cards">
              {[
                {
                  label: "Digital",
                  src: project.digitalImg || project.img,
                },
                {
                  label: "Live Performance",
                  src: project.livePerformanceImg || project.img,
                },
                {
                  label: "Film/TV",
                  src: project.filmTvImg || project.img,
                },
              ].map(({ label, src }) => {
                return (
                <div className="thread-mini-card" key={label}>
                  <div className={`thread-mini-card-image ${slug === "emily_was_here" && label === "Digital" ? "emily-digital-surface" : ""}`}>
                    <img
                      src={src}
                      alt={`${project.title} - ${label}`}
                      className="thread-mini-card-media"
                    />
                  </div>
                  <p className="thread-mini-card-label">{label}</p>
                </div>
                );
              })}
            </div>
          </div>

          <div className="thread-project-actions">
            <a className="thread-project-button thread-project-button-primary" href={`/work/${slug}`}>THE WORK</a>
            {project.link && (
              <a
                className="thread-project-button thread-project-button-secondary"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                LIVE PROJECT ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ThreadParallax() {
  const projectList: ProjectEntry[] = HOMEPAGE_PROJECT_SLUGS.flatMap((slug) => {
    const project = projects[slug];

    return project ? [{ slug, project }] : [];
  });

  if (!projectList.length) return null;

  return (
    <>
      {projectList.map((project, index) => (
        <ThreadBand
          key={project.slug}
          entry={project}
          direction={index % 2 === 0 ? "ltr" : "rtl"}
        />
      ))}
    </>
  );
}
