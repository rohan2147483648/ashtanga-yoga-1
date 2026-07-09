"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { navGroups, type MenuItem } from "@/lib/menu";

/* ─────────────────────────  Sub-menu (nested)  ───────────────────────── */

function SubMenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="py-2">
      {items.map((it) => (
        <li key={it.label}>
          <a
            href={it.href}
            className="block px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] font-medium text-ink/85 hover:text-sage-600 hover:bg-sand-100 transition-colors duration-200"
          >
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────────────  Dropdown item (top-level)  ───────────────── */

function DropdownItem({ item }: { item: MenuItem }) {
  const [openSub, setOpenSub] = useState(false);
  const hasSub = !!item.children?.length;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasSub && setOpenSub(true)}
      onMouseLeave={() => hasSub && setOpenSub(false)}
    >
      <a
        href={item.href}
        className="group flex items-center justify-between px-5 py-3 text-[12px] uppercase tracking-[0.18em] font-medium text-ink/85 hover:text-sage-600 transition-colors duration-200"
      >
        <span>{item.label}</span>
        {hasSub && (
          <ChevronRight
            size={12}
            className="text-ink-mute group-hover:text-sage-600 transition-colors"
          />
        )}
      </a>

      {/* Nested fly-out */}
      <AnimatePresence>
        {hasSub && openSub && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-0 left-full ml-1 min-w-[200px] bg-sand-50 rounded-xl shadow-lift ring-1 ring-ink/5"
          >
            <SubMenuList items={item.children!} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────  Top-level dropdown panel  ────────────────── */

function NavGroupMenu({ items }: { items: MenuItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      // Anchor directly beneath the parent nav item.
      // - `left-0` keeps the dropdown flush with the left edge of the label.
      // - `top-full` places the panel right below the trigger.
      // - No translate-x so it never drifts off-center.
      className="absolute left-0 top-full mt-3 min-w-[220px] bg-sand-50 rounded-2xl shadow-lift ring-1 ring-ink/5 overflow-hidden"
    >
      <SubMenuList items={items} />
    </motion.div>
  );
}

/* ─────────────────────────  Top-level nav item (with hover)  ─────────── */

function NavItem({
  label,
  items,
  open,
  onOpen,
  onClose,
}: {
  label: string;
  items: MenuItem[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className="text-[12px] uppercase tracking-[0.28em] font-medium text-ink/85 hover:text-sage-600 transition-colors duration-300 px-1 py-2 inline-flex items-center"
      >
        {label}
      </button>

      <AnimatePresence>
        {open && <NavGroupMenu items={items} />}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────  Mobile drawer  ───────────────────────────── */

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 bg-sand-50/97 backdrop-blur-md md:hidden"
        >
          <div className="container-px mx-auto max-w-7xl pt-24 pb-10 h-full overflow-y-auto">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-sand-200 transition"
            >
              <X size={22} />
            </button>

            <ul className="flex flex-col divide-y divide-ink/10">
              {navGroups.map((g) => (
                <li key={g.label} className="py-3">
                  <div className="text-[10px] uppercase tracking-[0.35em] text-sage-500 mb-2">
                    {g.label}
                  </div>
                  <ul className="grid gap-1">
                    {g.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          onClick={onClose}
                          className="block py-2 text-[15px] text-ink hover:text-sage-600 transition-colors"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <a
              href="#classes"
              onClick={onClose}
              className="btn-primary mt-8 w-full justify-center"
            >
              Book Class
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────  Burger icon (two lines)  ─────────────────── */

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative inline-block w-6 h-4">
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute left-0 right-0 top-0 h-px bg-current"
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-current"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute left-0 right-0 bottom-0 h-px bg-current"
      />
    </span>
  );
}

/* ─────────────────────────  Main exported component  ──────────────────── */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll to switch the nav from transparent → solid background.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || openIdx !== null
            ? "bg-sand-50/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
          {/* ─────── Left: Brand ─────── */}
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl tracking-tight text-ink">
              Ashtanga
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.4em] text-sage-500">
              Yoga Studio
            </span>
          </a>

          {/* ─────── Middle: 6 nav items ─────── */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navGroups.map((g, i) => (
              <NavItem
                key={g.label}
                label={g.label}
                items={g.children}
                open={openIdx === i}
                onOpen={() => setOpenIdx(i)}
                onClose={() =>
                  setOpenIdx((cur) => (cur === i ? null : cur))
                }
              />
            ))}
          </nav>

          {/* ─────── Right: Book Class + burger ─────── */}
          <div className="flex items-center gap-5">
            <a
              href="#classes"
              className="group relative hidden md:inline-flex text-[11px] uppercase tracking-[0.3em] font-medium text-ink hover:text-sage-600 transition-colors"
            >
              Book Class
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-sage-600 transition-all duration-300 group-hover:w-full" />
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 text-ink hover:text-sage-600 transition-colors"
            >
              <BurgerIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}