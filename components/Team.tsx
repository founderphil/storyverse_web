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
    name: "Alba Albanese",
    title: "Chief Creative Director",
    image: "/images/alba.jpg",
    bio: "Alba is an actor, writer, and immersive creator whose work spans Off-Broadway, film, and emerging media. Her background includes Sleep No More, Serenade, Home of Enchantments, and The Raven. At Storyverse, she leads the story, performance, and creative direction.",
    background: "Alba created and performed Annabella the Oracle within Sleep No More. Her original work includes Serenade and Home of Enchantments; she also co-created and performed in The Raven, presented at the 57th New York Film Festival in 2019. Earlier credits and coverage may appear under the name Ava Lee Scott.",
    portfolio: "https://www.albaalbanese.com/productions/",
  },
  {
    name: "Phil Olarte",
    title: "Chief Creative Technologist",
    image: "/images/phil.jpg",
    bio: "Phil is a product designer, technology founder, and creative technologist with an M.S. in AI and Design from NYU. A background in music and theater informs his approach to interactive stories. At Storyverse, he connects audience experience, systems design, and technical production.",
    background: "Trained in piano and voice, Phil brings a performer’s perspective to product design and emerging technology. His independent work includes the MAIA conversational-character project at NYU and product and experience design for ChalkNotes and location-based storytelling. His work at Storyverse connects those tools to Alba’s narrative and performance practice.",
    portfolio: "https://www.phillipolarte.com/",
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
    <section id="team" className="team-section" ref={ref}>
      <div className="team-inner">
        <header className="team-header">
          <p className="team-kicker">Co-founders · NYC</p>
          <h2>The humans behind your world</h2>
          <p className="team-intro">
            Creative direction and technical architecture at the same table.
            Co-founders Alba Albanese and Phil Olarte bring performance,
            storytelling, product design, and engineering into one connected process.
          </p>
        </header>

        <div className="team-thread-row" data-story-thread="cross">
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
                  <details className="team-background"><summary>Background & selected work</summary><p>{member.background}</p><a className="buyer-text-link" href={member.portfolio} target="_blank" rel="noopener noreferrer">Full portfolio ↗</a></details>
                </div>
              </article>
            ))}
          </div>
        </div>
        <a className="buyer-text-link team-work-link" href="/work#founders-work">Explore the founders’ work & history ↗</a>
      </div>
    </section>
  );
}
