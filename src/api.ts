import { promises as fs } from "fs";
import fm from "front-matter";
import YAML from "yaml";
import { CMSProjectMeta, CMSSideProjectMeta } from "@/types";
import DOMPurify from "dompurify";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

export async function getProjects(): Promise<CMSProjectMeta[]> {
  const directory = process.cwd() + "/cms/projects/";
  const files = await fs.readdir(directory);

  return Promise.all(
    files.map(async (f) => {
      const contents = await fs.readFile(directory + f, "utf-8");
      return YAML.parse(contents);
    }),
  );
}

export async function getSideProjects(): Promise<CMSSideProjectMeta[]> {
  const directory = process.cwd() + "/cms/side-projects/";
  const files = await fs.readdir(directory);

  return Promise.all(
    files.map(async (f) => {
      const contents = await fs.readFile(directory + f, "utf-8");
      const { attributes } = fm<CMSSideProjectMeta>(contents);
      return attributes;
    }),
  );
}

export async function getSideProject(id: string): Promise<{
  attributes: CMSSideProjectMeta;
  body: string;
}> {
  const path = `${process.cwd()}/cms/side-projects/${id}.md`;
  const contents = await fs.readFile(path, "utf-8");

  const { attributes, body } = fm<CMSSideProjectMeta>(contents);
  const marked = new Marked(
    markedHighlight({
      emptyLangClass: "hljs",
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    }),
  );

  const htmlBody = await marked.parse(body);

  return { attributes, body: purify.sanitize(htmlBody) };
}
