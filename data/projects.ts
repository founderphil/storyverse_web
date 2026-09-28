// data/projects.ts — merged from phillipolarte.com and grad portfolio
// Replace image paths with your own. Keep slugs stable.

export type Project = {
  title: string;
  caseStudyCopy?: string[];
  buyerBrief?: string;
  buyerOutcome?: string;
  delivery?: string;
  subtitle?: string;
  link?: string;
  ctaLabel?: string;
  img: string;
  digitalImg?: string;
  livePerformanceImg?: string;
  filmTvImg?: string;
  tags: string[];
  overview: string;
  role: string;
  outcomes: string[];
  why: string;
  snapshots: string[];
  systemBuild?: {
    kicker?: string;
    title: string;
    summary: string;
    capabilities: string[];
  };
  theme?: {
    accent: string;
    secondaryAccent?: string;
  };
  proofLine?: string;
  journeySteps?: string[];
  systemProof?: string;
  mediaLabels?: [string, string, string];
  featured?: boolean;
  outcomesVisual?: string;
  processVisual?: string;
  overviewVisual?: string;
  featuredVideo?: string;
  threadBackground?: string;
  threadBackgroundViewBox?: string;
};

export const projects: Record<string, Project> = {
  // --- Flagship / main projects ---

  aether: {
    caseStudyCopy: [
      'Every guest carried a pass that quietly followed their night. Storyverse designed the technology behind it — no app, no phone, no staff handoff — so the world could answer each person by what they had actually done.',
      'AETHER: Awakening Annabellee is original IP — a 1988 storyworld staged as a walkthrough production, where twelve characters held twelve realms around Belle at the center of Saint Mary’s Infirmary.',
      'No two guests left with the same night. Each one carried home a film built from the characters they met and a map that only they could have walked.'
    ],
    buyerBrief: 'An original 1988 storyworld staged as a walkthrough production, built with technology that let the world recognize every guest inside it.',
    buyerOutcome: 'A personalized night for every guest — their own path, their own film, their own map — built on custom technology and an original story.',
    delivery: 'Original IP & Storyworld Development · Walkthrough Experience Design · Guest Identity & Personalization Tech · Live Show Integration · Post-Show Digital Experience · Campaign & Film',
    proofLine: 'Original Storyverse IP · Produced off-Broadway in NYC',
    journeySteps: ['Enter', 'Be recognized', 'Shape the story', 'Take your ending with you'],
    systemProof: 'A physical pass let each guest’s choices shape a personalized in-venue ending and a private post-show digital journey.',
    theme: { accent: '#ff3fb0', secondaryAccent: '#e8a85c' },
    title: 'AETHER',
    subtitle: 'Awakening Annabellee · Original IP · Live Immersive Retrofuturist 1988 Dance Dream',
    link: 'https://aether-show.com/',
    ctaLabel: 'Corporate Events Now Booking',
    img: '/images/aether_poster.jpeg',
    digitalImg: '/images/aether_digital.jpg',
    livePerformanceImg: '/images/aether_performance.jpg',
    filmTvImg: '/videos/aether_movie.gif',
    tags: ['Original IP', 'Transmedia', 'Live Performance', 'Custom Technology', 'Digital', 'Storyworld'],
    overview: `AETHER: Awakening Annabellee is an original 1988 storyworld staged as a walkthrough production, where guests carry a personal pass through Saint Mary's Infirmary and meet twelve characters who each remember them. Original film, live dance, handcrafted environments, and custom technology built by Storyverse let the world respond to each guest personally, before the show and after it.`,
    role: `Storyworld designer, experience strategist, and creative technologist. Storyverse shaped the property and the audience journey, then built the technology that ran it: guest identity and interaction, live show integration, and a personalized post-show experience.`,
    outcomes: [
      'Originated and staged a full property — story, characters, score, film, and environments — as a walkthrough world rather than a seated show.',
      'Designed and built a custom guest-identity system that let audiences drive their own path with no app and no staff handoff.',
      'Turned every encounter into a personal record, used to assemble a unique exit experience and journey map for each guest.',
      'Shipped an in-venue technology stack running unattended through live performances.',
      'Extended the story past the curtain with a personalized post-show experience and a return offer.'
    ],
    why: `Shows Storyverse originating a story and engineering the technology that let it respond to each person inside it.`,
    snapshots: [
      'Personal visitor pass and tap interaction.',
      'Guest records shaping a personalized exit.',
      'Personalized post-show page with generated journey map.',
      'Show poster, campaign imagery, and original film assets.'
    ],
    systemBuild: {
      title: 'Built in-house',
      summary: 'A production technology stack designed to disappear into the story.',
      capabilities: [
        'Guest identity & tap interaction',
        'Live show-control integration',
        'Per-guest personalization data',
        'Personalized exit experience',
        'Post-show web experience'
      ]
    },
    featured: true,
    threadBackground: '/images/aether_poster.jpeg'
  },

  fairyland: {
    caseStudyCopy: [
      'FAIRYLAND is a living storyworld with its own companion app — a personal archive where every guest keeps a profile, gathers visions, and returns to a story that keeps evolving beyond the performance.',
      'Storyverse shaped the experience around continuity: the first invitation, the path into the live event, and the digital encounters that keep the world active afterward.',
      'The result is a flexible platform for participation — one that gives audiences multiple points of entry while keeping the voice, rules, and feeling of the world intact.'
    ],
    buyerBrief: 'Keep a live storyworld accessible and participatory across web, film, and AI character encounters.',
    buyerOutcome: 'Connected live and digital touchpoints, with onboarding and pre- and post-show story loops that give audiences more ways into the world.',
    delivery: 'Experience strategy · Ticketing and onboarding UX · AI character interactions · Cross-platform design',
    title: 'FAIRYLAND',
    subtitle: 'Live + AI Storyworld',
    link: 'https://fairylandshow.com/',
    img: '/images/fairyland.png',
    digitalImg: '/images/FAIRYLAND_outcomes.png',
    livePerformanceImg: '/images/fairyland_live.jpg',
    filmTvImg: '/images/fairyland.gif',
    tags: ['Transmedia', 'AI', 'Experience Design', 'Storyworld'],
    overview: `A living storyworld that connects audiences across live performance, web, film, live streaming, and AI‑driven character encounters so engagement continues before, during, and after the show.`,
    role: `Head of Product UX, Designer, Creative Technologist & Full Stack Engineer — owned experience strategy across mediums, ticketing/onboarding UX, and cohesion between live and digital touchpoints.`,
    outcomes: [
      'Unified offline/online story loops across channels into a single cohesive journey.',
      'Designed frameworks for pre‑ and post‑show engagement that increased repeat touchpoints with fans.',
      'Codified brand and story cohesion across media types and platforms.',
      'Drove strong ticketing and onboarding conversion through streamlined flows and clear narrative framing.'
    ],
    why: `Demonstrates systems‑level product design for hybrid media where narrative continuity drives retention.`,
    snapshots: [
      'Experience map linking live to digital follow‑ups.',
      'Ticketing & onboarding flows.',
      'AI chat UI tied to lore.',
      'System map of narrative loops.'
    ],
    systemBuild: {
      title: 'Built to continue',
      summary: 'A companion web app connecting the show to an ongoing digital journey with built in AI personalization, so the story keeps running after the audience goes home.',
      capabilities: [
        'Guest profile & story archive',
        'AI character interactions',
        'Ticketing & onboarding flow',
        'Cross-platform continuity',
        'Live Performance integration',
        'Marker-based Augmented reality'
      ]
    },
    featured: true,
    outcomesVisual: '/images/FAIRYLAND_outcomes.png',
    processVisual: '/images/FAIRYLAND_process.png',
    overviewVisual: '/images/FAIRYLAND_overview.png',
    threadBackground: '/images/doors-poster.png'
  },

  emily_was_here: {
    caseStudyCopy: [
      'EMILY WAS HERE turns a walk across the Brooklyn Bridge into a private encounter with history, memory, and place. Buy once, go forever — every crossing plays differently.',
      'Guided by the voice of Emily Warren Roebling — the engineer who saw the bridge to completion — original poetry, ambient sound, and a score set the pace of the crossing. There’s no start time and no staff on the bridge: guests choose their own path from the app, and the phone delivers the story, then gets out of the way.',
      'Because the experience is location-aware and self-guided, the bridge becomes both the setting and the stage — available whenever an audience member is ready to begin.'
    ],
    buyerBrief: 'Turn a public landmark into an intimate narrative audiences can experience on their own schedule.',
    buyerOutcome: 'An on-demand, GPS-triggered audio experience that brings a performed story to the bridge without requiring a staffed live show for every visitor.',
    delivery: 'Original narrative · Route and GPS pacing · Audio design · Mixed-reality engineering',
    mediaLabels: ['Digital', 'On the bridge', 'Film / TV'],
    title: 'EMILY WAS HERE',
    subtitle: 'Brooklyn Bridge Experience',
    link: 'https://brooklynbridgeexperience.com/',
    img: '/images/emily.png',
    digitalImg: '/images/emily-iphone-17-pro-max-orange.jpg',
    livePerformanceImg: '/images/bridge_overview.png',
    filmTvImg: '/videos/bridge_movie.gif',
    tags: ['Audio', 'AR', 'XR', 'Place‑based', 'NYC'],
    overview: `A poetic, GPS‑triggered audio walk across the Brooklyn Bridge. Voiceover, poetry, and ambient sound transform the crossing into an intimate narrative.`,
    role: `XR Experience Designer & Technical Director — route design, GPS trigger pacing, and sound layering using the ChalkNotes stack.`,
    outcomes: [
      'Shipped an on‑demand, location‑locked experience with no live performers or on‑site staff.',
      'Demonstrated emotional impact through sound‑first design, measured through qualitative feedback and replays.',
      'Extended the ChalkNotes architecture for more precise environmental and route control.'
    ],
    why: `Explores low‑friction, site‑specific storytelling that scales to city landmarks without heavy reliance on the device in the user's hand.`,
    snapshots: [
      'GPS triggers for location-based map content.',
      'Audio layering storyboard.',
      'Bridge video with participants in flow.',
      'Original scripts adapted for the Brooklyn Bridge historical landmark.'
    ],
    systemBuild: {
      title: 'Built on ChalkNotes',
      summary: 'A location-aware playback engine that turns a walk into a paced, GPS-triggered performance — no staff, no fixed start time.',
      capabilities: [
        'GPS-triggered route design',
        'Location-aware audio pacing',
        'Built for iOS / AR Kit',
        'On-demand, self-guided delivery'
      ]
    },
    overviewVisual: '/images/bridge_process.png',
    outcomesVisual: '/images/bridge_outcomes.png',
    threadBackground: '/images/bridge_overview.png',
    threadBackgroundViewBox: '0 244 2710 1992',
    featured: true
  },

  maia: {
    title: 'The MAIA Experience',
    subtitle: 'AI Character UX/UI',
    link: 'https://the-maia-experience.framer.ai/',
    img: '/images/maia.png',
    digitalImg: '/images/maia.png',
    livePerformanceImg: '/images/maia.png',
    filmTvImg: '/images/maia.png',
    tags: ['AI', 'Conversational', 'Installation', 'Live', 'Social Play'],
    overview: `An intimate, 10‑minute encounter with MAIA — a real‑time AI character that sees, listens, and converses with visitors inside Prof. Dupin’s study as a pre‑show to a larger story world.`,
    role: `MS in Emerging Tech, AI & Design at NYU. Solo experience and systems lead across narrative interaction, dialogue pacing, interaction rules, and the full AI pipeline (STT/CV/LLM/TTS) integrated with lighting and set cues.`,
    outcomes: [
      'Delivered a 10‑minute, high‑intimacy AI encounter with full production design for dozens of participants.',
      'Established a reusable AI‑character pipeline for future activations (STT → CV → LLM → TTS → show control).',
      'Defined patterns for emotional, theatrical AI interaction that can transfer to other storyworlds and products.'
    ],
    why: `Natural language interaction is emerging as a primary UX surface. MAIA explores how AI characters can carry narrative and emotional weight in physical space, blending computation with performance while keeping latency low and privacy in the room.`,
    snapshots: [
      'Full production design for Prof. Dupin’s office.',
      'Dialogue state diagram with triggers.',
      'System schematic (camera → STT → LLM → TTS → led lighting).',
      'Participant privacy agency to prevent responses to go to the cloud.',
      'Local LLM running on edge device for low latency.'
    ],
    featured: true,
    outcomesVisual: '/images/MAIA_outcomes.png',
    processVisual: '/images/MAIA_process.png',
    overviewVisual: '/images/MAIA_overview.png',
  },

  chalknotes: {
    title: 'ChalkNotes',
    subtitle: 'XR Storytelling Platform',
    link: 'https://chalknotes.com/',
    img: '/images/chalknotes.png',
    digitalImg: '/images/chalknotes.png',
    livePerformanceImg: '/images/chalknotes.png',
    filmTvImg: '/images/chalknotes.png',
    tags: ['XR', 'Audio', 'AR', 'No-Code', 'NYC', 'Social Play'],
    overview: `A mixed‑reality audio‑AR platform that lets creators drop stories onto real‑world maps and audiences discover them in situ. Piloted as a multi‑stop narrative trail in Shubert Alley in NYC.`,
    role: `Lead Product Designer & UX Strategist — owned end‑to‑end design across no‑code authoring and mobile discovery. Led research, prototyping, and usability testing with creators and audiences in uncontrolled real‑world environments.`,
    outcomes: [
      'Launched a self‑guided XR trail in the Broadway Theater District entitled "Wherefore Art Thou Juliet?"',
      'Observed repeat engagement across multi‑stop narratives and dwell time at key locations.',
      'Generated interest from festivals and cultural orgs for future commissions.',
      'Codified best practices for mixed‑reality experience design in open, unpredictable environments.'
    ],
    why: `Proved that non‑technical creators can author place‑based XR stories and audiences will explore them at their own pace.`,
    snapshots: [
      'Low‑fidelity map‑pin authoring prototypes.',
      'Final web interface showing story‑pin configuration.',
      'Mobile map/listen flow.'
    ],
    outcomesVisual: '/images/CHALKNOTES_OUTCOMES.png',
    processVisual: '/images/CHALKNOTES_process.png',
    overviewVisual: '/images/CHALKNOTES_overview.png',
    featured: true
  },

  // --- Additional portfolio projects (site) ---
  juliet_wherefore: {
    title: 'Wherefore Art Thou, Juliet?',
    img: '/images/juliet.png',
    digitalImg: '/images/juliet.png',
    livePerformanceImg: '/images/juliet.png',
    filmTvImg: '/images/juliet.png',
    tags: ['XR', 'Location‑based', 'Audio', 'Theatre District', 'NYC'],
    overview: `A choose‑your‑own‑adventure mixed‑reality journey across NYC’s Theater District, guided by interviews with Broadway performers.`,
    role: `Experience Designer — route/stop design, narrative framing, and mobile listening UX.`,
    outcomes: [
      'Piloted narrative traversal across multiple neighborhood stops.',
      'Prototyped creator‑led location authoring patterns.',
      'Documented accessibility and safety considerations for street‑level play.'
    ],
    why: `Tests scalable patterns for cultural‑district storytelling that can be authored by small teams.`,
    snapshots: [
      'Route map and stop list.',
      'Interview‑driven script fragments.',
      'Street‑level interaction captures.',
      'Authoring UI frames.'
    ],
    featured: false
  },
};

export const allTags = Array.from(new Set(Object.values(projects).flatMap(p => p.tags))).sort();
