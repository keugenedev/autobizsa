"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.28,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroStatement() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.p
        className="heroStatement"
        variants={containerVariants}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.span className="heroLine" variants={lineVariants}>LA QUALITÉ</motion.span>
        <motion.strong className="heroLine" variants={lineVariants}>QUI VOUS</motion.strong>
        <motion.span className="heroLine" variants={lineVariants}>FAIT AVANCER.</motion.span>
      </motion.p>
      <span className="heroRightTraces" aria-hidden="true" />
    </>
  );
}
