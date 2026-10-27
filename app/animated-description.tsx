"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type AnimatedDescriptionProps = { text: string; className?: string; delay?: number };

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({ transition: { delayChildren: delay, staggerChildren: 0.045 } }),
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(7px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function AnimatedDescription({ text, className, delay = 0 }: AnimatedDescriptionProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return <motion.p className={className} variants={containerVariants} custom={delay} initial={reduceMotion ? false : "hidden"} animate="visible">{words.map((word, index) => <motion.span className="animatedDescriptionWord" variants={wordVariants} key={`${word}-${index}`}>{word}{index < words.length - 1 ? " " : ""}</motion.span>)}</motion.p>;
}
