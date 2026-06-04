# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Vite dev server (HMR + inline TS/ESLint checking via vite-plugin-checker)
npm run build        # tsc -b (typecheck all projects) then vite build → dist/
npm run preview      # serve the production build locally
npm run lint         # eslint .
npm run lint:fix     # eslint . --fix
npm run format:check # prettier --check .
npm run format:write # prettier --write .
```

There is no test runner configured in this repo.

`npm run dev` surfaces TypeScript and ESLint errors directly in the browser/terminal overlay via `vite-plugin-checker`, so most issues show up without a separate lint/build step.

## Architecture

Single-page Vite + React 19 + TypeScript app. This is currently a thin scaffold — the substantive content of the repo lives in `docs/` (see below).

- **Entry flow**: `index.html` → `src/main.tsx` (mounts `RouterProvider` in `StrictMode`) → `src/router.tsx` (`createBrowserRouter`) → route elements. Add routes in `src/router.tsx`, not by editing `main.tsx`.
- **Routing**: `react-router-dom` v7 with the data-router (`createBrowserRouter`).
- **Path alias**: `@/*` → `src/*` (defined in `tsconfig.app.json`, resolved by `vite.config.ts`'s `tsconfigPaths`). Use `@/...` imports, e.g. `@/components/ui/button`.

### UI / styling stack

- **shadcn/ui** (config in `components.json`, style `radix-nova`, base color `neutral`, icon library `lucide`). Add components with the shadcn CLI; they land in `src/components/ui/`.
- **Tailwind CSS v4** via `@tailwindcss/vite` — there is **no `tailwind.config.js`**. Theme tokens (colors, radii, fonts) are defined as CSS variables in `src/index.css` under `@theme inline` and `:root`/`.dark`. Edit theming there, not in a JS config.
- Dark mode is class-based (`.dark` variant); colors use `oklch`.
- Font: Geist (via `@fontsource-variable/geist`, imported in `index.css`).

## Conventions enforced by tooling

- **`src/components/ui/**` is ESLint-ignored\*\* (generated shadcn code). Hand-written app code lives elsewhere and is fully linted.
- **Import ordering is enforced** (`import-x/order`): groups builtin → external → internal, `react` first, alphabetized. Run `npm run lint:fix` to auto-fix.
- **Prettier** (`.prettierrc`): single quotes, semicolons, trailing commas (`all`), 80-col, 2-space. Prettier runs as an ESLint rule, so formatting violations fail `npm run lint`.
- **Strict TS**: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax` are on. Use type-only imports (`import type { ... }`) where appropriate.

## docs/ — frontend architecture presentation

`docs/` is the primary purpose of this repository in its current state: a talk on frontend architecture approaches (in Russian).

- `docs/presentation-plan.md` — full 14-slide talk plan (intro → architecture levels flat→FSD→Clean→monorepo→micro-frontends → how to choose), with source links.
- `docs/slides-prompts.md` — per-slide generation prompts.

When editing presentation content, keep it in Russian and preserve the existing slide structure and tone. The user's stance (from prior context): FSD is their personal favorite, but materials aimed at the team should stay balanced and acknowledge each approach's trade-offs.
