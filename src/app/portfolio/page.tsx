import { ProjectCard } from "@/components/project-card";
import { promises as fs } from "fs";
import YAML from "yaml";
import { ProjectCardProps } from "@/types";

async function getProjects(): Promise<ProjectCardProps[]> {
  const directory = process.cwd() + "/cms/projects/";
  const files = await fs.readdir(directory);

  return Promise.all(
    files.map(async (f) => {
      const contents = await fs.readFile(directory + f, "utf-8");
      return YAML.parse(contents) as ProjectCardProps;
    }),
  );
}

export default async function WorkPage() {
  const projects = await getProjects();
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
