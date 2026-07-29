"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface ScreenshotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: React.ReactNode;
  /** Tailwind border-color class marking this as an exhibit. Defaults to the accent border. */
  border?: string;
}

/**
 * A product-screenshot exhibit (see docs/AGENTS.md → "Product screenshots").
 * Renders the bordered, framed thumbnail and — on click — a full-screen lightbox
 * so learners can open the screenshot and read the details up close (essential on mobile).
 * Close with the ✕ button, a click on the backdrop, or Escape.
 */
export default function Screenshot({
  src,
  alt,
  width,
  height,
  caption,
  border = 'border-accent-400/60',
}: ScreenshotProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <figure className="my-6">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} — open larger`}
        className={`group relative block w-full rounded-xl border-2 ${border} overflow-hidden cursor-zoom-in`}
      >
        <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
        <span className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-md bg-black/55 text-white opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity">
          <ZoomIn size={16} />
        </span>
      </button>

      {caption && (
        <figcaption className="text-xs text-neutral-500 mt-2">{caption}</figcaption>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          {/* Full-resolution image; a click on the image itself does not close (so mobile pinch-zoom works). */}
          {/* eslint-disable-next-line @next/next/no-img-element -- deliberate raw img for the natural-size lightbox view */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain rounded-lg cursor-default"
          />
        </div>
      )}
    </figure>
  );
}
