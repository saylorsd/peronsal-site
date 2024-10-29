import { ProjectCard, ProjectCardProps } from "@/components/project-card";
import { promises as fs } from "fs";
import YAML from "yaml";

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
    <>
      <h2>Selected Projects</h2>
      <p>Samples of my some of my recent work</p>
      <ul className="article-list">
        {projects.map((item) => (
          <li key={item.id}>
            <ProjectCard {...item} />
          </li>
        ))}
      </ul>
    </>
  );
}
