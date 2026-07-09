"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { products } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const categories = [
  "All",
  "Mats",
  "Accessories",
  "Props",
  "Home",
  "Wellness",
];

export default function Shop() {
  const [active, setActive] = useState<string>("All");
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  const handleAdd = (name: string) => {
    setAdded((a) => ({ ...a, [name]: true }));
    setTimeout(
      () => setAdded((a) => ({ ...a, [name]: false })),
      1800
    );
  };

  return (
    <section id="shop" className="py-24 md:py-32 bg-sand-100/40">
      <div className="container-px mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="eyebrow">The Shop</span>
            <h2 className="h-section mt-4">
              Considered essentials{" "}
              <span className="italic text-sage-600">for your practice.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-sm text-ink-soft leading-relaxed"
          >
            Sustainably made mats, props and small-batch home goods — the
            things we use and love every day at the studio.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300
                ${
                  active === c
                    ? "bg-ink text-sand-50 shadow-soft"
                    : "bg-sand-50 text-ink-soft hover:bg-sand-200"
                }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="mt-10 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7"
            >
              {filtered.map((p, i) => (
                <motion.article
                  key={p.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  whileHover={{ y: -6 }}
                  className="group card hover:shadow-lift"
                >
                  <div className="relative aspect-square overflow-hidden bg-sand-200">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    {p.tag && (
                      <span className="absolute top-3 left-3 bg-sand-50/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] text-sage-700 font-medium">
                        {p.tag}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-ink-mute">
                      {p.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg text-ink leading-snug">
                      {p.name}
                    </h3>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-serif text-lg text-sage-700">
                        ${p.price}
                      </span>
                      <button
                        onClick={() => handleAdd(p.name)}
                        aria-label={`Add ${p.name} to cart`}
                        className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300
                          ${
                            added[p.name]
                              ? "bg-sage-600 text-sand-50"
                              : "bg-sand-50 text-ink border border-sage-600/30 hover:bg-sage-600 hover:text-sand-50 hover:scale-[1.04]"
                          }`}
                      >
                        <AnimatePresence mode="wait">
                          {added[p.name] ? (
                            <motion.span
                              key="added"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="inline-flex items-center gap-1"
                            >
                              <Check size={12} /> Added
                            </motion.span>
                          ) : (
                            <motion.span
                              key="cart"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="inline-flex items-center gap-1"
                            >
                              <ShoppingBag size={12} /> Add
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
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