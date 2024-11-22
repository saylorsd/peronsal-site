import { HTMLProps } from "react";

export type TitleProps = HTMLProps<HTMLHeadingElement>;

export function Title(props: TitleProps) {
  return <h1 className="font-bold text-4xl uppercase" {...props} />;
}
