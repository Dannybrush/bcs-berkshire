# BCS Berkshire — website

A SvelteKit 2 / Svelte 5 site for the BCS Berkshire branch, built to be maintained by
volunteers with no build-tooling experience once it's deployed.

## Before you launch — outstanding items

1. **Official logo** — `src/lib/components/BranchMark.svelte` is a placeholder mark,
   *not* the real BCS logo. Replace it (and the favicon at `static/favicon.svg`)
   with the official assets once BCS supplies them, and follow their brand
   guidelines for minimum size, clear space and colour usage.
2. **Brand colours** — the green in `src/lib/styles/tokens.css`
   (`--color-green-700` etc.) is an approximation of BCS's Pantone 3425 primary.
   Update it to the exact hex from BCS's brand guidelines PDF if precision matters
   for your printed materials too.
3. **Contact form email** — `src/lib/config/site.ts` → `contact.general` is a
   placeholder inbox (`hello@bcsberkshire.co.uk`). Point it at a real, monitored
   address, and set a `RESEND_API_KEY` environment variable (see `.env.example`)
   before the form on `/contact-us` will actually send anything. Until then it
   fails safely with a friendly message rather than silently losing enquiries.
4. **Events & newsletters** — `src/lib/data/events.ts` and
   `src/lib/data/newsletters.ts` contain a mix of real, current content and
   clearly-commented placeholders. Update these regularly; they don't require
   touching any other file.
5. **Domain** — `site.url` in `src/lib/config/site.ts` assumes
   `https://www.bcsberkshire.co.uk`. Update if the final domain differs.

## Editing content

Almost everything editable lives under `src/lib/data/` and
`src/lib/config/site.ts` — you should never need to touch a `.svelte` page file
just to update a name, date, or email address:

| File | Controls |
|---|---|
| `src/lib/config/site.ts` | Branch name, contact emails, meeting times, socials |
| `src/lib/data/navigation.ts` | Header and footer menu structure |
| `src/lib/data/committee.ts` | Committee roster on "Meet the Committee" |
| `src/lib/data/events.ts` | Recurring fixtures and upcoming events |
| `src/lib/data/newsletters.ts` | Newsletter archive |
| `src/lib/data/partners.ts` | Partners, sponsors & friends |
| `src/lib/data/registrations.ts` | Membership grades & professional registrations |
| `src/lib/data/branches.ts` | Branch/specialist group listings |

## Local development

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Visit the URL Vite prints (typically `http://localhost:5173`).

To type-check the whole project:

```bash
npm run check
```

## Deployment

The project uses `@sveltejs/adapter-auto`, which auto-detects common hosts.
**Vercel** is the recommended target — connect this repository in the Vercel
dashboard and it will build automatically. Remember to add the
`RESEND_API_KEY` environment variable in your hosting provider's project
settings (see `.env.example`).

## Project structure

```
src/
  app.html          Base HTML shell (fonts, meta)
  lib/
    components/      Shared, reusable UI (Header, Footer, cards…)
    config/          site.ts — single source of truth for contact details etc.
    data/            Editable content: nav, committee, events, partners…
    styles/          tokens.css (design tokens) + global.css (base styles)
  routes/            One folder per page/URL, following SvelteKit conventions
static/              robots.txt, favicon — served as-is
```

## Accessibility & performance

- Targets WCAG 2.2 AA: semantic landmarks, skip link, visible focus states,
  labelled form fields with inline error messages, `prefers-reduced-motion`
  support throughout.
- No client-side framework overhead beyond what SvelteKit needs — the contact
  form works even with JavaScript disabled (progressive enhancement via
  `use:enhance`).
- `sitemap.xml` is generated automatically from the same navigation data as
  the footer, so it can't drift out of sync.

## Legal pages

This build does not yet include a Privacy Policy, Cookie Policy or
Accessibility Statement. As a page collecting personal data via the contact
form, UK GDPR/PECR expects at least a Privacy Policy before launch — happy to
draft these next; they were out of scope for the initial page set requested.
