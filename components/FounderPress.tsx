import { founderPress } from "@/data/founders";

export default function FounderPress() {
  return <section className="founder-press" aria-labelledby="founder-press-heading">
    <p className="buyer-kicker">Selected words on our founders & their work</p>
    <h3 id="founder-press-heading">In the press & on the program.</h3>
    <div className="founder-press-grid">{founderPress.map(item =>
      <figure className="press-quote-card" key={item.publication}>
        <div className="press-quote-header">
          <a className={`press-logo ${item.logoStyle}`} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${item.publication}: read the source`}>
            {/* Original publication marks; sources are recorded in docs/founder-credits.md. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/press/${item.logo}`} alt={item.publication} width="300" height="64" loading="lazy" />
          </a>
          <span className="press-quote-kind">{item.kind}</span>
        </div>
        <blockquote><span className="press-quotation-mark" aria-hidden="true">“</span>{item.quote}<span aria-hidden="true">”</span></blockquote>
        <figcaption><cite>{item.speaker}</cite><p className="project-credit">{item.credit}</p><a className="buyer-text-link" href={item.url} target="_blank" rel="noopener noreferrer">Read the source <span aria-hidden="true">↗</span><span className="sr-only">: {item.publication}</span></a></figcaption>
      </figure>
    )}</div>
  </section>;
}
