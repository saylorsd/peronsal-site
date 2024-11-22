import NextLink from "next/link";

export interface LinkProps {
  children?: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
  target?: string;
}

export function Link({ children, target, href }: LinkProps) {
  return (
    <NextLink href={href} className="hover:bg-cyan-200" target={target}>
      <span className="underline hover:decoration-2 hover:decoration-off ">
        {children}
      </span>
    </NextLink>
  );
}
