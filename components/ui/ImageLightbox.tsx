"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  /** Visual rounding for the thumbnail. lg ~ phone screens; md ~ wide art. */
  rounded?: "sm" | "md" | "lg";
}

export default function ImageLightbox({
  src,
  alt,
  width = 800,
  height = 500,
  className = "",
  rounded = "md",
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  // Fit mode contains the image in the viewport; zoom mode renders it at
  // natural pixel size with scroll-to-pan for reading dense screenshots.
  const [zoomed, setZoomed] = useState(false);
  const zoomPaneRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setZoomed(false);
  }, []);

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

  // Start a zoom roughly centered rather than pinned to the top-left corner.
  useEffect(() => {
    if (!zoomed) return;
    const pane = zoomPaneRef.current;
    if (!pane) return;
    pane.scrollLeft = (pane.scrollWidth - pane.clientWidth) / 2;
    pane.scrollTop = (pane.scrollHeight - pane.clientHeight) / 3;
  }, [zoomed]);

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
          className={`block w-full h-auto border border-rule bg-bg ${
            rounded === "lg"
              ? "rounded-[18px]"
              : rounded === "sm"
              ? "rounded-[6px]"
              : "rounded-[12px]"
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/90"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-accent font-mono uppercase tracking-[0.14em] text-[11px] z-20"
            aria-label="Close lightbox"
          >
            Close ×
          </button>
          <p
            aria-hidden="true"
            className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 font-mono uppercase tracking-[0.14em] text-[10px] z-20 pointer-events-none whitespace-nowrap"
          >
            {zoomed ? "Scroll to pan · Click to fit" : "Click image to zoom"}
          </p>

          {zoomed ? (
            <div
              ref={zoomPaneRef}
              className="absolute inset-0 overflow-auto cursor-zoom-out"
              onClick={(e) => {
                e.stopPropagation();
                setZoomed(false);
              }}
            >
              <div className="min-w-max min-h-full flex items-start justify-center p-6 md:p-10">
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  sizes="100vw"
                  className="block max-w-none h-auto"
                  style={{ width: `${width}px` }}
                  priority
                />
              </div>
            </div>
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
              onClick={close}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="92vw"
                className="object-contain max-h-[90vh] max-w-[92vw] w-auto h-auto cursor-zoom-in"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomed(true);
                }}
                priority
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
