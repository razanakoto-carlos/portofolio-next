"use client";

import type { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

// Charge seulement les fonctionnalités d'animation utilisées (animate, exit, whileInView) :
// les composants utilisent `m` au lieu de `motion`, sans drag ni layout animations
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
