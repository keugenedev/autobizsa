"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SlideRevealProps = { children: ReactNode; from: "top" | "bottom"; delay?: number };

export default function SlideReveal({ children, from, delay = 0 }: SlideRevealProps) {
  const reduceMotion = useReducedMotion();
  const y = from === "top" ? -58 : 58;

  return <motion.div className="contactCardMotion" initial={reduceMotion ? false : { opacity: 0, y, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduceMotion ? 0 : 1.2, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}
