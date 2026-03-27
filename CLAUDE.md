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

**Data layer**: All content lives in `src/data.json` — name, tags, bio, theme colors, stats, skillGroups, jobs, projects, schools, documents, and contacts. Components import from this file. Icons are stored as string names in the JSON and resolved via `src/iconMap.tsx` which maps names to MUI icon components. To add a new icon, import it in `iconMap.tsx` and add it to the `icons` map.

**Theme colors**: `src/data.json` defines `theme.primary` and `theme.accent` hex values. `src/ThemeContext.tsx` reads these and feeds them into MUI's `createTheme` as `palette.primary.main` and `palette.secondary.main`. Components use `theme.palette.primary.*` / `theme.palette.secondary.*` and MUI's `alpha()` utility — never hardcode green/orange hex values. The static `src/theme.ts` is legacy and unused.

**Theme provider**: `src/ThemeContext.tsx` provides `ColorModeProvider` with light/dark toggle via `useColorMode()` hook. Fonts: DM Sans (body), Archivo (headings).

**Conditional sections**: `src/App.tsx` conditionally renders sections based on whether their data arrays are non-empty. `AppHeader` dynamically builds nav links to match. Empty arrays = section hidden + nav link removed.

**Optionality**: Many fields in `data.json` are optional. Components guard with conditional rendering (`{field && ...}`). Key optional fields: `bio`, `jobs[].focus`, `schools[].honors`, `projects[].live`, `documents[].pdf`, `documents[].docx`, `documents[].icon`, `documents[].description`.

**Layout**: Each section uses the shared `Section` wrapper (`src/components/Section.tsx`) which handles titles, subtitles, alternating backgrounds, and responsive padding. The `alternate` prop toggles background shade.

**Navigation**: `AppHeader` uses `src/hooks/useScrollSpy.ts` for active section detection on scroll.

**About section buttons**: Generated dynamically from the `contacts` array. Contacts with label `"LinkedIn"` or `"GitHub"` get brand-colored contained buttons; others get outlined buttons using theme primary (default) or accent (`mailto:` links).

## CI/CD

Push to `main` triggers `.github/workflows/publish.yml` which builds and pushes `dist/` to the `build` branch via `git-publish-subdir-action`.

## Style Conventions

- No semicolons, single quotes (enforced by existing code style, no Prettier config)
- MUI components with `sx` prop for styling; no CSS modules or styled-components
- Card styling pattern: `elevation={0}`, `borderRadius: 3`, theme-aware borders/backgrounds, hover with `translateY` and shadow
- Dark/light mode: use `isDark` boolean from `theme.palette.mode === 'dark'` for conditional styles
- Use `alpha()` from `@mui/material/styles` for transparent color variants — never write raw `rgba()` with theme color values
