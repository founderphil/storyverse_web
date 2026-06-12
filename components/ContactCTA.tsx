"use client";

import { useEffect, useRef, useState } from "react";

const PATH_LENGTH = 1000;

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

function useEntranceProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.92;
      const end = vh * 0.42;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, p)));
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

export default function ContactCTA() {
  const { ref, progress } = useEntranceProgress<HTMLElement>();
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState(PATH_LENGTH);

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    if (!Number.isNaN(length) && length > 0) {
      setPathLength(length);
    }
  }, []);

  const dashOffset = pathLength * (1 - progress);

  return (
    <section
      id="contact"
      className="contact-section"
      aria-label="Contact"
      ref={ref}
    >
      <div className="contact-thread-shell">
        <div className="contact-thread-line-wrapper">
          <svg className="thread-svg" viewBox="0 0 200 100" preserveAspectRatio="none">
            <defs>
              <filter
                id="contactThreadShadow"
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
              d="M 0 62 Q 18 48 36 58 T 72 54 T 104 64 T 122 56 T 136 54"
              ref={pathRef}
              strokeDasharray={pathLength}
              strokeDashoffset={dashOffset}
              filter="url(#contactThreadShadow)"
            />
          </svg>
        </div>

        <div className="contact-card">
          <h2 className="contact-heading">Thread your brand or IP story into an experience with Storyverse.</h2>
          <p className="contact-copy">
            Storyverse partners with agencies, studios, brands, and storytellers to build emotionally resonant cross-platform worlds.
            Leave your customers in awe while deepening their connection to your story.
          </p>
          <div className="contact-actions">
            <a
              href="mailto:contact@storyversenyc.com"
              className="contact-primary-button"
            >
              Work with us.
            </a>
          </div>
          <p className="contact-secondary-note">
            Based in NYC · Available worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
