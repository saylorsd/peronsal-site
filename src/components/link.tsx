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
      className="hover:bg-[url('/images/stripe-small.png')] hover:animate-bg-slide hover:font-bold hover:ring-1 ring-cyan-100"
      target={target}
    >
      <span className="underline hover:decoration-2 hover:decoration-off text-ellipsis">
        {children}
      </span>
    </NextLink>
  );
}
