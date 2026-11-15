import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkGrid({ origin }: { origin: "storyverse" | "founder" }) {
  return (
    <div className="work-project-grid">
      {Object.entries(projects).filter(([, project]) => project.origin === origin).map(([slug, project]) => (
        <ProjectCard key={slug} slug={slug} project={project} />
      ))}
    </div>
  );
}
