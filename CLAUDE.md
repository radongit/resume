# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check with `tsc -b` then build with Vite
- `npm run lint` — ESLint (flat config, TypeScript + React Hooks + React Refresh)
- `npm run preview` — Preview production build locally
- `npx tsc --noEmit` — Type-check only (strict mode, no unused locals/params)

## Architecture

Single-page React 19 portfolio site using MUI 7, TypeScript, Vite 8, and Emotion.

**Data layer**: All card/section content lives in `src/data.json` — jobs, projects, skills, stats, contacts, documents, user name, and tags. Components import from this file. Icons are stored as string names in the JSON and resolved via `src/iconMap.tsx` which maps names to MUI icon components.

**Theme**: `src/ThemeContext.tsx` provides a `ColorModeProvider` with light/dark toggle. Uses `useColorMode()` hook. The static `src/theme.ts` is legacy. Colors: primary green (`#2e7d32`), accent orange (`#e65100`). Fonts: DM Sans (body), Archivo (headings).

**Layout**: `src/App.tsx` renders `AppHeader`, six section components, and `AppFooter`. Each section uses the shared `Section` wrapper (`src/components/Section.tsx`) which handles titles, subtitles, alternating backgrounds, and responsive padding. The `alternate` prop toggles background shade.

**Navigation**: `AppHeader` uses `src/hooks/useScrollSpy.ts` for active section detection on scroll. Nav items highlight green when active; hover is orange.

## CI/CD

Push to `main` triggers `.github/workflows/publish.yml` which builds and pushes `dist/` to the `build` branch via `git-publish-subdir-action`.

## Style Conventions

- No semicolons, single quotes (enforced by existing code style, no Prettier config)
- MUI components with `sx` prop for styling; no CSS modules or styled-components
- Card styling pattern: `elevation={0}`, `borderRadius: 3`, theme-aware borders/backgrounds, hover with `translateY` and shadow
- Dark/light mode: use `isDark` boolean from `theme.palette.mode === 'dark'` for conditional styles
