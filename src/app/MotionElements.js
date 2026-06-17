"use client";

import { motion, useReducedMotion } from "framer-motion";

const variants = {
  rise: { opacity: 0, y: 34 },
  softRise: { opacity: 0, y: 18 },
  fade: { opacity: 0 },
  left: { opacity: 0, x: -42 },
  right: { opacity: 0, x: 42 },
  scale: { opacity: 0, scale: 0.94 },
  pop: { opacity: 0, y: 18, scale: 0.96 },
};

const motionByTag = {
  article: motion.article,
  div: motion.div,
  form: motion.form,
  footer: motion.footer,
  header: motion.header,
  main: motion.main,
  section: motion.section,
};

export function MotionBlock({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.72,
  kind = "rise",
  once = true,
  stagger = 0,
  viewportAmount = 0.18,
  whileHover,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = motionByTag[as] || motion.div;
  const initial = variants[kind] || variants.rise;

  if (reduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: viewportAmount, margin: "0px 0px -80px 0px" }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: stagger,
      }}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </Component>
  );
}

export function MotionItem({
  children,
  className,
  delay = 0,
  kind = "softRise",
  whileHover = { y: -5 },
  ...props
}) {
  return (
    <MotionBlock
      className={className}
      delay={delay}
      kind={kind}
      viewportAmount={0.12}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </MotionBlock>
  );
}
