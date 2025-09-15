// src/app/components/Hero.tsx

'use client'

import ChipCarousel from './ChipCarousel' // Import the new carousel
import { StatsRow } from './Stats'

export default function Hero() {
  return (
    // The background color is set to match the navbar
    <section id="home" className="relative overflow-hidden bg-slate-900">
      
      {/* Blueprint grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(2, 6, 23, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2, 6, 23, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* The grid is now always a single column */}
        <div className="grid grid-cols-1 gap-8 items-center py-10 sm:py-14 md:py-20">
          
          {/* Main content container is now always centered */}
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" /> বিশ্ববিদ্যালয় ও ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি
            </span>
            
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-50">
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">ভর্তি</span> পরীক্ষার সেরা প্রস্তুতি, এখন তোমার হাতের মুঠোয়।
            </h1>
            
            <p className="mt-3 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
              মডেল টেস্ট, প্রশ্নব্যাংক, লেকচার ও অ্যানালিটিক্স—সেরা প্রস্তুতির জন্য যা যা প্রয়োজন, সবই এক প্ল্যাটফর্মে।
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center">
              {/* Buttons are now always the smaller size for a cleaner look */}
              <a href="#exams" className="btn-primary inline-flex w-auto">
                মডেল টেস্ট শুরু করো
              </a>
              <a href="#circulars" className="btn-secondary inline-flex w-auto">
                ভর্তি তথ্য দেখুন
              </a>
            </div>

            <div className="max-w-sm mx-auto">
              <StatsRow />
            </div>

            {/* --- REPLACED THE OLD SCROLLER WITH THE NEW CAROUSEL --- */}
            <div className="mt-8 max-w-md mx-auto">
              <ChipCarousel />
            </div>
          </div>

          {/* The entire floating chips div has been removed */}

        </div>
      </div>
    </section>
  )
}