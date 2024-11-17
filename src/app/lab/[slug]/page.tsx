import { getSideProject } from "@/api";

interface Params {
  slug: string;
}

export default async function FountainPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const slug = (await params).slug;
  const project = await getSideProject(slug);

  return (
    <article className="content">
      <div className="hero">
        <h1>{project.attributes.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: project.body }}></div>;
    </article>
  );
}
