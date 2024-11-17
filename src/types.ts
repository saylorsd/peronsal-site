export interface CMSLinkProps {
  label?: string;
  url: string;
}

export interface CMSImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export interface CMSMetaBase {
  slug: string;
  title: string;
  description: string;
  order?: number;
  screenshots?: CMSImageProps[];

  link?: CMSLinkProps;
}

export interface CMSProjectMeta extends CMSMetaBase {
  stack: CMSLinkProps[];
  repo: string;
}

export interface CMSSideProjectMeta extends CMSMetaBase {
  repo?: string;
  extraLinks?: CMSLinkProps[];
}

export type ProjectCardProps = CMSMetaBase &
  Partial<CMSProjectMeta & CMSSideProjectMeta> & {
    titleLink?: string;
  };
