import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen">
      <h1 className="starwars starwars-yellow text-7xl md:text-9xl">
        projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div style={{ fontFamily: "StarJediHollow", fontSize: "120px" }}>
        OOoo00
      </div>
    </section>
  );
}