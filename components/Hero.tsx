"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

/**
 * Hero — staggered fade-in for text + Ken Burns / parallax background.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: background image translates upward as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Staggered text variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18, delayChildren: 0.35 },
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

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center"
    >
      {/* Background image — Ken Burns + parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns will-change-transform"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sand-50/30 via-sand-50/20 to-sand-50/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-sand-50/40 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container-px mx-auto max-w-7xl w-full pt-32 pb-24"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
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
            className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-ink"
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
                <div className="font-serif text-3xl lg:text-4xl text-sage-700">
                  {s.n}
                </div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-ink-mute mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-mute"
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