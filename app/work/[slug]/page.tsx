"use client";

import { useState } from "react";
import { projects as PROJECTS } from "@/data/projects";
import StudioNav from "@/components/StudioNav";

const mediaLabels = ["Digital", "Live performance", "Film / TV"] as const;

export default function WorkProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];
  const [modalImg, setModalImg] = useState<string | null>(null);

  if (!project) return <div>Project not found.</div>;

  const media = [project.digitalImg, project.livePerformanceImg, project.filmTvImg]
    .map((src, index) => ({ src, label: mediaLabels[index] }))
    .filter((item): item is { src: string; label: typeof mediaLabels[number] } => Boolean(item.src));
  const scope = project.delivery?.split("·").map(item => item.trim()).filter(Boolean) ?? [];
  const story = project.caseStudyCopy ?? [project.overview, project.role];
  const featureImage = project.overviewVisual ?? project.processVisual;

  return (
    <>
      <StudioNav />
      <main className="case-study case-study-editorial">
        <header className="case-study-header">
          <a className="case-study-back" href="/#work">← Selected studio work</a>
          <p className="buyer-kicker">Storyverse project</p>
          <h1>{project.title}</h1>
          {project.subtitle && <p className="case-study-subtitle">{project.subtitle}</p>}
          <p className="case-study-deck">{project.buyerBrief ?? project.overview}</p>
        </header>

        <button className="case-study-hero" type="button" onClick={() => setModalImg(project.img)} aria-label={`Open ${project.title} hero image`}>
          <img src={project.img} alt={`${project.title} hero`} />
        </button>

        <section className="case-editorial-story">
          <div className="case-editorial-lead"><p>{story[0]}</p></div>
          <div className="case-editorial-copy">{story.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        {media.length > 0 && (
          <section className="case-study-gallery" aria-label={`${project.title} project media`}>
            {media.map(({ src, label }) => (
              <button className="case-study-media" type="button" key={label} onClick={() => setModalImg(src)}>
                <span className={`case-study-media-frame ${params.slug === "emily_was_here" && label === "Digital" ? "emily-digital-surface" : ""}`}>
                  <img src={src} alt={`${project.title}: ${label}`} />
                </span>
                <span>{label}</span>
              </button>
            ))}
          </section>
        )}

        {featureImage && (
          <button className="case-study-feature-image case-editorial-feature" type="button" onClick={() => setModalImg(featureImage)} aria-label={`Open ${project.title} feature image`}>
            <img src={featureImage} alt={`${project.title} project feature`} />
          </button>
        )}

        <section className="case-editorial-details">
          <div>
            <p className="buyer-kicker">Our role</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="buyer-kicker">Scope</p>
            <ul>{scope.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="case-study-relevance case-editorial-result">
          <p className="buyer-kicker">The result</p>
          <h2>{project.buyerOutcome ?? project.why}</h2>
          <p>{project.why}</p>
          <div className="case-study-final-actions">
            {project.link && <a className="studio-button studio-button-dark" href={project.link} target="_blank" rel="noopener noreferrer">Live project ↗</a>}
            <a className="studio-button studio-button-light" href="/#contact">Start a project ↗</a>
          </div>
        </section>
      </main>

      {modalImg && (
        <div className="case-study-modal" role="dialog" aria-modal="true" aria-label="Expanded project image" onClick={() => setModalImg(null)}>
          <button type="button" onClick={() => setModalImg(null)} aria-label="Close expanded image">×</button>
          <img src={modalImg} alt="Expanded project visual" onClick={event => event.stopPropagation()} />
        </div>
      )}
    </>
  );
}
