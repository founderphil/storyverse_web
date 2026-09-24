const capabilities = [
  { number: "01", title: "Brand worlds & creative direction", copy: "A clear concept, story, and visual language built around your audience and business brief.", detail: "Strategy · Scripts · Storyboards · Experience design" },
  { number: "02", title: "Cinematic & live production", copy: "Film, performance, original music, and physical environments that make your world tangible.", detail: "Film · Live performance · Sound · Production design" },
  { number: "03", title: "Technology & participation", copy: "Digital companions and interactive systems that invite audiences into the story and keep it alive beyond the event.", detail: "Web · AI characters · Spatial audio · XR" },
];
export default function Capabilities() {
  return (
    <section id="capabilities" className="buyer-section" aria-labelledby="capabilities-heading">
      <p className="buyer-kicker">For brands & agencies</p>
      <h2 id="capabilities-heading">One studio. From the first idea<br className="desktop-break" /> to the last audience touchpoint.</h2>
      <p className="buyer-intro">Bring us a launch, activation, campaign, or existing IP. We connect the creative and the technology into one production, working directly with your team or alongside your agency.</p>
      <div className="capability-grid" data-story-thread="cross">
        {capabilities.map(item => <article className="capability-card" key={item.number}><span className="buyer-kicker">{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><p className="capability-detail">{item.detail}</p></article>)}
      </div>
      <div className="audience-journey" aria-label="Audience journey"><p><strong>Before</strong><span>Build curiosity and invite audiences in.</span></p><p><strong>During</strong><span>Make the live moment personal and participatory.</span></p><p><strong>After</strong><span>Give audiences a reason to return to your world.</span></p></div>
    </section>
  );
}
