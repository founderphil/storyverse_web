import { notFound } from "next/navigation";
import WorkProject from "@/components/WorkProject";
import StudioFooter from "@/components/StudioFooter";
import StructuredData from "@/components/StructuredData";
import { projects } from "@/data/projects";
import { pageMetadata, SITE_URL, ORGANIZATION_ID } from "@/lib/seo";

type Props = { params: { slug: string } };
export function generateStaticParams() { return Object.keys(projects).map(slug => ({ slug })); }
export function generateMetadata({ params }: Props) {
  if (!Object.prototype.hasOwnProperty.call(projects, params.slug)) notFound();
  const project = projects[params.slug];
  return pageMetadata(`${project.title} — ${project.origin === "founder" ? "Founders’ work" : project.subtitle ?? "Interactive storytelling project"}`, `${project.credit}. ${project.buyerBrief ?? project.overview}`, `/work/${params.slug}`, project.img);
}
export default function WorkProjectPage({ params }: Props) {
  if (!Object.prototype.hasOwnProperty.call(projects, params.slug)) notFound();
  const project = projects[params.slug];

  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.buyerBrief ?? project.overview, url: `${SITE_URL}/work/${params.slug}`, image: `${SITE_URL}${project.img}`, creditText: project.credit, ...(project.origin === "storyverse" ? { creator: { "@id": ORGANIZATION_ID } } : { contributor: { "@type": "Person", name: "Phil Olarte", url: "https://www.phillipolarte.com/" } }) }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` }, { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}/work/${params.slug}` }] }} />
    <WorkProject params={params} />
    <nav className="project-service-links" aria-label="Project navigation"><a className="buyer-text-link" href="/work">Explore all work ↗</a><a className="buyer-text-link" href="/#contact">Discuss your brief ↗</a></nav><StudioFooter />
  </>;
}
