"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-sand-50">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Images collage */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative h-[520px] lg:h-[600px]"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute top-0 left-0 w-[68%] h-[70%] rounded-2xl overflow-hidden shadow-lift"
          >
            <Image
              src="https://images.unsplash.com/photo-1599901860904-17e6d7083a67?auto=format&fit=crop&w=1100&q=80"
              alt="Practitioner in a long hold pose"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-lift ring-8 ring-sand-50"
          >
            <Image
              src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=900&q=80"
              alt="Hands at heart centre in meditation"
              fill
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="object-cover"
            />
          </motion.div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-4 left-6 bg-sand-50 rounded-2xl shadow-lift px-6 py-5 max-w-[260px]"
          >
            <div className="font-serif text-3xl text-sage-700">12+</div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink-mute mt-1">
              Years of practice, teaching & community
            </p>
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span className="eyebrow">Our Philosophy</span>
          <h2 className="h-section mt-4">
            Yoga, practiced slowly,{" "}
            <span className="italic text-sage-600">becomes a way of living.</span>
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            We are a small, independent studio that has grown slowly and
            intentionally. Our teachers carry decades of combined experience
            across Ashtanga, Vinyasa, Hatha and Prenatal yoga — and we hold a
            quiet commitment to keeping the practice accessible, traditional and
            deeply personal.
          </p>
          <p className="mt-4 text-ink-soft text-lg leading-relaxed">
            Whether you step onto the mat for the first time or return after
            years away, we meet you exactly where you are.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { k: "Ashtanga", v: "Mysore & led classes daily" },
              { k: "Vinyasa", v: "Slow, breath-led sequencing" },
              { k: "Hatha", v: "Foundations for beginners" },
              { k: "Prenatal", v: "Trimester-aware, supportive" },
            ].map((b) => (
              <div key={b.k} className="max-w-[180px]">
                <div className="font-serif text-xl text-ink">{b.k}</div>
                <p className="text-sm text-ink-mute mt-1">{b.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}