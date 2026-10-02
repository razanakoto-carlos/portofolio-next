"use client";

import { useRef, type ReactNode } from "react";
import { m, useScroll, useSpring, useTransform } from "framer-motion";

// ── Scroll progress bar at the top ──────────────────────────────
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      style={{ scaleX, originX: 0 }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-400 light:bg-emerald-500 z-[9999]"
    />
  );
}

// ── Each section fades up + reveals on scroll ────────────────────
export function Section({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.6"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y       = useTransform(scrollYProgress, [0, 1], [48, 0]);

  const smoothOpacity = useSpring(opacity, { stiffness: 80, damping: 20 });
  const smoothY       = useSpring(y,       { stiffness: 80, damping: 20 });

  return (
    <m.div
      ref={ref}
      style={{ opacity: smoothOpacity, y: smoothY }}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}

// ── Divider that scales in from left ────────────────────────────
export function Divider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.75"],
  });
  const scaleX  = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <m.hr
        style={{ scaleX, opacity, originX: 0 }}
        className="border-white/10 light:border-slate-200"
      />
    </div>
  );
}

// ── Fades in once when scrolled into view ───────────────────────
export function FadeInView({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </m.div>
  );
}
