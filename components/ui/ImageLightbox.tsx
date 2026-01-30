"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageLightbox({
  src,
  alt,
  width = 800,
  height = 500,
  className = "",
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`block cursor-zoom-in ${className}`}
        aria-label={`View larger: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-sm pixel-border w-full h-auto"
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white hover:text-accent-cyan font-[family-name:var(--font-pixel)] text-xs z-10"
            aria-label="Close lightbox"
          >
            [X] CLOSE
          </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="object-contain max-h-[90vh] w-auto"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
