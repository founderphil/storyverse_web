import { services } from "@/data/services";

export default function ServiceCards() {
  return <div className="service-grid">{services.map((service, index) => (
    <article className="service-card" key={service.slug}>
      <p className="buyer-kicker">0{index + 1}</p>
      <h3><a href={`/services/${service.slug}`}>{service.title} <span aria-hidden="true">↗</span></a></h3>
      <p>{service.summary}</p>
    </article>
  ))}</div>;
}
