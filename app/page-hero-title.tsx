"use client";

import { useEffect } from "react";
import { motion, useAnimation, useReducedMotion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";

type HeroLine = { text: string; emphasis?: boolean };
type PageHeroTitleProps = { lines: HeroLine[]; route: string };

const titleVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.22, staggerChildren: 0.13 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] } },
};

export default function PageHeroTitle({ lines, route }: PageHeroTitleProps) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const controls = useAnimation();

  useEffect(() => {
    if (reduceMotion || pathname !== route) return;
    controls.set("hidden");
    const frame = requestAnimationFrame(() => controls.start("visible"));
    return () => cancelAnimationFrame(frame);
  }, [controls, pathname, reduceMotion, route]);

  return (
    <motion.h1 variants={titleVariants} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? "visible" : controls}>
      {lines.map(({ text, emphasis }) => (
        <span className="pageHeroTitleLine" key={text}>
          {text.split(" ").map((word, index, words) => (
            <motion.span className={emphasis ? "pageHeroTitleWord pageHeroTitleEmphasis" : "pageHeroTitleWord"} variants={wordVariants} key={`${word}-${index}`}>
              {word}{index < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
