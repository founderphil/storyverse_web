import ThreadParallax from "@/components/ThreadParallax";
import Team from "@/components/Team";

export default function Page() {
  return (
    <>
      {/* Hero Video */}
      <div className="video-container">
        <video autoPlay muted playsInline>
          <source src="/videos/storyverse_logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Text Below Video */}
      <section className="hero-text">
        <h1>Storyverse</h1>
      </section>

      <main>
        <section className="mission-section">
          <div className="mission-section-header">
            <h1>enter. engage. become.</h1>
            <p>
              Our mission is to craft deeply felt, nonlinear worlds where human
              experience guides the journey. At Storyverse, you don&apos;t just watch
              the story. You become it.
            </p>
          </div>

          <div className="mission-video">
            <div className="mission-video-frame">
              <video controls width="100%">
                <source
                  src="/videos/enter_engage_become.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="mission-video-overlay">
              </div>
            </div>
                <div className="mission-video-overlay-top">
                  <span className="mission-video-badge">Storyverse · case film</span>
                  <span className="mission-video-meta">3:12 · sound on recommended</span>
                </div>
          </div>
        </section>
      </main>

      <ThreadParallax />

      <Team />

      <footer>
        &copy; 2025 StoryverseNYC Inc. — All rights reserved
        <br />
        <a href="mailto:contact@storyversenyc.com">contact@storyversenyc.com</a>
      </footer>
    </>
  );
}
