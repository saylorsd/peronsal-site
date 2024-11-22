import { ModalImage } from "@/components/modal-image";
import markdownit from "markdown-it";
import { ProjectCardProps } from "@/types";
import { Link } from "./link";
import { DD, DL, DT } from "@/components/dl";

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
    <article className="border-l-4 lg:-ml-4 pl-0.5 ">
      <div className="border-l-2 pl-2 lg:pl-4 py-[0ch]">
        <h2 className="text-2xl mb-4 font-bold" id={slug}>
          {titleLink ? <Link href={titleLink}>{title}</Link> : title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>
        <DL>
          {!!link && (
            <>
              <DT>Location</DT>
              <DD>
                <Link href={link.url} target="_blank">
                  {link.label ?? link.url}
                </Link>
              </DD>
            </>
          )}

          {!!repo && (
            <>
              <DT>Code</DT>
              <DD>
                <Link href={repo} target="_blank">
                  {repo}
                </Link>
              </DD>
            </>
          )}

          {!!stack && (
            <>
              <DT>Stack</DT>
              <DD>
                <ul className="flex gap-[2ch]">
                  {stack.map((item) => (
                    <li key={`${item.label}-${item.url}`}>
                      <Link
                        href={item.url}
                        target={
                          item.url.startsWith("http") ? "_blank" : undefined
                        }
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DD>
            </>
          )}

          {!!screenshots && !!screenshots.length && (
            <>
              <DT>Screenshots</DT>
              <DD>
                {screenshots.map(({ alt, src }) => (
                  <ModalImage key={src} alt={alt} src={src} />
                ))}
              </DD>
            </>
          )}
        </DL>

        {!!titleLink && (
          <div className="mt-[2ch]">
            <Link href={titleLink}>Read more</Link>
          </div>
        )}
      </div>
    </article>
  );
}
