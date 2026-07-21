# Design Forks — deliberately open decisions

> **Status: the project is still searching for its optimal design.**
> Everything in this file is an **open fork**, not a settled choice. A "current pick" here
> means *what is wired up today*, not *what was decided forever*. Losing options are kept
> alive on purpose, with paste-ready values, so switching back costs minutes rather than
> archaeology.

Russian mirror: [`DESIGN_FORKS.ru.md`](DESIGN_FORKS.ru.md).

## Rules for agents (Mandatory)

1. **Do not treat a current pick as final.** If a task says "make the terminal look like X", that
   is a fork move, not a bug fix.
2. **Do not delete a losing option.** Move it under "Alternatives" with its full token set and the
   trade-off that made it lose. The point of this file is that reversals stay cheap.
3. **If you change a pick, update this file in the same task** — new current pick, previous pick
   demoted to alternatives, date, and one line on *why*. Same commit.
4. **Keep every preset complete.** A preset must define *every* token the component consumes.
   A partial preset silently breaks utilities (e.g. `text-term-blue` resolving to nothing).
5. Forks are design decisions, not content decisions — the mandatory content gates in
   `AGENTS.md` (bilingual parity, solvability, chapter depth) still apply regardless of fork.

---

## Fork 1 — Terminal design

**Context.** `src/components/Terminal.tsx` is a core design element, currently rendered in
**11 rooms**. Its entire look is driven by the `--color-term-*` tokens plus `--font-term` in
`src/app/[lang]/globals.css` (`@theme`). **Switching design = swapping one token block.** No
component edits, no per-room edits.

**Invariant across all options:** the terminal stays dark in *both* themes — `--color-term-*`
must never be overridden in the `[data-theme="saas"]` block. A terminal should look like a
terminal on light UI too. Any new preset must preserve this.

**Tokens the component consumes:** `bg`, `head`, `line`, `text`, `dim`, `prompt`, `red`, `blue`,
`cyan`, `yellow` (+ `--font-term`). Tone names in the API map as: `ok`→prompt, `bad`→red,
`dir`→blue, `link`→cyan, `warn`→yellow, `dim`→dim.

> **Compare the options visually: [`terminal-picker.html`](terminal-picker.html)** — open it in a
> browser. It switches every preset below, the terminal font (Fork 2b) and its size, and the page
> background between the site's dark and light themes, so the "stays dark in both themes" invariant
> can be checked by eye. It renders the real AC-201 session (Cyrillic included — worth watching when
> judging a font) plus a palette terminal that exercises `dir`/`link`/`warn`, and emits a
> paste-ready token block. Judge a preset on real output, not on hex values.

### Current pick — "Tango on gray" (since 2026-07-21)

Neutral graphite container carrying the Ubuntu character through the **Tango ANSI palette** and
**Ubuntu Mono**. Chosen after the aubergine background (previous pick, below) was judged to clash
with the site's emerald blocks — the open question from 2026-07-17 was resolved by the owner:
the purple *does* compete with the green. Verified in the picker with emerald context blocks:
the gray body separates cleanly from the page background in both themes.

```css
--color-term-bg: #1e1e1e;      /* neutral graphite */
--color-term-head: #282828;
--color-term-line: #3a3a3a;
--color-term-text: #eeeeec;
--color-term-dim: #8f8f8f;
--color-term-prompt: #8ae234;  /* Tango bright green */
--color-term-red: #ef2929;
--color-term-blue: #729fcf;
--color-term-cyan: #34e2e2;
--color-term-yellow: #fce94f;
--font-term: var(--font-ubuntu-mono), ui-monospace, "SF Mono", Menlo, Consolas, monospace;
```

- **For:** does not fight the emerald accent; the terminal reads as a distinct surface on the
  dark page (unlike near-black); Ubuntu identity survives via font + ANSI colors.
- **Against:** less instantly "Ubuntu" than the aubergine; graphite is a common terminal look.

### Alternative A — Ubuntu aubergine (2026-07-17 → 2026-07-21)

The full GNOME-Terminal-on-Ubuntu look from the owner's reference screenshot. Lost because the
high-chroma purple background clashed with the site's emerald blocks (near-complementary hues
fighting side by side). Same Tango accents and font as the current pick — only the container
tokens differ:

```css
--color-term-bg: #300a24;      /* Ubuntu signature aubergine */
--color-term-head: #26071c;
--color-term-line: #4a1839;
--color-term-text: #eeeeec;
--color-term-dim: #a1889b;
--color-term-prompt: #8ae234;
--color-term-red: #ef2929;
--color-term-blue: #729fcf;
--color-term-cyan: #34e2e2;
--color-term-yellow: #fce94f;
--font-term: var(--font-ubuntu-mono), ui-monospace, "SF Mono", Menlo, Consolas, monospace;
```

### Alternative B — Neutral black-gray (original pick, 2026-07-16 → 2026-07-17)

The original look. Deliberately palette-neutral so the terminal never competes with the site.

```css
--color-term-bg: #0d0d0d;
--color-term-head: #191919;
--color-term-line: #2a2a2a;
--color-term-text: #d4d4d4;
--color-term-dim: #6f6f6f;
--color-term-prompt: #34d399;  /* site emerald */
--color-term-red: #f87171;
--color-term-blue: #60a5fa;
--color-term-cyan: #22d3ee;
--color-term-yellow: #fbbf24;
--font-term: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
```

- **For:** blends with the site palette; the emerald prompt echoes the brand accent.
- **Against:** generic — reads as "a code block with a header" rather than a terminal.

### Alternative C — Tango palette on near-black (tried 2026-07-21, rejected)

Keep `#0d0d0d`, adopt Tango colors + Ubuntu Mono (Alternative B's `bg`/`head`/`line`/`dim` with
the current pick's accents). Tried in the picker when the aubergine fell: on the dark theme the
near-black body melts into the page background (`#121211`) — the window is held only by its
border. The `#1e1e1e` graphite of the current pick fixes exactly that.

### Alternative D — Ubuntu + authentic Ambiance chrome (never built)

The current pick keeps the neutral three-dot header. Maximum fidelity to the reference would
replace it with Ambiance chrome: window buttons on the **left**, a `user@host: /` titlebar, and a
tab strip. Costs a component change (not just tokens) and pushes decoration further up.

### Unexplored candidates

Solarized Dark, Dracula, Nord, One Dark, macOS Terminal (Basic), Windows Terminal / PowerShell
blue. Two of the most likely, pre-converted to our token names:

```css
/* Solarized Dark */
--color-term-bg: #002b36;  --color-term-head: #01212b;  --color-term-line: #073642;
--color-term-text: #93a1a1; --color-term-dim: #586e75;  --color-term-prompt: #859900;
--color-term-red: #dc322f;  --color-term-blue: #268bd2;  --color-term-cyan: #2aa198;
--color-term-yellow: #b58900;

/* Dracula */
--color-term-bg: #282a36;  --color-term-head: #21222c;  --color-term-line: #44475a;
--color-term-text: #f8f8f2; --color-term-dim: #6272a4;  --color-term-prompt: #50fa7b;
--color-term-red: #ff5555;  --color-term-blue: #bd93f9;  --color-term-cyan: #8be9fd;
--color-term-yellow: #f1fa8c;
```

---

## Fork 2 — Typefaces

Two independent picks that interact: the **site** typeface and the **terminal** typeface.

### 2a — Site typeface. Current pick: IBM Plex Sans (since 2026-07-16)

Loaded in `src/app/[lang]/layout.tsx` via `next/font/google`, subsets `latin`+`cyrillic`, weights
400–700, exposed as `--font-plex-sans` and mapped in `globals.css` onto `--font-ui` and
`--font-reading` (theory reading is sans by design).

| Option | State | Note |
|---|---|---|
| **IBM Plex Sans** | current | Neutral, technical, excellent Cyrillic. Reading + UI share one family. |
| Inter | alternative | More neutral still; weaker character. |
| Ubuntu Sans | alternative | Would pair the site with the terminal — coherent, but commits the whole platform to the Ubuntu look, not just the terminal. |
| Split UI/reading | unexplored | `--font-ui` and `--font-reading` are separate tokens on purpose — a serif reading face is still possible without touching UI chrome. |

### 2b — Terminal typeface. Current pick: Ubuntu Mono (since 2026-07-17)

Loaded via `next/font/google`, subsets `latin`+`cyrillic` (**required** — terminal comments are
authored in RU too), exposed as `--font-ubuntu-mono` → `--font-term` → `font-term` utility.

| Option | State | Note |
|---|---|---|
| **Ubuntu Mono** | current | Authentic to the Ubuntu look; narrow glyphs. |
| IBM Plex Mono | alternative | **Would unify typography** — same family as the site typeface. The strongest contender if the Ubuntu look is dropped. |
| JetBrains Mono | alternative | Wider, very legible, good Cyrillic; more "IDE" than "terminal". |
| Fira Code / Cascadia Code | unexplored | Ligatures — likely noise for short teaching snippets. |
| system `ui-monospace` | alternative | Zero network cost; look varies per OS, which hurts a design element meant to be consistent. |

**Open tension worth resolving:** the site is IBM Plex Sans while the terminal is Ubuntu Mono —
two unrelated families. Either that reads as intentional contrast (terminal = a distinct
artifact) or as incoherence. Not yet judged.

**Gotcha — size is coupled to the font.** Ubuntu Mono's glyphs are narrower, so the terminal was
bumped `13px → 14px` for optical parity. **Any terminal-font switch must re-check the size**, or
text will look mis-scaled.

---

## Related forks tracked elsewhere

- **Accent green** — `docs/green-accent-picker.html` (interactive picker with site preview; Sage
  was prioritized). Still open.
- **Theme** — `terminal` (dark, default) vs `saas` (light), in the `[data-theme="saas"]` block of
  `globals.css`. Both ship; not a fork to resolve, but changes here interact with Fork 1's
  dark-in-both-themes invariant.

## Practical note

Because Fork 1 is pure tokens, trying a design is: swap the block in `globals.css` → `rm -rf .next`
→ restart dev. **The cache step is not optional** — Turbopack caches CSS variables, and edits to
`@theme` silently do not apply until the cache is cleared.
