"use client";

import React from 'react';

/**
 * A styled terminal window used inside theory chapters to show a concrete
 * command sequence. Styled after GNOME Terminal on Ubuntu: aubergine
 * background, Tango ANSI palette, Ubuntu Mono. Intentionally dark in BOTH
 * themes (see the --color-term-* tokens in globals.css, which are NOT
 * overridden in the [data-theme="saas"] block) — a terminal stays a terminal
 * on light UI.
 *
 * Lang-agnostic: callers resolve bilingual strings (ru ? … : …) and pass the
 * finished text, so this component never touches locale.
 *
 * Line kinds:
 *   { cmd, comment?, prompt? } — a prompt line: `$ cmd   # comment`
 *   { out, tone? }             — an output line; tone maps to the Tango palette
 *                                ('dim' default | 'ok' green | 'bad' red |
 *                                 'dir' blue | 'link' cyan | 'warn' yellow)
 */
type Tone = 'dim' | 'ok' | 'bad' | 'dir' | 'link' | 'warn';

export type TerminalLine =
  | { cmd: string; comment?: string; prompt?: string }
  | { out: string; tone?: Tone };

const TONE_CLASS: Record<Tone, string> = {
  dim: 'text-term-dim',
  ok: 'text-term-prompt',
  bad: 'text-term-red',
  dir: 'text-term-blue',
  link: 'text-term-cyan',
  warn: 'text-term-yellow',
};

export default function Terminal({
  title = 'agent · zsh',
  lines,
  className = '',
}: {
  title?: string;
  lines: TerminalLine[];
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-term-line my-4 font-term text-[14px] leading-relaxed ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-term-head border-b border-term-line">
        <span className="w-3 h-3 rounded-full bg-term-dim" />
        <span className="w-3 h-3 rounded-full bg-term-dim" />
        <span className="w-3 h-3 rounded-full bg-term-dim" />
        <span className="ml-2 text-xs text-term-dim">{title}</span>
      </div>
      <div className="bg-term-bg text-term-text px-4 py-4 overflow-x-auto whitespace-pre">
        {lines.map((line, i) =>
          'cmd' in line ? (
            <div key={i}>
              <span className="text-term-prompt">{line.prompt ?? '$'}</span>
              {' '}
              {line.cmd}
              {line.comment ? (
                <span className="text-term-dim">{'  '}{line.comment}</span>
              ) : null}
            </div>
          ) : (
            <div key={i} className={TONE_CLASS[line.tone ?? 'dim']}>
              {line.out}
            </div>
          )
        )}
      </div>
    </div>
  );
}
