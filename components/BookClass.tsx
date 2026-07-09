"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Full-bleed, scroll-linked typography band.
 * - Tracks scrollYProgress of the section via `useScroll` + `useTransform`.
 * - Both rows converge at exactly 0% x-translation at the section's midpoint,
 *   so the type is perfectly centered horizontally when it sits in the
 *   vertical center of the viewport.
 * - Parent has `overflow-hidden` so the huge text never produces
 *   horizontal page scroll.
 */
export default function BookClass() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Row 1 — drifts right→left, crosses through 0% at scroll progress 0.5
  const x1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "0%", "-100%"]
  );
  // Row 2 — drifts left→right, also crosses through 0% at midpoint
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-50%", "0%", "50%"]
  );

  // Soft fade at the runway edges so the text fades in & out gracefully
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      id="book"
      aria-label="Book a class"
      className="relative h-[150vh] overflow-hidden isolate"
    >
      {/* ── Background photo ───────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
      </div>

      {/* ── Soft, blurred light overlay for high-contrast dark type ────── */}
      <div className="absolute inset-0 -z-10 bg-white/70 backdrop-blur-md" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sand-50 to-transparent -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sand-50 to-transparent -z-10" />

      {/* ── Sticky stage — perfectly centered, no top padding/margin ── */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-2">
        {/* Row 1 — right → left, hits 0% at midpoint */}
        <div className="w-full overflow-hidden">
          <motion.div
            style={{ x: x1, opacity }}
            className="whitespace-nowrap will-change-transform"
          >
            <h2 className="font-serif text-[8vw] md:text-[6vw] leading-none text-stone-900 whitespace-nowrap tracking-tight">
              Book a Class — Ashtanga Yoga
            </h2>
          </motion.div>
        </div>

        {/* Row 2 — left → right, italic accent in sage */}
        <div className="w-full overflow-hidden">
          <motion.div
            style={{ x: x2, opacity }}
            className="whitespace-nowrap will-change-transform"
          >
            <h2 className="font-serif italic text-[6vw] md:text-[4vw] leading-none text-sage-700 whitespace-nowrap tracking-tight">
              Find Your Flow — Breathe, Move, Return
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