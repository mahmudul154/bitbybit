// src/app/components/ChipCarousel.tsx
'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay' // 1. Import Autoplay
import Chip from './Chip'

const slides = [
 { text: "🎮 গেম", href: "#game" },
  { text: "🏆 অলিম্পিয়াড", href: "#olympic" },
  { text: "🔴 লাইভ মডেল টেস্ট", href: "#live" },
  { text: "📚 প্রশ্নব্যাংক", href: "#previous" },
  { text: "📝 অধ্যায়ভিত্তিক পরীক্ষা", href: "#topics" },
  { text: "📊 র‍্যাঙ্কিং ও অ্যানালিটিক্স", href: "#exams" },
];

export default function ChipCarousel() {
  // 2. Initialize the Autoplay plugin
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      containScroll: 'trimSnaps'
    },
    [
      Autoplay({
        delay: 2000, // Time in ms before sliding to the next item
        stopOnInteraction: false, // Continue playing even if user interacts
      })
    ]
  );

  return (
    // 3. Add the 'embla' class to the main container
    <div className="embla" ref={emblaRef}>
      <div className="flex gap-3 m-14">
        {slides.map((slide, index) => (
          // The slides themselves are unchanged
          <div key={index} className="flex-[0_0_auto] min-w-0">
            <Chip text={slide.text} href={slide.href} />
          </div>
        ))}
      </div>
    </div>
  )
}