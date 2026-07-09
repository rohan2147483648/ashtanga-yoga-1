"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Full-bleed, scroll-linked typography band. As the user scrolls through
 * the (tall) section, two massive rows of text drift in opposite directions.
 *
 * - Background: yoga-themed photo, soft, light & blurred so the type stays high-contrast.
 * - Tracks scrollYProgress of the section via `useScroll` + `useTransform`.
 * - Parent has `overflow-hidden` so the huge text never produces horizontal scrollbars.
 */
export default function BookClass() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Row 1 → drifts left-to-right
  const x1 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  // Row 2 → drifts right-to-left (italic accent)
  const x2 = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  // Subtle fade so the rows appear/disappear softly at the edges of the scroll
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      id="book"
      aria-label="Book a class"
      className="relative h-[150vh] overflow-hidden isolate"
    >
      {/* ── Background photo ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
      </div>

      {/* ── Soft, blurred overlay (light for high contrast on dark type) ─── */}
      <div className="absolute inset-0 -z-10 bg-white/70 backdrop-blur-md" />
      {/* Subtle vertical fade to integrate with the page edges */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sand-50 to-transparent -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sand-50 to-transparent -z-10" />

      {/* ── Sticky stage that holds the type inside the viewport ─────────── */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-2">
        {/* Row 1 — left → right */}
        <div className="w-full overflow-hidden">
          <motion.div
            style={{ x: x1, opacity }}
            className="whitespace-nowrap will-change-transform"
          >
            <h2 className="font-serif text-[8vw] md:text-[6vw] leading-none text-stone-900 whitespace-nowrap tracking-tight">
              Book a Class — Ashtanga Yoga —
            </h2>
          </motion.div>
        </div>

        {/* Row 2 — right → left (italic accent, sage) */}
        <div className="w-full overflow-hidden mt-2 md:mt-4">
          <motion.div
            style={{ x: x2, opacity }}
            className="whitespace-nowrap will-change-transform"
          >
            <h2 className="font-serif italic text-[8vw] md:text-[6vw] leading-none text-sage-700 whitespace-nowrap tracking-tight">
              Find Your Flow — Breathe, Move, Return —
            </h2>
          </motion.div>
        </div>

        {/* CTA — small, centered, anchored under the type */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-20"
        >
          <a href="#classes" className="btn-primary">
            Reserve Your Spot
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}