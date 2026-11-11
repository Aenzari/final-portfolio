# Mayk — From Fragments to Form

An experimental, scroll-driven personal portfolio for Michael Angelou C. Quinit.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Three.js + React Three Fiber + Drei
- Lucide React

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run build
npm run preview
```

## Project structure

```text
src/
  app/              Application shell and providers
  components/       Navigation and reusable UI
  data/             Portfolio content
  hooks/            React hooks
  scenes/           Seven independent portfolio scenes
  three/            3D canvas and temporary avatar
  styles/           Design tokens and global styles
  types/            Shared TypeScript types
```

## Current scope

Phase 1 foundation. The avatar is a temporary procedural placeholder. The final likeness model, detailed project case studies, secure contact delivery, and interactive 3D universe are planned milestones.

## Design principles

- Semantic content first; 3D enhances rather than replaces content.
- Coordinated Lenis/GSAP scroll lifecycle.
- Reduced-motion support and responsive layouts.
- No secrets or backend credentials in the client bundle.

## Deployment

Vite-compatible with Netlify or Vercel. Build command: `npm run build`; publish directory: `dist`.
