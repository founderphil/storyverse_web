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
    steps: { label: string; detail: string }[];
  };
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
      'AETHER: Awakening Annabellee is original IP — a 1988 world with its own story, characters, score, and film, built at full scale in a SoHo venue so audiences could walk through it instead of watch it.',
      'Storyverse developed the property from the world up. Belle sits at the center of Saint Mary’s Infirmary, and twelve characters hold twelve realms around her: a Locksmith keeping the thresholds, an Apothecary in the herb room, a warrior alchemist, a dream seer, three Whisperers of past, present, and future, the physicians who classified Belle and could not see her, and the Tree of Life past all of them. Handcrafted environments, live dance, original music, and an original film gave that world a physical footprint, and guests moved through it room by room to meet the characters living there.',
      'A world people walk into has to know they are in it. So Storyverse designed and built the technology in-house. Every guest carried an NFC visitor pass; every character carried a networked light orb. A tap was the entire interface — no app, no phone, no staff handoff — and each tap wrote that encounter to the guest’s own record: which character, which realm, what minute. Nothing about the interaction broke the fiction, because the fiction was the interface.',
      'That record is what made the ending personal. Guests who reached the characters left with Belle awakened; guests she never felt left her in the Aether. Tapping a pass at the exit terminals played their own night back to them by name, and tapping the same pass to a phone afterward opened a personalized film, a generated map of their path through the infirmary, and a way to stay in the world. The passes came back to the front desk, were audited and reset, and went out again the next night.'
    ],
    buyerBrief: 'Bring an original 1988 storyworld to life as a walkthrough production, and build the technology that lets the world recognize each guest inside it — with no app, no phone, and no staff handoff.',
    buyerOutcome: 'An original property staged as a walkthrough world, with a custom NFC and networked-orb system that gave every guest a personal record of their night, an ending chosen by where they had been, and a post-show experience that kept them connected to the world.',
    delivery: 'Original IP and storyworld development · Walkthrough experience design · NFC visitor passes · Networked character light orbs · Guest journey database · Raspberry Pi projection and exit terminals · Personalized post-show web experience · Campaign assets and film continuity',
    title: 'AETHER',
    subtitle: 'Awakening Annabellee · Original IP · Live Immersive Retrofuturist 1988 Dance Dream',
    link: 'https://aether-show.com/',
    ctaLabel: 'Corporate Events Now Booking',
    img: '/images/aether_poster.jpeg',
    digitalImg: '/images/aether_digital.jpg',
    livePerformanceImg: '/images/aether_performance.jpg',
    filmTvImg: '/videos/aether_movie.gif',
    tags: ['Original IP', 'Transmedia', 'Live Performance', 'Custom Hardware', 'Digital', 'Storyworld'],
    overview: `AETHER: Awakening Annabellee is an original 1988 storyworld staged as a walkthrough production, where Belle lies at the center of Saint Mary's Infirmary and twelve characters hold twelve realms around her. Guests carry an NFC visitor pass and meet characters holding networked light orbs; every tap records who they found and where, and the world answers with an ending built from their own path. Original film, live dance, handcrafted environments, and custom technology make one property audiences can enter before the show and carry with them after it.`,
    role: `Storyworld designer, experience strategist, and creative technologist. Storyverse shaped the property and the audience journey, then built the systems that ran it: the NFC visitor passes, the character-carried light orbs that read them, the guest journey database behind the show, the Raspberry Pi exit terminals and projection installations through the building, the interactive phone booth, and the personalized post-show web experience.`,
    outcomes: [
      'Originated and staged a full property — story, characters, score, film, and environments — as a walkthrough world rather than a seated show.',
      'Designed and built an NFC-and-orb interaction system that let audiences drive their own path by tapping characters, with no app to download and no staff handoff.',
      'Turned every tap into a per-guest record, making two distinct endings and individually personalized exits possible at show scale.',
      'Shipped the in-venue technology stack: exit terminals with synchronized act switching, projection installations, and an interactive phone booth, all running unattended through live performances.',
      'Extended the night past the curtain with a personalized post-show page, a generated map of each guest’s journey, and a return offer that converted attendance into re-engagement.',
      'Built a nightly pass-return and reset workflow so physical passes could be audited and recirculated across the run.'
    ],
    why: `Shows Storyverse originating a property and then engineering it — narrative, custom hardware, show control, and guest data as one continuous system — so a walkthrough world can recognize each person inside it and answer them personally, night after night.`,
    snapshots: [
      'NFC visitor pass, designed as an artifact of 1988 rather than a ticket.',
      'Character-carried light orbs that read passes in each realm.',
      'Guest journey records driving the awakened and Aether endings.',
      'Exit terminals playing a guest’s own characters back to them.',
      'Personalized post-show page with generated journey map.',
      'Show poster, campaign imagery, and original film assets.'
    ],
    systemBuild: {
      title: 'A world that knew who was standing in it',
      summary: 'The interaction had to stay inside the fiction. No app, no phone, no staff handoff — a prop out of 1988, objects the characters carried, and a record of the night assembling itself while guests believed they were only exploring.',
      steps: [
        { label: 'The visitor pass', detail: 'Each guest received an NFC pass carrying its own identity, designed to read as an artifact of the world rather than a ticket. Tapping it was the only gesture anyone had to learn.' },
        { label: 'Orbs the characters carried', detail: 'Networked light orbs in the characters’ hands read the passes and reported each encounter — which character, which guest, what time — so any room in the building could become an interaction point without a screen in it.' },
        { label: 'A record per guest', detail: 'Every tap wrote to that guest’s own journey: Valdemar at the threshold, Eliza in the herb room, the Whisperers in the lounge. The world accumulated their night instead of resetting between rooms.' },
        { label: 'Two endings, earned', detail: 'Reaching the characters woke Belle. Reaching none of them left her in the Aether, and the guest was told she never felt them pass through. The ending came from their record, not from a fixed cue sheet.' },
        { label: 'The exit terminals', detail: 'Raspberry Pi stations idled on Belle’s heart monitor behind rear projection until a guest tapped, then named their own characters and realms back to them in under five seconds — fast enough to live inside the flow of people leaving. One command switched all three between acts on the same timestamp.' },
        { label: 'The night, kept', detail: 'Tapping the same pass to a phone opened a personalized film, a generated map of their path through the infirmary, and a standing invitation back. Passes returned to the front desk, were audited and reset, and went out again the next night.' }
      ]
    },
    featured: true,
    threadBackground: '/images/aether_poster.jpeg'
  },

  fairyland: {
    caseStudyCopy: [
      'FAIRYLAND is a living storyworld built to continue beyond a single performance. Live events, web experiences, film, and AI-driven character encounters all become part of the same audience journey.',
      'Storyverse shaped the experience around continuity: the first invitation, the path into the live event, and the digital encounters that keep the world active afterward.',
      'The result is a flexible platform for participation—one that gives audiences multiple points of entry while keeping the voice, rules, and feeling of the world intact.'
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
    overview: `A living storyworld that connects audiences across live performance, web, film, and AI‑driven character encounters so engagement continues before, during, and after the show.`,
    role: `Head of Product UX, Designer, Creative Technologist & Full Stack Engineer — owned experience strategy across mediums, ticketing/onboarding UX, and cohesion between live and digital touchpoints.`,
    outcomes: [
      'Unified offline/online story loops across channels into a single cohesive journey.',
      'Designed frameworks for pre‑ and post‑show engagement that increased repeat touchpoints with fans.',
      'Codified brand and story cohesion across media so teams could ship faster without fragmenting the world.',
      'Drove strong ticketing and onboarding conversion through streamlined flows and clear narrative framing.'
    ],
    why: `Demonstrates systems‑level product design for hybrid media where narrative continuity drives retention.`,
    snapshots: [
      'Experience map linking live to digital follow‑ups.',
      'Ticketing & onboarding flows.',
      'AI chat UI tied to lore.',
      'System map of narrative loops.'
    ],
    featured: true,
    outcomesVisual: '/images/FAIRYLAND_outcomes.png',
    processVisual: '/images/FAIRYLAND_process.png',
    overviewVisual: '/images/FAIRYLAND_overview.png',
    threadBackground: '/images/doors-poster.png'
  },

  emily_was_here: {
    caseStudyCopy: [
      'EMILY WAS HERE turns a walk across the Brooklyn Bridge into a private encounter with history, memory, and place.',
      'Storyverse created a GPS-triggered experience in which voice, poetry, ambient sound, and the physical rhythm of the crossing unfold together. The phone delivers the story, then gets out of the way.',
      'Because the experience is location-aware and self-guided, the bridge becomes both the setting and the stage—available whenever an audience member is ready to begin.'
    ],
    buyerBrief: 'Turn a public landmark into an intimate narrative audiences can experience on their own schedule.',
    buyerOutcome: 'An on-demand, GPS-triggered audio experience that brings a performed story to the bridge without requiring a staffed live show for every visitor.',
    delivery: 'Original narrative · Route and GPS pacing · Audio design · Mixed-reality engineering',
    title: 'EMILY WAS HERE',
    subtitle: 'Brooklyn Bridge Experience',
    link: 'https://brooklynbridgeexperience.com/',
    img: '/images/emily.png',
    digitalImg: '/images/emily-iphone-17-pro-max-orange.jpg',
    livePerformanceImg: '/images/emily.png',
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
