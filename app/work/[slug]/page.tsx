import { notFound } from "next/navigation";
import WorkProject from "@/components/WorkProject";
import StudioFooter from "@/components/StudioFooter";
import StructuredData from "@/components/StructuredData";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { pageMetadata, SITE_URL, ORGANIZATION_ID } from "@/lib/seo";

type Props = { params: { slug: string } };
export function generateStaticParams() { return Object.keys(projects).map(slug => ({ slug })); }
export function generateMetadata({ params }: Props) {
  if (!Object.prototype.hasOwnProperty.call(projects, params.slug)) notFound();
  const project = projects[params.slug];
  return pageMetadata(`${project.title} — ${project.subtitle ?? "Interactive storytelling project"}`, project.buyerBrief ?? project.overview, `/work/${params.slug}`, project.img);
}
export default function WorkProjectPage({ params }: Props) {
  if (!Object.prototype.hasOwnProperty.call(projects, params.slug)) notFound();
  const project = projects[params.slug];
  const related = services.filter(service => service.projects.some(item => item.slug === params.slug));
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.buyerBrief ?? project.overview, url: `${SITE_URL}/work/${params.slug}`, image: `${SITE_URL}${project.img}`, creator: { "@id": ORGANIZATION_ID } }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` }, { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}/work/${params.slug}` }] }} />
    <WorkProject params={params} />
    <nav className="project-service-links" aria-label="Related services"><h2>Bring these capabilities to your brief.</h2>{related.length ? related.map(service => <a className="buyer-text-link" href={`/services/${service.slug}`} key={service.slug}>{service.title} ↗</a>) : <a className="buyer-text-link" href="/services">Explore Storyverse services ↗</a>}</nav><StudioFooter />
  </>;
}
