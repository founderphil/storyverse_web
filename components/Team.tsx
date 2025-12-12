import Image from "next/image";

const teamMembers = [
  {
    name: "Alba",
    title: "Creative Director",
    image: "/images/alba.jpg",
    bio: "Alba is a visionary creative director with a passion for storytelling and immersive experiences. She brings a wealth of knowledge in theater and design to the team.",
  },
  {
    name: "Phil",
    title: "Experience Architect",
    image: "/images/phil.jpg",
    bio: "Phil is an innovative experience architect who specializes in blending technology with storytelling. His expertise in interactive design and immersive environments helps bring the team's visions to life.",
  },
];

export default function Team() {
  return (
    <section className="team-section">
      <div className="team-inner">
        <header className="team-header">
          <p className="team-kicker">The Storyverse team</p>
          <h2>Humans behind the worlds</h2>
          <p className="team-intro">
            Alba and Phil are passionate about crafting immersive experiences that
            blur the lines between story and reality. With backgrounds in theater,
            technology, and design, they bring a unique blend of skills to each
            project.
          </p>
        </header>

        <div className="team-thread-row">
          <div className="thread-line-wrapper team-thread-line-wrapper">
            <svg
              className="thread-svg"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
            >
              <defs>
                <filter
                  id="teamThreadShadow"
                  x="-20%"
                  y="-50%"
                  width="140%"
                  height="200%"
                >
                  <feDropShadow
                    dx={0}
                    dy={4}
                    stdDeviation={3}
                    floodColor="#000000"
                    floodOpacity={0.35}
                  />
                </filter>
              </defs>
              <path
                className="thread-path"
                d="M 0 52 Q 20 40 40 55 T 80 48 T 120 60 T 160 45 T 200 50"
                strokeDasharray="1000"
                strokeDashoffset="0"
                filter="url(#teamThreadShadow)"
              />
            </svg>
          </div>

          <div className="team-members">
            {teamMembers.map((member) => (
              <article className="team-member" key={member.name}>
                <div className="team-member-image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 60vw, 320px"
                  />
                </div>
                <div className="team-member-text">
                  <h3>{member.name}</h3>
                  <p className="team-member-title">{member.title}</p>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
