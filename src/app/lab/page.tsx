import { getSideProjects } from "@/api";
import { ProjectCard } from "@/components/project-card";

export default async function LabPage() {
  const projects = await getSideProjects();

  return (
    <article>
      <div className="hero">
        <h1>Side Projects</h1>
      </div>

      <p>Stuff I&apos;ve made for fun.</p>

      <ul className="article-list">
        {projects.map((item) => (
          <li key={item.slug}>
            <ProjectCard {...item} titleLink={`lab/${item.slug}`} />
          </li>
        ))}
      </ul>
    </article>
  );
}
