"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone, Check } from "lucide-react";

const linkGroups = [
  {
    title: "Studio",
    links: [
      { label: "Classes", href: "#classes" },
      { label: "Teachers", href: "#instructors" },
      { label: "Retreats", href: "#retreats" },
      { label: "Pricing", href: "#contact" },
    ],
  },
  {
    title: "Practice",
    links: [
      { label: "What to bring", href: "#contact" },
      { label: "Beginners' guide", href: "#contact" },
      { label: "Private sessions", href: "#contact" },
      { label: "Corporate yoga", href: "#contact" },
    ],
  },
  {
    title: "Studio Life",
    links: [
      { label: "Journal", href: "#contact" },
      { label: "Workshops", href: "#contact" },
      { label: "Teacher training", href: "#contact" },
      { label: "Gift cards", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer id="contact" className="bg-sage-900 text-sand-100">
      {/* Newsletter band */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        className="container-px mx-auto max-w-7xl py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center"
      >
        <div>
          <span className="eyebrow !text-sand-200">Newsletter</span>
          <h3 className="mt-3 font-serif text-3xl md:text-4xl text-sand-50 leading-tight">
            Quiet letters from the studio —{" "}
            <span className="italic text-sand-200">once a month.</span>
          </h3>
          <p className="mt-4 text-sand-200/80 max-w-md">
            Class updates, retreat announcements and short essays on practice.
            No spam, ever.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 lg:justify-end"
        >
          <div className="relative flex-1 lg:max-w-sm">
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-300"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-sand-50/10 border border-sand-50/15 text-sand-50 placeholder:text-sand-200/50 focus:outline-none focus:border-sand-200 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sand-50 text-sage-900 font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-sand-200 hover:scale-[1.03] active:scale-[0.99]"
          >
            {subscribed ? (
              <>
                <Check size={16} /> Subscribed
              </>
            ) : (
              <>Subscribe</>
            )}
          </button>
        </form>
      </motion.div>

      <div className="border-t border-sand-50/10">
        <div className="container-px mx-auto max-w-7xl py-16 grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          {/* Brand + contact */}
          <div>
            <div className="font-serif text-3xl text-sand-50">Ashtanga</div>
            <p className="mt-3 text-sm text-sand-200/70 leading-relaxed max-w-xs">
              A small independent yoga studio dedicated to traditional
              teaching, slow practice and a quiet community.
            </p>

            <div className="mt-6 space-y-2 text-sm text-sand-200/80">
              <p className="inline-flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                12 Linden Lane, Studio 3<br />
                Open Mon — Sat, 6am — 9pm
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone size={14} /> +1 (555) 248-9013
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail size={14} /> hello@ashtanga.studio
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full grid place-items-center bg-sand-50/10 hover:bg-sand-50 hover:text-sage-900 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {linkGroups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-sand-200 font-medium">
                {g.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-sand-100/85 hover:text-sand-50 transition-colors duration-300 hover:underline underline-offset-4"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-sand-50/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-sand-200/60">
          <p>© {new Date().getFullYear()} Ashtanga Yoga Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sand-50 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-sand-50 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-sand-50 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}