import { getSideProject, getSideProjects } from "@/api";
import { CMSSideProjectMeta } from "@/types";
import { InferGetStaticPropsType } from "next";

export default function LabPost({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article className="content">
      <div className="hero">
        <h1>{project.attributes.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: project.body }}></div>;
    </article>
  );
}

export async function getStaticPaths() {
  const projects = await getSideProjects();
  const paths = projects.map((project: CMSSideProjectMeta) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const project = await getSideProject(params.slug);

  return {
    props: { project },
  };
}
