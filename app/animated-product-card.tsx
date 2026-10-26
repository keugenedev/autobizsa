"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimatedProductCardProps = {
  title: string;
  text: string;
  index: number;
};

export default function AnimatedProductCard({ title, text, index }: AnimatedProductCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduceMotion ? 0 : 1.3,
        delay: reduceMotion ? 0 : index * 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.article>
  );
}
