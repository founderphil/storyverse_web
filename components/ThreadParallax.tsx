"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

function getFirstProject() {
  const entries = Object.entries(projects);
  if (!entries.length) return undefined;
  const [slug, project] = entries[0];
  return { slug, project };
}

export default function ThreadParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const data = getFirstProject();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height + vh;
      const visible = vh - rect.top;
      const p = Math.min(1, Math.max(0, visible / total));
      setProgress(p);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!data) return null;

  const { project } = data;

  // Map scroll progress so the thread moves left → right → left
  const computeX = (p: number) => {
    if (p <= 0.5) {
      const t = p / 0.5; // 0 → 1
      return -40 + 80 * t; // -40% → 40%
    }
    const t = (p - 0.5) / 0.5; // 0 → 1
    return 40 - 80 * t; // 40% → -40%
  };

  const x = computeX(progress);

  return (
    <section className="thread-section" ref={containerRef}>
      <div className="thread-sticky">
        <div
          className="thread-line-wrapper"
          style={{ transform: `translateX(${x}%)` }}
        >
          <div className="thread-line" />
          <div className="thread-node">
            <div className="thread-image">
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>
            <div className="thread-text">
              <h2>{project.title}</h2>
              {project.subtitle && (
                <p className="thread-subtitle">{project.subtitle}</p>
              )}
              <p className="thread-overview">{project.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
