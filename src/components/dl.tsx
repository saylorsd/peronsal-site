import { HTMLProps } from "react";

export function DL(props: HTMLProps<HTMLDListElement>) {
  return <dl {...props} />;
}

export function DD(props: HTMLProps<HTMLElement>) {
  return <dd className="ml-[2ch]" {...props} />;
}

export function DT(props: HTMLProps<HTMLElement>) {
  return <dt className="font-bold" {...props} />;
}
