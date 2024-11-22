import { getSideProjects } from "@/api";
import { ProjectCard } from "@/components/project-card";
import { Hero } from "@/components/hero";
import { Title } from "@/components/title";
import { Subtitle } from "@/components/subtitle";

export default async function LabPage() {
  const projects = await getSideProjects();

  return (
    <article>
      <Hero>
        <Title>Side Projects</Title>
      </Hero>

      <Subtitle>Stuff I&apos;ve made for fun</Subtitle>

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
