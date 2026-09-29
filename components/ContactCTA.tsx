"use client";
import { useState, type FormEvent } from "react";

const HUBSPOT_SUBMIT_URL = "https://api.hsforms.com/submissions/v3/integration/submit/247468272/33616d93-d898-46bf-9541-668c140f94a7";
const HUBSPOT_FIELDS = ["firstname", "lastname", "email", "company", "project_type", "timeline", "budget_range", "message"];

export function buildInquiry(data: FormData) {
  const value = (name: string) => String(data.get(name) ?? "").trim();
  const subject = `Storyverse project inquiry — ${value("company")}`;
  const body = [`Name: ${value("firstname")} ${value("lastname")}`.trim(), `Email: ${value("email")}`, `Company / agency: ${value("company")}`, `Project: ${value("project_type")}`, `Timeline: ${value("timeline") || "To discuss"}`, `Budget: ${value("budget_range") || "To discuss"}`, "", "What we’re planning:", value("message")].join("\n");
  return { body, href: `mailto:contact@storyversenyc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}

async function submitToHubSpot(data: FormData) {
  const hutk = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1];
  const fields = HUBSPOT_FIELDS.map((name) => ({ objectTypeId: "0-1", name, value: String(data.get(name) ?? "").trim() })).filter((field) => field.value);
  const response = await fetch(HUBSPOT_SUBMIT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields, context: { pageUri: window.location.href, pageName: document.title, ...(hutk && { hutk }) } }),
  });
  if (!response.ok) throw new Error(`HubSpot submission failed: ${response.status}`);
}

type Status = { state: "idle" | "sending" | "sent" } | { state: "failed"; draft: ReturnType<typeof buildInquiry> };

export default function ContactCTA() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  async function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "sending" });
    try {
      await submitToHubSpot(data);
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({ state: "failed", draft: buildInquiry(data) });
    }
  }
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-thread-shell"><div className="contact-card" data-story-thread="end">
        <p className="buyer-kicker">Your story starts here</p>
        <h2 id="contact-heading" className="contact-heading">What are you planning?</h2>
        <p className="contact-copy">A brand launch, a live activation, or a world around your IP? Share your brief—even if it’s still taking shape. We’ll discuss the audience, creative direction, and production scope with you.</p>
        {status.state === "sent" ? (
          <div className="inquiry-draft"><p role="status">Thank you—your inquiry is on its way. We’ll be in touch soon.</p></div>
        ) : (
          <form className="inquiry-form" onSubmit={sendInquiry}>
            <div className="inquiry-fields">
              <label>First name <span aria-hidden="true">*</span><input name="firstname" autoComplete="given-name" required maxLength={60} /></label>
              <label>Last name <span>(optional)</span><input name="lastname" autoComplete="family-name" maxLength={60} /></label>
              <label>Work email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength={120} /></label>
              <label>Company / agency <span aria-hidden="true">*</span><input name="company" autoComplete="organization" required maxLength={100} /></label>
              <label>Project type<select name="project_type" defaultValue="Exploring an idea"><option>Exploring an idea</option><option>Brand launch or campaign</option><option>Live activation or event</option><option>Film or performance</option><option>Digital / AI companion</option><option>IP or storyworld</option></select></label>
              <label>Timeline <span>(optional)</span><input name="timeline" placeholder="Launch date or planning window" maxLength={100} /></label>
              <label>Budget range <span>(optional)</span><input name="budget_range" placeholder="A range, or let’s discuss" maxLength={80} /></label>
            </div>
            <label className="inquiry-brief">Tell us about the project <span aria-hidden="true">*</span><textarea name="message" rows={4} required maxLength={1500} placeholder="Your audience, objective, location, and what you’d like to create." /></label>
            <p className="inquiry-note">Required fields are marked *.</p>
            <button type="submit" className="contact-primary-button" disabled={status.state === "sending"}>{status.state === "sending" ? "Sending…" : "Send project inquiry ↗"}</button>
          </form>
        )}
        {status.state === "failed" && <div className="inquiry-draft"><p role="alert">Sorry—we couldn’t send your inquiry. You can send it by email instead.</p><label>Email draft<textarea readOnly rows={8} value={status.draft.body} /></label><a href={status.draft.href} className="contact-primary-button">Open email draft ↗</a><p className="inquiry-note">If your email app doesn’t open, copy the draft above into an email to <a href="mailto:contact@storyversenyc.com">contact@storyversenyc.com</a>.</p></div>}
        <p className="contact-secondary-note">Prefer to email directly? <a href="mailto:contact@storyversenyc.com">contact@storyversenyc.com</a><br />Based in NYC · Available worldwide</p>
      </div></div>
    </section>
  );
}
