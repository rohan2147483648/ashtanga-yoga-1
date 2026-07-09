"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Testimonial() {
  return (
    <section className="relative py-24 md:py-32 bg-sand-50 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <span className="eyebrow">From our students</span>
          <blockquote className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-ink">
            <span className="text-sage-400">“</span>I came for the classes and
            stayed for the people. Three years on, this studio has changed the
            way I move through the world.<span className="text-sage-400">”</span>
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden relative bg-sand-200">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                alt="Student portrait"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-serif text-lg text-ink">Priya Sharma</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-ink-mute">
                Member since 2022
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-5">
          {[
            {
              n: "1,200+",
              l: "Active members",
              image:
                "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=600&q=80",
            },
            {
              n: "98%",
              l: "Renewal rate",
              image:
                "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
            },
            {
              n: "4.9",
              l: "Average rating",
              image:
                "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80",
            },
            {
              n: "8 yrs",
              l: "Avg. teaching experience",
              image:
                "https://images.unsplash.com/photo-1599901860904-17e6d7083a67?auto=format&fit=crop&w=600&q=80",
            },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft bg-sand-200"
            >
              <img
                src={s.image}
                alt={s.l}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/85 via-sage-900/30 to-transparent" />
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-sand-50">
                <div className="font-serif text-3xl md:text-4xl">{s.n}</div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-sand-100/80 mt-1">
                  {s.l}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}