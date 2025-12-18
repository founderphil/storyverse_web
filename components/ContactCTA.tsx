import React from "react";

export default function ContactCTA() {
  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="contact-card">
        <h2 className="contact-heading">Let’s craft your next immersive story world.</h2>
        <p className="contact-copy">
          Storyverse partners with studios, brands, and storytellers to build emotionally resonant cross-platform worlds. 
          Leave your customers in awe while deepening their connection to your story.
        </p>
        <div className="contact-actions">
          <a
            href="mailto:contact@storyversenyc.com"
            className="contact-primary-button"
          >
            Email Storyverse
          </a>
        </div>
        <p className="contact-secondary-note">
          Based in NYC · Available worldwide
        </p>
      </div>
    </section>
  );
}