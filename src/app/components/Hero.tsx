// src/app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion' // Import framer-motion
import { StatsRow } from './Stats'
import ChipCarousel from './ChipCarousel';

// Define the data for the desktop buttons
const desktopChips = [
  { text: "🎮 গেম", href: "#game" },
  { text: "🏆 অলিম্পিয়াড", href: "#olympic" },
  { text: "🔴 লাইভ মডেল টেস্ট", href: "#live" },
  { text: "📚 প্রশ্নব্যাংক", href: "#previous" },
  { text: "📝 অধ্যায়ভিত্তিক পরীক্ষা", href: "#topics" },
  { text: "📊 র‍্যাঙ্কিং ও অ্যানালিটিক্স", href: "#exams" },
];

// Animation variants for the container and its children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each child animating in
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};


export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-900">
      
      {/* Blueprint grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ /* ... blueprint styles ... */ }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-center py-24 sm:py-32">
          
          {/* Main content container is now the animation parent */}
          <motion.div 
            className="text-center px-4 sm:px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Animate automatically on load
          >
         
            {/* The h1 is now a motion component with its own variant */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-50"
            >
              ভর্তি পরীক্ষার <span className="bg-gradient-to-r from-indigo-500 to-violet-500  bg-clip-text text-transparent">সেরা</span> প্রস্তুতি,
            </motion.h1>

            {/* A second h1 for the second line, which will animate in after the first */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-50"
            >
              এখন তোমার হাতের মুঠোয়।
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg"
            >
              মডেল টেস্ট, প্রশ্নব্যাংক, লেকচার ও অ্যানালিটিক্স—সেরা প্রস্তুতির জন্য যা যা প্রয়োজন, সবই এক প্ল্যাটফর্মে।
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center"
            >
              <a href="#live" className="btn-primary-lg inline-flex w-auto">
                লাইভ এক্সাম
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 max-w-sm mx-auto">
              <StatsRow />
            </motion.div>

            {/* DESKTOP CHIP BUTTONS */}
            <motion.div 
              variants={itemVariants}
              className="hidden md:flex flex-wrap items-center justify-center gap-3 mt-10 max-w-4xl mx-auto"
            >
              {desktopChips.map((chip) => (
                <a 
                  key={chip.text} 
                  href={chip.href}
                  className="group relative rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-transparent"
                >
                  <div className="absolute "></div>
                  <span className="relative">{chip.text}</span>
                </a>
              ))}
            </motion.div>

            {/* MOBILE CHIP CAROUSEL */}
            <motion.div variants={itemVariants} className="mt-10 max-w-md mx-auto md:hidden">
              <ChipCarousel/>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}