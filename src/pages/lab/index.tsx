import { getSideProjects } from "@/api";
import { ProjectCard } from "@/components/project-card";
import { InferGetStaticPropsType } from "next";

export default function LabPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export async function getStaticProps() {
  const projects = await getSideProjects();

  return {
    props: { projects },
  };
}
