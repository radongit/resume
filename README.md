# Resume & Portfolio Template

A modern, responsive single-page resume and portfolio site built with React 19, TypeScript, MUI 7, and Vite. Features light/dark mode, smooth scroll navigation, and a fully data-driven architecture — all of your content and theme colors live in a single JSON file.

## Quick Start

```bash
git clone https://github.com/radongit/resume.git
cd resume
npm install
npm run dev
```

Open `http://localhost:5173` to see the site. Edit `src/data.json` and the page updates instantly via hot reload.

## Making It Yours

Everything you need to personalize lives in **`src/data.json`**. The file is organized to match the flow of the website from top to bottom. No component code changes are needed for content updates.

### Name & Tagline

The `name` appears in the header, footer, and hero section. The `tags` array is joined with dots as a subtitle.

```json
{
    "name": "Your Name",
    "tags": ["Your", "Tagline", "Words"]
}
```

### Color Theme

Two hex values control the entire color scheme across both light and dark modes. MUI automatically generates lighter and darker variants from these.

```json
"theme": {
    "primary": "#2e7d32",
    "accent": "#e65100"
}
```

- **`primary`** — Used for section titles, active nav items, icons, card hover borders, stat values, timeline dots, and the "Call Me" / "Live Demo" buttons. The default green (`#2e7d32`) produces a light variant for dark mode and a dark variant for headings automatically.
- **`accent`** — Used for the section underline bar, subtitles, nav hover color, "Email Me" button, and job focus text. The default orange (`#e65100`) gives a warm contrast.

Try these combinations to get a feel for it:

| Style | Primary | Accent |
|-------|---------|--------|
| Default (green/orange) | `#2e7d32` | `#e65100` |
| Blue/coral | `#1565c0` | `#d84315` |
| Purple/teal | `#6a1b9a` | `#00838f` |
| Slate/amber | `#37474f` | `#ff8f00` |

### About Stats

The four stat cards in the About section. Each takes an icon name, a display value, and a label.

```json
"stats": [
    { "icon": "Work", "value": "7+", "label": "Years Experience" },
    { "icon": "Code", "value": "10+", "label": "Languages" }
]
```

### Skills

Groups of skills displayed as chip tags in a responsive grid. Each group has a title, an icon, and an array of skill names. Add or remove groups as needed.

```json
"skillGroups": [
    {
        "title": "Programming Languages",
        "icon": "Code",
        "skills": ["JavaScript", "TypeScript", "Python"]
    }
]
```

### Work History

Jobs are displayed as cards with bullet points. Set `current: true` for your current role to show a "Current" badge. The `focus` field is optional and appears as a secondary subtitle.

```json
"jobs": [
    {
        "company": "Company Name",
        "title": "Job Title",
        "focus": "Optional Focus Area",
        "location": "City, State",
        "period": "Jan 2020 – Present",
        "current": true,
        "bullets": [
            "What you accomplished",
            "Another achievement"
        ]
    }
]
```

### Projects

Each project card shows a description, tech stack chips, and action buttons. Set `privateRepo: true` to show a lock icon instead of a clickable GitHub link. Use `live` for a live demo URL (or `null`). The `links` array adds extra buttons for things like API docs.

```json
"projects": [
    {
        "title": "Project Name",
        "description": "What this project does.",
        "technologies": ["React", "TypeScript", "Node.js"],
        "github": "https://github.com/you/project",
        "privateRepo": false,
        "live": "https://project.com",
        "links": [
            { "label": "API Docs", "url": "https://project.com/docs", "download": false }
        ]
    }
]
```

### Education

Schools are displayed on a vertical timeline. The `honors` field is optional — when present, it shows a glowing gold badge.

```json
"schools": [
    {
        "name": "University Name",
        "degree": "Bachelor of Computer Science",
        "year": "Graduated 2017",
        "location": "City, State",
        "honors": "Cum Laude"
    }
]
```

### Documents

Downloadable resume/cover letter cards with PDF and DOCX buttons, plus an inline PDF viewer. Place your files in the `public/documents/` folder and reference them with paths starting from `/`.

```json
"documents": [
    {
        "title": "Resume",
        "icon": "Description",
        "description": "My full professional resume.",
        "pdf": "/documents/YourName_Resume.pdf",
        "docx": "/documents/YourName_Resume.docx"
    }
]
```

### Contacts

Contact cards used in both the Contact section and the Resume section sidebar. The `href` determines the link behavior (`tel:`, `mailto:`, or `https://`).

```json
"contacts": [
    {
        "icon": "Phone",
        "label": "Phone",
        "value": "(555) 123-4567",
        "href": "tel:+15551234567"
    },
    {
        "icon": "Email",
        "label": "Email",
        "value": "you@email.com",
        "href": "mailto:you@email.com"
    },
    {
        "icon": "LinkedIn",
        "label": "LinkedIn",
        "value": "your-profile",
        "href": "https://linkedin.com/in/your-profile"
    }
]
```

## Available Icons

Icons are referenced by name strings in `data.json` and resolved in `src/iconMap.tsx`. These are available out of the box:

`Build` · `Cloud` · `Code` · `Computer` · `Description` · `Dns` · `Email` · `FolderZip` · `GitHub` · `LinkedIn` · `Lock` · `MailOutline` · `Phone` · `School` · `SmartToy` · `Storage` · `Web` · `Work`

To add a new icon, import it in `src/iconMap.tsx` and add it to the `icons` map. Browse all available icons at [mui.com/material-ui/material-icons](https://mui.com/material-ui/material-icons/).

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

The included GitHub Actions workflow (`.github/workflows/publish.yml`) automatically builds on push to `main` and publishes the `dist/` output to a `build` branch, which can be served by GitHub Pages or any static host.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [MUI 7](https://mui.com/) (Material UI) + [Emotion](https://emotion.sh/)
- [Vite 8](https://vite.dev/)
- Light/dark mode with system-aware toggle
- Scroll spy navigation
