"use client";

import { motion } from "framer-motion";

/* Inline botanical line-art used as the decorative floral motif.
   Stroke is stone-700, weight 1.2, viewBox 100x100, scales via Tailwind. */
function FloralSvg() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full text-stone-700"
      aria-hidden="true"
    >
      {/* main stem */}
      <path
        d="M50 95 C 50 70, 30 55, 35 35"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* leaves */}
      <path
        d="M50 78 C 42 74, 36 70, 33 64"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M40 65 C 48 60, 53 55, 50 48"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M48 50 C 40 45, 38 38, 42 32"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* bloom */}
      <circle cx="38" cy="30" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="38" cy="30" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M32 28 C 30 24, 32 20, 35 19"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M44 26 C 47 22, 49 17, 47 13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* tiny berries */}
      <circle cx="62" cy="60" r="1.6" fill="currentColor" />
      <circle cx="66" cy="64" r="1.6" fill="currentColor" />
      <circle cx="60" cy="66" r="1.6" fill="currentColor" />
      {/* ground */}
      <path
        d="M20 92 L 80 92"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 4"
      />
    </svg>
  );
}

/**
 * Offset editorial hero.
 *
 * Layout (≥md):
 *   ┌──────────────────────────┬────────────────────┐
 *   │ YOGA STUDIO   (z-10)     │                    │
 *   │ ASHTANGA → overflows ───▶│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
 *   │ — by Emilly Burton       │     (offset down)  │
 *   │ [floral svg]             │                    │
 *   └──────────────────────────┴────────────────────┘
 *
 * - Left text container sits on top (z-10) and uses a negative right
 *   margin so "ASHTANGA" breaks out of its column and overlaps the photo.
 * - Right photo uses the exact URL provided and is offset vertically
 *   (mt-*) so it does NOT align with the top of the text.
 */
export default function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const imageAnim = {
    hidden: { opacity: 0, y: 40, scale: 1.03 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.3,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative bg-sand-50 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl pt-24 pb-20 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
        <div className="relative grid md:grid-cols-2 gap-0 items-start">
          {/* ─── Left column — typography (z-10, overlaps onto image) ─── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 pr-4 md:pr-8"
          >
            {/* "YOGA STUDIO" — top headline, fully within column */}
            <motion.h1
              variants={item}
              className="font-serif text-[14vw] md:text-[9vw] lg:text-[8.2rem] leading-[0.92] tracking-tight text-stone-900 uppercase"
            >
              Yoga
              <br />
              <span className="block">Studio</span>
            </motion.h1>

            {/* "ASHTANGA" — breaks out of the left column to overlap the photo.
                The negative right margin lets the word run into the right
                column without breaking the grid. */}
            <motion.h2
              variants={item}
              className="relative z-20 font-serif text-[18vw] md:text-[13vw] lg:text-[11.5rem] leading-[0.9] tracking-tight text-stone-900 uppercase mt-2 md:-mr-16 lg:-mr-32"
              style={{ transform: "translateZ(0)" }}
            >
              Ashtanga
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="mt-6 md:mt-8 text-sm uppercase tracking-widest text-stone-500 font-medium pl-1"
            >
              — By Emilly Burton
            </motion.p>

            {/* Decorative floral */}
            <motion.div
              variants={item}
              className="mt-10 md:mt-14 w-24 md:w-32 text-stone-700/80"
              aria-hidden="true"
            >
              <FloralSvg />
            </motion.div>
          </motion.div>

          {/* ─── Right column — single offset image (vertically pushed down) ─── */}
          <motion.div
            variants={imageAnim}
            initial="hidden"
            animate="show"
            className="relative z-0 mt-10 md:mt-40 lg:mt-48"
          >
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm bg-sand-100 group">
              <img
                src="https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/main-home-offset-img.png"
                alt="Yoga practitioner — Ashtanga studio"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}