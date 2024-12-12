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

      <ul className="my-[2ch] flex flex-col gap-[4ch]">
        <li>
          <ProjectCard
            slug="bit-page"
            title="Bit's Page"
            description="A little webpage about my cat, Bit. It's a place to keep some good pictures of her, and a useful sandbox for designing this site."
            titleLink="/bit"
          />
        </li>
        {projects.map((item) => (
          <li key={item.slug}>
            <ProjectCard {...item} titleLink={`lab/${item.slug}`} />
          </li>
        ))}
      </ul>
    </article>
  );
}
