import { notFound } from "next/navigation";
import StudioNav from "@/components/StudioNav";
import StudioFooter from "@/components/StudioFooter";
import StructuredData from "@/components/StructuredData";
import { services, planningFaqs } from "@/data/services";
import { projects } from "@/data/projects";
import { pageMetadata, SITE_URL, ORGANIZATION_ID } from "@/lib/seo";

type Props = { params: { slug: string } };
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: Props) {
  const service = services.find(item => item.slug === params.slug);
  if (!service) notFound();
  return pageMetadata(service.title, service.summary, `/services/${service.slug}`);
}
export default function ServicePage({ params }: Props) {
  const service = services.find(item => item.slug === params.slug);
  if (!service) notFound();
  const url = `${SITE_URL}/services/${service.slug}`;
  return <><a className="skip-link" href="#main-content">Skip to content</a><StudioNav />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`, name: service.title, description: service.summary, url, provider: { "@id": ORGANIZATION_ID }, areaServed: service.slug === "immersive-corporate-events" ? "New York City" : "Worldwide" }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` }, { "@type": "ListItem", position: 3, name: service.title, item: url }] }} />
    <main id="main-content" className="services-main"><header className="service-introduction"><a className="buyer-text-link" href="/services">← All services</a><p className="buyer-kicker">Storyverse NYC</p><h1>{service.title}</h1><p>{service.intro}</p><a className="studio-button studio-button-dark" href="/#contact">Discuss your brief ↗</a></header>
      <section className="service-section"><h2>Built for your team.</h2><p>{service.audience}</p><div className="service-deliverables">{service.deliverables.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></section>
      <section className="service-section"><p className="buyer-kicker">Relevant work</p><h2>See the capabilities in practice.</h2><p>Selected original productions and studio projects demonstrating our creative and technical approach.</p><div className="service-proof-grid">{service.projects.map(item => { const project = projects[item.slug]; return <article className="service-proof" key={item.slug}><a href={`/work/${item.slug}`}><img src={project.livePerformanceImg ?? project.img} alt={`${project.title} — Storyverse project`} loading="lazy" /><h3>{project.title} ↗</h3></a><p>{item.relevance}</p></article>; })}</div></section>
      <section className="service-section"><h2>Before we begin.</h2>{[...service.faqs, ...planningFaqs].map(faq => <details className="service-faq" key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      <section className="service-cta"><h2>Bring us your brief.</h2><p>Share the audience, objective, venue, and timeline. We’ll explore feasibility and define the production scope together.</p><a className="studio-button studio-button-dark" href="/#contact">Start a project ↗</a>{service.slug === "immersive-corporate-events" && <p><a className="buyer-text-link" href="https://aether-show.com/corporate-events">Explore AETHER private events ↗</a></p>}</section>
      <nav className="service-related" aria-label="Other services">{services.filter(item => item.slug !== service.slug).map(item => <a className="buyer-text-link" href={`/services/${item.slug}`} key={item.slug}>{item.title} ↗</a>)}</nav>
    </main><StudioFooter /></>;
}
