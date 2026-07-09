"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { retreats } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Retreats() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax for the section background image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="retreats"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-sand-50/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-50/40 via-transparent to-sand-50/70" />
      </motion.div>

      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="eyebrow !text-stone-800">Retreats & Events</span>
          <h2 className="h-section mt-4 !text-stone-900">
            Step away,{" "}
            <span className="italic text-sage-600">slow down, return.</span>
          </h2>
          <p className="mt-5 text-stone-800 text-lg leading-relaxed">
            Three curated retreats a year — small groups, beautiful places,
            daily practice, and time to simply be.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid lg:grid-cols-3 gap-7 md:gap-8">
          {retreats.map((r, i) => (
            <motion.article
              key={r.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-sand-50 shadow-lift flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand-200">
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-sand-50/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.25em] text-sage-700 font-medium">
                  {r.days} Nights
                </div>
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-ink leading-snug">
                  {r.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-mute">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-sage-500" />
                    {r.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-sage-500" />
                    {r.date}
                  </span>
                </div>

                <p className="mt-4 text-sm text-ink-soft leading-relaxed flex-1">
                  {r.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-serif text-xl text-sage-700">
                    {r.price}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ink hover:text-sage-600 transition-colors group/btn"
                  >
                    Reserve
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}