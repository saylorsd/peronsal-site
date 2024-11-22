"use client";

import { useRef } from "react";
import Image, { ImageProps } from "next/image";
import stripe from "@/assets/img.png";

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
        className="fixed size-3/4 z-20 m-auto backdrop:bg-black/20 backdrop:backdrop-blur-sm"
        ref={dialogRef}
        onClick={handleClose}
      >
        <figure className="h-full w-full flex flex-col">
          <div className="relative flex flex-col flex-grow  p-[2ch] lg:p-[4ch]">
            <Image src={stripe} className="object-center -z-20" fill alt="" />
            <div className="relative flex-grow h-full ">
              <Image
                src={src}
                alt={alt}
                className="object-contain"
                fill
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
