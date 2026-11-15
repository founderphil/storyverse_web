"use client";
import { useState } from "react";

export default function StudioNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="studio-nav">
      <a className="studio-wordmark" href="/" aria-label="Storyverse home">Storyverse<span>NYC</span></a>
      <button className="studio-menu-toggle" type="button" aria-expanded={open} aria-controls="studio-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      <nav id="studio-navigation" aria-label="Main navigation" className={open ? "studio-navigation is-open" : "studio-navigation"}>
        <a href="/#capabilities" onClick={() => setOpen(false)}>Capabilities</a>
        <a href="/#work" onClick={() => setOpen(false)}>Work</a>
        <a href="/#team" onClick={() => setOpen(false)}>Team</a>
        <a className="studio-button studio-button-dark" href="/#contact" onClick={() => setOpen(false)}>Start a project ↗</a>
      </nav>
    </header>
  );
}
