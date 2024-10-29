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
      <button className="image-button" onClick={handleOpen}>
        <Image src={src} alt={alt} fill />
      </button>
      <dialog className="image-dialog" ref={dialogRef} onClick={handleClose}>
        <figure>
          <div>
            <div className="image-container">
              <Image src={src} alt={alt} fill quality={100} />
            </div>
          </div>
          <figcaption>{caption ?? alt}</figcaption>
        </figure>
      </dialog>
    </>
  );
}
