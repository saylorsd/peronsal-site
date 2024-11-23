import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/api";
import { Hero } from "@/components/hero";
import { Title } from "@/components/title";

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <article>
      <Hero>
        <Title>Portfolio</Title>
      </Hero>

      <div className="content mb-[4ch]">
        <p>
          I mostly make my living building things with folks in my community to
          help us leverage open data.
        </p>
        <p>
          I also make things with researchers, sharing my skills in data
          communication and application development.
        </p>
        <p>Below is a sample of some of my professional work.</p>
      </div>

      <ul className="my-[2ch] flex flex-col gap-[4ch]">
        {projects.map((item) => (
          <li key={item.slug} className="">
            <ProjectCard {...item} />
          </li>
        ))}
      </ul>
    </article>
  );
}
