import { HTMLProps } from "react";

export function Subtitle(props: HTMLProps<HTMLParagraphElement>) {
  return <p className="my-8 font-bold text-xl text-center" {...props} />;
}
