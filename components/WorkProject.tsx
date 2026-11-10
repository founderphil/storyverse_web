"use client";

import { useState, type CSSProperties } from "react";
import { projects as PROJECTS } from "@/data/projects";
import StudioNav from "@/components/StudioNav";

const mediaLabels = ["Digital", "Live performance", "Film / TV"] as const;

export default function WorkProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];
  const [modalImg, setModalImg] = useState<string | null>(null);

  if (!project) return <div>Project not found.</div>;

  const labels = project.mediaLabels ?? mediaLabels;
  const media = [project.digitalImg, project.livePerformanceImg, project.filmTvImg]
    .map((src, index) => ({ src, label: labels[index] }))
    .filter((item): item is { src: string; label: string } => Boolean(item.src));
  const scope = project.delivery?.split("·").map(item => item.trim()).filter(Boolean) ?? [];
  const story = project.caseStudyCopy ?? [project.overview];
  const rows = media.map((item, index) => ({ ...item, text: story[index] })).filter(row => Boolean(row.text));
  const cinematic = Boolean(project.theme);

  const themeStyle = project.theme
    ? ({ "--case-accent": project.theme.accent, "--case-accent-2": project.theme.secondaryAccent ?? project.theme.accent } as CSSProperties)
    : undefined;

  return (
    <>
      <StudioNav />
      <main className={`case-study ${cinematic ? "case-study-cinematic" : "case-study-simple"}`}>
        {cinematic ? (
          <div className="case-cinematic" style={themeStyle}>
            <div className="case-cinematic-texture" aria-hidden="true" />

            <header className="case-study-header case-cinematic-header">
              <a className="case-study-back" href="/#work">← Selected studio work</a>
              <p className="buyer-kicker">Storyverse project</p>
              <h1>{project.title}</h1>
              {project.subtitle && <p className="case-study-subtitle">{project.subtitle}</p>}
              <p className="case-study-deck">{project.buyerBrief ?? project.overview}</p>
              {project.proofLine && <p className="case-proof-line">{project.proofLine}</p>}
            </header>

            <div className="case-cinematic-hero">
              <button className="case-study-hero" type="button" onClick={() => setModalImg(project.img)} aria-label={`Open ${project.title} hero image`}>
                <img src={project.img} alt={`${project.title} hero`} />
              </button>
            </div>

            {project.journeySteps && project.journeySteps.length > 0 && (
              <ol className="case-journey-steps">
                {project.journeySteps.map(step => <li key={step}>{step}</li>)}
              </ol>
            )}

            {project.systemProof && <p className="case-system-proof">{project.systemProof}</p>}

            {rows.length > 0 && (
              <section className="case-story-rows" aria-label={`${project.title} project story`}>
                {rows.map(({ src, label, text }, index) => (
                  <div className="case-story-row" key={label}>
                    <button
                      className="case-story-row-media"
                      type="button"
                      onClick={() => setModalImg(src)}
                      aria-label={`Open ${project.title}: ${label}`}
                    >
                      <span className="case-story-row-frame">
                        <img src={src} alt={`${project.title}: ${label}`} />
                      </span>
                    </button>
                    <div className="case-story-row-copy">
                      <p className="case-story-row-index">{String(index + 1).padStart(2, "0")} — {label}</p>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {project.systemBuild && (
              <section className="case-system-build" aria-label={`${project.title} system build`}>
                <p className="buyer-kicker">{project.systemBuild.kicker ?? "The build"}</p>
                <h2>{project.systemBuild.title}</h2>
                <p>{project.systemBuild.summary}</p>
                <ul className="case-system-capabilities">
                  {project.systemBuild.capabilities.map(item => <li key={item}>{item}</li>)}
                </ul>
              </section>
            )}
          </div>
        ) : (
          <>
            <header className="case-study-header">
              <a className="case-study-back" href="/#work">← Selected studio work</a>
              <p className="buyer-kicker">Storyverse project</p>
              <h1>{project.title}</h1>
              {project.subtitle && <p className="case-study-subtitle">{project.subtitle}</p>}
              <p className="case-study-deck">{project.buyerBrief ?? project.overview}</p>
              {scope.length > 0 && (
                <ul className="case-study-scope-pills">
                  {scope.map(item => <li key={item}>{item}</li>)}
                </ul>
              )}
            </header>

            <button className="case-study-hero" type="button" onClick={() => setModalImg(project.img)} aria-label={`Open ${project.title} hero image`}>
              <img src={project.img} alt={`${project.title} hero`} />
            </button>

            {rows.length > 0 && (
              <section className="case-story-rows" aria-label={`${project.title} project story`}>
                {rows.map(({ src, label, text }, index) => (
                  <div className="case-story-row" key={label}>
                    <button
                      className="case-story-row-media"
                      type="button"
                      onClick={() => setModalImg(src)}
                      aria-label={`Open ${project.title}: ${label}`}
                    >
                      <span className={`case-story-row-frame ${params.slug === "emily_was_here" && label === "Digital" ? "emily-digital-surface" : ""}`}>
                        <img src={src} alt={`${project.title}: ${label}`} />
                      </span>
                    </button>
                    <div className="case-story-row-copy">
                      <p className="case-story-row-index">{String(index + 1).padStart(2, "0")} — {label}</p>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {project.systemBuild && (
              <section className="case-system-build" aria-label={`${project.title} system build`}>
                <p className="buyer-kicker">{project.systemBuild.kicker ?? "The build"}</p>
                <h2>{project.systemBuild.title}</h2>
                <p>{project.systemBuild.summary}</p>
                <ul className="case-system-capabilities">
                  {project.systemBuild.capabilities.map(item => <li key={item}>{item}</li>)}
                </ul>
              </section>
            )}
          </>
        )}

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
