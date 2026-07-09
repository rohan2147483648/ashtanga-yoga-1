# Ashtanga Yoga Studio — Next.js Landing Page

A modern, elegant landing page for a yoga studio, built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Calm visuals, a natural color palette, and a clean minimalist layout — with smooth scroll-reveal animations, a Ken Burns hero, hover micro-interactions, and a parallax retreat section.

---

## ✨ Features

- **Hero load animation** — staggered fade-in for hero copy combined with a slow Ken Burns zoom on the background image and a parallax scroll-out effect.
- **On-scroll reveals** — every section uses `whileInView` from Framer Motion to fade & slide elements into place.
- **Hover micro-interactions** — buttons scale on hover, cards lift with a soft drop shadow, and images zoom subtly inside their containers (all via Tailwind transitions).
- **Weekly timetable** — interactive day tabs with `AnimatePresence` transitions.
- **Retreats section** — full-bleed parallax background image that drifts as you scroll.
- **Shop grid** — category filters and an animated `Add to cart → Added` confirmation.
- **Newsletter form** — fully functional front-end state, ready to be wired to your provider.
- **Fully responsive** — mobile menu, fluid grids, and accessible focus states.

---

## 🎨 Design System

Custom Tailwind palette — sandy creams, sage greens and warm terracotta:

| Token  | Hex       | Use                          |
| ------ | --------- | ---------------------------- |
| sand   | `#fbf8f3` | Page background              |
| sage   | `#6b7d63` | Primary brand / CTA buttons  |
| clay   | `#c89784` | Warm accents                 |
| ink    | `#2c2a26` | Body text / headings         |

Typography: **Cormorant Garamond** (serif display), **Inter** (sans), **Playfair Display** (italic accents).

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Production build

```bash
npm run build
npm run start
```

---

## 🧰 Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3** with custom theme
- **Framer Motion 11** for all animations
- **lucide-react** for iconography
- **Unsplash** placeholder photography (swap in your own assets)

### Framer Motion patterns used

| Pattern | Where |
| --- | --- |
| `whileInView` + `viewport` | All section reveals |
| `useScroll` / `useTransform` | Hero parallax + Retreats parallax |
| `AnimatePresence` | Mobile menu, day tabs, product filter, add-to-cart state |
| Staggered children variants | Hero load animation |

---

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css         # Tailwind layers + font imports + component classes
│   ├── layout.tsx          # Root layout (metadata, fonts)
│   └── page.tsx            # Composes all sections
├── components/
│   ├── Navbar.tsx          # Sticky nav + mobile drawer
│   ├── Hero.tsx            # Ken Burns + staggered text
│   ├── About.tsx           # Two-column intro with image collage
│   ├── Classes.tsx         # Weekly timetable with day tabs
│   ├── Instructors.tsx     # Teacher grid with hover lifts
│   ├── Retreats.tsx        # Parallax-bg retreat cards
│   ├── Shop.tsx            # Filterable product grid
│   ├── Testimonial.tsx     # Quote + stat tiles
│   └── Footer.tsx          # Newsletter, links, socials
├── lib/
│   └── data.ts             # All site content (instructors, classes, products)
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🖼️ Swapping Imagery

All images are loaded from Unsplash via plain `<img>` tags (no `next/image`), so no extra Next.js configuration is needed. To use your own:

1. Drop your assets into `public/images/`.
2. Replace the URLs in `lib/data.ts` and the inline `backgroundImage` strings in `Hero.tsx` / `Retreats.tsx`.
3. (Optional) Remove the `images.remotePatterns` block from `next.config.js`.

---

## 📝 License

Original code: MIT. Imagery used in development is from Unsplash and is royalty-free under the [Unsplash License](https://unsplash.com/license).