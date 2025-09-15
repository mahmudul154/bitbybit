'use client'

import { useState } from 'react'

type Props = {
  youtubeId: string
  alt?: string
  className?: string
  fallbackSrc?: string // optional local fallback e.g. '/thumb-fallback.jpg'
}

const SIZES = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault', 'default'] as const

export default function YTThumb({
  youtubeId,
  alt = 'YouTube thumbnail',
  className = '',
  fallbackSrc,
}: Props) {
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  if (failed) {
    // Optional: local/custom fallback image
    if (fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          alt={alt}
          className={`aspect-video w-full object-cover ${className}`}
          loading="lazy"
          decoding="async"
        />
      )
    }
    // Plain placeholder
    return (
      <div className={`aspect-video w-full bg-slate-200 grid place-items-center text-slate-500 ${className}`}>
        <span className="text-sm">Thumbnail unavailable</span>
      </div>
    )
  }

  const size = SIZES[index]
  const src = `https://img.youtube.com/vi/${youtubeId}/${size}.jpg`

  return (
    <img
      src={src}
      alt={alt}
      className={`aspect-video w-full object-cover ${className}`}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (index < SIZES.length - 1) {
          setIndex((i) => i + 1)
        } else {
          setFailed(true)
        }
      }}
    />
  )
}