import WorkGrid from "@/components/WorkGrid";
import StudioNav from "@/components/StudioNav";
import StudioFooter from "@/components/StudioFooter";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Immersive production & interactive storytelling projects", "Explore AETHER, FAIRYLAND, Emily Was Here, and Storyverse’s work across live performance, original IP, AI characters, and location-based storytelling.", "/work");
export default function WorkPage() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><StudioNav /><main id="main-content" className="services-main"><header className="service-introduction"><p className="buyer-kicker">Selected studio work</p><h1>Immersive worlds.<br />Made real.</h1><p>Explore original productions and interactive projects, from live performance and connected objects to digital companions and location-based stories.</p><a className="buyer-text-link" href="/services">Explore what you can commission ↗</a></header><WorkGrid /></main><StudioFooter /></>;
}
