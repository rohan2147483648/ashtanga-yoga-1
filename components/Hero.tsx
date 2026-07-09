"use client";

import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────────────────
   Decorative left-flower image.  Positioned absolutely at the bottom-left
   of the section, BEHIND the type (-z-10), and intentionally small /
   de-emphasised (opacity-80) so it never competes with the headline.
   ──────────────────────────────────────────────────────────────────────── */
const FLOWER_SRC =
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=400&q=80";

/**
 * Offset editorial hero.
 *
 *   ┌──────────────────────────────────────┬────────────────────┐
 *   │ [🌿]                                │                    │
 *   │  YOGA STUDIO                        │   ░░░░░░░░░░░░░░    │
 *   │  ASHTANGA → overlaps ──────────────▶ │   (stone-200 box)  │
 *   │  — By Emilly Burton                 │   (mt-20 md:mt-32) │
 *   │                                      │                    │
 *   └──────────────────────────────────────┴────────────────────┘
 *     ^ flower image at -z-10, bottom-left, behind everything
 *
 * - Left text column has z-10 + negative right margin so "ASHTANGA" overlaps
 *   the right column.
 * - Right column is a tall stone-200 placeholder (`h-[60vh] md:h-[80vh]`)
 *   carrying a generic placeholder image, vertically offset down.
 * - Decorative flower sits at the section's bottom-left, behind the text.
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
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        delay: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative bg-sand-50 overflow-hidden">
      {/* ── Decorative flower — bottom-left, behind the text ───────── */}
      <img
        src={FLOWER_SRC}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 -z-10 w-32 md:w-48 lg:w-56 h-auto object-contain opacity-80 pointer-events-none select-none"
      />

      <div className="container-px mx-auto max-w-7xl pt-24 pb-20 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
        <div className="relative grid md:grid-cols-2 gap-0 items-start">
          {/* ─── Left column — typography (z-10, overlaps onto image) ─── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 pr-4 md:pr-8"
          >
            {/* "YOGA STUDIO" — top headline */}
            <motion.h1
              variants={item}
              className="font-serif text-[14vw] md:text-[9vw] lg:text-[8.2rem] leading-[0.92] tracking-tight text-stone-900 uppercase"
            >
              Yoga
              <br />
              <span className="block">Studio</span>
            </motion.h1>

            {/* "ASHTANGA" — breaks out of the left column to overlap the photo */}
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
          </motion.div>

          {/* ─── Right column — large offset placeholder (stone-200 box) ── */}
          <motion.div
            variants={imageAnim}
            initial="hidden"
            animate="show"
            // vertical offset — starts MUCH lower than the top of the text
            className="relative z-0 mt-12 md:mt-32 lg:mt-40"
          >
            <div className="w-full h-[60vh] md:h-[80vh] bg-stone-200 rounded-sm overflow-hidden">
              {/* Generic placeholder image so the layout takes shape */}
              <img
                src="https://placehold.co/900x1200/d6d3d1/57534e?text=YOGA+IMAGE"
                alt="Yoga image placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}