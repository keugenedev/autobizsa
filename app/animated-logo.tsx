"use client";

import { motion, useReducedMotion } from "framer-motion";

type AnimatedLogoProps = {
  src: string;
  alt: string;
  index: number;
  imageClassName?: string;
  href?: string;
};

export default function AnimatedLogo({ src, alt, index, imageClassName, href }: AnimatedLogoProps) {
  const reduceMotion = useReducedMotion();

  const logo = (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(9px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reduceMotion ? 0 : 1.3,
        delay: reduceMotion ? 0 : index * 0.18,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <img className={imageClassName} src={src} alt={alt} />
    </motion.div>
  );

  return href ? <a href={href} aria-label={`Découvrir ${alt}`}>{logo}</a> : logo;
}
