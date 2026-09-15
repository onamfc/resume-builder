# Resume Builder

A schema-driven resume builder built with Next.js, React, and Tailwind CSS. Describe a resume as data, pick a template, and render it as a live web page.

> **Status: work in progress.** The rendering engine and template picker work today. The editor, saving, and public hosting are on the [roadmap](https://github.com/onamfc/resume-builder/issues/24) and open for contribution.

## Why this project?

This project was born from a personal need during my own job search. I wanted a simple, elegant way to host the most up-to-date version of my resume, something I could share easily with prospective employers and update quickly without sending new PDFs or Word docs.

So I decided to build one from scratch and open source it.

The long-term goal is a flexible platform that lets anyone:

- Create a professional online resume with minimal effort
- Choose from responsive templates
- Update resume content anytime with a live preview
- Host it on a personal URL

## What works today

- **Schema-driven rendering engine.** A resume template is a tree of plain objects. `ResumeRenderer` walks that tree and maps each node to a React block component: `JobBlock`, `EducationBlock`, `SkillTagBlock`, `ContactBlock`, `ProjectBlock`, `CertificationBlock`, `BulletBlock`, `SectionTitle`, `TextBlock`, `ImageBlock`, `StyleBlock`, and a few more.
- **Three sample templates** (`default`, `nova`, `metro`) showing different layouts built from the same blocks.
- **Template picker with filtering.** A sidebar of checkboxes narrows the template list to those that include the sections you care about, and clicking a template renders it in place.
- **Tailwind CSS 4** for styling and responsive layout.

## Roadmap

Everything else lives in the pinned [Project roadmap](https://github.com/onamfc/resume-builder/issues/24), which links to an issue for each piece of work with context and acceptance criteria. The big items, roughly in order:

1. **Foundation.** Contributing guide, formatter config, CI, and a test suite.
2. **Separate content from templates.** Adopt the [JSON Resume](https://jsonresume.org/schema) format as the resume document so any template can render any resume.
3. **Editor with live preview.** Forms for each section, writing to the resume document.
4. **Persistence and export.** Local save, JSON import and export, print to PDF.
5. **Public hosting.** Accounts and a shareable URL per resume, built with Next.js route handlers and a hosted database and auth provider.

Issues labelled `good first issue` are safe to pick up cold.

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19
- **Styling:** Tailwind CSS 4
- **Rendering:** schema-driven component mapping in `src/app/ResumeRenderer.tsx`
- **Language:** TypeScript

## Local development

Requires Node.js 20 or newer.

```bash
git clone https://github.com/onamfc/resume-builder.git
cd resume-builder
npm install
npm run dev
```

Open http://localhost:3000. Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
src/
  app/
    layout.tsx           # root layout and fonts
    page.tsx             # home page, renders the template picker
    templateFilter.tsx   # sidebar filter and template grid
    ResumeRenderer.tsx   # block components and the recursive renderer
  templates/
    index.ts             # template registry and TemplateDefinition type
    default.ts           # sample templates
    nova.ts
    metro.ts
```

A template is a `TemplateDefinition` with a `layout` tree and a `data` map. Nodes in the tree are either a string (a key into `data`) or an object with a `component` name and optional `children`, `style`, and component-specific props. See `src/templates/default.ts` for a complete example.

## Contributing

Contributions are welcome. Pick an issue from the [roadmap](https://github.com/onamfc/resume-builder/issues/24), comment that you are taking it, and open a focused pull request. A `CONTRIBUTING.md` with full guidelines is tracked in [#3](https://github.com/onamfc/resume-builder/issues/3).

## License

[MIT](LICENSE)
