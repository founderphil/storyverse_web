"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PATH_LENGTH = 1000;

function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => 
  {
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

const teamMembers = [
  {
    name: "Alba",
    title: "Creative Director",
    image: "/images/alba.jpg",
    bio: "Alba is an actor, writer, and immersive creator whose original work spans Off-Broadway, film, and emerging media. A longtime Sleep No More performer and co-founder of Storyverse, she brings elite classical training and a proven track record of building emotionally resonant, boundary-pushing story worlds.",
  },
  {
    name: "Phil",
    title: "Experience Architect",
    image: "/images/phil.jpg",
    bio: "Phil is a product designer and creative technologist with an M.S. in AI and Design from NYU. He specializes in AI-native product strategy, systems design, and immersive experience architecture, turning complex emerging technology into polished, human-centered products and narrative experiences.",
  },
];

export default function Team() {
  const { ref, progress } = useScrollProgress<HTMLElement>();
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState(PATH_LENGTH);

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    if (!Number.isNaN(length) && length > 0) {
      setPathLength(length);
    }
  }, []);

  const normalizedProgress = Math.min(1, Math.max(0, progress / 0.5));
  const dashOffset = pathLength * (1 - normalizedProgress);

  return (
    <section className="team-section" ref={ref}>
      <div className="team-inner">
        <header className="team-header">
          <p className="team-kicker">The Storyverse team</p>
          <h2>Humans behind the worlds</h2>
          <p className="team-intro">
            Alba and Phil are passionate about crafting immersive experiences that
            blur the lines between story and reality. With backgrounds in theater,
            technology, and design, they bring a unique blend of skills to each
            project.
          </p>
        </header>

        <div className="team-thread-row">
          <div className="thread-line-wrapper team-thread-line-wrapper">
            <svg
              className="thread-svg thread-svg-rtl"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
            >
              <defs>
                <filter
                  id="teamThreadShadow"
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
                filter="url(#teamThreadShadow)"
              />
            </svg>
          </div>

          <div className="team-members">
            {teamMembers.map((member) => (
              <article className="team-member" key={member.name}>
                <div className="team-member-image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 78vw, 390px"
                  />
                </div>
                <div className="team-member-text">
                  <h3>{member.name}</h3>
                  <p className="team-member-title">{member.title}</p>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
