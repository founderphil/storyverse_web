import Image from "next/image";

const capabilities = [
  { number: "01", title: "Brand worlds & creative direction", copy: "A clear concept, story, and visual language built around your audience and business brief.", detail: "Strategy · Scripts · Storyboards · Experience design" },
  { number: "02", title: "Cinematic & live production", copy: "Film, performance, original music, and physical environments that make your world tangible.", detail: "Film · Live performance · Sound · Production design" },
  { number: "03", title: "Technology & participation", copy: "Digital companions and interactive systems that invite audiences into the story and keep it alive beyond the event.", detail: "Web · AI-powered web engines · Spatial audio · XR" },
];
const journey = [
  { phase: "Before", image: "/images/journey-before.jpeg", alt: "Retro arcade and screen from the AETHER storyworld", copy: "Build curiosity and invite audiences in." },
  { phase: "During", image: "/images/journey-during-orb.jpg", alt: "An AETHER guest holding a glowing orb in a blue and amber-lit room", copy: "Make the live moment personal and participatory." },
  { phase: "After", image: "/images/journey-after.jpeg", alt: "A cassette recorder and instant photographs from the AETHER world", copy: "Give audiences a reason to return to your world." },
];
export default function Capabilities() {
  return (
    <section id="capabilities" className="buyer-section" aria-labelledby="capabilities-heading">
      <p className="buyer-kicker">For brands & agencies</p>
      <h2 id="capabilities-heading">One studio. From the first idea<br className="desktop-break" /> to the last audience touchpoint.</h2>
      <p className="buyer-intro">Bring us a launch, activation, campaign, or existing IP. We connect the creative and the technology into one production, working directly with your team or alongside your agency.</p>
      <div className="capability-grid" data-story-thread="cross" data-thread-key="capabilities">
        {capabilities.map(item => <article className="capability-card" key={item.number}><span className="buyer-kicker">{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><p className="capability-detail">{item.detail}</p></article>)}
      </div>
      <div className="audience-journey" aria-label="Audience journey">
        {journey.map((item, index) => (
          <a className="journey-card" href="/work/aether" key={item.phase}>
            <div className="journey-media">{index === 0 && <span className="journey-thread-anchor" data-story-thread="cross" data-thread-key="audience-journey" aria-hidden="true" />}<Image src={item.image} alt={item.alt} width={640} height={800} sizes="(max-width: 760px) 100vw, 340px" style={item.phase === "During" ? { objectPosition: "38% center" } : undefined} /></div>
            <div className="journey-copy">
              <h3>{item.phase}</h3><p>{item.copy}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
