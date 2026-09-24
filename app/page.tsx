import ThreadParallax from "@/components/ThreadParallax";
import Team from "@/components/Team";
import ContactCTA from "@/components/ContactCTA";
import Capabilities from "@/components/Capabilities";
import StudioNav from "@/components/StudioNav";
import StoryThread from "@/components/StoryThread";

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <StudioNav />
      <main id="main-content" className="studio-main">
        <StoryThread />
        <div className="video-container studio-logo-opening">
          <video autoPlay muted playsInline preload="metadata" aria-label="Storyverse animated studio identity">
            <source src="/videos/storyverse_logo.mp4" type="video/mp4" />
          </video>
        </div>
        <section className="buyer-hero" aria-labelledby="hero-heading">
          <div className="buyer-hero-copy">
            <p className="buyer-kicker">NYC studio · Brands & agencies · Available worldwide</p>
            <h1 id="hero-heading">Brand worlds<br />you can <em>become.</em></h1>
            <p className="buyer-positioning">A full-service studio creating cinematic, performance-led brand worlds—and the technology that lets audiences participate before, during, and after the live experience.</p>
            <div className="buyer-actions"><a className="studio-button studio-button-dark" href="#contact">Start a project ↗</a><a className="studio-button" href="#work">Explore our work ↓</a></div>
            <p className="buyer-hero-note">Creative direction. Film & live performance. Participatory technology.</p>
          </div>
        </section>
        <Capabilities />
        <section className="mission-section" aria-labelledby="mission-heading">
          <div className="mission-section-header"><p className="buyer-kicker">Our creative point of view</p><h2 id="mission-heading">enter. engage. become.</h2><p>Deeply felt worlds where human experience guides the journey. Film, performance, and technology share one narrative language—so every touchpoint feels like part of the same story.</p></div>
          <div className="mission-video" data-story-thread="cross"><div className="mission-video-frame"><video controls preload="none" aria-label="Storyverse case film"><source src="/videos/enter_engage_become.mp4" type="video/mp4" /></video></div><div className="mission-video-overlay-top"><span className="mission-video-badge">Storyverse · case film</span><span className="mission-video-meta">3:12 · sound on recommended</span></div></div>
        </section>
        <section id="work" className="buyer-section work-introduction" aria-labelledby="work-heading"><p className="buyer-kicker">Selected studio work</p><h2 id="work-heading">See how the worlds connect.</h2><p className="buyer-intro">Original productions demonstrating how we unite story, live experience, and technology. Explore the delivery and the ideas that can translate to your brief.</p><a className="buyer-text-link" href="/work">View all projects ↗</a></section>
        <ThreadParallax />
        <Team />
        <section className="buyer-section production-section" aria-labelledby="production-heading"><p className="buyer-kicker">A production built around your brief</p><h2 id="production-heading">Senior creative leadership.<br />Room to scale.</h2><p className="buyer-intro">Work directly with our NYC creative and technology leads. We shape the scope around your audience, venue, timeline, and budget—from a focused digital companion to a production spanning film, live performance, and interactive systems.</p><div className="production-grid"><article><h3>Define the world</h3><p>Align on the audience, objective, concept, and what success should look like.</p></article><article><h3>Build the experience</h3><p>Connect scripts, performance, production design, and technical engineering in one plan.</p></article><article><h3>Plan the rollout</h3><p>Define the staffing, delivery, and audience journey needed for your event or campaign.</p></article></div><a className="buyer-text-link" href="#contact">Tell us what you’re planning ↗</a></section>
        <ContactCTA />
      </main>
      <footer>© {new Date().getFullYear()} StoryverseNYC Inc. — All rights reserved<br /><a href="mailto:contact@storyversenyc.com">contact@storyversenyc.com</a></footer>
    </>
  );
}
