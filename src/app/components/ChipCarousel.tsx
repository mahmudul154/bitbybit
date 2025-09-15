// src/app/components/ChipCarousel.tsx
'use-client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Chip from './Chip'

const slides = [
  { text: "🔴 লাইভ মডেল টেস্ট", href: "#live" },
  { text: "📚 প্রশ্নব্যাংক", href: "#previous" },
  { text: "📝 অধ্যায়ভিত্তিক পরীক্ষা", href: "#topics" },
  { text: "🎥 ভিডিও লেকচার", href: "#videos" },
  { text: "🏆 র‍্যাঙ্কিং ও অ্যানালিটিক্স", href: "#exams" },
];

export default function ChipCarousel() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    containScroll: 'trimSnaps'
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-3">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_auto] min-w-0">
            <Chip text={slide.text} href={slide.href} />
          </div>
        ))}
      </div>
    </div>
  )
}