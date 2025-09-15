import React from 'react'

export default function Section({
  id, title, subtitle, children,
}: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-5">
          <h2 className="text-xl sm:text-2xl font-extrabold">{title}</h2>
          {subtitle && <p className="mt-1 text-slate-400">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}