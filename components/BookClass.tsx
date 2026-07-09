"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BookClass() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // ROW 1: Changed to 50% so it glides smoothly instead of rushing off screen
  const x1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["50%", "0%", "-50%"]
  );
  
  // ROW 2: Fixed the extreme 500% typo to perfectly mirror Row 1
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-50%", "0%", "50%"]
  );

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
      {/* Background photo */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
      </div>

      {/* Soft, blurred light overlay */}
      <div className="absolute inset-0 -z-10 bg-white/70 backdrop-blur-md" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sand-50 to-transparent -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sand-50 to-transparent -z-10" />

      {/* Sticky stage: Added 'gap-6 md:gap-10' to give the text breathing room */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-2 gap-6 md:gap-10">
        
        {/* Row 1 */}
        <div className="w-full overflow-hidden flex justify-center">
          <motion.div
            style={{ x: x1, opacity }}
            className="whitespace-nowrap will-change-transform"
          >
            {/* Balanced font size to 10vw/8vw */}
            <h2 className="font-serif text-[10vw] md:text-[8vw] leading-none text-stone-900 whitespace-nowrap tracking-tight pb-2">
              Book a Class — Ashtanga Yoga
            </h2>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="w-full overflow-hidden flex justify-center">
          <motion.div
            style={{ x: x2, opacity }}
            className="whitespace-nowrap will-change-transform"
          >
            {/* Balanced font size to match Row 1 perfectly */}
            <h2 className="font-serif italic text-[10vw] md:text-[8vw] leading-none text-sage-700 whitespace-nowrap tracking-tight pb-2">
              Find Your Flow — Breathe, Move, Return
            </h2>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-12"
        >
          <a href="#classes" className="btn-primary flex items-center gap-2">
            Reserve Your Spot
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}