"use client";
import { useState, type FormEvent } from "react";

export function buildInquiry(data: FormData) {
  const value = (name: string) => String(data.get(name) ?? "").trim();
  const subject = `Storyverse project inquiry — ${value("company")}`;
  const body = [`Name: ${value("name")}`, `Email: ${value("email")}`, `Company / agency: ${value("company")}`, `Project: ${value("project")}`, `Timeline: ${value("timeline") || "To discuss"}`, `Budget: ${value("budget") || "To discuss"}`, "", "What we’re planning:", value("brief")].join("\n");
  return { body, href: `mailto:contact@storyversenyc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}

export default function ContactCTA() {
  const [draft, setDraft] = useState<ReturnType<typeof buildInquiry> | null>(null);
  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDraft(buildInquiry(new FormData(event.currentTarget)));
  }
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-thread-shell"><div className="contact-card" data-story-thread="end">
        <p className="buyer-kicker">Your story starts here</p>
        <h2 id="contact-heading" className="contact-heading">What are you planning?</h2>
        <p className="contact-copy">A brand launch, a live activation, or a world around your IP? Share your brief—even if it’s still taking shape. We’ll discuss the audience, creative direction, and production scope with you.</p>
        <form className="inquiry-form" action="mailto:contact@storyversenyc.com" method="post" encType="text/plain" onSubmit={prepareInquiry}>
          <div className="inquiry-fields">
            <label>Your name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required maxLength={80} /></label>
            <label>Work email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength={120} /></label>
            <label>Company / agency <span aria-hidden="true">*</span><input name="company" autoComplete="organization" required maxLength={100} /></label>
            <label>Project type<select name="project" defaultValue="Exploring an idea"><option>Exploring an idea</option><option>Brand launch or campaign</option><option>Live activation or event</option><option>Film or performance</option><option>Digital / AI companion</option><option>IP or storyworld</option></select></label>
            <label>Timeline <span>(optional)</span><input name="timeline" placeholder="Launch date or planning window" maxLength={100} /></label>
            <label>Budget range <span>(optional)</span><input name="budget" placeholder="A range, or let’s discuss" maxLength={80} /></label>
          </div>
          <label className="inquiry-brief">Tell us about the project <span aria-hidden="true">*</span><textarea name="brief" rows={4} required maxLength={1500} placeholder="Your audience, objective, location, and what you’d like to create." /></label>
          <p className="inquiry-note">Required fields are marked *. This prepares an email draft for you to review and send. Nothing is submitted or stored on this website.</p>
          <button type="submit" className="contact-primary-button">Prepare project inquiry ↗</button>
        </form>
        {draft && <div className="inquiry-draft"><p role="status">Your draft is ready. Open it in your email app, review it, then send it to contact@storyversenyc.com.</p><label>Email draft<textarea readOnly rows={8} value={draft.body} /></label><a href={draft.href} className="contact-primary-button">Open email draft ↗</a><p className="inquiry-note">If your email app doesn’t open, copy the draft above into an email to <a href="mailto:contact@storyversenyc.com">contact@storyversenyc.com</a>.</p></div>}
        <p className="contact-secondary-note">Prefer to email directly? <a href="mailto:contact@storyversenyc.com">contact@storyversenyc.com</a><br />Based in NYC · Available worldwide</p>
      </div></div>
    </section>
  );
}
