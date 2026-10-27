"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const blockVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const textVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.065 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
};

function Words({ text }: { text: string }) {
  return text.split(" ").map((word, index, words) => (
    <motion.span className="contactMotionWord" variants={wordVariants} key={`${word}-${index}`}>
      {word}{index < words.length - 1 ? " " : ""}
    </motion.span>
  ));
}

export default function ContactIntroMotion() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div className="contactIntroBlock" variants={blockVariants} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
      <motion.p className="contactEyebrow" variants={textVariants}><Words text="Nous joindre" /></motion.p>
      <motion.h2 variants={textVariants}><Words text="Choisissez le moyen le plus simple." /></motion.h2>
      <motion.p variants={textVariants}><Words text="Notre équipe est à votre écoute pour les lubrifiants, la peinture automobile et les produits moto." /></motion.p>
    </motion.div>
  );
}
