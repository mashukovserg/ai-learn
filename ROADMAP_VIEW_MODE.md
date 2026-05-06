# Roadmap View Mode

Reference style for future AI Learn Platform screens that present trajectories, progression ladders, or branching paths.

Use this mode for:
- career maps
- skill progression ladders
- path overviews with branching options
- role evolution screens

Do not use this mode for:
- long reading-first theory chapters
- generic dashboard cards
- dense comparison tables

## Core feel

The mode should feel:
- editorial
- structured
- quiet
- technical
- deliberate

The visual target is a dark, low-glare roadmap view with strong information hierarchy and almost no decorative excess.

## Layout anatomy

The screen is built from five layers:

1. Eyebrow label at the top.
   Example: `CAREER ROADMAP`

2. Large title block.
   Two-line or three-line title is acceptable if it improves rhythm.

3. Short explanatory intro.
   One or two left-aligned lines only. No long hero paragraph.

4. Track switcher row.
   Large pill buttons such as `IC Track`, `Research Track`, `Management Track`.

5. Main stacked roadmap body.
   A left-side vertical timeline plus a right-side stack of expandable stage cards.

Below the main ladder, optional secondary sections may appear:
- branch-point cards
- supporting notes
- transition guidance

## Composition rules

- Keep the main reading flow single-column.
- Use a left-side time rail with year markers.
- Use stacked cards, not split desktop columns, for the primary ladder.
- Keep wide horizontal breathing room around the roadmap.
- Keep card interiors compact and scannable.
- Prefer one dominant screen idea over many competing subpanels.

## Typography

- Eyebrow and metadata: monospaced, uppercase, wide tracking.
- Main title: serif or reading-display style, large, high contrast.
- Card titles: monospaced or technical sans with strong weight.
- Supporting copy: left-aligned, muted, concise.
- Years and level markers: monospaced, subdued, secondary emphasis.

Typography hierarchy should look like:
- display title
- card title
- level / year metadata
- chip labels
- supporting copy

## Color direction

Use the existing platform dark token system:
- backgrounds from `bg-base`, `bg-card-dark`, `bg-card`
- borders from `border-border-card`, `border-border-subtle`, `border-border-emphasis`

Do not introduce arbitrary new hex backgrounds or borders for this mode.

Accent usage should be limited:
- timeline dots may use one accent each
- chips may use soft pastel fills
- active track button may use a slightly stronger border / foreground contrast

The palette should remain muted:
- charcoal base
- warm off-white text
- soft mint / violet / amber chips
- low-contrast dividers

Avoid:
- neon glow
- loud gradients
- heavy shadows
- saturated brand blocks

## Card system

Each roadmap stage card should contain:
- role title
- level range
- year range
- compact chip row
- optional hidden expanded content

Card behavior:
- collapsed by default is acceptable
- only the active or selected stage needs full expansion
- expansion should reveal depth, not duplicate the summary

Card tone:
- rounded but not playful
- dense enough to feel like a console dashboard
- visually calm

## Chips

Chips are functional labels, not decoration.

Good chip content:
- core skills
- tools
- responsibility areas
- signals of role scope

Chip style:
- light pastel fill
- dark text
- pill radius
- tight vertical padding
- compact spacing between chips

Good chip categories:
- systems focus
- research depth
- people leverage
- infra
- evaluation
- product translation

## Timeline

The left rail is important. It should communicate progression before the user reads any paragraph.

Timeline rules:
- one vertical line
- one marker per stage
- muted year labels
- enough spacing to make steps feel distinct
- markers should align cleanly with stage cards

## Interaction

- Track switching should feel immediate and stable.
- Expansion should be subtle, not theatrical.
- Hover states should be minimal.
- Motion should support orientation, not entertainment.

Preferred behavior:
- fast content swap
- no large layout jumps
- no bouncing animations
- no attention-grabbing pulse effects

## Copy style

Copy in this mode should be:
- concise
- analytical
- practical
- roadmap-oriented

Avoid:
- hype
- motivational clichés
- dramatic product language
- full-paragraph italics

## Best-fit use cases in AI Learn

This mode is especially appropriate for:
- AI career trajectories
- role progression by seniority
- branch maps after foundational rooms
- path selection screens
- skill maturity ladders

## Anti-patterns

Do not turn this mode into:
- a glossy marketing hero
- a dashboard with many unrelated widgets
- a two-column narrative article
- a card grid with no progression logic
- a glowing cyberpunk panel

## Implementation notes for this repo

- Preserve bilingual content (`en` and `ru`).
- Reuse current dark theme tokens.
- Keep body text left-aligned.
- Keep heading treatment text-only, with no leading icons.
- Prefer explicit, data-driven stage definitions.
- This mode should coexist with the current reading-first theory mode, not replace it globally.
