import { ModalImage } from "@/components/modal-image";
import markdownit from "markdown-it";

export interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  link?: string;
  linkLabel?: string;
  repo?: string;
  stack: {
    label: string;
    url: string;
  }[];
  screenshots: {
    alt: string;
    src: string;
  }[];
}

export function ProjectCard({
  id,
  name,
  description,
  link,
  linkLabel,
  repo,
  stack,
  screenshots,
}: ProjectCardProps) {
  const md = markdownit();

  const descriptionHTML = md.render(description);

  return (
    <article className="card">
      <h3 id={id}>{name}</h3>
      <div dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>
      <dl>
        {!!link && (
          <>
            <dt>Location</dt>
            <dd>
              <a href={link} target="_blank">
                {linkLabel ?? link}
              </a>
            </dd>
          </>
        )}

        {!!repo && (
          <>
            <dt>Code</dt>
            <dd>
              <a href={repo} target={"_blank"} rel="noopener noreferrer">
                {repo}
              </a>
            </dd>
          </>
        )}

        <dt>Stack</dt>
        <dd>
          <ul className="inline-list">
            {stack.map((item) => (
              <li key={`${item.label}-${item.url}`}>
                <a
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </dd>

        {!!screenshots && !!screenshots.length && (
          <>
            <dt>Screenshots</dt>
            <dd>
              {screenshots.map(({ alt, src }) => (
                <ModalImage key={src} alt={alt} src={src} />
              ))}
            </dd>
          </>
        )}
      </dl>
    </article>
  );
}
