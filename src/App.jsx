import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import TechStack  from "./components/Techstack";
import Work       from "./components/Work";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

// ── Scroll progress bar at the top ──────────────────────────────
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, originX: 0 }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-400 z-[9999]"
    />
  );
}

// ── Each section fades up + reveals on scroll ────────────────────
function Section({ children, delay = 0 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.6"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y       = useTransform(scrollYProgress, [0, 1], [48, 0]);

  const smoothOpacity = useSpring(opacity, { stiffness: 80, damping: 20 });
  const smoothY       = useSpring(y,       { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ opacity: smoothOpacity, y: smoothY }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Divider that scales in from left ────────────────────────────
function Divider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.75"],
  });
  const scaleX  = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.hr
        style={{ scaleX, opacity, originX: 0 }}
        className="border-white/10"
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-400 antialiased">
      <ScrollProgressBar />
      <Navbar />

      <main>
        {/* Hero — no scroll animation, it's above the fold */}
        <Hero />

        <Divider />
        <Section><About /></Section>

        <Divider />
        <Section><TechStack /></Section>

        <Divider />
        <Section><Work /></Section>

        <Divider />
        <Section><Experience /></Section>

        <Divider />
        <Section><Contact /></Section>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}