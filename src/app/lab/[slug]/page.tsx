import { getSideProject, getSideProjects } from "@/api";
import { Hero } from "@/components/hero";
import { Title } from "@/components/title";

interface Params {
  slug: string;
}

export default async function LabPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  const project = await getSideProject(slug);

  return (
    <article className="content">
      <Hero>
        <Title>{project.attributes.title}</Title>
      </Hero>
      <div dangerouslySetInnerHTML={{ __html: project.body }}></div>;
    </article>
  );
}

export async function generateStaticParams() {
  const projects = await getSideProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
