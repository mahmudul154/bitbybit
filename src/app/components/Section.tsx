// src/app/components/Section.tsx
'use client'

import React from 'react'
// 1. Import the 'Variants' type from framer-motion
import { motion, Variants } from 'framer-motion'

// 2. Explicitly type your variants objects with ': Variants'
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' // TypeScript now understands this is a valid Easing string
    }
  },
};

export default function Section({
  id, title, subtitle, children,
}: { id: string; title:string; subtitle?: string; children: React.ReactNode }) {

  return (
    <motion.section
      id={id}
      className="py-12 sm:py-14"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header 
          className="mb-8 text-left"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50">{title}</h2>
          {subtitle && <p className="mt-2 text-slate-400 max-w-3xl">{subtitle}</p>}
        </motion.header>

        {children}
      </div>
    </motion.section>
  )
}

// 3. Export the correctly typed variants object
export { itemVariants };