"use client";

import { useRef } from "react";
import Image, { ImageProps } from "next/image";

export interface ModalImageProps {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
  caption?: string;
}

export function ModalImage({ src, alt, caption }: ModalImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleOpen(): void {
    dialogRef.current?.showModal();
  }
  function handleClose(): void {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        className="relative h-[24ch] aspect-[4/3] hover:cursor-pointer hover:ring-2 rounded-none"
        onClick={handleOpen}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </button>

      <dialog
        className="fixed z-20 aspect-square lg:aspect-[4/3] w-full lg:w-fit lg:h-3/4 m-auto backdrop:bg-black/20 backdrop:backdrop-blur-sm "
        ref={dialogRef}
        onClick={handleClose}
      >
        <figure className="size-full flex flex-col">
          <div className="flex flex-grow flex-col p-[2ch] lg:p-[4ch] bg-[url('/images/stripe.png')]">
            <div className="relative size-full">
              <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: "scale-down" }}
                quality={100}
              />
            </div>
          </div>
          <figcaption className="border-t-4 bg-white p-[1ch]">
            {caption ?? alt}
          </figcaption>
        </figure>
      </dialog>
    </>
  );
}
