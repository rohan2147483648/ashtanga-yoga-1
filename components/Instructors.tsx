"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { instructors } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Instructors() {
  return (
    <section id="instructors" className="py-24 md:py-32 bg-sand-50">
      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Our Teachers</span>
          <h2 className="h-section mt-4">
            Steady, considered{" "}
            <span className="italic text-sage-600">guides on the mat.</span>
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            A small team of senior teachers, each rooted in their own lineage
            and dedicated to the craft of slow, intentional teaching.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9">
          {instructors.map((p, i) => (
            <motion.article
              key={p.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="group card hover:shadow-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                {/* Soft warm overlay on hover */}
                <div className="absolute inset-0 bg-sage-900/0 group-hover:bg-sage-900/10 transition-colors duration-500" />
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl text-ink">{p.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-sage-500">
                    {p.role.split(" ")[0]}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-ink-mute">
                  {p.role}
                </p>

                <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                  {p.bio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 rounded-full bg-sand-200 text-ink-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}