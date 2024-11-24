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
    <NextLink
      href={href}
      className="hover:bg-[url('/images/stripe-small2.png')] hover:animate-bg-slide hover:text-black hover:ring-1 ring-cyan-50"
      target={target}
    >
      <span className="underline hover:decoration-2 text-ellipsis">
        {children}
      </span>
    </NextLink>
  );
}
