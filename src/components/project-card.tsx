import { ModalImage } from "@/components/modal-image";
import markdownit from "markdown-it";
import { ProjectCardProps } from "@/types";
import Link from "next/link";

export function ProjectCard({
  slug,
  title,
  description,
  repo,
  stack,
  screenshots,
  link,
  titleLink,
}: ProjectCardProps) {
  const md = markdownit();

  const descriptionHTML = md.render(description);

  return (
    <article className="card">
      <h2 id={slug}>
        {titleLink ? <Link href={titleLink}>{title}</Link> : title}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>
      <dl>
        {!!link && (
          <>
            <dt>Location</dt>
            <dd>
              <a href={link.url} target="_blank">
                {link.label ?? link.url}
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

        {!!stack && (
          <>
            <dt>Stack</dt>
            <dd>
              <ul className="inline-list">
                {stack.map((item) => (
                  <li key={`${item.label}-${item.url}`}>
                    <a
                      href={item.url}
                      target={
                        item.url.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </>
        )}

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

      {!!titleLink && <a href={titleLink}>Read more</a>}
    </article>
  );
}
