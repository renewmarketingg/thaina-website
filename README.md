# Dra. Thaina Pereira — Endocrinologista

Single-page marketing site for Dra. Thaina Pereira, endocrinologist in Brazil.

## Tech Stack

- **React 19** + **TypeScript 6** (strict)
- **Vite 8** with `@vitejs/plugin-react`
- **Tailwind CSS 4** (CSS-first, `@theme` tokens in `src/index.css`)
- **ESLint 10** flat config
- **clsx** + **tailwind-merge** (via `cn()` utility)

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server (HMR) |
| `pnpm build` | Type-check (`tsc -b`) + production bundle (`vite build`) |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Lint all source files |

## Project Structure

```
src/
  main.tsx                  # React entry point
  App.tsx                   # Composes all page sections
  index.css                 # Tailwind v4 + theme tokens
  util.ts                   # cn() helper + validarTelefone()
  components/               # Page sections: Navbar, Hero, About, Specialties, Approach, Instagram, Consultation, Footer
  components/ui/            # Reusable: LazyImage, Loading, WhatsAppFloat
  icons/                    # SVG icon files
public/                     # Static assets (images, SVGs, favicons)
```

## Sections

- Navbar — fixed top navigation with smooth-scroll links
- Hero — full-screen presentation with photo and CTA
- About — professional background and approach
- Specialties — list of endocrinology areas
- Approach — treatment philosophy
- Instagram — embedded social proof
- Consultation — WhatsApp lead capture form
- Footer — contact info and social links
- WhatsAppFloat — fixed floating WhatsApp CTA button

## Content

All content and UI strings are in **Portuguese (pt-BR)**.
