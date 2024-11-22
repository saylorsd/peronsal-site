import { ProjectCard } from "@/components/project-card";
import { ProjectCardProps } from "@/types";
import { getProjects } from "@/api";

export async function getStaticProps() {
  const projects = await getProjects();
  return { props: { projects } };
}

export default function WorkPage({
  projects,
}: {
  projects: ProjectCardProps[];
}) {
  return (
    <article>
      <div className="hero">
        <h1>Portfolio</h1>
      </div>
      <p>
        I primarily make my living building things with folks in my community to
        help us leverage open data for our needs.
      </p>
      <p>
        I also make things with researchers, providing my skills in data
        communication and application development.
      </p>

      <p>Below is a sample of some of my professional work.</p>

      <ul className="article-list">
        {projects.map((item) => (
          <li key={item.slug}>
            <ProjectCard {...item} />
          </li>
        ))}
      </ul>
    </article>
  );
}
