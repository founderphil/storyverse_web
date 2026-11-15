import Image from "next/image";
import WorkGrid from "@/components/WorkGrid";
import StudioNav from "@/components/StudioNav";
import StudioFooter from "@/components/StudioFooter";
import FounderPress from "@/components/FounderPress";
import { albaSelectedWork } from "@/data/founders";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Storyverse productions & founders’ work", "Explore Storyverse productions AETHER, FAIRYLAND, and Emily Was Here, alongside the founders’ individual backgrounds in immersive performance and creative technology.", "/work");

export default function WorkPage() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a><StudioNav />
    <main id="main-content" className="services-main work-main">
      <header className="service-introduction">
        <p className="buyer-kicker">Our work & the people behind it</p>
        <h1>Worlds we make.<br />Experience we bring.</h1>
        <p>Original Storyverse productions, followed by the individual work that shapes our founders’ practice.</p>
        <nav className="work-section-nav" aria-label="Work sections"><a className="buyer-text-link" href="#storyverse-work">Storyverse work ↓</a><a className="buyer-text-link" href="#founders-work">Founders’ work ↓</a></nav>
      </header>
      <section id="storyverse-work" className="work-collection" aria-labelledby="storyverse-work-heading">
        <p className="buyer-kicker">Created together</p><h2 id="storyverse-work-heading">Storyverse work</h2>
        <p className="work-section-intro">AETHER, FAIRYLAND, and EMILY WAS HERE bring Alba Albanese and Phil Olarte’s storytelling, performance, and technology into one studio practice.</p>
        <WorkGrid origin="storyverse" />
      </section>
      <section id="founders-work" className="work-collection founders-collection" aria-labelledby="founders-work-heading">
        <p className="buyer-kicker">The experience behind the studio</p><h2 id="founders-work-heading">Founders’ work</h2>
        <p className="work-section-intro">Earlier and independent projects by our founders, credited to their individual roles. These are separate from Storyverse productions.</p>
        <FounderPress />
        <div className="founder-history"><h3>Two paths into one practice.</h3><p>Alba brings a life in acting, writing, and immersive performance. Phil brings a background in music and theater alongside product design and emerging technology. An introduction through Vance and a connection at Cherry Lane Theatre brought their paths together. At Storyverse, they combine those practices to create worlds an audience can enter.</p><a className="buyer-text-link" href="/#team">Meet the founders ↗</a></div>
        <section className="founder-work-group" aria-labelledby="alba-work-heading">
          <header><p className="buyer-kicker">Alba Albanese</p><h3 id="alba-work-heading">Performance & immersive storytelling</h3><p>Selected personal credits, including work under the name Ava Lee Scott.</p></header>
          <div className="founder-credit-grid">{albaSelectedWork.map(work => <article className="founder-credit-card" key={work.title}><a className="founder-credit-image" href={work.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${work.title}`}><Image src={work.image} alt={work.imageAlt} width={920} height={615} sizes="(max-width: 760px) 100vw, 50vw" />{work.imageCredit && <span className="founder-image-credit">{work.imageCredit}</span>}</a><div className="founder-credit-copy"><p className="project-credit">{work.credit}</p><h4><a href={work.url} target="_blank" rel="noopener noreferrer">{work.title} ↗</a></h4><p>{work.copy}</p></div></article>)}</div>
          <a className="buyer-text-link" href="https://www.albaalbanese.com/productions/" target="_blank" rel="noopener noreferrer">Alba’s full selected work ↗</a>
        </section>
        <section className="founder-work-group" aria-labelledby="phil-work-heading">
          <header><p className="buyer-kicker">Phil Olarte</p><h3 id="phil-work-heading">Creative technology & product design</h3><p>Independent work in AI characters, mixed reality, and location-based storytelling.</p></header>
          <WorkGrid origin="founder" />
          <a className="buyer-text-link" href="https://www.phillipolarte.com/" target="_blank" rel="noopener noreferrer">Phil’s full selected work ↗</a>
        </section>

      </section>
    </main><StudioFooter />
  </>;
}
