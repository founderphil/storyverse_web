export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  audience: string;
  deliverables: { title: string; copy: string }[];
  projects: { slug: string; relevance: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "immersive-brand-experiences",
    title: "Custom immersive brand experiences",
    summary: "Story-led brand activations combining live performance, original film, physical environments, and custom technology.",
    intro: "Storyverse is a New York–based immersive experience studio working with brands and agencies worldwide. We build a narrative around your campaign, theme, or existing IP, then connect the performers, environments, media, and technology that let an audience take part.",
    audience: "For brand teams and experiential agencies planning a launch, campaign activation, or a new world around existing intellectual property. Bring us an early concept or a defined brief; we can support an individual activation or a complete experience with your team.",
    deliverables: [
      { title: "A world built around your brief", copy: "Narrative worldbuilding, scripts, storyboards, and a visual language shaped around your audience and objective." },
      { title: "A production people can enter", copy: "Audience journey and space design, casting, live performers, production design, original film, sound, and show operations, scoped to the project." },
      { title: "Participation across the journey", copy: "Invitations and story portals before arrival; connected objects and audience choices during the event; personalized web experiences and digital characters afterward." },
    ],
    projects: [
      { slug: "aether", relevance: "An original Off-Broadway world combining live performers, connected objects, and personalized story conclusions." },
      { slug: "fairyland", relevance: "An original storyworld connecting a playable web prologue, audience profiles, ticketing, and live encounters." },
    ],
    faqs: [
      { question: "Can you create an experience around our brand or existing IP?", answer: "Yes. We develop a new narrative around a campaign, theme, or existing IP, then scope the creative, production, and technology with your team." },
      { question: "How do guests participate?", answer: "Participation is designed for the story. It can include character encounters, audience choices, NFC-enabled objects, responsive environments, and a personalized digital continuation. We choose the mechanics that serve the audience and brief." },
    ],
  },
  {
    slug: "agency-production-partner",
    title: "Immersive production partner for agencies",
    summary: "White-label creative and technical production, pitch feasibility, and interactive builds for experiential agencies.",
    intro: "Storyverse supports agencies from early pitch feasibility through creative and technical delivery. We can work within your production as a white-label partner, build an individual activation, or connect the story, performance, media, and technology across a complete audience journey.",
    audience: "For creative directors, agency producers, and experiential teams that need a specialist production partner. Two founders lead each engagement, with a trusted production bench that can expand to 40 across performance, production management, design, film, music, and technical delivery.",
    deliverables: [
      { title: "Feasibility before the pitch", copy: "Early technical input, scope and cost guidance, and an assessment of how the proposed interaction could be delivered." },
      { title: "Creative and production delivery", copy: "Worldbuilding, experience design, casting, performers, vendors, film, sound, and show operations within an agreed scope." },
      { title: "Specialist technical builds", copy: "Custom hardware, NFC interactions, AI characters, mixed reality, web apps, and coordinated cues integrated into your production." },
    ],
    projects: [
      { slug: "aether", relevance: "Demonstrates the studio’s ability to connect original production, guest identity, NFC objects, and a post-show web experience." },
      { slug: "maia", relevance: "Demonstrates real-time conversational interaction integrated with a physical set and lighting cues." },
    ],
    faqs: [
      { question: "Can Storyverse work as a white-label agency partner?", answer: "Yes. We offer creative and technical delivery within an agency’s production. We agree the scope, responsibilities, and working arrangement around your brief." },
      { question: "Can you help before a pitch is approved?", answer: "Yes. Early feasibility support covers technical input, scope, and cost guidance so your team can assess the concept before pitching." },
    ],
  },
  {
    slug: "interactive-experience-technology",
    title: "Interactive technology for live experiences",
    summary: "Custom audience technology: NFC-connected objects, conversational AI, mixed reality, responsive environments, and digital companions.",
    intro: "Storyverse designs and builds the technology that lets stories respond to people. We connect participant identity, choices, and story history across physical objects, live spaces, and digital experiences, choosing the technologies that best serve each production.",
    audience: "For brands, agencies, venues, and cultural organizations adding interaction to a live event or a place. The brief might be a single responsive prop, a digital companion, a conversational character, or a location-based story across a real environment.",
    deliverables: [
      { title: "Connected objects and environments", copy: "Custom hardware and NFC-enabled objects, projection triggers, lighting and sound cues, mesh networks, and computer vision interactions shaped around live participation." },
      { title: "Characters and digital companions", copy: "Voice-driven AI characters, web apps, audience profiles, personalized follow-up, and story archives that connect the live event to an ongoing digital journey." },
      { title: "Location-based storytelling", copy: "Geospatial audio, branching choices, and mixed reality that reveal stories as audiences move through physical places." },
    ],
    projects: [
      { slug: "emily_was_here", relevance: "Location-triggered audio, branching choices, and AR artifacts turn the Brooklyn Bridge into the setting for a self-guided story." },
      { slug: "aether", relevance: "Custom NFC cards and connected orbs recorded character encounters and informed personalized web conclusions." },
      { slug: "maia", relevance: "A real-time AI character brings conversation into an intimate physical encounter." },
    ],
    faqs: [
      { question: "Can you build only the technology layer?", answer: "Yes. We can deliver individual interactive builds or digital layers within your production, as well as develop a complete experience with your team." },
      { question: "Do guests need an app?", answer: "It depends on the experience. AETHER used a physical pass for in-venue interactions without an audience app. Location-based and digital companion projects use the web or mobile tools appropriate to their interaction." },
    ],
  },
  {
    slug: "immersive-corporate-events",
    title: "Immersive corporate events in NYC",
    summary: "AETHER private and corporate experiences for 50–300 guests in SoHo, with a full cast, immersive programming, and a 1988 dance party.",
    intro: "Bring your company gathering, client event, or brand activation into AETHER, an original Storyverse immersive world. The private-event format combines a venue takeover with a full cast, two hours of immersive programming, and a 1988 dance party in SoHo, New York City.",
    audience: "For company event planners, client experience teams, and brand producers looking for a story-led private event for 50 to 300 guests. We discuss the date, guest count, production scope, and availability with your team before proposing the event.",
    deliverables: [
      { title: "A private world for your guests", copy: "A private venue takeover with a full cast and an immersive audience journey built around AETHER’s original storyworld." },
      { title: "Immersive programming and a party", copy: "Two hours of immersive programming followed by a 1988 dance party, bringing performance and social time into the same event." },
      { title: "Details shaped for your gathering", copy: "Discuss custom story moments, branded keepsakes, an event site, and film capture as part of the event scope." },
    ],
    projects: [{ slug: "aether", relevance: "Explore the original production and the technology behind personalized guest journeys. The original run welcomed approximately 700 guests across six performances, with a sold-out final performance." }],
    faqs: [
      { question: "How many guests is the AETHER private-event format designed for?", answer: "The format is designed for 50 to 300 guests in SoHo. Share your guest count and preferred date so we can discuss fit and availability." },
      { question: "Can we commission an entirely new corporate experience?", answer: "Yes. Alongside the AETHER format, Storyverse develops custom experiences around a brand, theme, or existing IP. A new production is scoped separately to its creative, venue, timeline, and technical requirements." },
    ],
  },
];

export const planningFaqs = [
  { question: "Where is Storyverse based, and where do you work?", answer: "Storyverse is based in New York City and available for projects worldwide. Location, venue, and production requirements are defined with your team during scoping." },
  { question: "How far in advance should we get in touch?", answer: "Typical project lead time is 6–8 weeks; smaller builds may take around 4 weeks. Custom fabrication, parts sourcing, approvals, and scope affect timing. Bring us your target date early so we can assess feasibility." },
  { question: "What should we include in a project brief?", answer: "Tell us your audience, objective, location, target date, and budget range, plus any existing concept or IP. We can help with technical feasibility, scope, and cost guidance while the brief is still taking shape." },
];
