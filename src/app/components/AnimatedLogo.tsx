// src/app/components/AnimatedLogo.tsx
'use client'

// 1. Import the 'Variants' type from framer-motion
import { motion, Variants } from 'framer-motion';

// 2. Explicitly type the variants objects with ': Variants'
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut', // TypeScript now understands this is a valid Easing string
      duration: 0.5,
    },
  },
};

export default function AnimatedLogo() {
  const logoText = "BitByBit";

  return (
    <motion.div
      className="flex items-baseline text-4xl sm:text-5xl font-extrabold"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {logoText.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {index < 3 ? (
            <span className="text-slate-50 ">
              {letter}
            </span>
          ) : (
            <span className="text-slate-50">{letter}</span>
          )}
        </motion.span>
      ))}
    </motion.div>
  );
}