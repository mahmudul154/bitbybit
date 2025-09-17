
// src/app/components/ProgressChart.tsx
'use client'

import { motion } from 'framer-motion'

type ProgressChartProps = {
  averageScore: number; // e.g., 72 for 72%
  highestScore: number; // e.g., 85 for 85%
};

const radius = 80;
const circumference = 2 * Math.PI * radius;

export default function ProgressChart({ averageScore, highestScore }: ProgressChartProps) {
  const averageOffset = circumference - (averageScore / 100) * circumference;
  const highestOffset = circumference - (highestScore / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center h-52 w-52">
      <svg className="h-full w-full" viewBox="0 0 200 200">
        {/* Background Circles */}
        <circle cx="100" cy="100" r={radius} className="stroke-slate-800" strokeWidth="12" fill="transparent" />
        <circle cx="100" cy="100" r={radius - 20} className="stroke-slate-800" strokeWidth="12" fill="transparent" />

        {/* Highest Score Arc (Outer) */}
        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          className="stroke-yellow-400"
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={highestOffset}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: highestOffset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
        
        {/* Average Score Arc (Inner) */}
        <motion.circle
          cx="100"
          cy="100"
          r={radius - 20}
          className="stroke-sky-400"
          strokeWidth="12"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={averageOffset}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: averageOffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      {/* Center Text */}
      <div className="absolute flex flex-col items-center justify-center">
        <p className="text-sm text-slate-400">গড় স্কোর</p>
        <p className="text-4xl font-bold text-white">{`${averageScore}%`}</p>
      </div>
    </div>
  );
}