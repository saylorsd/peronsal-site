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
  press,
  titleLink,
}: ProjectCardProps) {
  const md = markdownit();

  const descriptionHTML = md.render(description);

  return (
    <article className="border-l-4 w-full overflow-x-hidden lg:-ml-4 pl-0.5 ">
      <div className="border-l-2 pl-2 lg:pl-4 py-[0ch]">
        <h2 className="text-2xl mb-4 font-bold" id={slug}>
          {titleLink ? <Link href={titleLink}>{title}</Link> : title}
        </h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: descriptionHTML }}
        ></div>
        <div className="flex flex-col space-y-[2ch]">
          {!!link && (
            <DL>
              <DT>Location</DT>
              <DD>
                <Link href={link.url} target="_blank">
                  {link.label ?? link.url}
                </Link>
              </DD>
            </DL>
          )}

          {!!repo && (
            <DL>
              <DT>Code</DT>
              <DD>
                <Link href={repo} target="_blank">
                  {repo}
                </Link>
              </DD>
            </DL>
          )}

          {!!stack && (
            <DL>
              <DT>Stack</DT>
              <DD>
                <ul className="grid grid-cols-2 md:flex md:gap-x-[2ch]">
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
            </DL>
          )}

          {!!press && !!press.length && (
            <DL>
              <DT>In the Press</DT>
              <DD>
                <ul className="grid grid-cols-2 md:flex md:gap-x-[2ch]">
                  {press.map((item) => (
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
            </DL>
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
        </div>

        {!!titleLink && (
          <div className="mt-[2ch]">
            <Link href={titleLink}>Read more</Link>
          </div>
        )}
      </div>
    </article>
  );
}
