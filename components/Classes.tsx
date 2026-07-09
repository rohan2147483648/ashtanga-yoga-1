"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User } from "lucide-react";
import { classes, type ClassItem } from "@/lib/data";

const days: ClassItem["day"][] = [
  "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
];

const dayLabels: Record<ClassItem["day"], string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Classes() {
  const [active, setActive] = useState<ClassItem["day"]>("Mon");

  const todays = classes.filter((c) => c.day === active);

  return (
    <section id="classes" className="py-24 md:py-32 bg-sand-100/50">
      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Weekly Schedule</span>
          <h2 className="h-section mt-4">
            Classes for every body,{" "}
            <span className="italic text-sage-600">every level.</span>
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            Browse the week ahead. All classes can be booked online — first
            class is always free for new students.
          </p>
        </motion.div>

        {/* Day tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2"
        >
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setActive(d)}
              className={`relative shrink-0 px-5 py-3 rounded-full text-[12px] uppercase tracking-[0.25em] font-medium transition-all duration-300
                ${
                  active === d
                    ? "bg-sage-600 text-sand-50 shadow-soft scale-[1.02]"
                    : "bg-sand-50 text-ink-soft hover:bg-sand-200"
                }`}
            >
              {dayLabels[d]}
            </button>
          ))}
        </motion.div>

        {/* Timetable */}
        <div className="mt-10 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid gap-4 md:gap-5"
            >
              {todays.length === 0 && (
                <div className="card p-10 text-center text-ink-mute">
                  No classes scheduled.
                </div>
              )}
              {todays.map((c, i) => (
                <motion.article
                  key={`${active}-${c.time}-${c.name}`}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  whileHover={{ y: -3 }}
                  className="card grid md:grid-cols-[120px_1fr_auto] items-center gap-4 md:gap-8 p-5 md:p-7 hover:shadow-lift"
                >
                  {/* Time */}
                  <div className="flex items-center md:flex-col md:items-start gap-2">
                    <span className="font-serif text-3xl md:text-4xl text-sage-700 leading-none">
                      {c.time}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-ink-mute">
                      {c.duration}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-serif text-xl md:text-2xl text-ink">
                        {c.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 rounded-full bg-sage-100 text-sage-700">
                        {c.level}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink-soft">
                      <span className="inline-flex items-center gap-1.5">
                        <User size={14} className="text-sage-500" />
                        {c.instructor}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} className="text-sage-500" />
                        {c.duration}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="md:justify-self-end">
                    <a
                      href="#contact"
                      className="btn-primary !py-2.5 !px-5 !text-[11px]"
                    >
                      Book now
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}