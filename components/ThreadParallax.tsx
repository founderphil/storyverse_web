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
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { ref, progress };
}

function ThreadBand({
  project,
  direction,
}: {
  project: Project;
  direction: Direction;
}) {
  const { ref, progress } = useScrollProgress<HTMLElement>();

  // Reveal the thread along its length as you scroll.
  const dashOffset = PATH_LENGTH * (1 - progress);
  const isRtl = direction === "rtl";

  return (
    <section className="thread-section" ref={ref}>
      <div className="thread-sticky">
        <div className="thread-line-wrapper">
          <svg
            className={`thread-svg ${isRtl ? "thread-svg-rtl" : ""}`}
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
          >
              <defs>
                <filter
                  id="threadShadow"
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
                strokeDasharray={PATH_LENGTH}
                strokeDashoffset={dashOffset}
                filter="url(#threadShadow)"
              />
          </svg>
        </div>

        <div className="thread-card">
          <div className="thread-card-image">
            <Image
              src={project.img}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 80vw, 320px"
            />
          </div>
          <div className="thread-card-text">
            <h2>{project.title}</h2>
            {project.subtitle && (
              <p className="thread-card-subtitle">{project.subtitle}</p>
            )}
            <p className="thread-card-overview">{project.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ThreadParallax() {
  const projectList = Object.values(projects).slice(0, 2);

  if (!projectList.length) return null;

  return (
    <>
      {projectList.map((project, index) => (
        <ThreadBand
          key={project.title}
          project={project}
          direction={index % 2 === 0 ? "ltr" : "rtl"}
        />
      ))}
    </>
  );
}
