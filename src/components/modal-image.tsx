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
        className="fixed container max-w-6xl z-20 m-auto backdrop:bg-black/20 backdrop:backdrop-blur-sm"
        ref={dialogRef}
        onClick={handleClose}
      >
        <figure className="border-4">
          <Image src={stripe} className="object-cover -z-20" fill alt="" />

          <div className="relative max-w-1/2 aspect-square mx-auto">
            <Image
              src={src}
              alt={alt}
              className="object-contain"
              fill
              quality={100}
            />
          </div>
          <figcaption className="border-t-4 bg-white p-[1ch]">
            {caption ?? alt}
          </figcaption>
        </figure>
      </dialog>
    </>
  );
}
