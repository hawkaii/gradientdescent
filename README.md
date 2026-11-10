# Gradient Descent

**Every hobby is a company waiting to happen.**

The brand page for Gradient Descent — an automation studio that builds the software,
the audience, and the machine that runs them.

## Stack

- **Astro 7** — static output
- **React 19** — product cards and Astryx components
- **Astryx** (`@astryxdesign/core`) — Meta's open-source design system: theme provider,
  Button, Badge. Brand styles override its tokens and layers.
- **Instrument Serif** + **Inter** — display and body
- Palette: pink ground `#FF3D9A`, ink `#1B0A14`, cream `#FFF6FA`

## Motion

Hero line rise, rotating seal, drifting orbs, infinite marquee, scroll reveals,
count-up stats, card lift and glow, film grain. All of it degrades to a static
page under `prefers-reduced-motion` and without JavaScript.

## Products

Products live in `src/content/products/*.md`. Adding a product is one file plus
one screenshot. The lineup grid, stats and badges read from that folder.

## Dev

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static output in dist/
```

Requires Node >= 22.23.4. On this machine:
`export PATH=/tmp/opencode/node/node-v22.23.4-linux-arm64/bin:$PATH`

## Deploy

Not deployed yet. Target: Cloudflare Pages, `gradientdescent.wiki`.
