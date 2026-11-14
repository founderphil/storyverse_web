import StudioNav from "@/components/StudioNav";
import StudioFooter from "@/components/StudioFooter";
import ServiceCards from "@/components/ServiceCards";
import { planningFaqs } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Immersive experience services", "Explore Storyverse’s custom brand experiences, agency production partnerships, audience technology, and AETHER private and corporate events. Based in NYC; available worldwide.", "/services");

export default function ServicesPage() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><StudioNav /><main id="main-content" className="services-main">
    <header className="service-introduction"><p className="buyer-kicker">NYC studio · Brands & agencies · Available worldwide</p><h1>Immersive experiences.<br />Built around your brief.</h1><p>Storyverse combines storytelling, live performance, film, physical environments, and custom technology. One studio carries the story through the audience journey: before, during, and after the live experience. Commission a new brand world, bring us into your agency production, or add an interactive layer to your event.</p></header>
    <ServiceCards />
    <section className="service-section" aria-labelledby="planning-heading"><p className="buyer-kicker">Planning your project</p><h2 id="planning-heading">Start with the audience.</h2><p>Two founders lead every engagement. Our trusted production bench expands to 40 across performance, production management, design, film, music, and technical delivery, with the team shaped to your scope.</p>{planningFaqs.map(faq => <details className="service-faq" key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
    <section className="service-cta"><h2>What story should your audience step into?</h2><p>Bring us an early brief. We’ll explore feasibility, scope, and budget with your team.</p><a className="studio-button studio-button-dark" href="/#contact">Start a project ↗</a></section>
  </main><StudioFooter /></>;
}
