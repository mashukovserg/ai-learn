# Image Generation Brief (Rooms)

## Current state
- Good reference images are `1536x1024`:
  - `public/images/llm-landscape-network.png`
  - `public/images/how-llm-think-progress.png`
- Target images are placeholders (`1x1`):
  - `public/images/ai-history.png`
  - `public/images/chatgpt-moment.png`
  - `public/images/prompting-101.png`

## Output spec (must follow)
- Resolution: `1536x1024` (3:2)
- Format: PNG
- Visual mood: dark, cinematic, modern, technical
- Palette: charcoal/black base + emerald accents
- Composition: clean, readable at thumbnail size
- No text in image
- No logos/watermarks/brand marks
- No photoreal faces

## Master style prompt (reuse in every generation)
`cinematic digital illustration, dark graphite background, emerald accent lighting, volumetric glow, high contrast, soft atmospheric depth, clean composition, modern AI infrastructure aesthetic, subtle gradients, professional product artwork, no text, no logo, no watermark, 3:2 landscape`

## Room prompts

### 1) AI History
Use with master style prompt:
`evolution timeline of artificial intelligence from symbolic systems to neural networks to transformers, abstract visual sequence, vintage computing motifs blending into modern GPU clusters, flowing timeline arcs, knowledge graphs, smooth transition from rigid logic to probabilistic learning, elegant and minimal, premium UI hero image`

Save as:
- `public/images/ai-history.png`

### 2) ChatGPT Moment
Use with master style prompt:
`global inflection point of conversational AI adoption, abstract wave spreading across devices and workflows, glowing chat nodes connecting people and industries, rapid adoption energy, productization of AI assistants, modern communication lattice, dramatic but clean composition, premium UI hero image`

Save as:
- `public/images/chatgpt-moment.png`

### 3) Prompting 101
Use with master style prompt:
`structured prompt engineering visualization, layered blocks representing system prompt context examples user query and output, control knobs for precision and creativity, feedback loops and evaluation paths, clear information architecture, educational but stylish, premium UI hero image`

Save as:
- `public/images/prompting-101.png`

## Negative prompt
`text, letters, caption, logo, watermark, clutter, low contrast, oversaturated neon, cartoon style, noisy background, blurry details, distorted geometry`

## Quick workflow
1. Generate 6-8 variants per room with the same master style.
2. Pick top 2 per room based on thumbnail readability.
3. Export final PNG at `1536x1024`.
4. Replace files in `public/images/`.
5. Verify size:
   - `sips -g pixelWidth -g pixelHeight public/images/ai-history.png public/images/chatgpt-moment.png public/images/prompting-101.png`

## Selection checklist
- Works on dark UI background
- Theme is instantly recognizable for the room
- Consistent style with `llm-landscape-network` and `how-llm-think-progress`
- No text artifacts
- Clean focal point in center-left area (best for card cropping)
