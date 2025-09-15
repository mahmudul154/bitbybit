// src/app/components/Navbar.tsx

'use client'

export default function Navbar() {
  return (
    // Styles are permanently set for the dark theme
    <nav className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        {/* Logo (always visible on the left) */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-500 text-white grid place-items-center font-extrabold">Bit</div>
          <span className="font-extrabold text-slate-50">ByBit</span>
        </div>

        {/* --- DESKTOP NAVIGATION (Visible on md screens and up) --- */}
        <div className="ml-auto hidden md:flex items-center gap-4">
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-200">
           
            <a href="#circulars" className="hover:text-indigo-400 transition-colors">সার্কুলার</a>
            <a href="#exams" className="hover:text-indigo-400 transition-colors">পরীক্ষা</a>
            <a href="#live" className="hover:text-indigo-400 transition-colors">লাইভ</a>
            <a href="#videos" className="hover:text-indigo-400 transition-colors">ভিডিও</a>
            <a href="#blog" className="hover:text-indigo-400 transition-colors">ব্লগ</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-secondary">লগ ইন</button>
            <button className="btn-primary">সাইন আপ</button>
          </div>
        </div>
        
        {/* --- MOBILE LOGIN/SIGNUP BUTTON (Visible ONLY on screens smaller than md) --- */}
        <div className="ml-auto md:hidden">
          <a href="#login" className="btn-secondary text-xxs px-3 py-1.5">
            লগইন / সাইন আপ
          </a>
        </div>

      </div>
    </nav>
  )
}