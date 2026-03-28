import React from 'react';

interface MiniReferenceWindowProps {
  title: string;
  label: string;
  accent?: string;
  content: string;
  linkText?: string;
  linkHref?: string;
}

export default function MiniReferenceWindow({
  title,
  label,
  accent = '#84cc16',
  content,
  linkText,
  linkHref,
}: MiniReferenceWindowProps) {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden border border-border-subtle bg-card-dark shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#d4d4d8] text-[#111827]">
        <span className="text-sm font-medium tracking-wide">{title}</span>
        <span className="text-lg leading-none opacity-70">x</span>
      </div>

      <div className="p-5">
        <div className="inline-flex items-center px-2 py-1 rounded-md bg-black/25 border border-white/10 text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-3">
          {label}
        </div>
        <div className="h-1.5 w-16 rounded-full mb-4" style={{ backgroundColor: accent }} />

        <p className="text-sm text-neutral-300 leading-relaxed">{content}</p>

        {linkText && linkHref ? (
          <a
            href={linkHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block mt-4 text-sm text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
          >
            {linkText}
          </a>
        ) : null}
      </div>
    </div>
  );
}
