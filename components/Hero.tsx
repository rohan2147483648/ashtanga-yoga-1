"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

/**
 * Asymmetric editorial hero:
 *   - Left half  → solid sand background, stacked type, CTAs
 *   - Right half → two offset image cards that overlap into the left column
 *
 * Animations:
 *   - Staggered fade + slide for the type on mount (Framer Motion variants)
 *   - Subtle image hover zoom (Tailwind transition)
 *   - Scroll-down cue with looping bounce
 */
export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18, delayChildren: 0.25 },
    },
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
    hidden: { opacity: 0, scale: 1.04 },
    show: (i: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.3 + i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative bg-sand-50 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl pt-32 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
        {/* Asymmetric grid: text on left, offset image cards on right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* ─── Left column — type ─────────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.span
              variants={item}
              className="eyebrow inline-flex items-center gap-3"
            >
              <span className="h-px w-10 bg-sage-500" />
              Established 2014 · Studio & Online
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight text-stone-900"
            >
              A quiet space{" "}
              <span className="italic text-sage-600">to breathe,</span>
              <br />
              move & return.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 text-lg lg:text-xl text-ink-soft leading-relaxed max-w-xl"
            >
              Small classes, considered teaching and a community rooted in the
              traditions of Ashtanga, Vinyasa and Hatha — in the heart of the
              city and online from anywhere.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#classes" className="btn-primary">
                Book a Class
                <ArrowRight size={16} />
              </a>
              <a href="#retreats" className="btn-ghost">
                Explore Retreats
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={item}
              className="mt-16 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { n: "12+", l: "Years teaching" },
                { n: "40+", l: "Weekly classes" },
                { n: "6", l: "Senior teachers" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl lg:text-4xl text-sage-700 tracking-tight">
                    {s.n}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-ink-mute mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right column — offset image block ──────────────── */}
          <div className="lg:col-span-5 relative h-[460px] sm:h-[560px] lg:h-[640px]">
            {/* Primary image — large, offset up */}
            <motion.div
              custom={0}
              variants={imageAnim}
              initial="hidden"
              animate="show"
              className="absolute top-0 right-0 w-[88%] h-[78%] rounded-2xl overflow-hidden shadow-lift bg-sand-200 group"
            >
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80"
                alt="Yoga practitioner in silhouette"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
            </motion.div>

            {/* Secondary image — smaller, offset into the left column */}
            <motion.div
              custom={1}
              variants={imageAnim}
              initial="hidden"
              animate="show"
              className="absolute -left-4 sm:left-0 lg:-left-12 bottom-0 w-[58%] sm:w-[52%] h-[55%] rounded-2xl overflow-hidden shadow-lift ring-8 ring-sand-50 bg-sand-200 group"
            >
              <img
                src="https://images.unsplash.com/photo-1599901860904-17e6d7083a67?auto=format&fit=crop&w=900&q=80"
                alt="Long-hold pose"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
            </motion.div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-2 sm:right-4 bottom-6 sm:bottom-10 bg-sand-50 rounded-2xl shadow-lift px-5 py-4 max-w-[220px]"
            >
              <div className="font-serif text-2xl text-sage-700 tracking-tight">
                12+
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-ink-mute mt-1">
                Years of practice
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-mute"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}